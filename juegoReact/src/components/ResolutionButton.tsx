import React  from "react";

//declaración de atributos del botón de resolución, usando typescript
type ResolutionButtonProps = {
    onClick: () => void; // Función que se ejecuta al hacer clic en el botón
    disabled: boolean; // Indica si el botón está deshabilitado
};

const ResolutionButton: React.FC<ResolutionButtonProps> = ({ onClick, disabled }) => {
    return (
        <button
            type="button"
            className="resolution-button"
            onClick={onClick}
            disabled={disabled}
        >
            ¡Resolver!
        </button>
    );
};

export default ResolutionButton;