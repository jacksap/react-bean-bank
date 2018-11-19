import React from 'react';

const BeanDetail = (props) => {
    // write javascript here
    // method passed down from APP
    let bean = props.getBean(props.match.params.name);  
    return (
        <div className="BeanDetail">
            <h2>Bean Detail : {bean.name}</h2>
            <ul>
                <li>{bean.roast}</li>
                <li>{bean.notes}</li>
            </ul>
        </div>
    );
}

export default BeanDetail;