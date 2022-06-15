export default function Card (props) {
    const { card, onCardClick } = props;

    const handleCardClick = () => {
        onCardClick(card);
    }

    return (
        <article className="element" onClick={handleCardClick}>
            <img className="element__image" src={card.link} alt="изображение" />
            <button className="element__delete-button" type="button" aria-label="Удаление карточки"></button>
            <div className="element__info">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like">
                    <button className="element__like-button" type="button" aria-label="Мне нравится"></button>
                    <span className="element__likes-count">{card.likes.length}</span>
                </div>
            </div>
        </article>
    )
}