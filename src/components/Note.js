import React from "react";

export default function Note(props)
{
return(
    <>
    <div className="container mt-4">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <a href="#" className="btn btn-primary btn-sm">Open</a>
                </div>
            </div>
    </div>
    </>
)
}

