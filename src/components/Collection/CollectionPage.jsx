import React from 'react';
// import './collection.scss';
import data from "../../data.js";

function CollectionPage(props) {
    return (
        <container>
            <div>
                <h1>{props.title}</h1>
                <h6>{props.subTitle}</h6>
            </div>
            {/* Carousel */}
            <h3>Archive:</h3>
            data.map(()=> {
                return{}
            })
            <ul>
                <li><a href="#HomePage">`${data.title}</a></li>
            </ul>
                {props.text}
        </container>
        
    );
}

export default CollectionPage;