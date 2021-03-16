const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// input 에러 메세지 출력
function showError(input, message) {
    const formControl = input.parentElement;        // input의 parentElement는 해당 form-control
    formControl.className = 'form-control error';   // formControl의 클래스 이름 바꿔서 CSS 변경
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// input 성공 메세지 출력
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// 이메일 주소 검사
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

// 입력 검사
function checkReuqired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    })
}

// 길이 검사
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input);
    }
}

// 패스워드 검사
function checkPasswordsMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match');
    }
}

// 필드 이름 받아오기 (맨 앞글자 대문자로 변환)
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// 이벤트 리스너 (Submit)
form.addEventListener('submit', function(e) {
    e.preventDefault();         // 태그의 고유 동작 중지

    checkReuqired([username,email,password,password2]);         // 입력 검사

    checkLength(username,3,15);         // 길이 검사
    checkLength(password,6,20)          // 길이 검사
    checkEmail(email);
    checkPasswordsMatch(password,password2);
})