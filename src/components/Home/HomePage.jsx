import React from 'react';
import Hero from '../Hero';
import '../Home/home.scss';

function HomePage(props) {

    return (
        <div id="homePage">
            <p>
                <Hero title={props.title}
                credentials={props.credentials}
                subTitle={props.subTitle}
                text={props.text}
                />
            </p>
        </div>
    );
}

export default HomePage;