import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-[80vh] min-h-[500px] md:min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero/hero-bg.jpg"
                    alt="맛있는고기에솜씨를더하다 매장 전경"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 text-center text-brand-white">
                <div className="animate-fade-in-up space-y-6">
                    <p className="text-xl md:text-2xl font-light tracking-widest text-brand-gold">PREMIUM AGING PORK</p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        침지숙성의 깊은 풍미<br />
                        <span className="text-brand-gold">솜씨를 더하다</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto my-8">
                        세계 3대 명품 돼지고기 스페인 듀록과<br className="md:hidden" />
                        20일간의 정성이 만든 최고의 맛을 경험하세요.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
                        <Link
                            href="/menu"
                            className="px-8 py-4 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 font-bold text-lg rounded"
                        >
                            메뉴 보기
                        </Link>
                        <Link
                            href="/location"
                            className="px-8 py-4 bg-brand-white text-brand-black hover:bg-gray-200 transition-all duration-300 font-bold text-lg rounded"
                        >
                            매장 찾기
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
