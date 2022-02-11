import { render } from '@testing-library/react';
import React from 'react';
import Hero from '../Hero';
import '../Home/home.scss';
// import { featuredPreview } from '../../data';
import PoemCard from "../PoemCard";

function HomePage(props) {
    const [featured, setFeatured] = setState('')
    const featuredPreview = [
        {
            id: 1,
            year: 2010,
            title: "The Oath of Promise",
            alt: "",
            img: "https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/01/BigBounce_2880x1220.gif",
            text: `"The silence, it envelopes me.
               her joyous smile and loving embrace,
               A forsaken pleasure lost in the sands of illusion.
               At the flick of an eye, we're back at Resolution.
               I realized As you got lost in the music, lost in the night,
               I want to walk by your side, hand in hand through my life
               You brighten my day, you're my morning sun,
               Moon of my life, what have I done?
               The ball drops, as I drop the ball,
               I failed to appreciate you all in all.
               Like a precious gem, you stole my heart,
               In loving embrace, You deserve a new start,
               Your my candle in darkness, my guiding light,
               so be free my love, I'll let go without fight,
               I pray you bless the world with your smile,
               Live, laugh, & love; meanwhile,
               I make you this promise-as of tonight,
               To love & respect you, to do what is right,
               once you've recovered and regained your sight,
               Should you choose to return, I'll wait day and night.
               I recognize now, that night at Resolution,
               A perfect depiction; I chose you as my solution
               A forsaken pleasure lost in the sands of illusion.
               her joyous smile and loving embrace,
               The silence; it envelop's me."`
        }
    ]
// render()
    return (
        // <div id="homePage">
        //     {props.title}
        <>
            {featuredPreview.map((id)=> (

                <PoemCard
                    title={featuredPreview[0].title}
                    text={featuredPreview[0].text}
                    year={featuredPreview[0].year}
                />

        ))}
        </>
 
    );
}

export default HomePage;