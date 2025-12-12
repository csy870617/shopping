const grid = document.getElementById('grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// 초기 렌더링
renderProducts('all');

// 필터 버튼 클릭 이벤트
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderProducts(e.target.getAttribute('data-filter'));
    });
});

function renderProducts(filter) {
    grid.innerHTML = '';

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

        card.innerHTML = `
            <div class="img-box">
                <img src="${product.img}" alt="${product.title}">
            </div>
            <div class="info-box">
                <span class="cat-tag">${product.categoryKr}</span>
                <h3>${product.title}</h3>
                <div class="price">가격: 쿠팡에서 확인</div>
            </div>
        `;
        grid.appendChild(card);
    });
}