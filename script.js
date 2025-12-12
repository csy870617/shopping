import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getFirestore, 
    doc, 
    setDoc, 
    increment, 
    collection, 
    getDocs 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 사용자 Firebase 키 설정
const firebaseConfig = {
    apiKey: "AIzaSyADSJGzYx07lESsaKt_L8NWphUd6FD-cqs",
    authDomain: "talent-market-93370.firebaseapp.com",
    projectId: "talent-market-93370",
    storageBucket: "talent-market-93370.firebasestorage.app",
    messagingSenderId: "661289500580",
    appId: "1:661289500580:web:780acf647461b28bd64b31",
    measurementId: "G-VNK4VDLV4G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 메인 로직
const grid = document.getElementById('grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sort-select');

let currentCategory = 'all';
let currentSort = 'newest';
let firebaseClicks = {}; 

fetchClickData();

// 필터 버튼 이벤트
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.getAttribute('data-filter');
        updateGrid();
    });
});

// 정렬 옵션 이벤트
sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    updateGrid();
});

// [읽기] 클릭 데이터 불러오기
async function fetchClickData() {
    try {
        const querySnapshot = await getDocs(collection(db, "product_clicks"));
        firebaseClicks = {}; 
        
        querySnapshot.forEach((doc) => {
            firebaseClicks[doc.id] = doc.data().count;
        });

        updateGrid();
    } catch (error) {
        console.error("데이터 불러오기 실패:", error);
    }
}

// [쓰기] 클릭 수 증가
async function recordClick(productId) {
    const docRef = doc(db, "product_clicks", String(productId));
    
    try {
        await setDoc(docRef, { count: increment(1) }, { merge: true });
        
        // 클릭 즉시 반영
        firebaseClicks[productId] = (firebaseClicks[productId] || 0) + 1;
        
    } catch (error) {
        console.error("클릭 저장 실패:", error);
    }
}

// 총 클릭수 계산
function getTotalClicks(product) {
    const serverCount = firebaseClicks[product.id] || 0;
    return (product.clickCount || 0) + serverCount;
}

// 화면 그리기
function updateGrid() {
    grid.innerHTML = '';

    let filteredData = currentCategory === 'all' 
        ? [...productData] 
        : productData.filter(item => item.category === currentCategory);

    switch (currentSort) {
        case 'newest':
            filteredData.sort((a, b) => b.id - a.id);
            break;
        case 'popular':
            filteredData.sort((a, b) => getTotalClicks(b) - getTotalClicks(a));
            break;
        case 'low-price':
            filteredData.sort((a, b) => a.price - b.price);
            break;
        case 'high-price':
            filteredData.sort((a, b) => b.price - a.price);
            break;
        default:
            filteredData.sort((a, b) => b.id - a.id);
    }

    if (filteredData.length === 0) {
        grid.innerHTML = '<p style="grid-column:1/-1; padding:4rem 0; text-align:center; color:#888;">준비된 상품이 없습니다.</p>';
        return;
    }

    filteredData.forEach(product => {
        const card = document.createElement('a');
        card.href = product.link;
        card.target = "_blank";
        card.className = 'card';
        
        card.addEventListener('click', () => recordClick(product.id));

        const totalClicks = getTotalClicks(product);

        card.innerHTML = `
            <div class="img-box">
                <img src="${product.img}" alt="${product.title}">
            </div>
            <div class="info-box">
                <span class="cat-tag">${product.categoryKr}</span>
                <h3>${product.title}</h3>
                <div class="price">
                    ${product.price.toLocaleString()}원
                    <br>
                    <span style="font-size:0.75rem; color:#888; font-weight:400;">
                        관심 ${totalClicks}회 (가격 확인)
                    </span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}