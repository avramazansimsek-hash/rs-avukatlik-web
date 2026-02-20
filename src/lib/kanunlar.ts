export interface Kanun {
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

export async function getAllTck(): Promise<Kanun[]> {
    const modules = import.meta.glob('/src/content/kanunlar/*.md', { as: 'raw', eager: true });

    const kanunlar: Kanun[] = [];

    for (const path in modules) {
        const content = modules[path] as string;
        const { data, content: markdownContent } = parseFrontmatter(content);

        const slug = path.split('/').pop()?.replace('.md', '') || '';

        kanunlar.push({
            slug,
            title: data.title || 'İsimsiz Madde',
            excerpt: data.excerpt || '',
            date: data.date || new Date().toISOString(),
            category: data.category || 'TCK',
            content: markdownContent,
        });
    }

    // Sort by madde number. The slug is like "tck-madde-1", "tck-madde-10"
    return kanunlar.sort((a, b) => {
        const numA = parseInt(a.slug.split('-').pop() || '0');
        const numB = parseInt(b.slug.split('-').pop() || '0');
        return numA - numB;
    });
}

export async function getTckBySlug(slug: string): Promise<Kanun | undefined> {
    const kanunlar = await getAllTck();
    return kanunlar.find((k) => k.slug === slug);
}
