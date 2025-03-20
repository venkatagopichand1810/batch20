import {createContext, useContext, useState} from "react";

const UserContext = createContext();

// create the context provider component

export const UserProvider = ({children}) => {

    const [user, setUser] = useState({
        username: "venkat",
        email: "venkatagopichand@gmail.com",
        role: "Admin",
        isLoggedIn: true
      });

    //   logout function

    const logout = () => {
        setUser((prev) => ({...prev, isLoggedIn: false}));
    };

    return (
        <>
            <UserContext.Provider value={{user, logout}}>
                {children}
            </UserContext.Provider>
        </>
    )
    
};

// custom hook to use the context

export const useUser = () =>useContext(UserContext)