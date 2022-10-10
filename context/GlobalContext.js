import React, { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [member, setMember] = useState('Oscar')
  const [currentMember, setCurrentMember] = useState(null)

  return (
    <GlobalContext.Provider
      value={{
        member,
        setMember,
        user,
        setUser,
        currentMember,
        setCurrentMember
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export const useSessionInfo = () => {
    const values = useContext(GlobalContext);
  
    return { ...values };
  };

export const useMemberInfo = () => {
    const {currentMember, setCurrentMember} = useContext(GlobalContext);
  
    return { currentMember, setCurrentMember };
};
