//Son mis vidas
import React from 'react';

type LivesDispProps = {
    health: number; // Número de vidas restantes
    heartImage: string; // Imagen de las vidas (corazones)
};

const LivesDisp: React.FC<LivesDispProps> = ({ health, heartImage }) => {
    return (
        <div className="lives-disp">
            {Array.from({ length: health }).map((_, i) => (
                <img
                    key={i}
                    src={heartImage}
                    alt="corazón"
                    style={{ width: 24, height: 24, marginRight: 4 }}
                />
            ))}
        </div>
    );
};

export default LivesDisp;
