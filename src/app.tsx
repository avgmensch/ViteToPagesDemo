import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App" class="flex h-screen w-screen items-center justify-center">
        <div>
          <div class="flex justify-between">
            <img src={preactLogo} alt="Preact Logo" class="h-20" />
            <span class="flex items-center justify-center text-6xl">+</span>
            <img src={viteLogo} alt="Vite Logo" class="h-20" />
          </div>
          <div class="mt-10 text-center">
            <p>Demo for deploying a Vite application to GitHub Pages.</p>
            <p>This demo uses the following technologies:</p>
            <p>Vite + TypeScript + Tailwind + Prettier</p>
          </div>
          <div class="mt-8 text-center">
            <button
              onClick={() => setCount(count + 1)}
              class="rounded-md border-2 border-slate-900 bg-slate-700 p-2 text-white"
            >
              Counter: {count}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
