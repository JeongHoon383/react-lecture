import { useState } from "react";
import "./App.css";
import Box from "./component/Box.js"

function App() {
  let counter = 0
  const [counter2, setCounter2] = useState(0) //useState(초기값)
  //counter2 = 초기값이 담긴 state, setCounter2 = state값을 변경해주는 함수, 함수를 통해서 바꿈
  const increase = () =>{
    counter = counter + 1;
    setCounter2(counter2 + 1) // 비동기적으로 실행, 함수가 다 끝나야 실행됨
    console.log("counter는", counter, "counter2 state는", counter2); // counter -> 계속 1로 찍힘 why? function app이 재실행 되면서 값이 초기화됨
    // 변수는 값을 바꾸면 바로 적용이 되지만 why? 변수는 동기적으로 진행, state는 비동기적으로 실행되고 
    // 함수가 끝날때 까지 기다렸다가 state 바꾸는 함수들을 모아서 한번에 실행

    // 1. 유저가 버튼을 클릭한다.
    // 2. counter+1해서 1이됨
    // 3. setState 함수 호출
    // 4. console.log 실행됨
    // 변수값은 1로 보이고 state 값은 아직 안변했기 때문에 그전에 값이 보인다. 
    // 함수 끝
    // app 다시 re render
    // let counter = 0 을 거치면서 counter 값은 다시 0으로 초기화가 된다.
    // 업데이트된 state값이 보인다.
  }
  return (
    <div>
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>클릭!!</button>
    </div>
  );
}

export default App;
