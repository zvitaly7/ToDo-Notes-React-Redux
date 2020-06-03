import React from 'react';
import Todo from './containers/TodoContainer/Todo'
import {store} from "./Store/store";
import './App.css';
import {StoreContext} from "./Store/store";
import {ModalContainer} from "./containers/ModalContainer/ModalContainer";

function App() {
    return (
        <StoreContext.Provider value={store}>
            <div className="App">
                <Todo/>
                <ModalContainer />
            </div>
        </StoreContext.Provider>
    );
}

export default App;
