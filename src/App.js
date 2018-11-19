import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import BeanList from './components/BeanList';
import BeanDetail from './components/BeanDetail';

class App extends Component {
  beans = [
    {
      name: 'Sumatra',
      roast: 'dark',
      notes: 'Full-bodied with floral notes'
    },
    {
      name: 'Breakfast Blend',
      roast: 'medium',
      notes: 'Well-balanced and earthy'
    },
    {
      name: 'Italian Roast',
      roast: 'medium-dark',
      notes: 'Rich with chocolate notes'
    },
    {
      name: 'French Roast',
      roast: 'dark',
      notes: 'Deep and robust'
    },
    {
      name: 'Espresso',
      roast: 'dark',
      notes: 'Strong and bitter'
    }
  ];
  getBean = (beanName) => {
    return this.beans.find(bean => bean.name === beanName);
  };
  render() {
    return (
      <div className="App">
      <Router>
        <div className="App">
        <nav>
          <Link to="/">Home Page</Link>{' '}
          <Link to="/beanlist">Bean List</Link>{' '}
        </nav>
          <Route exact path='/' component={Home} />
          <Route path='/beanlist' render={() => <BeanList beans={this.beans} />} />
          <Route path='/beandetail/:name' render={(props) => <BeanDetail {...props} getBean={this.getBean}  />} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
