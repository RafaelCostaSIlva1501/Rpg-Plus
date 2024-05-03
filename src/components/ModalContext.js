//Importar módulos
import React, { createContext, useContext, useState } from "react";

//Criar contexto
const ModalContext = createContext();

//Criar componente provedor
export const ModalProvider = ({ children }) => {
    const [modalState, setModalState] = useState(false);
    const [searchState, setSearchState] = useState(false)
    const [index, setIndex] = useState(null);

    const modalON = (index) => {
        setModalState(true);
        setIndex(index)
    };

    const modalOFF = () => {
        setIndex(null);
        setModalState(false);
    };

    const searchON = () => {
        setSearchState(true)
    }

    const searchOFF = () => {
        setSearchState(false)
    }

    return (
        <ModalContext.Provider value={{ modalState, modalON, modalOFF, index, searchState, searchON, searchOFF }}>
            {children}
        </ModalContext.Provider>
    );
};

//Usar o contexto do modal
export const useModal = () => {
    return useContext(ModalContext);
};
