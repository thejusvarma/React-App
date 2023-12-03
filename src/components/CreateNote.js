export default function CreateNote(prop)
{
    return(
        <>
         {/* Button trigger modal */}
         <button type="button" className="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Add note
        </button>

                {/* Modal */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static"  data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" style={prop.myStyle}>
            <div className="modal-content " style={prop.myStyle}>
            <div className="modal-header"style={prop.myStyle}>
                <h5 className="modal-title" id="staticBackdropLabel">New Note</h5>
            </div>
            <div className="modal-body">
            {/* Form inside modal */}
            <form>
            <div className="form-group mb-4 mt-3">
                <label className="mb-1" for="exampleFormControlInput1">Heading</label>
                <input type="email" className="form-control" style={prop.myStyle} id="exampleFormControlInput1" placeholder=""/>
            </div>
            <div className="form-group mb-3">
                <label className="mb-1" for="exampleFormControlTextarea1">Content</label>
                <textarea className="form-control" style={prop.myStyle} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Add</button>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}