import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Toggle from './Toggle';

function App() {

  const [district,setDistrict] = useState(['경기도','강원도','서울특별시','충청북도','충청남도','전라북도','전라남도']);

  const [toggleOpen, setToggleOpen] = useState(false);

  
  return(
    <div className="list">
          <Toggle></Toggle>
      </div>

  );

}

export default App;



// <div>
// {
//   toggleopen ? <Toggle dst={v}></Toggle> : null
// }
// {/*<Toggle></Toggle>*/}
// </div>


// li 경기도  <Toggle>

// li 강원도

// <Toggle>
//   누르면 리스트