import React,{Component} from 'react';

import Header from './Components/Header';
import Campaigns from "./Components/Campaigns";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Campaigns/>
      </div>
    );
  }
}

export default App;