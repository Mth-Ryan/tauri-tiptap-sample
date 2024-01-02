import TipTap from "./TipTapEditor.tsx";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-zinc-50">
        <div className="p-8 w-full h-full max-w-screen-lg min-w-[500px] max-h-screen min-h-[500px]">
            <TipTap />
        </div>
    </div>
  );
}

export default App;
