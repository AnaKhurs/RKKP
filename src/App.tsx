import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Technologies} from "./components/Technologies/Technologies";
import {Header} from "./components/Header/Header";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";

function App() {
    console.log('App rendering')

    let [valueRating, setValueRating] = useState<RatingValueType>(0)

    let [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(true)

    let [on, setOn] = useState(false)

    return (
        <div className={"App"}>
            <UncontrolledOnOff/> {/*неконтролируемый*/}
            <OnOff on={on} setOn={setOn}/> {/*контролируемый*/}

            <UncontrolledAccordion titleValue={"Menu"}/> {/*неконтролируемый*/}
            <UncontrolledAccordion titleValue={"Users"}/> {/*неконтролируемый*/}
            <Accordion titleValue={"Users"} collapsed={collapsedAccordion} setCollapsedAccordion={setCollapsedAccordion}/> {/*контролируемый*/}

            <UncontrolledRating/> {/*неконтролируемый*/}
            <Rating value={valueRating} setValueRating={setValueRating}/> {/*контролируемый*/}

            {/*     <Header />
        <Technologies />
        <PageTitle title={"This is APP component"}/>
        <PageTitle title={"My friends"}/>
        <Rating value = {3}/>*/}
            {/*       <Accordion titleValue = {"Menu"} collapsed = {true} />
        <Accordion titleValue = {"Users"} collapsed = {false} />
        <Rating value = {0}/>
        <Rating value = {1}/>
        <Rating value = {2}/>
        <Rating value = {3}/>
        <Rating value = {4}/>
        <Rating value = {5}/>*/}
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
