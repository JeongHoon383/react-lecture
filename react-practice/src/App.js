import "./App.css";
import Box from "./component/Box.js";

// 1. 박스, 버튼을 만든다. 
// 2. 박스 이름을 직접 바꾸는게 아닌 props를 이용해서 바꾼다.
// 3. 가위, 바위, 보를 눌렀을 때 이미지가 나와야됨 
// 4. 일단 버튼을 클릭했을 때

function App() {
  return (
    <div>
      <div className="box-container">
        <Box name="you"/>
        <Box name="computer"/>
      </div>
      <div className="button-container">
      <button onClick={buttonClick}>가위</button>
      <button>바위</button>
      <button>보</button>
      </div>
    </div>
  );
}

const buttonClick = () => {
  
}

export default App;
