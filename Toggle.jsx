import React, {memo, useMemo,useState} from 'react';

const Toggle =() =>{

    const [district,setDistrict] = useState(['경기도','강원도','서울특별시','충청북도','충청남도','전라북도','전라남도']);

    const [gyeongi, setGyeongi] = useState(['구리', '수원', '의정부']);
    const [gangwon, setGangwon] = useState(['춘천','동해','양양']);

    const onChangeGyeongi = (e) =>{
        setGyeongi(e.target.value);
    };
    const onChangeGangwon = (e) => {
        setGangwon(e.target.won);
    };
    
    function showcities(){
        {gyeongi.map((v) => {
            return (
                <li> {v}</li>
            )
        })}
    }

    return(
        <>
            <ul>
              <li onClick={ () => {showcities}}> 경기도 </li>   //함수로
              <li onClick={ () => {gangwon}}> 강원도 </li>      //cosnt로
            </ul>

        </>
    )

}



// const Toggle = memo(({dst}) => {
//     const [isToggleOn, setToggleOn] = useState(true);
//     const 경기도 = useState(['구리', '수원', '의정부']);

//     const handleClick = () => {
//         setToggleOn(!isToggleOn);
//     };
//     // console.log(경기도)

//     return (
//         <div className="toggle">
//             <ul className={isToggleOn ? "show-menu" : "hide-menu"}>
//                 {dst === '경기도' ? 경기도.map((v) => {
//                     return (
//                         <>
//                             <li>{v}</li>
//                         </>
//                     )
//                 }) : null}
//             </ul>
//         </div>
//         // <button onClick={handleClick}>
//         //     {isToggleOn ? {a} : '🔽'}
//         // </button>
//     );
// })




// <ul>
// <li onChange={onChangeGyeongi}>{gyeongi}</li>
// <li onChange={onChangeGangwon}>{gangwon}</li>
// </ul>

export default Toggle;