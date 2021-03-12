import React, {useState , useEffect} from 'react';
import scroll from "assets/img/scrolltop.png";

const ScrollToTop = (
    showBelow
) => {
    const [show, setShow]= useState(showBelow ? false : true)
    const handleScroll = () => {
        if(window.pageYOffset > showBelow){
            if(!show) setShow(true)
        } else {
            if (show) setShow(false)
        }

    }
    useEffect(() => {
       if(showBelow){
           window.addEventListener(`scroll`, handleScroll)
           return () => window.removeEventListener(`scroll`, handleScroll)
       }
    });

    const handleClick = () => {
        window['scrollTo']({top: 0, behavior:`smooth`})
    }
    return (
        <div>
                <img onClick={handleClick} src={scroll} alt=""/>

        </div>
    )
}

export default ScrollToTop;
