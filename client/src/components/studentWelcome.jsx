// src/components/WelcomePage.jsx
import { motion } from "framer-motion";

export default function WelcomePage({ name = "User" }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white p-10 rounded-2xl shadow-2xl text-center"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
          }}
          className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
        >
          Welcome, {name}!
        </motion.h1>

        <p className="mt-4 text-gray-600 text-lg">
          Glad to have you on board 🎉
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}
