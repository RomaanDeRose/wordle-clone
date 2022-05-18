import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { words } from "./utils/words";

function App() {
  const [word, setWord] = useState("");
  const [attemps, setAttemps] = useState([]);
  const [lifes, setLifes] = useState(6);
  const [reset, setReset] = useState(false);
  const [result, setResult] = useState("");
  const wordInput = useRef(null);

  const handleSubmitWord = (e) => {
    e.preventDefault();
    setAttemps([...attemps, wordInput.current.value.toUpperCase().split()]);
    setLifes(lifes - 1);
    if (lifes > 1) {
      if (wordInput.current.value.toUpperCase() === word) {
        setReset(true);
        setResult("win");
        toast.success("Acertaste!", {
          style: {
            background: "#86EFAC",
          },
        });
      }
    } else {
      setReset(true);
      setResult("lose");
      toast.error("Perdiste!", {
        style: {
          background: "#F87171",
        },
      });
    }
    wordInput.current.value = "";
  };
  console.log(attemps);

  const reload = () => document.location.reload();

  const styleLetterConditional = (wordUser = undefined, index, letter) => {
    if (word.includes(letter)) {
      if (word[index] === wordUser[index]) {
        return "bg-green-500";
      } else {
        return "bg-yellow-500";
      }
    } else {
      if (wordUser === undefined) {
        return "bg-white";
      }
      return "bg-gray-500";
    }
  };

  console.log(attemps[0]);

  useEffect(() => {
    const randomPick = Math.floor(Math.random() * words.length);
    setWord(words[randomPick]);
  }, []);

  return (
    <div className="w-full min-h-screen text-center bg-zinc-900 py-4">
      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, type: "fade" }}
        className="text-yellow-400  font-extrabold text-5xl mb-1"
      >
        WORDLE
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2, type: "fade" }}
        className="text-yellow-500  text-lg mb-3"
      >
        Tenés{" "}
        <span className="text-yellow-300 font-extrabold text-xl">{lifes}</span>{" "}
        intentos para adivinar la palabra!
      </motion.p>
      <div className="w-4/5 max-w-xs h-auto mx-auto">
        {attemps.map((attemp, index) => (
          <div key={index} className="w-full h-10 mb-5 flex gap-2">
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`w-1/5 h-full border-2 ${styleLetterConditional(
                attemp[0],
                0,
                attemp[0][0]
              )} border-gray-700 text-white font-bold text-xl rounded-lg text-center leading-9`}
            >
              {attemp[0][0]}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`w-1/5 h-full border-2 ${styleLetterConditional(
                attemp[0],
                1,
                attemp[0][1]
              )} border-gray-700 text-white font-bold text-xl rounded-lg text-center leading-9`}
            >
              {attemp[0][1]}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className={`w-1/5 h-full border-2 ${styleLetterConditional(
                attemp[0],
                2,
                attemp[0][2]
              )} border-gray-700 text-white font-bold text-xl rounded-lg text-center leading-9`}
            >
              {attemp[0][2]}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className={`w-1/5 h-full border-2 ${styleLetterConditional(
                attemp[0],
                3,
                attemp[0][3]
              )} border-gray-700 text-white font-bold text-xl rounded-lg text-center leading-9`}
            >
              {attemp[0][3]}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className={`w-1/5 h-full border-2 ${styleLetterConditional(
                attemp[0],
                4,
                attemp[0][4]
              )} border-gray-700 text-white font-bold text-xl rounded-lg text-center leading-8`}
            >
              {attemp[0][4]}
            </motion.p>
          </div>
        ))}
      </div>
      {reset === false ? (
        <motion.form
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5, type: "fade" }}
          onSubmit={handleSubmitWord}
          className="w-52 h-auto mx-auto mt-8"
        >
          <input
            ref={wordInput}
            type="text"
            placeholder="Palabra..."
            className="w-full bg-transparent border-4 border-yellow-500 rounded-2xl p-2 text-md text-yellow-200 placeholder:text-amber-200/60 active:outline-none focus:outline-none"
            maxLength="5"
            minLength="5"
            autoFocus
            required
          />
        </motion.form>
      ) : (
        <button
          onClick={reload}
          className=" bg-sky-500 mx-auto px-4 py-2 text-white uppercase font-bold text-xl rounded-2xl hover:shadow-lg hover:shadow-sky-500/30"
        >
          nueva palabra
        </button>
      )}
      {reset === false && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.8, type: "fade" }}
          className="my-4 w-full text-center"
        >
          <button
            onClick={handleSubmitWord}
            className="bg-sky-500 mx-2 py-2 px-3 rounded-2xl text-md uppercase text-white font-semibold hover:shadow-lg hover:shadow-sky-500/30"
          >
            Revisar
          </button>
        </motion.div>
      )}
      {result === "win" ? (
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-yellow-400  font-extrabold text-3xl mt-4"
        >
          Felicitaciones!
        </motion.h1>
      ) : result === "lose" ? (
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-yellow-400  font-extrabold text-3xl mt-3"
        >
          La palabra era:{" "}
          <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
            {word}
          </span>
        </motion.h1>
      ) : (
        ""
      )}

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
