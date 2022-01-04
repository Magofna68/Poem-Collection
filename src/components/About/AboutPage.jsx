import "../About/about.scss";

import React from 'react';

function AboutPage(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <br/>
            <h5>{props.subTitle}</h5>
            <br/>
            <h6>{props.text}</h6>
        </div>
    );
}

export default AboutPage;