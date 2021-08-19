import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Toggle from './Toggle';

function App() {

    const [district,setDistrict] = useState(['경기도','강원도','서울특별시','충청북도','충청남도','전라북도','전라남도']);
    const [toggleopen,setToggleopen] = useState(false);

    const toggleMenu = () =>{
        setToggleopen(!toggleopen);
    }

  return (
    <div className="App">
      <header className="App-header">
        <div> U SPOT </div>
          <div>
              <a
                  className="App-link"
                  href="https://www.notion.so/1200gang/2021-8019c43d60864002b32af6b52eb5872d"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  광광이 노션 바로가기
              </a>
          </div>
      </header>
        <div className="list">
            <Toggle></Toggle>
        </div>
    </div>
  );
}

export default App;
