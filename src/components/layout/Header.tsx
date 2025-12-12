import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-brand-black/95 backdrop-blur-sm border-b border-brand-gray">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-tighter text-brand-gold">
                    맛있는고기에솜씨를더하다
                    <span className="text-xs ml-1 text-brand-white/80 font-normal">소답중동점</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="/brand-story" className="hover:text-brand-gold transition-colors">브랜드 스토리</Link>
                    <Link href="/menu" className="hover:text-brand-gold transition-colors">메뉴소개</Link>
                    <Link href="/gallery" className="hover:text-brand-gold transition-colors">갤러리</Link>
                    <Link href="/location" className="hover:text-brand-gold transition-colors">매장안내</Link>
                </nav>

                {/* CTA Button */}
                <Link
                    href="https://map.naver.com/p/search/%EB%A7%9B%EC%9E%88%EB%8A%94%EA%B3%A0%EA%B8%B0%EC%97%90%EC%86%9C%EC%94%A8%EB%A5%BC%EB%8D%94%ED%95%98%EB%8B%A4%20%EC%B0%BD%EC%9B%90%EC%86%8C%EB%8B%B5%EC%A0%90/place/1066036737"
                    target="_blank"
                    className="hidden md:inline-flex items-center justify-center px-4 py-2 bg-brand-gold text-brand-black font-bold rounded hover:bg-white transition-colors"
                >
                    네이버 예약
                </Link>
            </div>
        </header>
    );
}
