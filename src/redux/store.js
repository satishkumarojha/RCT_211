import { legacy_createStore } from "redux";
import { todoReducer } from "./todoreducer";

export const store = legacy_createStore(todoReducer);