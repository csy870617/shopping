// script.js
const grid = document.getElementById('grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// 초기 렌더링
renderProducts('all');

// 필터 버튼 클릭 이벤트
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // 버튼 스타일 활성화
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        // 필터링 적용
        const filterType = e.target.getAttribute('data-filter');
        renderProducts(filterType);
    });
});

function renderProducts(filter) {
    grid.innerHTML = ''; // 그리드 초기화

    // data.js의 productData 변수 사용
    const filteredData = filter === 'all' 
        ? productData 
        : productData.filter(item => item.category === filter);

    if (filteredData.length === 0) {
        grid.innerHTML = '<p style="grid-column:1/-1; padding:2rem 0; color:#888;">준비된 상품이 없습니다.</p>';
        return;
    }

    filteredData.forEach(product => {
        const card = document.createElement('a');
        card.href = product.link;
        card.target = "_blank";
        card.className = 'card';

        // 뱃지가 있으면 표시, 없으면 빈 문자열
        const badgeHtml = product.badge ? `<span class="badge">${product.badge}</span>` : '';

        card.innerHTML = `
            <div class="img-box">
                ${badgeHtml}
                <img src="${product.img}" alt="${product.title}">
            </div>
            <div class="info-box">
                <span class="cat-tag">${product.categoryKr}</span>
                <h3>${product.title}</h3>
                <div class="price">₩${product.price.toLocaleString()}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}