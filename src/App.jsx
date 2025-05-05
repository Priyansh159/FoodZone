import React, { useState } from 'react'
// import ApiCalling from './Components/ApiCalling'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Body from './Components/Body'
import ApiCalling from "./Components/ApiCalling";
import Error from './Components/nestedComponents/Error';
import Help from './Components/nestedComponents/Help';
import { RestaurantContext } from './Components/RestaurantContext';
import { Outlet } from 'react-router-dom';

const App = () => {
      let resturDetails = ApiCalling();
      const [allRestArr, setAllRestArr] = useState(resturDetails);

  return (
    <RestaurantContext.Provider value={{ resturDetails, allRestArr, setAllRestArr }}>
    <div className='bg-gray-100'>
      <Header setAllRestArr={setAllRestArr} resturDetails={resturDetails}/>
      {/* <Body allRestArr={allRestArr} setAllRestArr={setAllRestArr} resturDetails={resturDetails}/> */}
      <Outlet />
      <Footer />

      {/* <ApiCalling /> */}
      
    </div>
    </RestaurantContext.Provider>
  )
}

export default App