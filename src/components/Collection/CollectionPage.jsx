import React from 'react';
// import './collection.scss';

function CollectionPage(props) {
    return (
        <div>
            {props.title}
            {props.subTitle}
            {props.text}
        </div>
    );
}

export default CollectionPage;