import React, { useRef } from "react";
import { useModal } from "./ModalContext";
import Articles from "./Articles";
import infos from "./dados";


const Section = () => {
    const { modalON } = useModal();

    const scrollRef = [useRef(null), useRef(null)];

    const scrollPrev = (i) => {
        if (scrollRef[i].current) {
            const newPosition = scrollRef[i].current.scrollLeft - 320;
            scrollRef[i].current.scrollTo({
                left: newPosition,
                behavior: "smooth",
            });
        }
    };

    const scrollNext = (i) => {
        if (scrollRef[i].current) {
            const newPosition = scrollRef[i].current.scrollLeft + 320;
            scrollRef[i].current.scrollTo({
                left: newPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <section className="container-catalog">
                <h2>Oficial Ordem Paranormal</h2>

                <div className="catalog">
                    <button
                        className="catalog-btn-prev catalog-btn"
                        onClick={() => scrollPrev(0)}
                    >
                        <span className="material-symbols-outlined">
                            chevron_left
                        </span>
                    </button>

                    <div className="catalog-items" ref={scrollRef[0]}>
                        <Articles
                            background={infos[0].background}
                            title={infos[0].title}
                            ep={infos[0].ep}
                            onClick ={() => modalON(0)}
                        />

                        <Articles
                            background={infos[1].background}
                            title={infos[1].title}
                            ep={infos[1].ep}
                            onClick ={() => modalON(1)}
                        />

                        <Articles
                            background={infos[2].background}
                            title={infos[2].title}
                            ep={infos[2].ep}
                            onClick ={() => modalON(2)}
                        />

                        <Articles
                            background={infos[3].background}
                            title={infos[3].title}
                            ep={infos[3].ep}
                            onClick ={() => modalON(3)}
                        />

                        <Articles
                            background={infos[4].background}
                            title={infos[4].title}
                            ep={infos[4].ep}
                            onClick ={() => modalON(4)}
                        />

                        <Articles
                            background={infos[5].background}
                            title={infos[5].title}
                            ep={infos[5].ep}
                            onClick ={() => modalON(5)}
                        />

                        <Articles
                            background={infos[6].background}
                            title={infos[6].title}
                            ep={infos[6].ep}
                            onClick ={() => modalON(6)}
                        />
                    </div>

                    <button
                        className="catalog-btn-next catalog-btn"
                        onClick={() => scrollNext(0)}
                    >
                        <span className="material-symbols-outlined">
                            chevron_right
                        </span>
                    </button>
                </div>
            </section>

            <section className="container-catalog">
                <h2>Variados</h2>

                <div className="catalog">
                    <button
                        className="catalog-btn-prev catalog-btn"
                        onClick={() => scrollPrev(1)}
                    >
                        <span class="material-symbols-outlined">
                            chevron_left
                        </span>
                    </button>

                    <div className="catalog-items" ref={scrollRef[1]}>
                        <Articles
                            background={infos[7].background}
                            title={infos[7].title}
                            ep={infos[7].ep}
                            onClick ={() => modalON(7)}
                        />

                        <Articles
                            background={infos[8].background}
                            title={infos[8].title}
                            ep={infos[8].ep}
                            onClick ={() => modalON(8)}
                        />

                        <Articles
                            background={infos[9].background}
                            title={infos[9].title}
                            ep={infos[9].ep}
                            onClick ={() => modalON(9)}
                        />

                        <Articles
                            background={infos[10].background}
                            title={infos[10].title}
                            ep={infos[10].ep}
                            onClick ={() => modalON(10)}
                        />
                    </div>

                    <button
                        className="catalog-btn-next catalog-btn"
                        onClick={() => scrollNext(1)}
                    >
                        <span class="material-symbols-outlined">
                            chevron_right
                        </span>
                    </button>
                </div>
            </section>
        </>
    );
};

export default Section;
