import { createContext, useState } from "react";

export const UserContext = createContext({
  name: "Ajay Birari",
  updateName: () => {},
});

const UserProvider = ({ children }) => {
  const [name, setname] = useState("Ajay Birari");

  const updateName = (value) => {
    setname(value);
  };

  const context = {
    name,
    updateName,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
