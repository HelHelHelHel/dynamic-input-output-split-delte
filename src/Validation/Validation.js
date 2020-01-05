import React from 'react'

export default function Validation({ userInputLength}) {
    return (
        <div>
            {
                userInputLength < 5 ? <p>Text too short</p> :
                <p>Text too long</p>
            }
        </div>
    )
}
