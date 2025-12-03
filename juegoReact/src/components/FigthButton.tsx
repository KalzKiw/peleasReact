import React from "react";

type FigthButtonProps = { 
    onClick: () => void; // Función que se ejecuta al hacer clic en el botón
    disabled: boolean; // Indica si el botón está deshabilitado
};  

const FigthButton: React.FC<FigthButtonProps> = ({ onClick, disabled }) => {
    return (
        <button className="game-button" onClick={onClick} disabled={disabled}>
            <div><span>¡Pelear!</span></div>
        </button>
    );
};

export default FigthButton;
