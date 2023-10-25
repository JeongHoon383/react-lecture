import "./App.css";
import Box from "./component/Box.js";
import { useState } from "react";

// 1. 박스, 버튼을 만든다. 
// 2. 박스 이름을 직접 바꾸는게 아닌 props를 이용해서 바꾼다.
// 3. 가위, 바위, 보를 눌렀을 때 이미지가 나와야됨 
// 4. 일단 버튼을 클릭했을 때

const choice = {
  rock : {
    name : "rock",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Vzl--AIj0yI2IJgJfVPgP7tWnjxLMpvqVg&usqp=CAU"
  },
  scissor : {
    name : "Scissor",
    img : "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fc1.neweggimages.com%2FProductImage%2FA4SR_1_20190112675283046.jpg&type=a340"
  },
  paper : {
    name : "Paper",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7txaWoyHUC-LtcjGvvGxJzrWRLDlgYYkkzWuvvO707wrFfH1LmWN87wkmOeoKBYjr6fo&usqp=CAU"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null)
  // 초기값이 저장되어있는 state, state값을 변경해주는 함수

  return (
    <div>
      <div className="box-container">
        <Box name="you"/>
        <Box name="computer"/>
      </div>
      <div className="button-container">
      <button onClick={() => play('scissor')}>가위</button>
      <button onClick={() => play('rock')}>바위</button>
      <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

const play = (userChoice) => {
  console.log(userChoice);
}



export default App;
