import { locationData } from "@/data/location";
import { Phone, MapPin, CalendarCheck } from "lucide-react";
import Link from "next/link";

export default function MobileBottomBar() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-brand-black border-t border-brand-gray grid grid-cols-3 z-50 safe-area-bottom">
            <a
                href={`tel:${locationData.phone}`}
                className="flex flex-col items-center justify-center gap-1 active:bg-brand-gray transition-colors"
            >
                <Phone size={20} className="text-brand-gold" />
                <span className="text-[10px] items-center">전화문의</span>
            </a>

            <Link
                href="/location"
                className="flex flex-col items-center justify-center gap-1 active:bg-brand-gray transition-colors border-x border-brand-gray/30"
            >
                <MapPin size={20} className="text-brand-white" />
                <span className="text-[10px]">길찾기</span>
            </Link>

            <Link
                href="https://map.naver.com/p/search/%EB%A7%9B%EC%9E%88%EB%8A%94%EA%B3%A0%EA%B8%B0%EC%97%90%EC%86%9C%EC%94%A8%EB%A5%BC%EB%8D%94%ED%95%98%EB%8B%A4%20%EC%B0%BD%EC%9B%90%EC%86%8C%EB%8B%B5%EC%A0%90/place/1066036737"
                target="_blank"
                className="flex flex-col items-center justify-center gap-1 active:bg-brand-gray transition-colors bg-brand-gold/10"
            >
                <CalendarCheck size={20} className="text-brand-gold" />
                <span className="text-[10px] font-bold text-brand-gold">예약하기</span>
            </Link>
        </div>
    );
}
