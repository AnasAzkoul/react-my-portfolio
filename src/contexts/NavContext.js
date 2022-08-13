import React, {createContext, useState, useContext} from 'react';

const NavContext = createContext(); 

export const NavProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const value = {
    isSidebarOpen, 
    openSidebar, 
    closeSidebar, 
  }
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>
}

export const useNavContext = () => {
  return useContext(NavContext);
}
