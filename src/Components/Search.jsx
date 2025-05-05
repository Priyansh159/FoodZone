import React, { useContext, useEffect, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { RestaurantContext } from "./RestaurantContext";
import { useLocation, useNavigate } from 'react-router-dom';

const Search = () => {
    const { setAllRestArr, resturDetails } = useContext(RestaurantContext);
    const[inputValue, setInputValue] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    function handleSearch(searchText) {
        setInputValue(searchText); 
        let searchedRest = resturDetails.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setAllRestArr(searchedRest);
    }

    function handleClick() {
        navigate('/');
        
    }

    useEffect(()=>{
        setInputValue('');
    },[location.pathname])

    return (
        <div className="flex ml-4 items-center">
            <IoSearch className="bg-white text-black h-8 rounded-l-md w-7 pl-2" />
            <input
                onClick={handleClick}
                value={inputValue}
                onChange={(e) => handleSearch(e.target.value)}
                className="bg-white rounded-r-md text-black h-8 focus:outline-none pl-2"
                type="text"
                placeholder='Search...'
            />
        </div>
    );
};

export default Search;