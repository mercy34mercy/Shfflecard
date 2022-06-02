type props = {
    handlechangeindex: any,
    handleindex:number
}

export const Indexbutton = (props:props) => {
    const handlechangeup = () =>  {
        props.handlechangeindex(props.handleindex+1)
    }
    const handlechangedown = () =>  {
        props.handlechangeindex(props.handleindex-1)
    }

    return (
        <div>
            <button onClick={handlechangeup}>+</button>
            <button onClick={handlechangedown}>-</button>
        </div>

    )
}