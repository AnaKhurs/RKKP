import React from "react";


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
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            color={props.color}
                            setCollapsedAccordion={props.setCollapsedAccordion}
                            collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
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
