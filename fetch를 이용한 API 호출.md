# fetch()를 이용한 API 호출

<br>

원격 API 호출을 위해서는 request, axios, jQuery 같은 라이브러리를 사용 할 수 있다. <br>

`fetch()`는 브라우저 내장 함수로 라이브러리 없이 원격으로 API 호출을 할 수 있다.

<br>

~~~javascript
let promise = fetch(url,[options])
~~~

위는 `fetch()`의 기본 문법으로,

- **url** : 접근하고자 하는 URL
- **options** : 선택 매개변수, method나 header 등을 지정함

를 의미 한다.

<br>

- ## GET 호출

`options`에 아무것도 넣지 않으면 요청은 GET 메서드로 진행된다.

<br>

~~~javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => {
    console.log(response)
})
~~~

 위는 url을 통해 GET 호출을 진행하는 코드이다.

~~~javascript
Response {status: 200, ok: true, redirected: false, type: "cors", url: "https://jsonplaceholder.typicode.com/posts/1", …}
~~~

와 같은 반환값을 볼 수 있는데,

- **status** : HTTP 상태 코드 (예: 200 - 성공 , 404 - not found)
- **ok** : 불린 값. HTTP  상태 코드가 200과 299 사이일 경우 `true`

를 의미한다.

<br>

~~~javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
~~~

위 처럼 GET 호출 값을 `json()` 메소드를 사용해서 반환하면

~~~javascript
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"
}
~~~

JSON 포멧의 응답을 자바스크립트 객체로 변환하여 얻을 수 있다.

<br>

- ## POST 호출

POST 호출 시에는 `options` 을 지정해줘야 한다.

<br>

~~~javascript
fetch("https://jsonplaceholder.typicode.com/posts",{
    method : "POST",
    headers : {
        "Content-Type": "application/json",
    },
    data : JSON.stringify({
        title: "TEST",
        body: "TEST"
    }),
}).then((response) => console.log(response))
~~~

<br>

결과 값으로 `201` status 값을 확인 할 수 있고

~~~javascript
Response {status: 201, ok: true, redirected: false, type: "cors", url: "https://jsonplaceholder.typicode.com/posts", …}
~~~

<br>

~~~javascript
fetch("https://jsonplaceholder.typicode.com/posts",{
    method : "POST",
    headers : {
        "Content-Type": "application/json",
    },
    data : JSON.stringify({
        title: "TEST",
        body: "TEST"
        userId: 1,
    }),
})
    .then((response) => response.json())
	.then((data) => console.log(data))
~~~

GET 호출처럼 `json()` 메소드를 사용해서 객체 형태로 값을 얻을 수 있다.

~~~javascript
{
    "id" : 101
}
~~~

<br>

- ## PUT과 DELETE 호출

PUT 방식은 POST 호출에서 `method` 옵션을 `PUT` 으로 설정하면 된다.

<br>

~~~javascript
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method: "PUT", //method PUT으로 변경
    headers: {
        "Content-Type": "application/json",
    },
    data: JSON.stringify({
        title: "TEST",
        body: "TEST",
        userId : 1,
    }),
})
	.then((res) => res.json())
	.then((data)=> console.log(data))
~~~

<br>

DELETE 방식은 데이터를 보내지 않기 때문에 `headers` 와 `data` 옵션이 필요 없다.

<br>

~~~javascript
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method: "DELETE",
})
	.then((response) => response.json())
	.then((data) => console.log(data))
~~~

