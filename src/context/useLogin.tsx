import { useContext } from 'react'
import { LoginContext } from './LoginContext';

export function useLogin() {
    const context = useContext(LoginContext)
    if (context === undefined) {
        throw new Error("use context within defined context scope");
    }

    return context
}