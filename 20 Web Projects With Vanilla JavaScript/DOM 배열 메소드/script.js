const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Fetch random user and add money
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 100000)
    }

    addData(newUser);
}

// Double everyones money
function doubleMoney() {
    data = data.map((user) => {
        return {...user, money: user.money * 2}     // 깊은 복사를 통한 user의 요소와 money를 두배로 반환
    });

    updateDOM();
}

// Sort users by richest
function sortByRichest() {
    // data를 내림차순으로 정렬
    data.sort((a,b) => b.money - a.money)

    updateDOM();
}

// Filter only millionaires
function showMillionaires() {
    data = data.filter(user => user.money > 1000000);

    updateDOM();
}

// Calculate the total wealth
function calculateWealth() {
    const wealth = data.reduce((acc,user) => (acc += user.money),0);

    const wealthEl  = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
    main.appendChild(wealthEl);
}

// Add new obj to data arr
function addData(obj) {
    data.push(obj);

    updateDOM();
}

// Update DOM (providedData = data는 아무 인자 없이 함수를 호출했을때 data를 기본 인자로 함을 의미한다)
function updateDOM(providedData = data) {
    // main의 텍스트를 초기화 (안하면 중복되서 출력)
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');    // div의 클래스 이름을 add로 설정
        element.innerHTML = `<strong>${item.name}</strong>${formatMoney(item.money)}`;
        main.appendChild(element);
    });
}

// Format number as money
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// 이벤트 리스너
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth)