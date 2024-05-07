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
                        title={infos[index].title}
                        src={infos[index].listEp[0].src}
                        width="100%"
                        height="300px"
                        allow="fullscreen"
                        allowFullScreen
                    ></iframe>
                </section>
            </>
        );
    }
};

export default WatchModal;
