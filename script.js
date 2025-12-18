const grid = document.getElementById('grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sort-select');

// 현재 상태 변수
let currentCategory = 'all';
let currentSort = 'newest';

// 초기 렌더링
updateGrid();

// 1. 카테고리 필터 버튼 클릭 이벤트
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // 버튼 활성화 스타일 변경
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        // 상태 업데이트 및 그리드 갱신
        currentCategory = e.target.getAttribute('data-filter');
        updateGrid();
    });
});

// 2. 정렬 선택 이벤트
sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    updateGrid();
});

// 통합 렌더링 함수
function updateGrid() {
    grid.innerHTML = '';

    // A. 필터링 (카테고리)
    let filteredData = currentCategory === 'all' 
        ? [...productData] 
        : productData.filter(item => item.category === currentCategory);

    // B. 정렬 로직 (인기순 제거됨)
    switch (currentSort) {
        case 'newest':
            // ID 내림차순 (높은 ID가 최신)
            filteredData.sort((a, b) => b.id - a.id);
            break;
        case 'low-price':
            // 가격 오름차순
            filteredData.sort((a, b) => a.price - b.price);
            break;
        case 'high-price':
            // 가격 내림차순
            filteredData.sort((a, b) => b.price - a.price);
            break;
        default:
            // 기본: ID 내림차순
            filteredData.sort((a, b) => b.id - a.id);
    }

    // C. 결과 없음 처리
    if (filteredData.length === 0) {
        grid.innerHTML = '<p style="grid-column:1/-1; padding:4rem 0; text-align:center; color:#888;">준비된 상품이 없습니다.</p>';
        return;
    }

    // D. 카드 생성 및 출력
    filteredData.forEach(product => {
        const card = document.createElement('a');
        card.href = product.link;
        card.target = "_blank";
        card.className = 'card';

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
                        정확한 가격은 클릭 후 확인
                    </span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}