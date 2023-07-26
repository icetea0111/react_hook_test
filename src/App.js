import React, {Component} from "react";
import './App.css';

import Test01 from "./componont/Test01";
import Test02 from "./componont/Test02";

// reducer - state를 업데이트 하는 역할
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용

function App() {
  return  (
    <div className="test_app">
      <Test01/>
      <Test02/>
    </div>
  );
}

export default App;
