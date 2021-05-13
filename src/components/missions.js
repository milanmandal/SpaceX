import React from 'react'

const mission=({name,fno,ids,year,land,launch,img})=>{

    return(
            <div className="card">
                <div className="imgcard" >
                <img src={img} alt = ""></img>
                </div>
                <div>
                <div className="det-card">
                <p className="style">{name} #{fno}</p>
                <p>Mission id: {ids}</p>
                <p>Launch year: {year}</p>
                <p>Successful Launch: {(launch)?"true":"false"}</p>
                <p>Successfull Landing: {(land)?"true":"false"}</p>
                </div>
                </div>
                
            </div>
        
    )

}
{/* <h1>{title}</h1>
            <ul className="ingredient">
                <p >Check if you have these</p>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>CALORIES :{calories}s</p>
            <footer>
            <div className="card2">
          <a href={cook}> <button className="search-cook">Start Cooking!!</button></a>
            </div> */}
export default mission
