import React, {Dispatch, SetStateAction} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    setValueRating: Dispatch<SetStateAction<RatingValueType>> /*() => void*/
}


export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')
    return (
        <div>
            <Star selected={props.value > 0} setValueRating={props.setValueRating} v={1}/>
            <Star selected={props.value > 1} setValueRating={props.setValueRating} v={2}/>
            <Star selected={props.value > 2} setValueRating={props.setValueRating} v={3}/>
            <Star selected={props.value > 3} setValueRating={props.setValueRating} v={4}/>
            <Star selected={props.value > 4} setValueRating={props.setValueRating} v={5}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    setValueRating: Dispatch<SetStateAction<RatingValueType>>
    v: RatingValueType
}


function Star(props: StarPropsType) {

    const clickStarRating = (v: RatingValueType) => {
        props.setValueRating(v)
    }
    return <span onClick={() => clickStarRating(props.v)}>{props.selected ? <b>star </b> : "star "}</span>
}