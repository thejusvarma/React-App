import React from "react";

export default function Note(props)
{
return(
    <>
    <div className="container mt-4">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content.slice(0,200)}...</p>
                    <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-secondary btn-sm">Read</a>
                    <a href="#" className="btn btn-secondary btn-sm">Edit</a>
                    <a href="#" className="btn btn-secondary btn-sm">Delete</a>
                    </div>
                </div>
            </div>
    </div>
    </>
)
}

