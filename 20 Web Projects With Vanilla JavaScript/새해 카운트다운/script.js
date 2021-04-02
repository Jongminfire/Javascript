const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerHTML = currentYear + 1;

// Update countdown time
function updateCountdown() {
	const currentTime = new Date();
	const diff = newYearTime - currentTime;

	const d = Math.floor(diff / 1000 / 60 / 60 / 24);
	const h = Math.floor(diff / 1000 / 60 / 60) % 24;
	const m = Math.floor(diff / 1000 / 60) % 60;
	const s = Math.floor(diff / 1000) % 60;

	// Add values to DOM
	days.innerHTML = d;
	hours.innerHTML = h < 10 ? "0" + h : h; // h가 한자리수면 0 붙임
	minutes.innerHTML = m < 10 ? "0" + m : m; // m이 한자리수면 0 붙임
	seconds.innerHTML = s < 10 ? "0" + s : s; // s가 한자리수면 0 붙임
}

// Show spinner befor countdown
setTimeout(() => {
	loading.remove();
	countdown.style.display = "flex";
}, 1000);

// 1초마다 updateCountdown 실행
setInterval(updateCountdown, 1000);
