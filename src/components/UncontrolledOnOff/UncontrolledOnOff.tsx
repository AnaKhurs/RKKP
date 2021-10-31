import React, {useState} from "react";

type PropsType = {
    //on: boolean
}

function UncontrolledOnOff(props: PropsType) {
    console.log("OnOff rendering")
    let [uncontrolledOn, setUncontrolledOn] = useState(false)

    console.log('on:' + uncontrolledOn)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: uncontrolledOn ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: uncontrolledOn ? "white" : "red"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: uncontrolledOn ? "green" : "red"

    };

    return (
        <div>
            <div style={onStyle} onClick={ () => {setUncontrolledOn(true)} } >On</div>
            <div style={offStyle} onClick={ () => {setUncontrolledOn(false)} }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )


}

export default UncontrolledOnOff;