import React, {useState} from "react";

type PropsType = {
    //on: boolean
    onChange: (b: boolean) => void
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

    const onClicked = () => {
        setUncontrolledOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setUncontrolledOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )


}

export default UncontrolledOnOff;