type props = {
    memberlist:string[]
}

export const Shufflecard = (props: props) => {
    const shuffle = ([...array]) => {
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const list = shuffle(props.memberlist).map((mem) => {
    return (
        <div>
            {mem}
        </div>
        )
    })

    return (
        list
    )
}