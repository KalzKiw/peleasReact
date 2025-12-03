//Son mis vidas
import React from 'react';

type LivesDispProps = {
    health: number; // Número de vidas restantes
    heartImage: string; // Imagen de lis corazones
};

const LivesDisp: React.FC<LivesDispProps> = ({ health, heartImage }) => {
    return (
        <div className="lives-disp">
            {Array.from({ length: health }).map((_, i) => (
                <img
                    key={i}
                    src={heartImage}
                    alt="corazón"
                    style={{ width: 50, height: 50, marginRight: 4 }}
                />
            ))}
        </div>
    );
};

export default LivesDisp;
