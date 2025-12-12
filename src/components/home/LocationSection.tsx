import { locationData } from "@/data/location";
import { Phone, MapPin, Clock } from "lucide-react";

export default function LocationSection() {
    return (
        <section id="location" className="bg-brand-black pb-20">
            {/* Header */}
            <div className="py-20 bg-brand-gray/20 text-center">
                <span className="text-brand-gold font-bold tracking-widest text-sm uppercase">LOCATION</span>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-4 mt-2">오시는 길</h2>
                <p className="text-brand-gold text-lg">매장 위치 및 이용 안내</p>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Map Area */}
                    <div className="h-[400px] lg:h-auto min-h-[400px] rounded-lg overflow-hidden border border-brand-gray relative bg-brand-gray">
                        {/* Google Map Embed */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.8080352481075!2d128.62512330000002!3d35.2606558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3566160166d7bd49%3A0x63346e917d0577d3!2z66eb7I6u64qU6rOg6riw7JeQIOyStOygqeuZrCDrjZjtleqrjCAo7LC97JuQ7Ikh64u17KCQKQ!5e0!3m2!1sko!2skr!4v1709623838292!5m2!1sko!2skr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                            title="맛있는고기에솜씨를더하다 위치"
                        ></iframe>
                    </div>

                    {/* Info Area */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-brand-white mb-6 flex items-center gap-2">
                                <MapPin className="text-brand-gold" /> 매장 주소
                            </h3>
                            <p className="text-xl text-gray-300">{locationData.address}</p>
                            <p className="text-gray-400 mt-1">{locationData.addressDetail}</p>

                            <div className="flex gap-4 mt-6">
                                <a
                                    href="https://map.naver.com/p/search/%EB%A7%9B%EC%9E%88%EB%8A%94%EA%B3%A0%EA%B8%B0%EC%97%90%EC%86%9C%EC%94%A8%EB%A5%BC%EB%8D%94%ED%95%98%EB%8B%A4%20%EC%B0%BD%EC%9B%90%EC%86%8C%EB%8B%B5%EC%A0%90/place/1066036737"
                                    target="_blank"
                                    className="flex-1 py-3 bg-[#03C75A] text-white text-center font-bold rounded hover:opacity-90 transition-opacity"
                                >
                                    네이버 지도
                                </a>
                                <a
                                    href={locationData.googleMapLink}
                                    target="_blank"
                                    className="flex-1 py-3 bg-white text-black text-center font-bold rounded hover:bg-gray-200 transition-colors"
                                >
                                    구글 지도
                                </a>
                            </div>
                        </div>

                        <div className="h-px bg-brand-gray"></div>

                        <div>
                            <h3 className="text-2xl font-bold text-brand-white mb-6 flex items-center gap-2">
                                <Phone className="text-brand-gold" /> 전화 번호
                            </h3>
                            <p className="text-xl text-gray-300">
                                <a href={`tel:${locationData.phone}`} className="hover:text-brand-gold">
                                    {locationData.phone}
                                </a>
                            </p>
                        </div>

                        <div className="h-px bg-brand-gray"></div>

                        <div>
                            <h3 className="text-2xl font-bold text-brand-white mb-6 flex items-center gap-2">
                                <Clock className="text-brand-gold" /> 영업 시간
                            </h3>
                            <ul className="text-gray-300 space-y-2">
                                <li><span className="inline-block w-20 text-gray-500">평일</span> 16:00 - 23:00</li>
                                <li><span className="inline-block w-20 text-gray-500">주말/공휴일</span> 11:30 - 23:00</li>
                                <li><span className="text-brand-gold text-sm pt-2">* 라스트오더: 마감 30분 전</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Parking Info */}
                <div className="mt-12 p-8 bg-brand-gray/30 border border-brand-gray rounded-lg text-center">
                    <h4 className="text-xl font-bold text-brand-white mb-2">🚗 주차 안내</h4>
                    <p className="text-gray-300">
                        {locationData.parkingInfo}<br />
                        <span className="text-sm text-gray-500">(계산 시 주차 등록을 꼭 요청해주세요)</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
