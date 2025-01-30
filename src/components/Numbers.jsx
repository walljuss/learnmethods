import { useState, useRef } from "react";

function Numbers() {
  const [originalArray, setOriginalArray] = useState([1, 11, 4, 5]);
  const returnText = useRef(null);
  const returnMeaning = useRef(null);
  return (
    <div className="pt-5 flex flex-col">
      <h1 className="text-center p-4">Arrays</h1>
      <div className="flex flex-row">
        <div className="text-center bg-red-200 flex-1">
          <h1>Original Array</h1>
          <h2 className="text-red-900">{`[${originalArray.join(`,`)}]`}</h2>
        </div>
        <div className=" text-center bg-blue-200 flex-1">
          <h1>Return Value</h1>
          <h2 ref={returnText} className="text-red-900"></h2>
        </div>
        <div className=" text-center bg-green-200 flex-1">
          <h1>Return Value Meaning</h1>
          <h2 ref={returnMeaning} className="text-red-900"></h2>
        </div>
      </div>
      <h1 className="text-center p-4">Methods</h1>
      <div className="flex">
        <button
          className="bg-violet-300 p-4 rounded hover:bg-violet-500 hover:text-yellow-100 mx-4"
          onClick={() => {
            {
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
