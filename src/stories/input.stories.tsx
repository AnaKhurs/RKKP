import React, {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'input',
    //component: input,
}


export const UncontrolledInput = () => <input/>
export const ControlledInput1 = () => <input value={"IT"}/>

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

export const ControlledInput = () => {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <><input value={value} onChange={onChange}/> - {value}</>
}

export const ControlledCheckbox = () => {
    const [value, setValue] = useState(false)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }
    return <><input type='checkbox' checked={value} onChange={onChange}/></>
}

export const ControlledSelect = () => {
    const [value, setValue] = useState<string | undefined>(undefined)

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <select value={value} onChange={onChange}>
            <option>none</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Moscow</option>
            <option value={'3'}>Kiev</option>
        </select>
    )
}