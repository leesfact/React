import React from "react";



function Button(props) {

    return(
        //react에서는 component 하나가 dom ! 
        <button onClick={props.handlerClick}>이름전달</button>
    );
}

export default Button;
