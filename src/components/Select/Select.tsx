import React, {useState, KeyboardEvent, useEffect} from "react";
import classes from "./Select.module.css";


export type PropsSelectType = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

export type ItemType = {
    title: string
    value: any
}

export const Select = (props: PropsSelectType) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentItem = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1];
                    if (pretendentItem) {
                        props.onChange(pretendentItem.value)
                        break;
                    }
                }
            }
        }
    }


    const selectItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)


    return (
        <>
            <div className={classes.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={classes.main} onClick={toggleItems}>{selectItem && selectItem.title}</span>
                {active &&
                <div className={classes.items}>
                    {props.items.map(i => <div
                            onMouseEnter={() => setHoveredElementValue(i.value)}
                            className={classes.item + " " + (hoveredItem === i ? classes.selected : "")}
                            key={i.value}
                            onClick={() => {
                                onItemClick(i.value)
                            }}
                        >
                            {i.title}
                        </div>
                    )}
                </div>
                }
            </div>
        </>
    )
}