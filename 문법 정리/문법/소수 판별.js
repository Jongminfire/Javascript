function isPrime(num) {
	if (num < 2) {
		return false;
	}

	for (let i = 2; i <= Number(Math.sqrt(num)); i++) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}

// num이 소수인지 판별하는 함수
