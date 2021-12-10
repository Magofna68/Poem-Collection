import React from 'react';
import Hero from '../Hero';
import '../Home/home.scss';

function HomePage(props) {

    return (
        <div id="homePage">
            <h1><Hero title={props.title}/></h1>
            <h6><Hero subTitle={props.subTitle}/></h6>
            <br/>
            <br/>
            <Hero text={props.text}/>
            
        </div>
    );
}

export default HomePage;