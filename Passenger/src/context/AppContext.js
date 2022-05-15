import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext({});

export const ContextProvider = ({children}) => {
  
  return (
    <AppContext.Provider value={{Colors}}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
