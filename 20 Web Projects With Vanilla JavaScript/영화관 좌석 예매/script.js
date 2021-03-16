const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = parseInt(movieSelect.value);

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// 선택된 좌석 업데이트
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    // 선택된 좌석 indexOf로 검사해서 저장
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

    // localStorage에 저장 (JSON.stringfy를 거쳐서 저장)
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;
    
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// 로컬 스토리지에서 데이터 받아서 UI에 채우기
function populateUI(){
    // JSON.stringfy로 저장해주었기 때문에 JSON.parse로 변환
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat,index) => {
            if(selectedSeats.indexOf(index) > -1 ){
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// 영화 선택 이벤트
movieSelect.addEventListener('change', (e) => {
    ticketPrice = parseInt(e.target.value);

    // localStorage 저장
    setMovieData(e.target.selectedIndex, e.target.value);

    console.log(e.target.selectedIndex,e.target.value);

    updateSelectedCount();
})

container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});

// Initial count and total set
updateSelectedCount();