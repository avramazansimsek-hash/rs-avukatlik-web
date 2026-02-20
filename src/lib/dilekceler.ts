export interface Dilekce {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    content: string;
}

function parseFrontmatter(fileContent: string) {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/;
    const match = frontmatterRegex.exec(fileContent);

    if (!match) {
        return {
            data: {} as any,
            content: fileContent
        };
    }

    const frontmatterBlock = match[1];
    const content = match[2];

    const data: any = {};
    const lines = frontmatterBlock.split('\n');

    for (const line of lines) {
        const colonIndex = line.indexOf(':');
        if (colonIndex !== -1) {
            const key = line.slice(0, colonIndex).trim();
            let value = line.slice(colonIndex + 1).trim();

            // Remove quotes if present
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }
            if (value.startsWith("'") && value.endsWith("'")) {
                value = value.slice(1, -1);
            }

            data[key] = value;
        }
    }

    return {
        data,
        content
    };
}

export async function getAllDilekceler(): Promise<Dilekce[]> {
    const modules = import.meta.glob('/src/content/dilekceler/*.md', { as: 'raw', eager: true });

    const dilekceler: Dilekce[] = [];

    for (const path in modules) {
        const content = modules[path] as string;
        const { data, content: markdownContent } = parseFrontmatter(content);

        // Extract slug from filename: /src/content/dilekceler/my-dilekce.md -> my-dilekce
        const slug = path.split('/').pop()?.replace('.md', '') || '';

        dilekceler.push({
            slug,
            title: data.title || 'Başlıksız Dilekçe',
            excerpt: data.excerpt || '',
            date: data.date || new Date().toISOString(),
            category: data.category || 'Genel',
            content: markdownContent,
        });
    }

    // Sort by date descending
    return dilekceler.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getDilekceBySlug(slug: string): Promise<Dilekce | undefined> {
    const dilekceler = await getAllDilekceler();
    return dilekceler.find((dilekce) => dilekce.slug === slug);
}
