import React from "react";
import { useModal } from "./ModalContext";
import infos from "./dados";

const WatchModal = () => {
    const { watchState, watchModalOFF, index, watchIndex } = useModal();
    if (watchState) {
        return (
            <>
                <section className="watch-modal">
                    <iframe
                        title="Video Player"
                        src={infos[index].listEp[watchIndex].src}
                        width="400px"
                        height="300"
                        allowfullscreen="true" 
                    ></iframe>
                    <button onClick={watchModalOFF}>Fechar</button>
                </section>
            </>
        );
    } else {
        return null;
    }
};

export default WatchModal;
