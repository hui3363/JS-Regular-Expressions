
const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
// g: 전체 검색
// i: 대소문자 구분 안함
//const regexp = new RegExp('the', 'gi')
let regexp = /the/gi
console.log(str.match(regexp)) //일치하는 문자열의 배열 반환

regexp = /fox/gi
console.log(regexp.test(str))

console.log(str.replace(regexp, 'AAA')) // 원본 데이터에는 반영안됨

console.log(str.match(/\.$/gim)) //각 줄에 맨 뒤에 .으로 나오는 경우
// m : 줄바꿈 되있는 줄마다 각각 검색

console.log(
    str.match(/h..p/g)
)

console.log(
    str.match(/fox|dog/g)
)

console.log(
    str.match(/https?/g)
)
//s는 있을수도 없을수도 있음

console.log(
    str.match(/d{2,}/g)
)
//dddd

console.log(
    str.match(/\b\w{2,3}\b/g)
)
// 숫자나 알파벳이 2~3개

console.log(
    str.match(/[fox]/g)
)
// 모든 f, o, x

console.log(
    str.match(/[0-9]{1,}/g)
)
// 1개 이상의 모든 번호

