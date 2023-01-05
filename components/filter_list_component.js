import React from "react";
import tw from "twin.macro";


 const TypeCheckBoxGroup = tw.div`flex flex-col`;
 const TypeCheckBoxLabel = tw.label`text-xs px-2`;
 const TypeCheckBoxInput = tw.input`w-4 h-4 text-red-500  rounded border-gray-300 focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`;


function FilterListComponent(props){

   return props.options?props.options.reduce(
    (accumulator, currentValue, currentIndex) => {
        accumulator.push(
        <div>
          <TypeCheckBoxInput type="checkbox" name={currentValue} value={currentValue} />
          <TypeCheckBoxLabel htmlFor={currentIndex}>{currentValue}</TypeCheckBoxLabel>
        </div>);
        return accumulator;
       },
    []): [];

}

export default FilterListComponent;