import React,{ useState }from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import tw from "twin.macro";


 const Container = tw.div``;

function Search(props) {


const [searchTerm,setSearchTerm] = useState('');
 
const handleSearch=(searchTerm)=> {
    props.handleSearch(searchTerm);
 }
 
const updateSearch = (e) => {
		setSearchTerm(e.target.value);
};



  return (
  		<Container>
  			<form action="search" >
									<GooglePlacesAutocomplete
								      selectProps={{
								      	components: { 
								      		DropdownIndicator:() => null, 
								      		IndicatorSeparator:() => null,
								      	},
								      	placeholder: 'search restaurant near location',
									    styles: {
									      input: (provided) => ({
									        width: '350px',
									      }),
									      option: (provided) => ({
									        ...provided,
									      }),
									      singleValue: (provided) => ({
									        ...provided,
									      }),
									    },
									  }}
								    />
				</form>

  		</Container>
  )
}


export default Search;