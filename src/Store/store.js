import { createStore , compose, applyMiddleware} from "redux";
import rootReducer from './reducers';
import React from "react";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = preloadedState => (
    createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(applyMiddleware(thunk)),
    )
);

 export const store = configureStore({});
export const StoreContext = React.createContext(store);

export const StoreContextConsumerHOC = InnerComponent => props =>(

    <StoreContext.Consumer>
        {
            store => {
                return (
                    <InnerComponent
                        {...props}
                        store = {store}
                    />
                );}
        }
    </StoreContext.Consumer>
);