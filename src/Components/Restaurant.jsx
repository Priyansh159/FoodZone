import React from 'react';
import { FaRegStar } from "react-icons/fa";


const Restaurant = ({restArray}) => {
  return (
    restArray.map((restDetails)=>{
        return(
            <div key={restDetails.info.id} className=' w-71 h-90  flex flex-col  rounded-2xl hover:scale-95 hover:cursor-pointer ease-in duration-100 '>
                <img className='w-full h-40 object-cover rounded-2xl ' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restDetails.info.cloudinaryImageId}`} alt="" />
                <h1 className=" text-xl my-1">{(restDetails.info.name).length <= 27 ? restDetails.info.name: restDetails.info.name.slice(0,27) + "..."}</h1>
                <span className="font-bold text-xl" >{restDetails.info.costForTwo}</span>

                <div className='flex justify-between'>
                  <div className='flex items-center gap-1 text-green-600'>
                  <FaRegStar />
                  <span className="font-bold" >{restDetails.info.avgRating}</span>
                  </div>
                  <span className="mx-3">{restDetails.info.sla.slaString}</span>
                </div>
                

                <p> {restDetails.info.cuisines[0] + "," + restDetails.info.cuisines[1]}</p>
                <p className='text-blue-800'>{restDetails.info.areaName}</p>
            </div>

        )
    })
  )
}


export default Restaurant;