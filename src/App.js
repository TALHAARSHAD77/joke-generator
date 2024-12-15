import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [joke, setJoke] = useState(" ");
  const [count, setcount] = useState(0);

  async function jokeGenerator() {
    const data = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const joke = await data.json();
    setJoke(joke.setup);
    setcount((c) => c + 1);
  }

  useEffect(function () {
    jokeGenerator();
  }, []);

  return (
    <div>
      <h1>{joke}</h1>
      <button onClick={jokeGenerator}>Get New Joke!</button>
      <p>
        You have read <b>{count}</b> joke !
      </p>
    </div>
  );
}

export default App;
