import React, {useState, useEffect} from 'react';
// import './collection.scss';
import data, { featured2010, featured2011, featured2012, featured2013, featured2014, featured2015, featuredPreview } from "../../data.js";
import List from '../List/List.jsx';

export default function CollectionPage() {
    const [selected, setSelected] = useState("featured");

    const [data, setData] = useState([]);

    const yearList = [
        {
            id: 2010,
            title: 2010,
        },
        {
            id: 2011,
            title: 2011,
        },
        {
            id: 2012,
            title: 2012,
        },
        {
            id: 2013,
            title: 2013,
        },
        {
            id: 2014,
            title: 2014,
        },
        {
            id: 2015,
            title: 2015,
        },
        {
            id: 2016,
            title: 2016,
        },
        {
            id: 2017,
            title: 2017,
        },
        {
            id: 2018,
            title: 2018,
        },
        {
            id: 2019,
            title: 2019,
        },
        {
            id: 2020,
            title: 2020,
        }
    ];

    useEffect(()=> {
        switch(selected){
            case 2010:
                setData(featured2010);
                break;
            case 2011:
                setData(featured2011);
                break;
            case 2012:
                setData(featured2012);
                break;
            case 2013:
                setData(featured2013);
                break;
            case 2014:
                setData(featured2014);
                break;
            case 2015:
                setData(featured2015);
                break;
            default:
                setData(featuredPreview);
        }
    }, [selected])


return (
    <div
    className="list"
    id="list"
    style={{
        opacity: `90%`,
        backgroundSize: `cover`,
        repeat: `no-repeat`,
      backgroundImage: `url("https://cdn.pixabay.com/photo/2019/11/14/13/01/abstract-4626113_1280.jpg")`
    }}>
        <h1>Poem Archive.</h1>
        <br/>
        <ul>
            {yearList.map((item)=>(
                <List
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                />
            ))}
        </ul>
        <div clasName="container">
            <>
            {data.map((d)=> (
                <div
                className="item">
                    <a target="_blank" href={d.link}>
                        <img src={d.img} alt={d.alt}></img>
                        <h4 id="poemTitle">{d.title}</h4>
                    </a>
                </div>
            ))}
            </>
        </div>
        <p style={{
            fontWeight: `500`
        }}> These are the poems of my life time.</p>
    </div>
    );
}
    




// function CollectionPage(props) {
//     return (
//         <container>
//             <div>
//                 <h1>{props.title}</h1>
//                 <h6>{props.subTitle}</h6>
//             </div>
//             {/* Carousel */}
//             <h3>Archive:</h3>
//             data.map(()=> {
//                 return{}
//             })
//             <ul>
//                 <li><a href="#HomePage">`${data.title}</a></li>
//             </ul>
//                 {props.text}
//         </container>
        
//     );