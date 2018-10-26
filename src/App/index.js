import React, { Component } from "react";
import "./App.css";
import AppLayout from "./AppLayout";
import { AppProvider } from "./AppProvider";
import AppBar from "./AppBar";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          hello crypto price map
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
