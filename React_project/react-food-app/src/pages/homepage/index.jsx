import Search from "../components"

const dumy = "dumydata"

const Homepage=()=>{

    const getDatafromsearchcomponent=()=>{
        
    }
    

    return(
        <div className="homepage">
            <Search getDatafromsearchcomponent={getDatafromsearchcomponent} dumycopy={dumy}/>
        </div>
    )
}

export default Homepage