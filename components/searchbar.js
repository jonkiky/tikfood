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
  			<form action="search" class="home_search_form" id="home_search_form">
								<div class="d-flex flex-lg-row flex-column align-items-start justify-content-lg-between justify-content-start">
									<span class="search_input_word">Near</span>
									<button class="home_search_button"  disabled={searchTerm==null||searchTerm==""} onClick={(event)=>handleSearch(event)}>search</button>
								</div>
				</form>

  		</Container>
  )
}


export default Search;