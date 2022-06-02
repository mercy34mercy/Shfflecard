import React from 'react';

type props = {
    handlechange: any,
    handlechangeindex:any,
    statevalue: string[],
    barindex: number
    index:number
}

export const Inputbar = (props: props) => {
    const [inputvalue, setvalue] = React.useState(props.statevalue[props.index])
    
    const onhandlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setvalue(() => e.target.value)
    }

    const pressEnter = (e:any) => {
        if (e.key == 'Enter') {
            props.statevalue.push(inputvalue)
            props.handlechangeindex(props.barindex+1)
        }
    }
    return (
        <div>
            <input type="text" value={inputvalue} onKeyPress={pressEnter} onChange={onhandlechange} />
        </div>
    )
}