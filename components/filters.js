import React from "react";
import tw from "twin.macro";
import FilterListComponent from "./filter_list_component";

 const Container = tw.div`w-48 min-w-max m-4`;
 const Title = tw.div`my-2 text-sm font-semibold`;
 const FilterSection = tw.div`my-2 py-2`;

 const TypeCheckBoxGroup = tw.div`flex flex-col`;
 const TypeCheckBoxLabel = tw.label`text-xs px-2`;
 const TypeCheckBoxInput = tw.input`w-4 h-4 text-red-500  rounded border-gray-300 focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`;

 const FeaturesList = [
 "Offers Takeout",
 "Accepts Credit Cards",
 "Vegetarian Friendly",
 "Good For Kids",
 "Good for Groups",
 "Happy Hour Specials",
 "Free Wi-Fi",
 "Offers Catering",
 "Full Bar",
 "TV"
 ];


const Cates = [
"Sandwiches",
"Pizza",
"Mexican",
"Mediterranean",
"Seafood",
"Chinese"
];

const Price = [
"$",
"$$",
"$$$",
"$$$$"]


function Filter() {
  return (
  		<Container>

        <FilterSection className="!mt-0">
          <Title>Filter</Title>
          <TypeCheckBoxGroup>
             <FilterListComponent options={Price}/>
           </TypeCheckBoxGroup>
        </FilterSection>


        <FilterSection>
          <Title>Type</Title>
          <TypeCheckBoxGroup>
             <FilterListComponent options={FeaturesList}/>
           </TypeCheckBoxGroup>
        </FilterSection>

          <FilterSection>
          <Title>Category</Title>
          <TypeCheckBoxGroup>
             <FilterListComponent options={Cates}/>
           </TypeCheckBoxGroup>
        </FilterSection>


  		</Container>
  		)
}


export default Filter;