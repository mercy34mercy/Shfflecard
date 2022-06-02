import React from 'react';
import { useLocation } from 'react-router';
import './Result.css'

export const Result = () => {
    const location = useLocation()
    const [member, setmember] = React.useState<{ member: string[] }>(location.state as { member: string[] })
    const [group, setgroup] = React.useState<{ group: number }>(location.state as { group: number })
    
    const shuffle = ([...array]) => {
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }



    return (
        <div >
            <div >
            {
                (function () {
                    const members = shuffle(member.member);
                    console.log(members)
                    const response = []
                    let list: any = [];
                    for (let i = 0; i < member.member.length; i++) {
                        
                        if (list[i % group.group] == null) {
                            list[i % group.group] = []
                            list[i % group.group].push(<p key={0}>グループ{i % group.group+1 }</p>)
                        }
                        list[i % group.group].push(<p>{members[i]}</p>)
                    }
                    for (let i = 0; i < group.group; i++) {
                        response.push(<div key={i} className='groupbox'>{list[i]}</div>)
                        console.log(response)
                    }
                    
                        return <div className='result'>{ response }</div>
                }())
                }
            </div>
        </div>
        
    )
}