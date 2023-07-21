import React from 'react';
import './App.css';
import HooksContainer from './components/HooksContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksIcecontainer from './components/HooksIcecontainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <HooksContainer/>
       <NewCakeContainer/>
       {/* <HooksIcecontainer/> */}
      </div>
    </Provider>
  );
}

export default App;
