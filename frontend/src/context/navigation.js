import React, { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // handle clicking forward and back button on t/he browser
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    // add a listener for change in url path on first render
    window.addEventListener("popstate", handler);

    // clean up for when component is removed from the screen
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{currentPath, navigate}}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
