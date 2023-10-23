let difficult = {
  33: '숫자 형식도 되네',
  'my name': '스페이스 포함 가능',
  color: 'silver',
  키: '한글인 키는 따옴표가 없어도 되는군!!',
  '!키': '느낌표 있는 키는 따옴표가 필요하군',
  $special: '$는 없어도 되는군'
};

//오류 발생
// console.log(difficult.!키);
// console.log(difficult.'!키');
// console.log(difficult.33);
// console.log(difficult.my name);

//정상 실행
console.log(difficult['!키']);
console.log(difficult['33']);
console.log(difficult['my name']);