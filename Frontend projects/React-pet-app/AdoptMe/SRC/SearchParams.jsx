import {useEffect, useState } from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, updateLocation] = useState("");
    const [animal, updateAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);   // we are ignoring status here and are only dealing with the breed list. This part is covered in intermediate react testing section.

    useEffect(() => {
        requestPets();
      }, []); // eslint-disable-line react-hooks/exhaustive-deps

      async function requestPets() {
        const res = await fetch(
          `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}` //  this function runs once when the page is loaded. It has access to the entire list of animals
        );
        const json = await res.json();
            
        setPets(json.pets);
        
        
      }

    return (
        <div className="search-params">
            <form onSubmit={ (e) => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input id="location"
                     value={location} 
                     placeholder="Location" 
                     onChange={(e) => updateLocation(e.target.value)}/>

                </label>

                <label htmlFor="animal">
                Animal
                <select
                    id="animal"
                    value={animal}
                    onChange={(e) => {             // this notation might have significance in type
                    updateAnimal(e.target.value);
                    alert(JSON.stringify(breeds))
                    setBreed("");

                    }}
                >
                    <option />                   // an empty select box                     
                    {ANIMALS.map((animal) => (
                    <option key={animal} value={animal}>
                        {animal}
                    </option>
                    ))}
                </select>
                </label>

                <label htmlFor="breed">
                Breed
                <select
                    disabled={!breeds.length}
                    id="breed"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}>

                    <option />
                    {breeds.map((breed) => (
                    <option key={breed} value={breed}>
                        {breed}
                    </option>
                    ))}
                </select>
                </label>


                <button>Submit</button>


            </form>
            <Results pets={pets} />;

            
            

        </div>

    );


};

export default SearchParams;