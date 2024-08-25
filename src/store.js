import React,{createContext} from 'react'

const Store = createContext({
    theme:true,
    setTheme:()=>{}
});

export default Store