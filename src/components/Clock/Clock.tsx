import React, {useEffect, useState} from "react";

type PropsType = {}

const get2digitString = (value: number) => value < 10 ? "0" + value : value


export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const idInterval = setInterval(() => {
            console.log("TIIICK")
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(idInterval)
        }
    }, [])

    return <div>
        <span>{get2digitString(date.getHours())}</span>
        :<span>{get2digitString(date.getMinutes())}</span>
        :<span>{get2digitString(date.getSeconds())}</span>
    </div>
}