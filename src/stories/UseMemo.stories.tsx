import React, {useMemo, useState} from "react";

export default {
    title: "UseMemo"
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1;
    let resultB = 1;


    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA *= i;
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>
                result for a: {resultA}
            </div>
            <div>
                result for b: {resultB}
            </div>
        </div>
    )
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("UsersSecret")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}

    </div>
}

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Ura", "Dima", "Lera", "Katya"])

    const newArray = useMemo(()=>{
       return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    },[users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={newArray}/>

    </>
}