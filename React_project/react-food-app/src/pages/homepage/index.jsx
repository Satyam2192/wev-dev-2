import { useState } from "react"
import Search from "../components"
import React from "react"

const dumy = "dumydata"

const Homepage=()=>{
    // for loading state
    const [loadingState, setLoadingState]= useState(false)

    // save result that we recive from api

    const getDatafromsearchcomponent=(getData)=>{
        // keep the loading state true before calling api
        setLoadingState(true);


        console.log(getData , 'getdata');

        // calling api
        async function getReceipes(){
            const apiResponse = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=308e09b4f1504ff8b29a3adc80f40668&querry=${getData}`);
            const result = await apiResponse.json()

            const {results} = result
            console.log(result);

            if(results && results.length() > 0){
                // set loading status false again
                // set the recipes state

                setLoadingState(false);
                setRecipes(results);

            }
        }
        getReceipes()
    }
    
    console.log(loadingState, receipes, 'loadingState, recipes');

    return(
        <div className="homepage">
            <Search getDatafromsearchcomponent={getDatafromsearchcomponent} dumycopy={dumy}/>
        </div>
    )
}

export default Homepage