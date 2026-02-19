import { useState, useEffect } from 'react';
import { X, Scale } from 'lucide-react';

export default function DisclaimerModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if the user has already seen the disclaimer
        const hasSeenDisclaimer = localStorage.getItem('hasSeenLegalDisclaimer');
        if (!hasSeenDisclaimer) {
            // Small delay to make it appear smooth after load
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('hasSeenLegalDisclaimer', 'true');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 custom-backdrop">
            {/* Backdrop with blur */}
            <div
                className="absolute inset-0 bg-navy/80 backdrop-blur-sm transition-opacity duration-300"
                onClick={handleClose}
            />

            {/* Modal Content */}
            <div
                className="relative w-full max-w-2xl bg-navy border border-gold/30 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 animate-in fade-in zoom-in-95"
                role="dialog"
                aria-modal="true"
                aria-labelledby="disclaimer-title"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
                    <div className="flex items-center gap-3 text-gold">
                        <Scale className="w-6 h-6" />
                        <h2 id="disclaimer-title" className="font-serif text-xl font-semibold tracking-wide">
                            Yasal Uyarı
                        </h2>
                    </div>
                    <button
                        onClick={handleClose}
                        className="p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Kapat"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-8">
                    <p className="text-white/80 text-justify leading-relaxed selection:bg-gold/30">
                        Bu internet sitesi, <strong className="text-gold">Türkiye Barolar Birliği Reklam Yasağı Yönetmeliği’nin 9/1. maddesi</strong> kapsamında hazırlanmış olup reklam amacı taşımamaktadır. Sitede yer alan bilgiler genel bilgilendirme niteliğindedir; içeriklerin doğruluğu ve güncelliği konusunda herhangi bir garanti verilmediği gibi, bilgilerin kullanımı, iletimi, alınması veya saklanmasından doğabilecek sonuçlar bakımından sorumluluk kabul edilmez.
                    </p>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/10 bg-white/5 flex justify-end">
                    <button
                        onClick={handleClose}
                        className="px-6 py-2.5 rounded-lg bg-gold text-navy-dark font-medium hover:bg-gold-light transition-colors shadow-lg hover:shadow-gold/20"
                    >
                        Anladım, Siteye Devam Et
                    </button>
                </div>
            </div>
        </div>
    );
}
