import React from "react";
import { useModal } from "./ModalContext";
import infos from "./dados";

const WatchModal = () => {
    const { watchState, watchModalOFF, index } = useModal();
    if (watchState) {
        return (
            <>
                <section className="watch-modal">
                    <button onClick={watchModalOFF}>Fechar</button>
                    <iframe
                        title="Video Player"
                        src={infos[index].listEp[1].src}
                        width="400px"
                        height="300"
                        allowfullscreen="true" 
                    ></iframe>
                </section>
            </>
        );
    } else {
        return null;
    }
};

export default WatchModal;
