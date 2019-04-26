import React from 'react';
import SWChar from './SWChar';
import '../StarWars2.css'


const SWMap = (props) => {
    console.log(props)
    return (
        <section className="m2container2">
            {props.starwarsChars.map((char) => (
                <SWChar 
                name={char.name} 
                height={char.height}
                mass={char.mass}
                haircolor={char.hair_color}
                skincolor={char.skin_color}
                eyecolor={char.eye_color}
                birthyear={char.birth_year}
                gender={char.gender}
                />
            ))}
        </section>
    )
}
export default SWMap