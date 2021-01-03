import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import blog from "./reducer";

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(blog, componseEnhancers(applyMiddleware(thunk)));

export { store };
