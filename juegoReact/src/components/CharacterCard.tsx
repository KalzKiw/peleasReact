import React from 'react';
import LivesDisp from './LivesDisp';
//declaración de atributros de mis personajes, usando typescript
type CharacterCardProps = {
    name: string;
    image: string;
    fuerza: number;
    destreza: number;
    magia: number;
    selectedCharacteristic: string | null; 
    random?: number | null;
    total?: number | null;
    health: number;
    heartImage: string;
    mirror?: boolean;
    isHero?: boolean;
};

//constante CharacterCard que recibe los atributos y los muestra en una tarjeta :> React.FC<CharacterCardProps> = REACT FUNCTIONAL COMPONENT. Es un tipo para especificar que este componente es una función que recibe props con el tipo CharacterCardProps.
const CharacterCard: React.FC<CharacterCardProps> = ({name, image, fuerza, destreza, magia, selectedCharacteristic, random, total, health, heartImage, mirror, isHero}) => {
    //empiza en 0
    let charValue = 0; 
    //asigna el valor de la característica seleccionada
    if(selectedCharacteristic === 'fuerza') charValue = fuerza;
    if(selectedCharacteristic === 'destreza') charValue = destreza;
    if(selectedCharacteristic === 'magia') charValue = magia;
    
    // Mapeo para mostrar nombres personalizados
    const displayName = selectedCharacteristic ? selectedCharacteristic.charAt(0).toUpperCase() + selectedCharacteristic.slice(1) : '';

    return (
  <div className={`character-card${mirror ? ' mirror' : ''}${isHero ? ' hero' : ' monster'}`}>
    <div className="card-row">
      <img src={image} alt={name} className="character-icon" />
      <div className="card-info">
        <div className="character-name">{name}</div>
        <div style={{ marginTop: '8px' }}>
          <LivesDisp health={health} heartImage={heartImage} />
        </div>
      </div>
    </div>
    {selectedCharacteristic && random !== null && total !== null && (
      <p>
        {displayName}: {charValue} + Azar: {random} = <b>{total}</b>
      </p>
    )}
  </div>
);
};
export default CharacterCard;