import React, {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'input',
    //component: input,
}


export const UncontrolledInput = () => <input/>
export const ControlledInput = () => <input value={"IT"}/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <><input onChange={onChange}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPressById = () => {
    const [value, setValue] = useState('')
    const onClick = () => {
        const el = document.getElementById("idInput") as HTMLInputElement
        setValue(el.value)
    }
    return (
        <>
            <input id={"idInput"}/>
            <button onClick={onClick}>save</button>
            actual value: {value}
        </>
    )
}

export const GetValueOfUncontrolledInputByButtonPressInputRef = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
        <>
            <input ref={inputRef}/>
            <button onClick={onClick}>save</button>
            actual value: {value}
        </>
    )
}