import { useState, useRef } from "react";
import { MoveDown, MoveDownLeft, MoveDownRight } from "lucide-react";

function Numbers() {
  const [originalArray, setOriginalArray] = useState([1, 11, 4, 5]);
  const returnText = useRef(null);
  const returnMeaning = useRef(null);
  const [start, setStart] = useState(false);

  return (
    <div className="flex flex-col">
      <h1 className="text-center">Arrays</h1>
      <div className="text-center bg-red-200 flex-1">
        <div className="text-center bg-red-200 w-full p-4">
          <h1 className="text-xl font-bold mb-4">Original Array</h1>
          <h2
            id="array1"
            className="text-red-900 text-lg"
          >{`[${originalArray.join(",")}]`}</h2>
        </div>
        <div
          className={
            start ? `relative flex items-center justify-center` : `hidden`
          }
        >
          <MoveDown />
        </div>

        <div className="w-full py-3 flex justify-center items-center space-x-2">
          <span className="text-center">Array.pop(6)</span>
        </div>

        <div
          className={
            start
              ? `relative flex items-center justify-center space-x-15`
              : `hidden`
          }
        >
          <MoveDownLeft />
          <MoveDownRight />
        </div>
        <div
          className={
            start
              ? `flex flex-row text-center justify-center bg-red-200 w-full p-4 space-x-10`
              : "hidden"
          }
        >
          <div>
            <h2>Original Array</h2>
            <h2 id="array2" className="text-red-900 text-lg">{`[${[
              ...originalArray,
            ]
              .reverse()
              .join(",")}]`}</h2>
          </div>
          <div>
            <h2>{`Return Value`}</h2>
            <h2 id="array2" className="text-red-900 text-lg">{`[${[
              ...originalArray,
            ]
              .reverse()
              .join(",")}]`}</h2>
          </div>
        </div>
      </div>

      <h1 className="text-center p-4">Methods</h1>
      <div className="flex">
        <button
          className="bg-violet-300 p-4 rounded hover:bg-violet-500 hover:text-yellow-100 mx-4"
          onClick={() => {
            {
              !start && setStart(true);
              let newArr = [...originalArray];
              let returnValue = newArr.push(6);
              setOriginalArray(newArr);
              returnText.current.textContent = returnValue;
              returnMeaning.current.textContent = "Array Length";
            }
          }}
        >
          array.push(6)
        </button>
        <button
          className="bg-violet-300 p-4 rounded hover:bg-violet-500 hover:text-yellow-100"
          onClick={() => {
            {
              let newArr = [...originalArray];
              let returnValue = newArr.pop();
              setOriginalArray(newArr);
              returnText.current.textContent = returnValue;
              returnMeaning.current.textContent = "Element removed";
            }
          }}
        >
          array.pop()
        </button>
      </div>
    </div>
  );
}

export default Numbers;

function NumberButton(
  originalArray,
  setOriginalArray,
  returnText,
  returnMeaning,
  methodToBeApplied,
  value = null
) {
  return (
    <button
      className="bg-violet-300 p-4 rounded hover:bg-violet-500 hover:text-yellow-100"
      onClick={() => {
        {
          let newArr = [...originalArray];
          let returnValue;
          value
            ? newArr[methodToBeApplied](value)
            : newArr[methodToBeApplied](value);
          setOriginalArray(newArr);
          returnText.current.textContent = returnValue;
          returnMeaning.current.textContent = "Element removed";
        }
      }}
    >
      $
      {value
        ? `array${[methodToBeApplied](value)}`
        : `array${[methodToBeApplied]()}`}
    </button>
  );
}
