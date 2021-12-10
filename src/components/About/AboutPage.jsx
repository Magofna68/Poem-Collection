import "../About/about.scss";

import React from 'react';

function AboutPage(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subTitle}</h3>
            <h4>{props.text}</h4>
        </div>
    );
}

export default AboutPage;