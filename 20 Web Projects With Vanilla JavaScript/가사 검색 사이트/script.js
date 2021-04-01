const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");

const apiURL = "https://api.lyrics.ovh";

// Search by song or artist
async function searchSongs(term) {
	// fetch(`${apiURL}/suggest/${term}`)
	// 	.then((res) => res.json())
	// 	.then((data) => console.log(data));

	// 위 코드는 아래와 같으나 아래쪽의 표현이 더 깔끔하다.

	const res = await fetch(`${apiURL}/suggest/${term}`);
	const data = await res.json();

	showData(data);
}

// Show song and artist in DOM
function showData(data) {
	// let output = "";

	// data.data.forEach((song) => {
	// 	output += `
	//         <li>
	//             <span><strong>${song.artist.name}</strong> - ${song.title}</span>
	//             <button class="btn" data-artist="${song.artist.name}" data-songtitle = "${song.title}">Get Lyrics</button>
	//         </li>
	//     `;
	// });

	// result.innerHTML = `
	//     <ul class="songs">
	//         ${output}
	//     </ul>
	// `;

	// 위는 변수를 사용한 출력, 아래는 과정을 합친 방법

	result.innerHTML = `
        <ul class="songs">
            ${data.data
				.map(
					(song) => `<li>
            <span><strong>${song.artist.name}</strong> - ${song.title}</span>
            <button class="btn" data-artist="${song.artist.name}" data-songtitle = "${song.title}">Get Lyrics</button>
        </li>`
				)
				.join("")}
        </ul>
    `;

	// map으로는 list를 반환하므로 .join("")으로 하나의 문자열로 바꿈

	if (data.prev || data.next) {
		more.innerHTML = `
          ${data.prev ? `<button class="btn" onclick="getMoreSongs('${data.prev}')">Prev</button>` : ""}
          ${data.next ? `<button class="btn" onclick="getMoreSongs('${data.next}')">Next</button>` : ""}
        `;
	} else {
		more.innerHTML = "";
	}
}

// Get prev and next songs
async function getMoreSongs(url) {
	const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
	// 프록시 사용을 위해 cors-anywhere.herokuapp을 사용 (사용하지 않으면 다음 곡을 받을 때 에러남)

	const data = await res.json();

	showData(data);
}

// Get lyrics for song
async function getLyrics(artist, songTitle) {
	const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
	const data = await res.json();

	console.log(data.lyrics);

	// 정규표현식으로 줄 바꿈 <br>로 변경 (마크다운은 줄바꿈 인식 못하므로 <br>로 변경함)
	const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, "<br>");

	result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
    <span>${lyrics}</span>
    `;

	more.innerHTML = "";
}

// Event listeners
form.addEventListener("submit", (e) => {
	e.preventDefault();

	const searchTerm = search.value.trim();

	if (!searchTerm) {
		alert("Please type in a search term");
	} else {
		searchSongs(searchTerm);
	}
});

// Get lyrics button click
result.addEventListener("click", (e) => {
	const clickedEl = e.target;

	if (clickedEl.tagName === "BUTTON") {
		const artist = clickedEl.getAttribute("data-artist");
		const songTitle = clickedEl.getAttribute("data-songtitle");

		getLyrics(artist, songTitle);
	}
});
