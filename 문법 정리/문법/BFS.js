const maps = [
	[1, 0, 1, 1, 1],
	[1, 0, 1, 0, 1],
	[1, 0, 1, 1, 1],
	[1, 1, 1, 0, 1],
	[0, 0, 0, 0, 1],
];

const row = maps[0].length;
const col = maps.length;
let visited = Array.from(Array(col), () => new Array(row).fill(0));

function BFS(sx, sy) {
	let deque = [];
	if (maps[sy][sx]) {
		deque.push([sy, sx]);
		visited[sy][sx] = 1;
	}

	while (deque.length > 0) {
		let now = deque.shift();
		let x = now[0];
		let y = now[1];

		let move = [
			[x + 1, y],
			[x - 1, y],
			[x, y + 1],
			[x, y - 1],
		];

		for (let v of move) {
			let nx = v[0];
			let ny = v[1];

			if (nx < 0 || nx >= row || ny < 0 || ny >= col) {
				continue;
			}

			if (maps[ny][nx] && visited[ny][nx] === 0) {
				deque.push([nx, ny]);
				visited[ny][nx] = visited[y][x] + 1;
			}
		}
	}

	return visited[col - 1][row - 1] ? visited[col - 1][row - 1] : -1;
}

console.log(BFS(0, 0));

// 0,0에서 시작해서 그래프 끝까지 도달 할 수 있는지, 도달 할 수 있다면 최단거리 출력
