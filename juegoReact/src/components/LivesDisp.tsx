//Son mis vidas
import React from 'react';

type LivesDispProps = {
    lives: number; // Número de vidas restantes
    img: string; // Imagen de las vidas (corazones)
};
const LivesDisp: React.FC<LivesDispProps> = ({ lives, img }) => {
    return (
        <div className="lives-disp">
            Vidas restantes: {lives}
            <div className="hearts">
                {Array.from({ length: lives }).map((_, index) => (
                    <img key={index} src={img} alt="Vida" className="heart-image" />
                ))}
            </div>
        </div>
    );
};
export default LivesDisp;
