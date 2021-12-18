import React, {useEffect, useState} from "react";

export default {
    title: "UseEffect demo"
}

export const SimpleExample = () => {
    console.log("SimpleExample")

    const [counter, setCounter] = useState(1);

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
        //api.getUsers().then("") - side effect
        //setInterval - side effect, ассинхрон
        //indexedDB - side effect
        //document.getElementById - side effect
        //document.title = "User" - side effect
    })

    useEffect(() => {
        console.log("useEffect only first render")
        document.title = counter.toString()
        //api.getUsers().then("") - side effect
        //setInterval - side effect, ассинхрон
        //indexedDB - side effect
        //document.getElementById - side effect
        //document.title = "User" - side effect
    }, [])

    useEffect(() => {
        console.log("useEffect first render and count change")
        document.title = counter.toString()
        //api.getUsers().then("") - side effect
        //setInterval - side effect, ассинхрон
        //indexedDB - side effect
        //document.getElementById - side effect
        //document.title = "User" - side effect
    }, [counter])

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}


export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1);
    console.log("SetTimeoutExample")

    useEffect(() => {

        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)

    }, [counter])


    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1);
    console.log("SetIntervalExample")

    useEffect(() => {

        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)

    }, [])


    return <>
        Hello, {counter}
    </>
}

