import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import Invoicing from './Invoicing';
import Validation from './Validation';
import Time from './Time';

class App extends Component {    
  constructor(props) {
      super(props);
      this.state = {
      };
  }


render () {
  return (
    <BrowserRouter>
    <div>
      <Nav />
      <Route exact path="/" component={Main} />
      <Route path="/invoicing" component={Invoicing} />
      <Route path="/validation" component={Validation} />
      <Route path="/time" component={Time} />
    </div>
  </BrowserRouter>
  );
}

}
  
  export default App;
