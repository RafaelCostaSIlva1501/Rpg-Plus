//Importar módulos
import React from "react";
import { useModal } from "./ModalContext";
import infos from "./dados";

//Componente
export const Modal = () => {
    const { modalState, modalOFF, index, watchModalON } = useModal();

    if (modalState) {
        return (
            <>
                <section className="modal">
                    <button onClick={modalOFF}>
                        <span className="material-symbols-outlined">close</span>
                    </button>

                    <header
                        className="header-modal"
                        style={{
                            backgroundImage: `url(${infos[index].background})`,
                        }}
                    ></header>

                    <section className="content-modal">
                        <div className="details-modal">
                            <div className="modal-details-a">
                                <button>
                                    <span className="material-symbols-outlined">
                                        add
                                    </span>
                                    Adicionar a lista
                                </button>
                                <div className="details-data-ep">
                                    <span>{infos[index].data}</span>
                                    <span>{infos[index].ep} episódios</span>
                                </div>
                                <p>
                                    Sinopse: <span>{infos[index].sinopse}</span>
                                </p>
                            </div>

                            <div className="modal-details-b">
                                <div className="details-casting">
                                    Elenco:
                                    <div>
                                        {infos[index].elenco.map(
                                            (elenco, index) => (
                                                <span key={index}>
                                                    {elenco}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-ep-list">
                            <h1>Lista de episódios</h1>

                            <div className="container-eps">
                                {infos[index].listEp.map((ep, index) => (
                                    <div key={index} className="episode" onClick={watchModalON}>
                                        <h4>{`${ep.epTitle} ${ep.epNum}`}</h4>

                                        <div className="img-sinopse">
                                            <img
                                                src={ep.epThumb}
                                                alt={`Episódio ${ep.epNum}`}
                                            />
                                            <p>{ep.epSinopse}</p>
                                        </div>

                                        <span>Duração: {ep.epDuration}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </section>
            </>
        );
    } else {
        return null;
    }
};

export default Modal;
