import React from "react";
import {render} from "react-dom";
import "./style/main.css";
import Counter from "./Counter";
import {Provider} from 'react-redux';
import createStore from "redux/src/createStore";
import reducers from "./reducers";
import ButtonIncrement from "./IncrementButton";
import ButtonDecrement from "./DecrementButton";

const store = createStore(reducers);

const App = () => {
    return <Provider store={store}>
        <h1>Counter</h1>
        <ButtonIncrement/>
        <ButtonDecrement/>
        <Counter/>
    </Provider>
};

render(
    <App/>, document.getElementById("app")
);


