import React, {createContext, useState, useContext} from 'react';

export const UserContext = createContext();

export default function UserProvider({children}){
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState("");
  const [altura, setAltura] = useState(null)
  const [sexoBiologico, setSexoBiologico] = useState(null)

  return(
    <UserContext.Provider
      value={
        {signed, setSigned, name, setName}
      }
    >
      {children}
    </UserContext.Provider>

  )

}

//hook
export function useUser(){
    const context = useContext(UserContext);
    const {signed, setSigned, name, setName} = context;

    return {signed, setSigned, name, setName};
}