import React from 'react';
import { createContext, useReducer } from "react";
type ACTIONTYPE =
    | {
        type: "LOGIN", payload: boolean
    }
    | {
        type: "EMAIL", payload: string
    }
    | {
        type: "PASSWORD", payload: string
    }
    | {
        type: "LOGOUT",
    };

const initialState = {
    login: false,
    email: "",
    password: "",
}
type InitialProp = {
    login: boolean
    email: string
    password: string
}

export const LoginContext = createContext<{ state: InitialProp, dispatch: React.Dispatch<ACTIONTYPE> }>({ state: initialState, dispatch: () => null });

const loginReducer = (state: InitialProp, action: ACTIONTYPE) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state, login: true
            }
        case "EMAIL":
            return {
                ...state, email: action.payload
            }
        case "PASSWORD":
            return {
                ...state, password: action.payload
            }
        case "LOGOUT":
            return {
                login: false, email: "", password: ""
            }
        default:
            return state;
    }
}

export const LoginContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(loginReducer, initialState)
    return (
        <LoginContext.Provider value={{ state, dispatch }}>
            {children}
        </LoginContext.Provider>
    );
}