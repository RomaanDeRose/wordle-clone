import { useState, useRef, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { words } from "./utils/words";

function App() {
  const [word, setWord] = useState("");
  const [attemps, setAttemps] = useState([]);
  const [lifes, setLifes] = useState(5);
  const [reset, setreset] = useState(false);
  const wordInput = useRef(null);

  const handleSubmitWord = (e) => {
    e.preventDefault();
    setAttemps([...attemps, wordInput.current.value.toUpperCase().split()]);
    setLifes(lifes - 1);
    if (wordInput.current.value.toUpperCase() === word) {
      setreset(true);
      toast.success("Acertaste!");
    }
    wordInput.current.value = "";
  };

  const reload = () => document.location.reload();

  const styleLetterConditional = (wordUser, index, letter) => {
    if (word.includes(letter)) {
      if (word.includes(letter) && word[index] === wordUser[index]) {
        return "bg-green-500";
      } else {
        return "bg-yellow-500";
      }
    } else {
      return "bg-gray-500";
    }
  };
  console.log(word);

  useEffect(() => {
    const randomPick = Math.floor(Math.random() * words.length);
    setWord(words[randomPick]);
  }, []);

  return (
    <div className="w-full min-h-screen text-center bg-zinc-900 py-4">
      <h1 className="text-yellow-500  font-extrabold text-5xl mb-1">WORDLE</h1>
      <p className="text-yellow-500  text-lg mb-3">
        Tenés{" "}
        <span className="text-yellow-300 font-extrabold text-xl">{lifes}</span>{" "}
        intentos para adivinar la palabra!
      </p>
      <div className="w-4/5 max-w-sm h-auto mx-auto">
        {/* <div className="w-full h-10 mb-5 flex gap-2">
          <p className="w-1/5 h-full border-2 bg-green-600 border-gray-600 text-white font-bold text-xl rounded-lg text-center leading-8">
            R
          </p>
          <p className=" w-1/5 h-full border-2 bg-gray-600 border-gray-600 text-white font-bold text-xl rounded-lg text-center leading-8">
            O
          </p>
          <p className=" w-1/5 h-full border-2 bg-amber-500 border-gray-600 text-white font-bold text-xl rounded-lg text-center leading-8">
            M
          </p>
          <p className=" w-1/5 h-full border-2 bg-gray-600 border-gray-600 text-white font-bold text-xl rounded-lg text-center leading-8">
            A
          </p>
          <p className=" w-1/5 h-full border-2 bg-gray-600 border-gray-600 text-white font-bold text-xl rounded-lg text-center leading-8">
            N
          </p>
        </div> */}
        {attemps.map((attemp, index) => (
          <div key={index} className="w-full h-10 mb-5 flex gap-2">
            <p
              className={`w-1/5 h-full border-2 ${styleLetterConditional(
                attemp[0],
                0,
                attemp[0][0]
              )} border-gray-700 text-white font-bold text-xl rounded-lg text-center leading-9`}
            >
              {attemp[0][0]}
            </p>
            <p
              className={`w-1/5 h-full border-2 ${styleLetterConditional(
                attemp[0],
                1,
                attemp[0][1]
              )} border-gray-700 text-white font-bold text-xl rounded-lg text-center leading-9`}
            >
              {attemp[0][1]}
            </p>
            <p
              className={`w-1/5 h-full border-2 ${styleLetterConditional(
                attemp[0],
                2,
                attemp[0][2]
              )} border-gray-700 text-white font-bold text-xl rounded-lg text-center leading-9`}
            >
              {attemp[0][2]}
            </p>
            <p
              className={`w-1/5 h-full border-2 ${styleLetterConditional(
                attemp[0],
                3,
                attemp[0][3]
              )} border-gray-700 text-white font-bold text-xl rounded-lg text-center leading-9`}
            >
              {attemp[0][3]}
            </p>
            <p
              className={`w-1/5 h-full border-2 ${styleLetterConditional(
                attemp[0],
                4,
                attemp[0][4]
              )} border-gray-700 text-white font-bold text-xl rounded-lg text-center leading-8`}
            >
              {attemp[0][4]}
            </p>
          </div>
        ))}
      </div>
      {reset === false ? (
        <form onSubmit={handleSubmitWord} className="w-52 h-auto mx-auto mt-8">
          <input
            ref={wordInput}
            type="text"
            placeholder="Palabra..."
            className="w-full bg-transparent border-4 border-yellow-500 rounded-2xl p-2 text-md text-white placeholder:text-amber-200 active:outline-none focus:outline-none"
            maxLength="5"
            minLength="5"
            required
          />
        </form>
      ) : (
        <button
          onClick={reload}
          className=" bg-sky-500 mx-auto px-4 py-2 text-white uppercase font-bold text-xl rounded-2xl hover:shadow-lg hover:shadow-sky-500/30"
        >
          nueva palabra
        </button>
      )}
      {reset === false && (
        <div className="my-4 w-full text-center">
          <button
            onClick={handleSubmitWord}
            className="bg-sky-500 mx-2 py-2 px-3 rounded-2xl text-md uppercase text-white font-semibold hover:shadow-lg hover:shadow-sky-500/30"
          >
            Revisar
          </button>
        </div>
      )}

      <Toaster
        toastOptions={{
          position: "top-center",
          duration: 2500,
          style: {
            backgroundColor: "#EAB308",
            color: "#fff",
            fontSize: "1.4rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            borderRadius: "18px",
            padding: "12px",
          },
        }}
      />
    </div>
  );
}

export default App;
