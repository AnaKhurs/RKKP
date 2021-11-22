type PropsSelectType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export type ItemType = {
    title: string
    value: any
}

export const Select = (props: PropsSelectType) => {
    return (
        <div>
            <div>{props.items.find(i  => i.value===props.value)}</div>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    )
}