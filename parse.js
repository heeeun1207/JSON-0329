//! JSON.parse 문자열을 => 객체로 변환한다.
//* 문자열을 객체로서 사용하려면 JSON 포맷의 문자열을 객체화해야 한다. 
//* 스트링 방식이 현재 가장 세련된 방식이다 - 안정된형태
const obj = {
  name : 'Lee',
  age : 20,
  alive : true,
  hobby : ['traveling' , 'tennis']
};
// 객채를 JSON 포맷의 문자열로 변환한다.  => stringify
const json = JSON.stringify(obj);
// console.log(typeof json,json);
//JSON 포맷의 문자열로 객체로 변환한다. => parse
const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);


