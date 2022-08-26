import './gotoResult.css'

type props = {
    handlechange: any
}

export const GotoResult = (props: props) => {
    return (
        <div className='gotoresult'>
            <button onClick={props.handlechange}>結果を見る</button>
        </div>

    )
}