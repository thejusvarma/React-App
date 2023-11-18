import React,{useState} from "react";
import NewsItem from "./NewsItem";


export default function News(props)
{
    const handlePrev =()=>
    {
        console.log("Prev");

    }
    const handleNext=()=>
    {
        console.log("next");
    }

    const[data,setData] = {articles:[],loading:false,page:1};


    return(
        <>
        <div className="container" style={props.myStyle}>
          <h3 className="text-center mb-5">HeadLines</h3>
          <div className="row">
                <div className="col-md-4">
                    <NewsItem/>
                </div>
          </div>
          <div className="d-flex justify-content-between">
              <button type="button"   class="btn btn-warning" onClick={handlePrev} >&larr; Previous</button>
              <button type="button" class="btn btn-warning" onClick={handleNext} >Next &rarr;</button>
          </div>
        </div>
      </>
    )
}