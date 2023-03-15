import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  selectedItem: "portfolio",
  selectedPage: "Portfolio",
  mobileOpen: false
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
    default:
      return state;
  }
};

const store = configureStore({
  reducer: rootReducer
})

export default store;

