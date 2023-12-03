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
                    <i class="fa-regular fa-pen-to-square" title="Edit"></i>
                    <i class="fa-brands fa-readme" title="Read"></i>
                    <i class="fa-solid fa-trash-can" title="Delete"></i>
                    </div>
                </div>
            </div>
    </div>
    </>
)
}

