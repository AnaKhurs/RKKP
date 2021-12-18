import React, {useState} from "react";

export default {
    title: "UseState demo"
}

export const Example1 = () => {
    console.log("Example1")

    function generateData() {
        //difficult counting
        return 1
    }

    const [counter, setCounter] = useState(generateData);

    const changer = (state: number) => {
        return state + 1
    }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}