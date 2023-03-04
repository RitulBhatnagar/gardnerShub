import Home from "./pages/Home";
import React, { useEffect, useState } from 'react'
import { 
  getIndoorPlants, 
  getOutdoorPlants,
  getTablePlants
} from "./DataRepository";

function App () {

  const [ indoorPlants, setIndoorPlants ] = useState([]);
  const [ loadingState, setLoadingState] = useState(0);

  // const outdoorPlants = [];
  // const tablePlants = [];

  const loadData = async() => {
    setLoadingState(1);
    setIndoorPlants(await getIndoorPlants())
    setLoadingState(0)
    // outdoorPlants.push(await getOutdoorPlants())
    // tablePlants.push(await getTablePlants())
  }

  useEffect(() => {
    if (indoorPlants.length < 1) {
      loadData()
    }
  }, [ 1 ]);

  const data = {

  }
  
 
  // console.log("outdoor");
  // console.log(outdoorPlants);
  console.log("indoor");
  console.log(indoorPlants);
  // console.log("table");
  // console.log(tablePlants);

  return (
    <>
    {
      loadingState === 0 ? (
        <div className="app">
          <Home data = {indoorPlants}/>
        </div>
    ):(
        <div style={{display:"flex" , alignItems:"center" , justifyContent : "center"}}>
        <div className="loadingio-spinner-spinner-d5vda8qm7j5"><div className="ldio-9u8gbddmqad">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
        </div>
        <div>
        <h1>Loading...</h1>
        </div>
        </div>
    )
    }
    </>
  )
}

export default App;