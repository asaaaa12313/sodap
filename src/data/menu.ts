export interface MenuItem {
    id: string;
    name: string;
    price: number;
    unit: string;
    image: string;
    desc: string;
    category: 'main' | 'set' | 'side';
    tags?: string[];
}

export const menuCategories = [
    { id: 'main', name: '숙성 고기 (Aging Pork)', desc: '20일 침지숙성으로 완성된 깊은 풍미' },
    { id: 'set', name: '세트 메뉴 (Set Menu)', desc: '다양한 부위를 합리적으로 즐기는 방법' },
    { id: 'side', name: '사이드 / 식사 (Side Dish)', desc: '고기와 함께하면 더 맛있는 별미' },
];

export const menuData: MenuItem[] = [
    // Main
    {
        id: "samgyeop",
        name: "숙성삼겹살",
        price: 4990,
        unit: "100g",
        image: "/images/menu/aged-samgyeop.png",
        desc: "지방과 살코기의 황금비율, 침지숙성으로 더욱 부드러운 삼겹살",
        category: "main",
        tags: ["BEST", "대표"]
    },
    {
        id: "moksal",
        name: "숙성목살",
        price: 4990,
        unit: "100g",
        image: "/images/menu/숙성목살.png",
        desc: "지방이 적고 담백하며 육즙이 풍부한 스테이크형 목살",
        category: "main",
        tags: ["추천"]
    },
    {
        id: "ogyeop",
        name: "숙성오겹살",
        price: 5290,
        unit: "100g",
        image: "/images/menu/ogyeop.png",
        desc: "껍질의 쫄깃함과 고소함이 살아있는 오겹살",
        category: "main"
    },
    {
        id: "hangjeong",
        name: "숙성항정살",
        price: 5990,
        unit: "100g",
        image: "/images/menu/hangjeong.png",
        desc: "특유의 아삭한 식감과 고소한 풍미가 일품인 특수부위",
        category: "main"
    },
    {
        id: "gabrisal",
        name: "숙성가브리살",
        price: 5990,
        unit: "100g",
        image: "/images/menu/gabriel.png",
        desc: "부드러운 육질과 진한 육즙을 즐길 수 있는 고급 특수부위",
        category: "main"
    },
    {
        id: "galbi",
        name: "수제 양념 돼지갈비",
        price: 7990,
        unit: "200g",
        image: "/images/menu/galbi.png",
        desc: "천연 과일 양념으로 저온 숙성하여 부드럽고 달지 않은 수제 갈비",
        category: "main",
        tags: ["인기"]
    },
    {
        id: "chadol",
        name: "한우차돌박이",
        price: 12990,
        unit: "100g",
        image: "/images/menu/chadol.png",
        desc: "입안에서 살살 녹는 고소한 맛의 한우 차돌박이",
        category: "main"
    },
    {
        id: "daepae",
        name: "더하다대패",
        price: 4490,
        unit: "100g",
        image: "/images/menu/daepae.png", // Assuming image name, ensuring it exists or fallback
        desc: "오직 더하다에서만 먹을수있는 듀록 대패삼겹살입니다 두께감이있어요",
        category: "main"
    },

    // Set
    {
        id: "set_a",
        name: "A세트(2~3인)",
        price: 28990,
        unit: "600g",
        image: "/images/menu/set-a.png",
        desc: "삼겹, 목살, 오겹, 항정, 가브리(600g)",
        category: "set",
        tags: ["2인 추천"]
    },
    {
        id: "set_b",
        name: "B세트(3~4인)",
        price: 37990,
        unit: "800g",
        image: "/images/menu/b세트.png",
        desc: "삼겹, 목살, 오겹, 항정, 가브리(800g)",
        category: "set",
        tags: ["BEST"]
    },
    {
        id: "family_set",
        name: "패밀리세트(4인)",
        price: 42990,
        unit: "1kg",
        image: "/images/menu/set-family.png",
        desc: "삼겹,목살,오겹,항정,가브리,껍데기,소세지(1kg)",
        category: "set",
        tags: ["추천"]
    },

    // Side
    {
        id: "kimchi_stew",
        name: "김치찌개",
        price: 5000,
        unit: "1뚝배기",
        image: "/images/menu/kimchi-stew.png",
        desc: "잘 익은 김치와 돼지고기를 듬뿍 넣어 끓인 칼칼한 찌개",
        category: "side"
    },
    {
        id: "doenjang",
        name: "된장찌개",
        price: 4000,
        unit: "1뚝배기",
        image: "/images/menu/된장찌개.png",
        desc: "꽃게와 해물이 들어가 시원하고 구수한 맛",
        category: "side"
    },
    {
        id: "water_noodle",
        name: "물냉면",
        price: 6000,
        unit: "1그릇",
        image: "/images/menu/cold-noodle.png",
        desc: "고기 먹은 후 깔끔한 마무리",
        category: "side"
    },
    {
        id: "bibim_noodle",
        name: "비빔냉면",
        price: 6000,
        unit: "1그릇",
        image: "/images/menu/cold-noodle.png", // Reuse image or separate if available
        desc: "매콤달콤한 비빔장이 어우러진 냉면",
        category: "side"
    },
    {
        id: "ramen",
        name: "해장라면",
        price: 4000,
        unit: "1그릇",
        image: "/images/menu/ramen.png",
        desc: "콩나물이 들어가 시원한 해장 라면",
        category: "side"
    },
    {
        id: "skin",
        name: "껍데기",
        price: 4990,
        unit: "120g",
        image: "/images/menu/skin.png",
        desc: "두툼한 껍데기에 칼집을 넣어 더욱 쫄깃하고 고소한 별미",
        category: "side",
        tags: ["별미"]
    },
    {
        id: "sausage",
        name: "수제소세지",
        price: 4990,
        unit: "200g",
        image: "/images/menu/sausage.png",
        desc: "육즙이 톡 터지는 프리미엄 수제 소세지 (케찹제공)",
        category: "side"
    },
    {
        id: "mushroom",
        name: "모듬버섯",
        price: 2990,
        unit: "1접시",
        image: "/images/menu/mushroom.png",
        desc: "새송이, 팽이버섯",
        category: "side"
    },
    {
        id: "minari",
        name: "미나리(계절메뉴)",
        price: 4990,
        unit: "1접시",
        image: "/images/menu/minari.png",
        desc: "창녕 미나리농장에서 바로오는 미나리에요 아주 부드럽고 향도좋고 맛있어요",
        category: "side",
        tags: ["계절메뉴"]
    }
];
