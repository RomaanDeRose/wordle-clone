import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { words } from "../utils/words";
import "./Game.css";

function Game(props) {
  const [reset, setReset] = useState(false);
  const [result, setResult] = useState("");
  const wordInput = useRef(null);

  const handleSubmitWord = (e) => {
    e.preventDefault();
    props.setAttemps([
      ...props.attemps,
      wordInput.current.value.toUpperCase().split(),
    ]);
    props.setLifes(props.lifes - 1);
    // ARREGLAR QUE CUANDO ES EL ULTIMO INTENTO, SIEMPRE DA ´PERDISTE´
    if (props.lifes > 1) {
      if (wordInput.current.value.toUpperCase() === props.word) {
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

  const reload = () => document.location.reload();

  const styleLetterConditional = (wordUser = undefined, index, letter) => {
    if (props.word.includes(letter)) {
      if (props.word[index] === wordUser[index]) {
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

  console.log(props.attemps[0]);

  useEffect(() => {
    const randomPick = Math.floor(Math.random() * words.length);
    props.setWord(words[randomPick]);
  }, []);

  return (
    <div className="w-full min-h-screen text-center bg-zinc-800 py-4">
      <Link to="/">
        <FontAwesomeIcon
          icon={faCircleLeft}
          className="absolute top-5 left-5 text-yellow-500 cursor-pointer text-4xl"
        />
      </Link>

      <div className="heart-life">
        <span className="text-xl  text-white">{props.lifes}</span>
      </div>

      <div className="w-4/5 max-w-xs h-auto mx-auto">
        {props.attemps.map((attemp, index) => (
          <div key={index} className="w-full h-10 mb-4 flex gap-2">
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
          transition={{ duration: 0.5, type: "fade" }}
          onSubmit={handleSubmitWord}
          className="w-52 h-auto mx-auto mt-6"
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
          <button
            onSubmit={handleSubmitWord}
            className="bg-sky-500 mx-2 py-2 px-3 my-4 rounded-2xl text-md uppercase text-white font-semibold hover:shadow-lg hover:shadow-sky-500/30"
          >
            Revisar
          </button>
        </motion.form>
      ) : (
        <button
          onClick={reload}
          className=" bg-sky-500 mx-auto p-4 my-4 text-white uppercase font-bold text-xl rounded-3xl hover:shadow-lg hover:shadow-sky-500/30"
        >
          nueva palabra
        </button>
      )}
      {result === "win" ? (
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-yellow-400  font-extrabold text-3xl mt-4"
        >
          Felicitaciones!
        </motion.h1>
      ) : result === "lose" ? (
        <motion.h1
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-yellow-400  font-extrabold text-3xl mt-3"
        >
          La palabra era:{" "}
          <span
            style={{ fontFamily: "Poppins", fontWeight: "600" }}
            className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400"
          >
            {props.word}
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

export default Game;
