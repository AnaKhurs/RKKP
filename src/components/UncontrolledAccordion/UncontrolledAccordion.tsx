import React, {useReducer} from "react";
import {ActionType, reducer, TOGGLE_COLLAPSED} from "./reducer";


type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}


export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')


    // let [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer, {collapsed:false})

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={setCollapsed} collapsed={collapsed}/>*/}
            <AccordionTitle title={props.titleValue} onClick={()=> dispatch({type:TOGGLE_COLLAPSED})} />
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    onClick: () => void
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => {
        props.onClick()
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
