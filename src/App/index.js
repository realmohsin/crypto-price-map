import React, { Component } from "react";
import "./App.css";
import AppLayout from "./AppLayout";
import { AppProvider } from "./AppProvider";
import AppBar from "./AppBar";
import Content from "../shared/Content";
import Settings from "../Settings";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Content>
            <Settings />
          </Content>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
