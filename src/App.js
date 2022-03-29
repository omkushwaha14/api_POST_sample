import React  from "react";
import "./App.css";
import AddData from "./components/AddData";

const App = () => {
  async function addDataHandler(post) {
    const response = await fetch(
      "https://post-7d549-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json",
      {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <React.Fragment>
      <section>
        <AddData onAddData={addDataHandler} />
      </section>
    </React.Fragment>
  );
};

export default App;
