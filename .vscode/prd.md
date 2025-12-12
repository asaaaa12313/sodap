맛있는고기에솜씨를더하다 소답중동점공식 홈페이지 제작 PRD (V3.0 - 최종 개발용)0. Developer Summary (작업 전 필독)본 프로젝트는 Next.js 14 + TypeScript 기반의 정적 웹사이트입니다.개발자는 기능 구현과 데이터 바인딩에 집중하며, 디자인 리소스(이미지)는 제공된 폴더를 사용합니다.Framework: Next.js 14 (App Router) / SSG BuildStyling: Tailwind CSSDeployment: Vercel📍 Address Source: 구글 지도(Google Maps) 등록 기준 주소 사용📁 Asset Management:모든 이미지 파일은 별도로 전달되는 asset_folder 내의 파일을 사용합니다.개발자는 /public/images 경로에 해당 파일들을 그대로 덮어쓰기 하여 배포합니다.1. 프로젝트 개요프로젝트명: 맛있는고기에솜씨를더하다 소답중동점 홈페이지 구축목적: 스페인 듀록 숙성육의 가치 전달 및 매장 방문 유도 (예약/주차 정보 접근성 강화)타겟: 창원 소답/중동/유니시티 거주민 및 직장인2. 핵심 가치 제안 (USP)Premium: 세계 3대 명품 돼지고기 '스페인 듀록' + '침지/건식 교차 숙성'Reasonable: 프리미엄 품질을 합리적인 가격에 제공Convenience: 유니파크 주차장 2시간 지원 (주차 편의성 강조)3. 사이트맵 및 URL페이지명URL핵심 데이터/기능Home/USP 배너, 추천메뉴, 지도 미리보기Brand Story/brand-story듀록 품종 및 숙성 기술 설명Menu/menu제공된 메뉴 이미지 및 가격 정보 리스트Gallery/gallery매장 내외부, 음식 연출컷 (제공 이미지 사용)Location/location구글 지도 주소, 주차장 안내, 네비게이션 링크Reservation/reservation전화/네이버 예약 아웃링크 (별도 페이지 or 모달)4. Global Layout & UI 가이드Header: 로고, GNB, [네이버 예약] 버튼 (Sticky)Footer: 구글 지도 등록 주소, 사업자 정보, SNS 링크Mobile Bottom Bar: [전화 문의] / [길 찾기] / [예약하기] 버튼 고정Image Strategy:제공된 이미지 폴더의 파일명을 data 파일과 매칭하여 사용.Next.js <Image> 컴포넌트 필수 사용 (Lazy Loading).5. 페이지별 상세 구성 및 데이터 바인딩5-1. Location (주소 및 주차 - 중요)Map: 네이버 지도/구글 지도 iframe 삽입.Address: 구글 지도 등록 주소를 텍스트로 명시.표기: 경상남도 창원시 의창구 의창대로 272-1 (소답동) 1층Parking: "유니파크 주차장(구 39사단 부지) 2시간 무료 지원" 문구 강조.Navigation Button:[T맵 실행] / [카카오내비 실행] 버튼 (주차장 입구 좌표 연결)5-2. MenuLayout: 카테고리별(숙성육, 세트, 사이드) 그리드 리스트.Card UI: 이미지 + 메뉴명 + 가격 + 설명 + 태그(Best).Image: 텍스트 대신 제공된 고화질 메뉴 사진을 무조건 노출.5-3. GalleryContent: 매장 내부, 외부, 셀프바, 고기 손질 영상(GIF/WebP) 등 제공된 폴더 내 이미지를 그리드 형태로 나열.6. 데이터 구조 예시 (Code-Level)개발자는 아래 데이터 구조를 /data 폴더에 생성하고, 이미지 경로는 제공된 파일명과 일치시킵니다./data/location.ts (구글 주소 반영)TypeScriptexport const locationData = {
  // 구글 지도 등록 명칭 및 주소
  name: "맛있는고기에솜씨를더하다 창원소답점", 
  address: "경상남도 창원시 의창구 의창대로 272-1", // 구글맵 기준
  addressDetail: "1층 (소답동)",
  zipCode: "51196",
  phone: "0507-1375-2996", // 네이버 스마트콜/구글 등록 번호 확인 필요
  parkingInfo: "유니파크 주차장 2시간 무료 지원",
  googleMapLink: "https://maps.app.goo.gl/..." // 구글 맵 단축 URL
};
/data/menu.ts (이미지 매칭)TypeScriptexport const menuData = [
  {
    id: "samgyeop",
    name: "숙성 삼겹살",
    price: 3990,
    unit: "100g",
    // 이미지는 별도 제공된 'images/menu' 폴더 내 파일명 사용
    image: "/images/menu/samgyeop_real.jpg", 
    desc: "20일 침지숙성의 깊은 풍미",
    tags: ["BEST"]
  },
  // ...
];
7. 개발자 전달 사항 (Action Items)이미지 세팅: 전달받은 압축 파일(homepage_assets.zip)을 해제하여 프로젝트의 /public/images 디렉토리에 덮어쓰기 하세요.주소 확인: /data/location.ts 파일 작성 시, 구글 지도에 등록된 최신 주소 텍스트를 그대로 복사해서 넣어주세요.SEO 설정: metadata의 address 필드에도 위 구글 주소를 동일하게 적용해주세요.