import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    console.log('App rendering')

    let [valueRating, setValueRating] = useState<RatingValueType>(0)

    let [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(true)

    let [on, setOn] = useState(false)

    return (
        <div className={"App"}>
            <UncontrolledOnOff onChange={setOn}/> {on.toString()} {/*неконтролируемый*/}
            <OnOff on={on} setOn={setOn}/> {/*контролируемый*/}

            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            <Accordion titleValue={"Users"} collapsed={collapsedAccordion} setCollapsedAccordion={setCollapsedAccordion}/>

            <UncontrolledRating/>
            <Rating value={valueRating} setValueRating={setValueRating}/>
        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    debugger
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
