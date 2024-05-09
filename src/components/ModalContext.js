//Importar módulos
import React, { createContext, useContext, useState } from "react";
import infos from "./dados";

//Criar contexto
const ModalContext = createContext();

//Criar componente provedor
export const ModalProvider = ({ children }) => {
    const [modalState, setModalState] = useState(false);
    const [searchState, setSearchState] = useState(false);
    const [watchState, setWatchState] = useState(false);
    const [watchIndex, setWatchIndex] = useState(false);
    const [index, setIndex] = useState(null);

    const modalON = (index) => {
        setModalState(true);
        setIndex(index);
    };

    const modalOFF = () => {
        setIndex(null);
        setModalState(false);
    };

    const searchModalON = () => {
        setSearchState(true);
    };

    const searchModalOFF = () => {
        setSearchState(false);
    };

    const watchModalON = (episode) => {
        const idx = infos[index].listEp.indexOf(episode);
        setWatchIndex(idx);
        setWatchState(true);
    };

    const watchModalOFF = () => {
        setWatchState(false);
    };

    return (
        <ModalContext.Provider
            value={{
                modalState,
                modalON,
                modalOFF,
                index,
                searchState,
                searchModalON,
                searchModalOFF,
                watchState,
                watchModalON,
                watchModalOFF,
                watchIndex,
                setWatchIndex,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

//Usar o contexto do modal
export const useModal = () => {
    return useContext(ModalContext);
};
