import { useState, useRef, useEffect } from "react";

function App() {
  const WORDS = [
    "FORMA",
    "HIELO",
    "CIELO",
    "SELVA",
    "ROCAS",
    "BAÑOS",
    "CAJAS",
    "DADOS",
    "DONDE",
    "CONDE",
    "MUCHO",
    "ESTAR",
    "RANGO",
    "METRO",
    "MICRO",
    "ACTOR",
  ];
  const [word, setWord] = useState("");
  const [attemps, setAttemps] = useState([]);
  const [lifes, setLifes] = useState(5);
  const wordInput = useRef(null);

  const handleSubmitWord = (e) => {
    e.preventDefault();
    setAttemps([...attemps, wordInput.current.value.toUpperCase().split()]);
    setLifes(lifes - 1);
    e.target.firstChild.value = "";
  };

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
    const randomPick = Math.floor(Math.random() * WORDS.length);
    setWord(WORDS[randomPick]);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 py-4">
      <h1 className="text-yellow-500 text-center font-extrabold text-5xl mb-1">
        WORDLE
      </h1>
      <p className="text-yellow-500 text-center text-lg mb-3">
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
      <form onSubmit={handleSubmitWord} className="w-52 h-auto mx-auto mt-8">
        <input
          ref={wordInput}
          type="text"
          placeholder="Palabra..."
          className="w-full bg-transparent border-4 border-yellow-500 rounded-2xl p-2 text-md text-white placeholder:text-amber-200 active:outline-none focus:outline-none"
          maxLength="5"
          required
        />
      </form>
      <div className="my-4 w-full text-center">
        <button
          onClick={handleSubmitWord}
          className="bg-sky-500 mx-2 py-2 px-3 rounded-2xl text-md uppercase text-white font-semibold hover:shadow-lg hover:shadow-sky-500/30"
        >
          Revisar
        </button>
        <button className="bg-sky-500 mx-2 py-2 px-3 rounded-2xl text-md uppercase text-white font-semibold hover:shadow-lg hover:shadow-sky-500/30">
          omitir
        </button>
      </div>
    </div>
  );
}

export default App;
