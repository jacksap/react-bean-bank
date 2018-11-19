import React from 'react';
import {
    Link
} from 'react-router-dom';

const BeanList = ({beans}) => (
  <div className="BeanList">
    <h2>Bean List</h2>
    <ul>
      {beans.map( (bean) => <li><Link to={`/beandetail/${bean.name}`}>{bean.name}</Link></li>)}
    </ul>
  </div>
);

export default BeanList;