import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, type: "fade" }}
        className="text-yellow-400  font-extrabold text-7xl mb-1"
      >
        WORDLE
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.35, type: "fade" }}
        className="text-yellow-500  text-lg mb-3"
      >
        Tenés <span className="text-yellow-300 font-extrabold text-2xl">6</span>{" "}
        intentos para adivinar la palabra!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.7, type: "fade" }}
        className="flex flex-col mt-3"
      >
        <Link
          to="/game"
          className="bg-blue-800 text-white uppercase font-bold mx-auto mb-7 py-3 rounded-3xl text-3xl border-4 border-blue-500 w-40 shadow-xl transition-all hover:shadow-blue-600/30 hover:bg-blue-900 hover:border-blue-600"
        >
          Jugar
        </Link>
        <Link
          to="/rules"
          className="bg-green-500 text-white uppercase font-bold mx-auto py-3 rounded-3xl text-3xl border-4 border-green-700 w-40 shadow-xl transition-all hover:shadow-green-900/30 hover:bg-green-700 hover:border-green-900"
        >
          Reglas
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;
