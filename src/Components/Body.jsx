import { useState, useEffect, useContext } from "react";

import Restaurant from "./Restaurant";
import { RestaurantContext } from "./RestaurantContext";

const Body = () => {
    const { allRestArr, setAllRestArr, resturDetails } = useContext(RestaurantContext);

    const [isClicked, setIsClicked] = useState(false);
    const [isClicked2, setIsClicked2] = useState(true);

    useEffect(()=>{
        if(resturDetails && resturDetails.length){
            setAllRestArr(resturDetails)
            
        }
    } , [resturDetails])

    function filterTopRated(resturDetails){
        let filterRatingArr = resturDetails.filter((restaurant)=>restaurant.info.avgRating >= 4.5);
        setAllRestArr(filterRatingArr);
        setIsClicked(true);
        setIsClicked2(false);
    }

    function allRated(resturDetails){
        setAllRestArr(resturDetails)
        setIsClicked(false);
        setIsClicked2(true);
    }

    return(

    <div className="mx-20">
        <h1 className="font-bold text-2xl mt-10">Restaurants with online food delivery in Meerut</h1>
        <button onClick={()=>filterTopRated(resturDetails)} className={isClicked ? "my-5 border border-r-0 h-10 w-30 text-xl bg-orange-400" : "my-5 border border-r-0 h-10 w-30 text-xl bg-white"}>Rating 4.5+</button>
        <button onClick={()=>allRated(resturDetails)} className={isClicked2 ? "my-5 border h-10 w-30 text-xl bg-orange-400" : "my-5 border h-10 w-30 text-xl bg-white"}>All</button>
        <div className="flex flex-wrap gap-10.5">
            <Restaurant restArray = {allRestArr}/>
        </div>
    </div>
    )
}



export default Body;