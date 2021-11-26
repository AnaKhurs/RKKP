import React from "react";



type PropsSelectType = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

export type ItemType = {
    title: string
    value: any
}

export const Select = (props: PropsSelectType) => {
    const selectItem = props.items.find(i=> i.value === props.value)
    return (
        <div>
            <select>
                <option value="">Minsk</option>
                <option value="">Moscow</option>
                <option value="">Kiev</option>
            </select>
            <h3>{selectItem && selectItem.title}</h3>
            {props.items.map(i => <div key={i.value}>{i.title}</div>)}
        </div>
    )
}