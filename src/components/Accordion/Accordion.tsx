import React from "react";

export type ItemType = {
    title: string
    value: any
}
export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    /**
     * Callback that is called when any item clicked
     * @param collapsed of clicked item
     */
    setCollapsedAccordion: (collapsed: boolean) => void
    /**
     * optional color header text
     */
    color?: string
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            color={props.color}
                            setCollapsedAccordion={props.setCollapsedAccordion}
                            collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody items ={props.items} onClick={props.onClick} />}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsedAccordion: (collapsed: boolean) => void
    collapsed: boolean
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3
        style={{color: props.color ? props.color : "black"}}
        onClick={() => props.setCollapsedAccordion(!props.collapsed)}>{props.title}</h3>
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props:AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return (
        <ul>

            {props.items.map((i,index) => <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}
