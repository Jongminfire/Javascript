const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

// const dummyTransactions = [
// 	{ id: 1, text: "Flower", amount: -20 },
// 	{ id: 2, text: "Salary", amount: 300 },
// 	{ id: 3, text: "Book", amount: -10 },
// 	{ id: 4, text: "Camera", amount: 150 },
// ];

// localStorage에는 object를 저장할 수 없으므로 string으로 저장된 object를 JSON.parse로 다시 object로 변환함
const localStorageTransactions = JSON.parse(localStorage.getItem("transactions"));

// localStorage에 transaction 있으면 받아오고 아니면 빈 배열
let transactions = localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

// Add transaction
function addTransaction(e) {
	e.preventDefault();

	if (text.value.trim() === "" || amount.value.trim() === "") {
		alert("Please add a text and amount");
	} else {
		const transaction = {
			id: generateID(),
			text: text.value,
			amount: Number(amount.value),
		};

		transactions.push(transaction);

		addTransactionDOM(transaction);

		updateValues();

		updateLocalStorage();

		text.value = "";
		amount.value = "";
	}
}

// Generate random ID
function generateID() {
	return Math.floor(Math.random() * 100000000);
}

// Add transactions to DOM list
function addTransactionDOM(transaction) {
	// Get sign
	const sign = transaction.amount < 0 ? "-" : "+";

	const item = document.createElement("li");

	// Add classs based on value (음수면 minus 클래스 양수면 plus 클래스 추가)
	item.classList.add(transaction.amount < 0 ? "minus" : "plus");

	// transaction.amount에 양수 음수 부호가 있으므로 절대값으로 출력
	item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete-btn" onclick="removeTransaction(${transaction.id})">X</button>
    `;

	list.appendChild(item);
}

// Update the balance, income and expense
function updateValues() {
	const amounts = transactions.map((transaction) => transaction.amount);

	// 값들 reduce로 더한 뒤 toFixed(2)로 소수점 2까지 저장
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

	const income = amounts
		.filter((item) => item > 0)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2);

	// 지출을 양수로 표현하기 위해 -1 곱해줌
	const expense = (amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

	balance.innerText = `$${total}`;
	money_plus.innerText = `$${income}`;
	money_minus.innerText = `$${expense}`;
}

// Remove transaction by ID
function removeTransaction(id) {
	transactions = transactions.filter((transaction) => transaction.id !== id);

	updateLocalStorage();

	init();
}

// Update local storage transactions
function updateLocalStorage() {
	localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Init app
function init() {
	list.innerHTML = "";

	transactions.forEach(addTransactionDOM);
	updateValues();
}

init();

form.addEventListener("submit", addTransaction);
