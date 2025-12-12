const productData = [
    // --- 신규 상품 ---
    {
        id: 101,
        category: "books",
        categoryKr: "신앙서적",
        title: "2026 다음 세대 목회 트렌드",
        price: 19800,
        clickCount: 50,
        img: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2025/09/30/9/7/644d9b0a-7a4b-474b-a1e8-06aab9f7554c.jpg",
        link: "https://link.coupang.com/a/ddzbIb"
    },
    {
        id: 102,
        category: "books",
        categoryKr: "신앙서적",
        title: "한국 교회 트렌드 2026",
        price: 19800,
        clickCount: 85,
        img: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2025/09/22/10/9/6d964966-8e44-40c6-8fba-12b91cfade38.jpg",
        link: "https://link.coupang.com/a/ddzdib"
    },
    {
        id: 103,
        category: "books",
        categoryKr: "신앙서적",
        title: "팀 켈러의 왕의 십자가",
        price: 15300,
        clickCount: 120,
        img: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail-product-api/A00077021/321941/652944/main/2ece0bd89dcd1279a70e683cb32f24f4d4b28ac59700a4a3b5c72f7be0b7f852.jpg",
        link: "https://link.coupang.com/a/ddzdXY"
    },
    {
        id: 104,
        category: "gift",
        categoryKr: "선물/심방",
        title: "햇살콩 예나왕 365",
        price: 16200,
        clickCount: 300,
        img: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail-product-api/A00077021/71566524/80136893/main/9791165042387_L.jpg",
        link: "https://link.coupang.com/a/ddzgoN"
    },
    {
        id: 105,
        category: "books",
        categoryKr: "신앙서적",
        title: "하나님과 함께하는 저녁기도 365",
        price: 12600,
        clickCount: 95,
        img: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2024/12/09/13/3/f54acec0-664d-4277-a007-e31808393201.jpg",
        link: "https://link.coupang.com/a/ddzkwA"
    },
    {
        id: 106,
        category: "books",
        categoryKr: "신앙서적",
        title: "그리스도를 본받아 (브니엘)",
        price: 10800,
        clickCount: 500,
        img: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2018/08/16/15/5/54f0ce30-14e0-49d2-b5a9-1f990d79f60d.jpg",
        link: "https://link.coupang.com/a/ddzlSv"
    },
    {
        id: 107,
        category: "goods",
        categoryKr: "전도/용품",
        title: "예수님 명화 감사일기 60일",
        price: 4500,
        clickCount: 150,
        img: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/2a53/c3d0779878068e23c8a1557507d45f91a754dcaf5bf1e5d6d22575c95895.jpg",
        link: "https://link.coupang.com/a/ddznYm"
    },
    // --- 기존 상품 ---
    {
        id: 1,
        category: "gift",
        categoryKr: "선물/심방",
        title: "십자가 캘리 말씀 머그컵 (2P 세트)",
        price: 15900,
        clickCount: 220,
        img: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/f99c/ca1f3f2bb169e3f1a03a7edfbbe5621417c8d58d46e29777eac62cb43cb5.jpg",
        link: "https://link.coupang.com/a/ddvRcU"
    },
    {
        id: 2,
        category: "gift",
        categoryKr: "선물/심방",
        title: "I Love Jesus 저소음 인테리어 벽시계",
        price: 22800,
        clickCount: 40,
        img: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2018/02/12/14/4/7703f93e-f4d4-454d-9e99-8649a86ec9e1.jpg",
        link: "https://link.coupang.com/a/ddw0XV"
    },
    {
        id: 3,
        category: "books",
        categoryKr: "신앙서적",
        title: "팀 켈러의 예수 예수",
        price: 15300,
        clickCount: 180,
        img: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/3348/edbf71994048c03109d67459d8a2e2f8342d70565dbdcdce1e4b92e295b4.jpg",
        link: "https://link.coupang.com/a/ddw5km"
    },
    {
        id: 4,
        category: "books",
        categoryKr: "신앙서적",
        title: "예쁜 말 성경 (우리 아이 첫 성경동화)",
        price: 13500,
        clickCount: 320,
        img: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/rs_quotation_api/cwupib3t/75a6f7cc94eb43c8880ea820d7a924aa.jpg",
        link: "https://link.coupang.com/a/ddw5Q0"
    },
    {
        id: 5,
        category: "goods",
        categoryKr: "전도/용품",
        title: "말씀카드 50종 세트 (일어나서 함께가자)",
        price: 8500,
        clickCount: 600,
        img: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/18457084317777-ce445286-3a76-491b-bace-12cfd2cee422.jpg",
        link: "https://link.coupang.com/a/ddw6CG"
    },
    {
        id: 6,
        category: "books",
        categoryKr: "신앙서적",
        title: "팀 켈러의 탕부 하나님",
        price: 11700,
        clickCount: 150,
        img: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/45ef/f06adbf594e183ad2d9e159ac61ff8cc53e140dc0c879dd651b602cf285e.jpg",
        link: "https://link.coupang.com/a/ddw8rD"
    },
    {
        id: 7,
        category: "gift",
        categoryKr: "선물/심방",
        title: "햇살콩 하나님의 때 묵상 노트",
        price: 12800,
        clickCount: 450,
        img: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/ea3e/2c6ce7798a6d1e7e5ad3c2e5d5cf6330df2ad28ff14a0899ea3523b1f0ed.jpg",
        link: "https://link.coupang.com/a/ddw9uM"
    },
    {
        id: 8,
        category: "goods",
        categoryKr: "전도/용품",
        title: "신년 말씀 뽑기 카드 6탄 (50매)",
        price: 7900,
        clickCount: 210,
        img: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/1168/34a5a52ec72e4cbf2099566d37cb5242e8c7d6b3626475018de5c26ccb95.jpg",
        link: "https://link.coupang.com/a/ddxavJ"
    },
    {
        id: 9,
        category: "books",
        categoryKr: "신앙서적",
        title: "팀 켈러의 답이 되는 기독교",
        price: 22500,
        clickCount: 90,
        img: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/4625/e26b924936da05ad83256e246d1e247227ee02287edecb1906bfa112aff1.jpg",
        link: "https://link.coupang.com/a/ddxbe1"
    },
    {
        id: 10,
        category: "books",
        categoryKr: "신앙서적",
        title: "팀 켈러, 결혼을 말하다",
        price: 16200,
        clickCount: 130,
        img: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/fd19/6849305d30189a4e8897842be589a986de56737638543678eb345e9bad15.jpg",
        link: "https://link.coupang.com/a/ddxdkW"
    },
    {
        id: 11,
        category: "books",
        categoryKr: "신앙서적",
        title: "팀 켈러의 일과 영성",
        price: 15300,
        clickCount: 110,
        img: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/9e05/aa92b7f69e5db3786e8d8a7b8d231642e5ff24a41fc6478af777ba99c7cc.png",
        link: "https://link.coupang.com/a/ddxfn8"
    },
    {
        id: 12,
        category: "books",
        categoryKr: "신앙서적",
        title: "메시지 성경 파스텔 에디션 세트 (전5권)",
        price: 99000,
        clickCount: 20,
        img: "https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/e1d8/aaae2e290416f2ff8372e1b99e274e52fc828f8221996a9717bacb45668a.png",
        link: "https://link.coupang.com/a/ddxiwB"
    }
];