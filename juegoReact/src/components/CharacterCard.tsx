import React from 'react';
//declaración de atributros de mis personajes, usando typescript
type CharacterCardProps = {
    name: string;
    image: string;
    fuerza: number;
    destreza: number;
    suerte: number;
    selectedCharacteristic: string | null; 
    random?: number | null;
    total?: number | null;
};

//constante CharacterCard que recibe los atributos y los muestra en una tarjeta :> React.FC<CharacterCardProps> = REACT FUNCTIONAL COMPONENT. Es un tipo para especificar que este componente es una función que recibe props con el tipo CharacterCardProps.
const CharacterCard: React.FC<CharacterCardProps> = ({name, image, fuerza, destreza, suerte, selectedCharacteristic, random, total}) => {
    //empiza en 0
    let charValue = 0; 
    //asigna el valor de la característica seleccionada
    if(selectedCharacteristic === 'fuerza') charValue = fuerza;
    if(selectedCharacteristic === 'destreza') charValue = destreza;
    if(selectedCharacteristic === 'suerte') charValue = suerte;

    return (
        <div className='character-card'>    
            <img src= {image} alt = {name} className="character-image" /> 
            <h2>{name}</h2>
            <ul>
                <li>Fuerza: {fuerza}</li>
                <li>Destreza: {destreza}</li>
                <li>Suerte: {suerte}</li>
            </ul> 
             {selectedCharacteristic && random !== null && total !== null && (  //Manejamos los valores nulos con !== null
            <p>
            {selectedCharacteristic.charAt(0).toUpperCase() + selectedCharacteristic.slice(1)}: {charValue} + Azar: {random} = <b>{total}</b> {/*Muestro la característica seleccionada, su valor, el valor aleatorio y el total*/}
            </p>
             )}
        </div>
    );
};
export default CharacterCard;