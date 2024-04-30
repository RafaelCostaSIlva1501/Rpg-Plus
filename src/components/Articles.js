import React from "react";

const Article = (props) => {

    return (
        <>
            <article
                className="catalog-img"
                style={{ backgroundImage: `url(${props.background})` }}
                onClick={props.onClick}
            >
                <div className="rpg-info">
                    <h3>{props.title}</h3>

                    <span>{props.ep} Episódios</span>
                    <div>
                        <abbr title="Assistir">
                            <button onClick={props.onClick}>
                                <span className="material-symbols-outlined">
                                    play_arrow
                                </span>
                            </button>
                        </abbr>

                        <abbr title="Adicionar a lista">
                            <button>
                                <span className="material-symbols-outlined">
                                    add
                                </span>
                            </button>
                        </abbr>

                        <abbr title="Mais informações">
                            <button>
                                <span className="material-symbols-outlined">
                                    expand_more
                                </span>
                            </button>
                        </abbr>
                    </div>
                </div>
            </article>
        </>
    );
};

export default Article;
