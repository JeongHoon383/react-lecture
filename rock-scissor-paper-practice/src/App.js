import {useState} from "react"
import "./App.css";
import Box from "./component/Box.js";

//choice의 property는 rock, scissors, paper, rock의 key 값은 - name, img, value 값은 - 'rock', '주소'ㅜ
const choice = { //사진과, 이름이 있는 객체를 만들어줌 why? 가위, 바위, 보 버튼을 눌렀을 때 ui로 그려줘야 되기 때문
  rock : {
    name : "rock",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Vzl--AIj0yI2IJgJfVPgP7tWnjxLMpvqVg&usqp=CAU"
  },
  scissors : {
    name : "Scissors",
    img : "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fc1.neweggimages.com%2FProductImage%2FA4SR_1_20190112675283046.jpg&type=a340"
  },
  paper : {
    name : "Paper",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7txaWoyHUC-LtcjGvvGxJzrWRLDlgYYkkzWuvvO707wrFfH1LmWN87wkmOeoKBYjr6fo&usqp=CAU"
  }
}
// 1. 유저가 버튼을 클릭한다. 
// 2. counter가 1이 된다. 
// 3. state함수가 호출된다.
// 4. console.log가 실행된다. 
// 5. 변수 값은 1로 보이고 state값은 아직 안변했기 때문에 그전에 값이 보인다. 
// 6. 함수 끝
// 7. app 다시 re render
// 8. let counter = 0 을 거치면서 counter 값은 다시 0으로 초기화 된다. 
// 9. 업데이트된 state값이 보인다. 
function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result,setResult] = useState("")

  const play = (userChoice) => {
    // userSelect = choice[userChoice]  에러남 why? state는 변수를 바꾸는 것 처럼 바꾸면 안됨, state를 바꾸는 함수를 따로 써줘야됨
    setUserSelect(choice[userChoice])
    // 객체[] -> 대괄호를 쓰는 이유 : 숫자, 특수문자, 띄어 쓰기는 ''를 사용해야되는데 .(dot) 에서는 지원하지 않음, 대신 []로 사용하면 출력됨
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice], computerChoice));

  }

  const judgement = (user, computer) => {
    console.log(user, computer);

    // 유저와 컴퓨터가 각각의 값을 낸다. 
    // 유저가 이길 경우 -> 반응, 유저가 질 경우 -> 반응, 비길경우 -> 반응
    if(user.name == computer.name){
      return "tie"
    }else if(user.name == "rock")return computer.name == "scissors"?"win":"lose"
    else if (user.name == "scissors")return computer.name == "paper" ? "win":"lose"
    else if(user.name == "paper")return computer.name == "rock"? "win":"lose"
      
    return computer.name == "rock"?"win":"lose" //주먹을 냈을 때 true면 win, false면 lose
      // if(computer == "scissors"){
      //   return "win"
      // }else{
      //   return "lose"
      // }
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    // object.keys -> O 대문자로 해야됨, Object.keys 는 객체에 키값만 뽑아서 배열로 만들어줌.
    // 배열에는 인덱스 번호가 있으므로, math.random 으로 가져오면 됨.
    console.log('itemArray는?', itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length)
    let final = itemArray[randomItem]
    console.log('final은', final);
    return choice[final]
    // 아이템과 숫자를 연결짓는 방법은 배열.
    // 랜덤한 숫자를 먼저 만들어주고 랜덤한 아이템으로 바꿔줘야됨, 그러기 위해선 배열이 필요함. 알고리즘 문제로 자주 나올 수 있으니 생각해보면 좋음
    // 1. 객체를 배열화 -> 
    console.log('randomValue는?', randomItem);
    
  }

  let counter = 0 // return 안에 만든 counter 변수를 선언해줌
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1)
    // 리액트가 제공해주는 state 사용 함수, 걍 외워야됨, useState(초기값), 배열을 반환함 [초기값이 담긴 state, state값을 변경해주는 함수]
    // state를 바꿀 때 변수 바꾸는 것 처럼 바꿀 수 없음 how? 함수를 통해서만 바꿀 수 있음
    console.log("counter는", counter, "counter2 state는", counter2);
  }
  return ( // react에서 ui를 그려줄 때 함수가 바로 실행됨, 
    <div>
      <div className="box-container">
        <Box name="box1" item={userSelect} result={result}/>
        <Box name="box2" item={computerSelect} result={result}/>
      </div>
      <div className="button-container">
        <button onClick={() => play('scissors')}>가위</button> {/* 리액트에서 ui를 그려줄 때 함수가 바로 실행 되기 때문에, 함수를 넘겨주는 형태로 콜백함수를 적용해야됨 */}
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
      
      <div>{counter}</div> {/* 다이나믹한 값 -> {변수명} */}
      <div>state:{counter2}</div>
      <button onClick={increase}>버튼!!</button>
    </div>
  );
}

export default App;
