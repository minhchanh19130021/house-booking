import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  home: undefined,
  dates:  [
    {
      startDate: new Date(localStorage.getItem("startDate")),
      endDate: new Date(localStorage.getItem("endDate")),
      key: "selection",
    }
  ] || [],
  options: JSON.parse(localStorage.getItem("options")) || {
    adult: undefined,
    children: undefined,
    baby: undefined,
    pet: undefined,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("home", JSON.stringify(state.home));
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

  return (
    <SearchContext.Provider
      value={{
        home: state.home,
        dates: state.dates,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};



















