import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import Game from "./components/Game";

function App() {
  const [word, setWord] = useState("");
  const [attemps, setAttemps] = useState([]);
  const [lifes, setLifes] = useState(6);

  return (
    <div className="w-full min-h-screen text-center bg-zinc-800">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/game"
          element={
            <Game
              word={word}
              setWord={setWord}
              attemps={attemps}
              setAttemps={setAttemps}
              lifes={lifes}
              setLifes={setLifes}
            />
          }
        />
      </Routes>

      <Toaster
        toastOptions={{
          position: "top-center",
          duration: 2500,
          style: {
            color: "#111827",
            fontSize: "1.4rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            borderRadius: "14px",
            padding: "12px",
          },
        }}
      />
    </div>
  );
}

export default App;
