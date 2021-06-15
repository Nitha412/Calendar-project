
import { Component } from 'react';
import './App.css';
import {Main} from './components/Main';

class App extends Component{
  render(){
    return (
      <div className="App">
        <div class="calendar-rectangle">
          <div id="calendar-content" class="calendar-content"></div>
        </div>
        <Main/>

      </div>
    );
  }
}
export default App;
