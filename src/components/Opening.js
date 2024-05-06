import React, { useState, useEffect } from "react";

const Opening = () => {
    const [displayOpening, setDisplayOpening] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayOpening(false);
        }, 5000); // 5000 milissegundos = 5 segundos
        
        // Limpa o timer ao desmontar o componente para evitar vazamentos de memória
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className={`opening ${displayOpening ? '' : 'hidden'}`}>
                <img src="./img/rpg-plus-icon-2.png" alt="Logo"></img>
            </div>
        </>
    );
};

export default Opening;
