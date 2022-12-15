import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  home: localStorage.getItem("home") || undefined,
  dates:  [
    {
      startDate: new Date(localStorage.getItem("startDate")),
      endDate: new Date(localStorage.getItem("endDate")),
      key: "selection",
    }
  ] || [],
  options: JSON.parse(localStorage.getItem("options")) || {
    adult: 1,
    children: undefined,
    baby: undefined,
    pet: undefined,
  },
  payPoint: localStorage.getItem("payPoint") || 0,
  bonusPoint: localStorage.getItem("bonusPoint") || 0,
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return {
        home: undefined,
        dates: [],
        options:  {
          adult: 1,
          children: undefined,
          baby: undefined,
          pet: undefined,
        },
      };
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("home", state.home);
  }, [state.home]);

  // useEffect(() => {
  //   localStorage.setItem("dates", JSON.stringify(state.dates));
  // }, [state.dates]);

  useEffect(() => {
    localStorage.setItem("endDate", state.dates[0].endDate);
  }, [state.dates]);

  useEffect(() => {
    localStorage.setItem("startDate", state.dates[0].startDate);
  }, [state.dates]);



  useEffect(() => {
    localStorage.setItem("options", JSON.stringify(state.options));
    
  }, [state.options]);
  useEffect(() => {
    localStorage.setItem("payPoint", state.payPoint);
    
  }, [state.payPoint]);
  useEffect(() => {
    localStorage.setItem("bonusPoint", state.bonusPoint);
    
  }, [state.bonusPoint]);

  return (
    <SearchContext.Provider
      value={{
        home: state.home,
        dates: state.dates,
        options: state.options,
        payPoint: state.payPoint,
        bonusPoint: state.bonusPoint,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};



















