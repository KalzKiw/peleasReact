import React from "react";

type FigthButtonProps = { 
    onClick: () => void; // Función que se ejecuta al hacer clic en el botón
    disabled: boolean; // Indica si el botón está deshabilitado
};  

const FigthButton: React.FC<FigthButtonProps> = ({ onClick, disabled }) => {
    return (
        <button className="figth-button" onClick={onClick} disabled={disabled}>
            ¡Pelear!
        </button>
    );
};

export default FigthButton;
