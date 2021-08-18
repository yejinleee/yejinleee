import React, {memo, useMemo,useState} from 'react';

const Toggle = memo(({dst}) => {
    const [isToggleOn, setToggleOn] = useState(true);
    const 경기도 = ['구리', '수원', '의정부']

    const handleClick = () => {
        setToggleOn(!isToggleOn);
    };
    // console.log(경기도)

    return (
        <div className="toggle">
            <ul className={isToggleOn ? "show-menu" : "hide-menu"}>
                {dst === '경기도' ? 경기도.map((v) => {
                    return (
                        <>
                            <li>{v}</li>
                        </>
                    )
                }) : null}
            </ul>
        </div>
        // <button onClick={handleClick}>
        //     {isToggleOn ? {a} : '🔽'}
        // </button>
    );
})

export default Toggle;