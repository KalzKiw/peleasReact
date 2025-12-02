import CharacterCard from './components/CharacterCard';
import LivesDisp from './components/LivesDisp';
import FigthButton from './components/FigthButton';
import ResolutionButton from './components/ResolutionButton';
import React, { useState } from 'react'; //manejo de estados
import './Game.css'; //estilo css
//importo las imagenes
import heroImage from './assets/hero.png';
import monsterImage from './assets/monster.png';
import heartImage from './assets/heart.png';

//declaración de atributos de mis personajes, usando typescript
type Character = {
    name: string;
    image: string;
    fuerza: number;
    destreza: number;
    suerte: number;
    health: number;
};

const initialHero: Character = {
    name: 'Heroe',
    image: heroImage,
    fuerza: 10,
    destreza: 8,
    suerte: 6,
    health: 3,
};
const initialMonster: Character = {
    name: 'Monstruo',
    image: monsterImage,
    fuerza: 9,
    destreza: 7,
    suerte: 5,
    health: 3,
};
const Game: React.FC = () => {
//---ESTADOS--- 
//componente principal del juego
const [hero, setHero] = useState<Character>(initialHero);
const [monster, setMonster] = useState<Character>(initialMonster);
//estados para manejar la pelea
const [isFighting, setIsFighting] = useState<boolean>(false);
//estados para manejar las vidas
const [isResolved, setIsResolved] = useState<boolean>(false);
const [selectedCharacteristic, setSelectedCharacteristic] = useState<keyof Pick<Character, 'fuerza' | 'destreza' | 'suerte'> | null>(null);
const [result, setResult] = useState<string>('');
const [gameOver, setGameOver] = useState<boolean>(false);
const characteristics: Array<keyof Pick<Character, 'fuerza' | 'destreza' | 'suerte'>> = ['fuerza', 'destreza', 'suerte'];

//Variables para almacenar los valores aleatorios y totales de cada personaje en la pelea
const [heroRandom, setHeroRandom] = useState<number | null>(null);
const [monsterRandom, setMonsterRandom] = useState<number | null>(null);
const [heroTotal, setHeroTotal] = useState<number | null>(null);
const [monsterTotal, setMonsterTotal] = useState<number | null>(null);

//---FUNCIONES---
//funciñón para seleccionar una característica aleatoria y manejar la pelea
const handleFight = () => {   //Se ejecuta al hacer clic en el botón "¡Pelear!"
    const randomIndex = Math.floor(Math.random() * characteristics.length); //Genero un número aleatorio para seleccionar una característica entre 0 y 2 porque tengo 3 características(caracteristics.length = 3)
    setSelectedCharacteristic(characteristics[randomIndex]); //Actualizo el estado selectedCharacteristic con la característica seleccionada aleatoriamente
    setIsFighting(true); //activo el estado isFighting para indicar que la pelea está en curso y manejar el booleano 
    setResult(''); //limpio el resultado anterior
    setHeroRandom(null); //reinicio los valores aleatorios y totales
    setMonsterRandom(null);
    setHeroTotal(null);
    setMonsterTotal(null);
};

//***Función para resolver la Pelea ***
const handleResolution = () => { //Se ejecuta al hacer clic en el botón "¡Resolver!"
    if(!selectedCharacteristic) return;
    

    const heroRandom = Math.floor(Math.random() * 100) + 1;  
    const monsterRandom = Math.floor(Math.random() * 100) + 1
    
//Usa la característica aleatoria seleccionada como una "key" y se le suma la constante de arriba (un numero aleatorio entre 1 y 100) 
    const heroValue = hero[selectedCharacteristic];
    const monsterValue = monster[selectedCharacteristic];

    setHeroRandom(heroRandom);
    setMonsterRandom(monsterRandom);
    setHeroTotal(heroValue + heroRandom);
    setMonsterTotal(monsterValue + monsterRandom);

    
    let roundResult = '';
    let updatedHero = { ...hero }; //Los puntos suspensivos son para copiar todos los atributos de un obejeto en uno nuevo. Lo voy a usar para modificar las vidas sin cambiar el original
    let updatedMonster = { ...monster };


    

    //Gana Héroe
    if(heroValue + heroRandom > monsterValue + monsterRandom) {
        updatedMonster.health -= 1; // Restamos vida de monster
        roundResult = `${hero.name} gana la ronda`;  //Formateamos texto y extraemos de hero su nombre como si fuese un getter.  
    }else if (monsterTotal != null && heroTotal != null && monsterTotal > heroTotal) { //gana monster
        updatedHero.health -= 1;
        roundResult = `${monster.name} gana la ronda`;
    }else{ //empate
        roundResult = `¡Empate!`; 
    }
    
    //Actualizamos las variables con los nuevos "objetos copiados" y seteamos el booleano a true para dar por finalizada la ronda
    setHero(updatedHero);  
    setMonster(updatedMonster);
    setResult(roundResult);
    setIsResolved(true)

    //Si alguna vida llega a 0   == compara el valor de la varibale y === también el tipo 
    if(updatedHero.health === 0 ||updatedMonster.health === 0) {
        setGameOver(true); //se acabó la partida
        setResult(
            updatedHero.health === 0
            ? `${monster.name} gana el juego`
            : `${hero.name} gana el juego`
        ); 
    }
};
//---RENDERIZADO---
    return(
        <div className='game-container'>
            <h1>
                Lucha por:{'  '}
                 {selectedCharacteristic ? selectedCharacteristic.toUpperCase() : '---'} {/*Titulo, lo que está dentro de {} es lo que se renderiza, aqui la caracteristica*/}
            </h1>
            <div className='characters'>
                <div> {/*Rendereizado del Hero*/}
                    <CharacterCard
                    name={hero.name}
                    image={hero.image}
                    fuerza={hero.fuerza}
                    destreza={hero.destreza}
                    suerte={hero.suerte}
                    selectedCharacteristic={selectedCharacteristic}
                    random={heroRandom}
                    total={heroTotal}
                    />
                    <LivesDisp health={hero.health} heartImage={heartImage} />
                </div>
                <div> {/*Rendereizado del Monster*/}
                    <CharacterCard
                        name={monster.name}
                        image={monster.image}
                        fuerza={monster.fuerza}
                        destreza={monster.destreza}
                        suerte={monster.suerte}
                        selectedCharacteristic={selectedCharacteristic}
                        random={monsterRandom}
                        total={monsterTotal}
                    />
                    <LivesDisp health={monster.health} heartImage={heartImage} />
                </div>
            </div>
            <div className='actions'>
                <FigthButton onClick={handleFight} disabled={isFighting || gameOver} />
                <ResolutionButton onClick={handleResolution} disabled={!isFighting || isResolved ||gameOver} />
                {gameOver && <button onClick={() => {
                    setHero(initialHero);
                    setMonster(initialMonster);
                    setSelectedCharacteristic(null);
                    setResult('');
                    setGameOver(false);
                    setIsFighting(false);
                    setIsResolved(false);
                }}>¡COMENZAR NUEVA PELEA!</button>}
            </div>
            <div className='result'>{result}</div>
        </div>
    );
};

export default Game;