import "./App.css";
import Box from "./component/Bbox.js";
// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3 4의 결과를 가지고 누가 이겼는지 승패를 따짐
// 6. 승패결과에 따라 테두리 색이 바뀐다. (이기면 - 초록, 지면 - 빨강, 비기면 - 검정)
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

  const play = (userChoice) => {
    console.log('선택됨!!', userChoice);
  }
  return (
    <div>
      <div className="main">
        <Box title="you" />
        <Box title="computer" />
      </div>
      <div className="main">
        <button onClick={() => play('scissor')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
