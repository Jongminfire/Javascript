const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch를 이용한 환율과 DOM 업데이트
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.rates[currency_two];
        
        rateEl.innerText = `1 ${currency_one} = ${rate}`
    
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
        // (환전양 * 환율) 값을 소수점 2자리 까지 
    })
}

// 이벤트 리스너
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

// 화폐 단위 스왑
swap.addEventListener('click', ()=>{
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
})

calculate();