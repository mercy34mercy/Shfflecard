import './gotoResult.css'

type props = {
    handlechange:any
}

export const GotoResult = (props:props) => {
    return (
        <button className="button" onClick={props.handlechange}>結果を見る</button>
    )
}