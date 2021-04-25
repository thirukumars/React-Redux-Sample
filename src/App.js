import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from "./components/cakeContainer"
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from "./components/iceCreamContainer"
import NewCakeContainer from "./components/newCakeContainer"
import ItemContainer from "./components/ItemContainer"
import UserContainer from "./components/userContainer"
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
