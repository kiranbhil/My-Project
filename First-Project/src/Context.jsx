import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";


const AppContext = React.createContext();

const API = "https://reqres.in/api/users";

const intialState = {
  name: "",
  image: "",
  services: [],
};


const AppProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, intialState);


  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Kiran Bhil",
        image: "./Images/logo.png",
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "About Me",
        image: "./Images/logo.png",
      },
    });
  };

  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // to call the api
  useEffect(() => {
    getServices(API);
  }, []);

  
  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext, AppContext};