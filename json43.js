//* JSON 은 자바스크립트의 객체 리터럴과 유사하게 키와 값으로 구성된 순수한 텍스트이다. 
// {
// "name" : "Lee",
// "age" : 20,
// "alive" : t"ue,
// "hobb" : ["traveling", "tennis"]
// }
const obj = {
  name : "Lee",
  age : 20,
  alive : true,
  hobby : ['traveling', 'tennis']
};
//! 객체를 JSON.stringify 문자열로 변환한다. 
const json = JSON.stringify(obj);
console.log(typeof json,json);//string {"name":"Lee","age":20,"alive":true,"hobby":["traveling","tennis"]}

//객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기한다. 
//갈끔하게 표시된다. 
const prettyJson = JSON.stringify(obj, null , 2);
console.log(typeof prettyJson,prettyJson);

//replacer 함수 ,값의 타입이 Number 이면 필터링되어 반환되지 않음.
function filter (key , value){
 //undefined  : 반환되지 않음
 return typeof value ==='number' ? undefined : value;
}
//JSON.stringfy  메서드의 두 번째 인수로 replacer 함수를 전달한다.
const strFilteredObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);
// string {
//   "name": "Lee",
//   "alive": true,
//   "hobby": [
//     "traveling",
//     "tennis"
//   ]
// }   => 숫자 = number가 필터되서 값이 출력되지 않는다. 
