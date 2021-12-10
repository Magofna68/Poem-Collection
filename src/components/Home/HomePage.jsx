import React from 'react';
import Hero from '../Hero';
import '../Home/home.scss';

function HomePage(props) {

    return (
        <div id="homePage">
            <h3><Hero title={props.title}/></h3>
            <h3><Hero subTitle={props.subTitle}/></h3>
            <br/>
            <br/>
            <Hero text={props.text}/>
            
        </div>
    );
}

export default HomePage;