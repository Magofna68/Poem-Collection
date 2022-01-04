import React from 'react';
import Hero from '../Hero';
import '../Home/home.scss';

function HomePage(props) {

    return (
        <div id="homePage">
                <Hero title={props.title}
                credentials={props.credentials}
                subTitle={props.subTitle}
                text={props.text}
                />
        </div>
    );
}

export default HomePage;