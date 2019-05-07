import React from 'react';

export const Group = (props) => {
    return (
        <div className="card col-4" style={{ width: 18 + "rem" }}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <ol>
                    {props.people.map((person, index) => {
                        return (<li key={index}>{person}</li>)
                    })}
                </ol>
            </div>
        </div>
    )

}