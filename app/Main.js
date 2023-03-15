import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";

//My components
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";

function Main() {
  return (
    <>
      <Header />

      <HomeGuest />

      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

//Allows the browser to update page contents without refreshing
if (module.hot) {
  module.hot.accept();
}
