import * as React from "react";
import {hot} from "react-hot-loader";
import {Provider} from 'react-redux';

import {Header} from "./components/header/header";
import {Footer} from "./components/footer/footer";
import ToDoList from "./components/to-do-list/to-do-list";
import Login from "./components/login/login";
import Register from "./components/register/register";

import "./reset.scss";
import "./App.scss";
import {Route, Router} from "react-router";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from './reducers';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Header/>
                <div className="container">
                    <Route exact path="/to-do-list" component={ToDoList}/>
                    <Route exact path="/user/login" component={Login}/>
                    <Route exact path="/user/register" component={Register}/>
                </div>
                <Footer/>
            </div>
        </Router>
    </Provider>
);

export default App;