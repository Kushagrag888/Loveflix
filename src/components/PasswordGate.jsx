// src/components/PasswordGate.jsx
import { useState } from "react";

export default function PasswordGate({ onUnlock }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const CORRECT_PASSWORD = "11052025";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setError("");
      onUnlock();
    } else {
      setError("Wrong date, try again ❤️");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="glass-card w-full max-w-md rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-2">Enter our special date ❤️</h1>
        <p className="text-zinc-300 mb-4">Unlock LoveFlix</p>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="DDMMYYYY"
          className="w-full rounded-lg bg-zinc-900 px-4 py-3 border border-zinc-700 focus:outline-none focus:border-red-500"
        />

        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}

        <button className="mt-4 w-full bg-red-600 hover:bg-red-700 transition rounded-lg py-3 font-semibold">
          Unlock
        </button>
      </form>
    </div>
  );
}