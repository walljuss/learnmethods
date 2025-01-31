import { useState, useRef } from "react";
import { MoveDown, MoveDownLeft, MoveDownRight } from "lucide-react";

function Arrays() {
  const [mainData, setMainData] = useState({
    initialArray: [1, 5, 11],
    updatedArray: null,
    returnValue: "",
    returnMeaning: "",
    functionName: "",
  });

  const returnTextRef = useRef(null);
  const returnMeaningRef = useRef(null);
  const [start, setStart] = useState(false);

  const buttonData = [
    {
      buttonName: "array.push(5)",
      methodApplied: "push",
      value: 5,
      returnText: "length of array",
    },
    {
      buttonName: "array.pop()",
      methodApplied: "pop",
      value: "",
      returnText: "removed/popped element",
    },
    {
      buttonName: "array.shift()",
      methodApplied: "shift",
      value: "",
      returnText: "removed/shifted element",
    },
    {
      buttonName: "array.unshift(1,2,3)",
      methodApplied: "unshift",
      value: [1, 2, 3],
      returnText: "new array length",
    },
  ];

  return (
    <div className="flex flex-col">
      <h1 className="text-center">Arrays</h1>
      <div className="text-center bg-red-200 flex-1">
        {/*Initial Array*/}
        <div className="text-center bg-red-200 w-full p-4">
          <h1 className="text-xl font-bold mb-4">Initial Array</h1>
          <h2
            id="array1"
            className="text-red-900 text-lg"
          >{`[${mainData.initialArray.join(",")}]`}</h2>
        </div>
        {/*Arrows */}
        <div
          className={
            start ? `relative flex items-center justify-center` : `hidden`
          }
        >
          <MoveDown />
        </div>
        {/*Functino to be applied */}
        <div
          className={
            start
              ? "w-full py-3 flex justify-center items-center space-x-2"
              : "hidden"
          }
        >
          <span className="text-center">{mainData.functionName}</span>
        </div>

        {/*Arrows after the function application */}
        <div
          className={
            start ? `relative flex items-center justify-evenly` : `hidden`
          }
        >
          <MoveDownLeft />
          <MoveDownRight />
        </div>
        {/*New div with updated, returned values after functino application */}
        <div
          className={
            start
              ? `flex flex-row text-center justify-around bg-red-200 w-full p-4`
              : "hidden"
          }
        >
          <div>
            <h2>Initial Array</h2>
            <h2 id="array2" className="text-red-900 text-lg">
              {`[${
                Array.isArray(mainData.updatedArray)
                  ? mainData.updatedArray.join(",")
                  : ""
              }]`}
            </h2>
          </div>
          <div>
            <h2>
              Return Value{" "}
              <span className="font-bold">({mainData.returnMeaning})</span>
            </h2>
            <h2 id="array2" className="text-red-900 text-lg">
              {mainData.returnValue}
            </h2>
          </div>
        </div>
      </div>

      {/*Functions/Methods */}
      <h1 className="text-center p-4">Methods</h1>
      <div className="flex space-x-4">
        {buttonData.map((elem) => {
          return (
            <NumberButton
              setStart={setStart}
              data={mainData}
              setData={setMainData}
              buttonData={elem}
              key={elem.methodApplied}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Arrays;

const NumberButton = ({ setStart, data, setData, buttonData }) => {
  const handleClick = () => {
    let newArr, returnValue, initialArr;
    setStart(true);

    //initialArr => initialArray initialization
    if (Array.isArray(data.updatedArray) && data.updatedArray.length > 10) {
      initialArr = [1, 77, 2];
    } else if (Array.isArray(data.updatedArray)) {
      initialArr = [...data.updatedArray];
    } else {
      initialArr = [...data.initialArray];
    }
    //newArr -> updatedArray
    newArr = [...initialArr];

    //function application
    if (buttonData.value == "") {
      returnValue = newArr[buttonData.methodApplied]();
    } else if (Array.isArray(buttonData.value)) {
      returnValue = newArr[buttonData.methodApplied](...buttonData.value);
    } else {
      returnValue = newArr[buttonData.methodApplied](buttonData.value);
    }

    setData((prevData) => ({
      ...prevData,
      initialArray: [...initialArr],
      updatedArray: [...newArr],
      returnValue: Array.isArray(returnValue) ? [...returnValue] : returnValue,
      returnMeaning: buttonData.returnText,
      functionName: buttonData.buttonName,
    }));
  };

  return (
    <button
      className="bg-violet-300 p-4 rounded hover:bg-violet-500 hover:text-yellow-100"
      onClick={handleClick}
    >
      {buttonData.buttonName}
    </button>
  );
};
