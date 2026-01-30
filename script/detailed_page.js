const selectHeader = document.querySelector('.Payment1');
const options = document.querySelector('.select-options');
const selectedText = document.querySelector('.selected-text');
const resultBox = document.querySelector('.option-result');

// 박스 클릭 → 옵션 토글
selectHeader.addEventListener('click', () => {
  options.style.display =
    options.style.display === 'block' ? 'none' : 'block';
});

// 옵션 클릭 → 텍스트 변경 + 가격 영역 생성
document.querySelectorAll('.select-options li').forEach(option => {
  option.addEventListener('click', () => {
    const optionName = option.textContent.trim();
    const price = Number(option.dataset.price);

    resultBox.innerHTML = `
      <div class="option-row selected-option" data-price="${price}">
        <p class="option-name">${optionName}</p>
        <div class="option-line">
          <div class="quantity">
            <button class="minus"></button>
            <span class="count">1</span>
            <button class="plus"></button>
          </div>
          <div class="price">
            <strong>${price.toLocaleString()}원</strong>
          </div>
          <button class="remove"></button>
        </div>
      </div>
    `;

    document.querySelector('.total-count').textContent = '총 수량 1개';
    document.querySelector('.total-price').textContent =
      price.toLocaleString() + '원';

    selectedText.textContent = '선택';
    options.style.display = 'none';
  });
});


// 바깥 클릭 시 닫기
document.addEventListener('click', e => {
  if (!e.target.closest('.Payment_wrap')) {
    options.style.display = 'none';
  }
});


document.addEventListener('click', e => {
  if (!e.target.classList.contains('remove')) return;

  document.querySelector('.option-result').innerHTML = '';
  document.querySelector('.total-count').textContent = '총 수량 0개';
  document.querySelector('.total-price').textContent = '0원';
});


document.addEventListener('click', e => {
  const optionBox = e.target.closest('.selected-option');
  if (!optionBox) return;

  if (
    !e.target.classList.contains('plus') &&
    !e.target.classList.contains('minus')
  ) return;

  const basePrice = Number(optionBox.dataset.price);
  const countEl = optionBox.querySelector('.count');
  const priceEl = optionBox.querySelector('.price strong');
  const totalCountEl = document.querySelector('.total-count');
  const totalPriceEl = document.querySelector('.total-price');

  let count = Number(countEl.textContent);

  if (e.target.classList.contains('plus') && count < 3) count++;
  if (e.target.classList.contains('minus') && count > 1) count--;

  countEl.textContent = count;

  const newPrice = basePrice * count;
  priceEl.textContent = newPrice.toLocaleString() + '원';
  totalCountEl.textContent = `총 수량 ${count}개`;
  totalPriceEl.textContent = newPrice.toLocaleString() + '원';
});
