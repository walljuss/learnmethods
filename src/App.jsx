import Componentos from "./Componentos";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="p-5 flex flex-col">
        <h1 className="mb-5 text-4xl font-bold text-center text-blue-800">
          Learn functions/methods of data types in JS
        </h1>
        <Navbar />
        <Componentos />
      </div>
    </>
  );
}

export default App;
