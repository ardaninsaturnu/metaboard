import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  selectedItem: "portfolio",
  selectedPage: "Portfolio",
  mobileOpen: false,
  lightMode: false
}

const rootReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case "SELECT_ITEM":
      return {
        ...state,
        selectedItem: action.payload.item,
        selectedPage: action.payload.page
      };
    case "TOGGLE_MOBILE":
      return {
        ...state,
        mobileOpen: !state.mobileOpen
      };
    case "TOGGLE_THEME":
      return {
        ...state,
        lightMode: !state.lightMode
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: rootReducer
})

export default store;

