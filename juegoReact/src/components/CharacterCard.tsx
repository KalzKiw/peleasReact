import React from 'react';
//declaración de atributros de mis personajes, usando typescript
type CharacterCardProps = {
    name: string;
    image: string;
    fuerza: number;
    destreza: number;    
    suerte: number;
};

//constante CharacterCard que recibe los atributos y los muestra en una tarjeta :> React.FC<CharacterCardProps> = REACT FUNCTIONAL COMPONENT. Es un tipo para especificar que este componente es una función que recibe props con el tipo CharacterCardProps.
const CharacterCard: React.FC<CharacterCardProps> = ({name, image, fuerza, destreza, suerte}) => {
    return (
        <div className='character-card'>    
            <img src= {image} alt = {name} className="character-image" /> 
            <h2>{name}</h2>
            <ul>
                <li>Fuerza: {fuerza}</li>
                <li>Destreza: {destreza}</li>
                <li>Suerte: {suerte}</li>
            </ul> 
        </div>
    );
};
export default CharacterCard;