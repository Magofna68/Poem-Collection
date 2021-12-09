import React from 'react';
import Hero from '../Hero';

function HomePage(props) {

    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle}/>
            <br/>
            <br/>
            <Hero text={props.text}/>
            
        </div>
    );
}

export default HomePage;