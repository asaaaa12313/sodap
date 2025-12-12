import { locationData } from "@/data/location";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-brand-gray text-brand-white/60 py-12 pb-24 md:pb-12 text-sm">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-brand-white font-bold text-lg mb-4">{locationData.name}</h3>
                    <address className="not-italic space-y-2">
                        <p>주소: {locationData.address} {locationData.addressDetail}</p>
                        <p>전화: <a href={`tel:${locationData.phone}`} className="hover:text-brand-gold">{locationData.phone}</a></p>
                        <p className="text-brand-gold">{locationData.parkingInfo}</p>
                    </address>
                </div>
                <div className="flex flex-col md:items-end justify-between">
                    <div className="space-x-4">
                        <Link href="/policy" className="hover:text-brand-white">이용약관</Link>
                        <Link href="/privacy" className="hover:text-brand-white">개인정보처리방침</Link>
                    </div>
                    <p className="mt-4 md:mt-0">© 2025 Somssi Sodap. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
