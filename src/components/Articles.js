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
                </div>
            </article>
        </>
    );
};

export default Article;
