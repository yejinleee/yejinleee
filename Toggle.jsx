import React, {memo, useMemo,useState} from 'react';

const Toggle =() =>{

    const [district,setDistrict] = useState(['경기도','강원도','서울특별시','충청북도','충청남도','전라북도','전라남도']);
    const gyeongi = ['구리', '수원', '의정부']
    const [gangwon,setgangwon] = useState(['춘천','동해','양양']);
    const [gyeongitoggle,setGyeongitoggle]=useState(false);
    const [gangwontoggle,setGangwontoggle]=useState(false);

    function ggtoggleOpen(){
        setGyeongitoggle(!gyeongitoggle);
    }
    function gwtoggleOpen(){
        setGangwontoggle(!gangwontoggle);
    }
    const gg = gyeongi.map((v)=> (<li>{v}</li>));
    const gw = gangwon.map((v)=> (<li>{v}</li>));


    return(
        <>
            <ul>
                <li onClick={ ggtoggleOpen}> 경기도 </li>
                {gyeongitoggle ? <ul>{gg}</ul> : "" }
                <li onClick={ gwtoggleOpen}> 강원도 </li>
                {gangwontoggle ? <ul>{gw}</ul> : "" }

            </ul>
        </>
    )

}

export default Toggle;
