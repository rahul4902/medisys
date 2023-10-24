import { createContext, useContext, useState } from "react";

const ClientContext = createContext();

function useValue() {
  const value = useContext(ClientContext);
  return value;
}

function CustomClientContext({ children }) {
  const [sideNav, setSideNav] = useState(false);
  const [readMoreCanvas, setReadMoreCanvas] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <ClientContext.Provider
      value={{
        sideNav,
        setSideNav,
        readMoreCanvas,
        setReadMoreCanvas,
        query, setQuery
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}

export { useValue, CustomClientContext };
