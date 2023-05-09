import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import HomeContainer from "../pages/Home.container";

const App = () => {
  return (
    <Provider store={store}>
      <HomeContainer />
    </Provider>
  );
};

export default App;
