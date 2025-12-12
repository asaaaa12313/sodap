import Image from "next/image";

export default function BrandStoryPage() {
    return (
        <div className="bg-brand-black min-h-screen pb-20">
            {/* Header */}
            <section className="relative py-24 bg-brand-black overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/images/hero/hero-bg.jpg" // Using hero bg as fallback/theme
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <span className="text-brand-gold font-bold tracking-widest text-sm uppercase">STORY</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-white mt-2">브랜드 스토리</h1>
                    <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                        맛있는 고기에 솜씨를 더하다는 변함없는 맛과 정직함으로<br />
                        고객님께 최고의 고기 맛을 선사합니다.
                    </p>
                </div>
            </section>

            {/* Section 1: Water Aging */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] rounded-lg overflow-hidden border border-brand-gray">
                            {/* Concept image placeholder - utilizing hero or specific image if available. 
                   Since we lack specific 'aging' image, we reuse a high quality meat image or hero cut. */}
                            <Image
                                src="/images/menu/aged-samgyeop.png"
                                alt="침지 숙성"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-brand-white">
                                <span className="text-brand-gold">침지숙성</span> (Water-aging)
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                진공 포장된 고기를 2도 이하의 차가운 물속에서 20일 이상 넣어두는 숙성 기법입니다.
                                외부 온도의 영향을 받지 않고 중력으로 인한 육즙의 손실을 막아,
                                육질이 부드러워지고 풍미가 한층 더 깊어집니다.
                            </p>
                            <div className="pl-4 border-l-2 border-brand-gold">
                                <p className="text-brand-white italic">"시간이 만드는 깊은 맛, 336시간의 기다림"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Duroc */}
            <section className="py-20 bg-brand-gray/10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                        <div className="order-2 md:order-1 space-y-6">
                            <h2 className="text-3xl font-bold text-brand-white">
                                <span className="text-brand-gold">스페인 듀록</span> (Duroc)
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                세계 3대 명품 돼지고기로 꼽히는 듀록 품종을 사용합니다.
                                일반 돼지고기보다 근내지방(마블링) 함유량이 높아
                                육질이 부드럽고 감칠맛이 뛰어납니다.
                            </p>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                                    천연 방목 사육으로 건강한 육질
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                                    풍부한 불포화지방산
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden border border-brand-gray">
                            {/* Concept image placeholder */}
                            <Image
                                src="/images/menu/set-family.png"
                                alt="스페인 듀록"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
