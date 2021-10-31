import React, {Dispatch, SetStateAction, useState} from "react";


type RatingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('Rating rendering')

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} setValue={setValue} v={1}/>
            <Star selected={value > 1} setValue={setValue} v={2}/>
            <Star selected={value > 2} setValue={setValue} v={3}/>
            <Star selected={value > 3} setValue={setValue} v={4}/>
            <Star selected={value > 4} setValue={setValue} v={5}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void      //Dispatch<SetStateAction<number>>
    v: 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropsType) {
    debugger
    console.log('Star rendering')
    const ClickStar = (v: 1 | 2 | 3 | 4 | 5) => {
        props.setValue(v)
    }
    return (
        <span onClick={() => ClickStar(props.v)}>
        {props.selected ? <b>star </b> : "star "}
        </span>
    )
}