import React, {useState} from "react";

export default {
    title: "MemoDemo"
}

const Counter = (props: {count: number}) => {
    console.log("Counter")
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log("Users")
    return <div>
        {props.users.map((u,i)=><div key={i}>{u}</div>)}

    </div>
}

const Users = React.memo(UsersSecret);
const NewMessageCounter = React.memo(Counter);

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Ura", "Dima", "Lera", "Katya"])
return <>
    <button onClick={()=>setCounter(counter+1)}>+</button>
    <button onClick={()=>setUsers([...users, "Name"+new Date().getTime()])}>addUser</button>
    <NewMessageCounter count={counter}/>
    <Users users={users}/>

</>
}