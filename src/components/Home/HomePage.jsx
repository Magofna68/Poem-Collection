import React from 'react';
import Hero from '../Hero';

function HomePage(props) {

    return (
        <div>
            <h3><Hero title={props.title} subTitle={props.subTitle}/></h3>
            <br/>
            <br/>
            <Hero text={props.text}/>
            
        </div>
    );
}

export default HomePage;