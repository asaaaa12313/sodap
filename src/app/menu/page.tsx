import { menuData, menuCategories } from "@/data/menu";
import Image from "next/image";

export default function MenuPage() {
    return (
        <div className="bg-brand-black min-h-screen pb-20">
            {/* Header */}
            <section className="relative py-20 bg-brand-gray/20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-white mb-4">MENU</h1>
                    <p className="text-brand-gold text-lg">
                        336시간 침지숙성으로 완성된 프리미엄 듀록의 맛
                    </p>
                </div>
            </section>

            {/* Menu Categories */}
            <div className="container mx-auto px-4 py-12 space-y-20">
                {menuCategories.map((category) => {
                    const items = menuData.filter((item) => item.category === category.id);

                    if (items.length === 0) return null;

                    return (
                        <section key={category.id} id={category.id} className="scroll-mt-24">
                            <div className="mb-8 border-l-4 border-brand-gold pl-4">
                                <h2 className="text-2xl md:text-3xl font-bold text-brand-white">{category.name}</h2>
                                <p className="text-gray-400 mt-2">{category.desc}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {items.map((item) => (
                                    <div key={item.id} className="bg-brand-gray rounded-lg overflow-hidden group hover:ring-1 hover:ring-brand-gold transition-all duration-300">
                                        {/* Image Area */}
                                        <div className="relative aspect-[4/3] bg-brand-black/50 overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            {item.tags && item.tags.length > 0 && (
                                                <div className="absolute top-2 left-2 flex gap-1">
                                                    {item.tags.map((tag, idx) => (
                                                        <span key={idx} className="bg-brand-gold text-brand-black text-xs font-bold px-2 py-1 rounded">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Content Area */}
                                        <div className="p-5">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-brand-white">{item.name}</h3>
                                                <div className="text-right">
                                                    <span className="block text-brand-gold font-bold text-lg">{item.price.toLocaleString()}원</span>
                                                    <span className="text-xs text-gray-500">{item.unit}</span>
                                                </div>
                                            </div>
                                            <p className="text-gray-400 text-sm leading-relaxed keep-all">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}
