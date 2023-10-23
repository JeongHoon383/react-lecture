import React from "react";

const Box = (props) => { //props -> object 객체
  return (
    <div>
      <div className="box">
        <h1>{props.name}</h1> 
        {/* name의 경우에는 가드값이 왜 필요없는가? -> app.js 에 box1 이라는 확실한 값이 정해져 있기 때문  */}
        <img src={props.item && props.item.img}/>
        {/* 리액트는 다이나믹한 값을 넘겨줘야됨 -> state 초기값이 설정이 안되어있을 수도 있음 -> 그런 경우를 대비해서 위 문법처럼 사용함 
        -> state 값이 null이면 false를 자동으로 리턴함 -> props.item(가드값)을 넣어줘야됨 */}
        <h2>{props.result}</h2>
      </div>
    </div>
  );
};

export default Box;
