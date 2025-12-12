import { Droplets, Award, ParkingCircle } from "lucide-react";

const features = [
    {
        icon: <Droplets size={48} className="text-brand-gold" />,
        title: "침지숙성 (Water-aging)",
        desc: "진공 포장된 고기를 2도 이하의 차가운 물속에서 20일 이상 숙성하여 육즙의 손실을 막고 풍미를 증진시킵니다."
    },
    {
        icon: <Award size={48} className="text-brand-gold" />,
        title: "스페인 듀록 (Duroc)",
        desc: "세계 3대 명품 돼지고기인 듀록 품종을 사용하여 마블링이 우수하고 특유의 고소한 맛과 부드러운 식감을 자랑합니다."
    },
    {
        icon: <ParkingCircle size={48} className="text-brand-gold" />,
        title: "편리한 주차",
        desc: "매장 인근 유니파크 주차장(구 39사단 부지)에서 2시간 무료 주차를 지원하여 편안한 식사가 가능합니다."
    }
];

export default function FeatureSection() {
    return (
        <section className="py-20 bg-brand-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand-gold font-bold tracking-widest text-sm uppercase">Our Speciality</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-white mt-2">왜 솜씨를 더하다일까요?</h2>
                    <div className="w-16 h-1 bg-brand-gold mx-auto mt-6"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-brand-gray/30 p-8 rounded-lg text-center hover:bg-brand-gray/50 transition-colors duration-300 border border-brand-gray">
                            <div className="flex justify-center mb-6">
                                <div className="p-4 rounded-full bg-brand-black border border-brand-gold/30">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-brand-white mb-4">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed word-keep">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
