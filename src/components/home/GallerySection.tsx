import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { galleryImages } from "@/data/gallery";

export default function GallerySection() {
    return (
        <section id="gallery" className="bg-brand-black pb-20">
            {/* Header */}
            <div className="py-20 bg-brand-gray/20 text-center">
                <span className="text-brand-gold font-bold tracking-widest text-sm uppercase">GALLERY</span>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-4 mt-2">매장 갤러리</h2>
                <p className="text-brand-gold text-lg">고객님들의 생생한 리뷰와 매장 풍경</p>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((src, index) => (
                        <div key={index} className="relative aspect-square group overflow-hidden rounded-lg bg-brand-gray">
                            <Image
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Review Link */}
                <div className="mt-12 text-center">
                    <Link
                        href="https://map.naver.com/p/entry/place/1282644424/review/visitor?reviewType=all"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-black font-bold text-lg rounded hover:bg-white transition-colors"
                    >
                        리뷰 더 보러가기 <ExternalLink size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
