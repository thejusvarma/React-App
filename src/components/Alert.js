import React from "react";

export default function Alert(prop){
    return(
    prop.alert && <div className={`alert alert-${prop.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{prop.alert.msg}</strong>
    </div>
  )
}