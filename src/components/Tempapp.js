import React,{useEffect, useState} from 'react';
import "./css/style.css";
const Tempapp = ()=>{

    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("");

    useEffect(()=>{
       
        const fetchApi = async()=>{
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bf4fcb35fd4a7bc256249c80bb84c91f`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);

        };
        fetchApi();
    },[search]);
    
    return(
        <>
  <div className="box">
      <div className="inputData">
          <input 
          type="search" 
          value={search}
          className="inputFeild" 
          placeholder="Enter city,country"
          onChange={(event)=>{
              setSearch(event.target.value);

          }}
          
          />
      </div>
      {!city ? (
          <p className="errorMsg">Data not found</p>):(
              <div>
      <div className="info">
          <h2 className="location"><i class="fa fa-street-view" aria-hidden="true"></i>{search}</h2>
          <h1 className="temp">{city.temp}°Cel</h1>
          <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max : {city.temp_min}°Cel</h3>
      </div>
      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>
              </div>
      )}
     
  </div>


        </>

    );
}
export default Tempapp;