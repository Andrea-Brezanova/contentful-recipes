import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import client from "./contentful/client";
import List from "./Components/List";

function App() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  useEffect(() => {
    //   axios
    //     .get(
    //       "https://cdn.contentful.com//spaces/40t53t8emaom/environments/master/entries?access_token=Fa6XG0X6j4voWKlhDjwG3E0hARUHFTwP25Fj19y0hfY"
    //     )
    //     .then((res) => {
    //       setBogs(res.data.items);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });

    client
      .getEntries()
      .then((response) => setRecipes(response.items))
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <h1>Recipe List</h1>
      <List recipes={recipes}  />
      
    </div>
  );
}

export default App;
