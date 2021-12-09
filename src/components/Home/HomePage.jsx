import React from 'react';
import home from './home.scss';
import { init } from 'ityped';
import ITyped from '../Ityped';


function HomePage(props) {

  return (
    <div>
      {/* <Banner /> */}
      <Hero title={props.title} subTitle={props.subTitle} />
      <br></br>
      <Hero text={props.text} />
    </div >
  );
}

export default HomePage;