import React, {Dispatch, SetStateAction, useState} from "react";


type RatingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('Rating rendering')

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} setValue={()=>setValue(1)} />
            <Star selected={value > 1} setValue={()=>setValue(2)} />
            <Star selected={value > 2} setValue={()=>setValue(3)} />
            <Star selected={value > 3} setValue={()=>setValue(4)} />
            <Star selected={value > 4} setValue={()=>setValue(5)} />
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    setValue: () => void      //Dispatch<SetStateAction<number>>
}

function Star(props: StarPropsType) {
    debugger
    console.log('Star rendering')
    const ClickStar = () => {
        props.setValue()
    }
    return (
        <span onClick={ClickStar}>
        {props.selected ? <b>star </b> : "star "}
        </span>
    )
}