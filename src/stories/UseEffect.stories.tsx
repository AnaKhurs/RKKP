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