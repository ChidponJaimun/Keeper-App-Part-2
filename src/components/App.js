import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import dataList from "../notes";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      {dataList.map((x) => (
        <Note key={x.key} title={x.title} content={x.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
