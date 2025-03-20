import {createContext, useContext} from "react";

// create the context
const UserContext = createContext();

// create the provider component
export const UserProvider = ({children}) => {
    const user = {
        username: "venkat",
        password: "welcome12345"
      };

      return (
        // provide this user data to all over child components
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
      )
};

// custome hook to use the UserContext
export const useUser = () => useContext(UserContext)