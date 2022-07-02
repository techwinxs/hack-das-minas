import React from "react";
import { getDataCustomCharacteristics } from "../helpers/getDataCustomCharacteristics";

interface IGlobalContext {
  customCharateristic: any[];
  setCustomCharateristic: React.Dispatch<React.SetStateAction<any[]>>;
  updateCustomCharateristic: (type: string, specification: any) => void
}

interface IGlobalProvider {
  children: React.ReactNode;
}

const GlobalContext = React.createContext<IGlobalContext>({} as IGlobalContext);

const GlobalProvider: React.FC<IGlobalProvider> = ({ children }) => {

  // custom characteristic
  const [customCharateristic, setCustomCharateristic] = React.useState<
    any[]
  >(JSON.parse(getDataCustomCharacteristics()));

  const updateCustomCharateristic = (type: string, specification: any) => {
    const data = JSON.parse(getDataCustomCharacteristics());

    if (data.length) {
      if (data[0].custom[type]) {
        if (data[0].custom[type].name) {
          data[0].custom[type].name = specification.name;
        }

        if (data[0].custom[type].color) {
          data[0].custom[type].color = specification.color;
        }
      }
    }

    const newData = data
    setCustomCharateristic(newData)
    localStorage.setItem('customCharacteristics',  JSON.stringify(newData))
  };
  // end custom characteristic

  return (
    <GlobalContext.Provider
      value={{
        customCharateristic,
        setCustomCharateristic,
        updateCustomCharateristic,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = React.useContext(GlobalContext);

  return context;
};

export { GlobalProvider, useGlobalContext };
