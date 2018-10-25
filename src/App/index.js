import React, { Component } from "react";
import "./App.css";
import AppLayout from "./AppLayout";
import { AppProvider } from "./AppProvider";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>hello crypto price map</AppProvider>
      </AppLayout>
    );
  }
}

export default App;
