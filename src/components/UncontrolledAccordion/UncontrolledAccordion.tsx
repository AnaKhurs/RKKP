import React, {useReducer} from "react";
import {ActionType, reducer} from "./reducer";


type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}


export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')


    // let [collapsed, setCollapsed] = useState(true)
    let [collapsed, dispatch] = useReducer(reducer, true)

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={setCollapsed} collapsed={collapsed}/>*/}
            <AccordionTitle title={props.titleValue} onClick={()=> dispatch({type:"TOGGLE-COLLAPSED"})} collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    onClick: (v: boolean) => void
    collapsed: boolean
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => {
        props.onClick(!props.collapsed)
    }}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
