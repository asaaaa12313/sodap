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
                href="https://m.place.naver.com/restaurant/1282644424/booking?entry=plt"
                target="_blank"
                className="flex flex-col items-center justify-center gap-1 active:bg-brand-gray transition-colors bg-brand-gold/10"
            >
                <CalendarCheck size={20} className="text-brand-gold" />
                <span className="text-[10px] font-bold text-brand-gold">예약하기</span>
            </Link>
        </div>
    );
}
