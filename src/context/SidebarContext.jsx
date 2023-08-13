import React, { useState, createContext } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () => {
    setIsOpen(!isOpen);
  };
  return <SidebarContext.Provider value={{isOpen, handleChange, setIsOpen}}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
