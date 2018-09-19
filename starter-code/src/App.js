import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArtistList from "./components/ArtistList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ArtistList />
        <Footer />
      </div>
    );
  }
}

export default App;
