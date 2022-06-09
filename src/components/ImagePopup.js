export default function ImagePopup() {
    return (
        <div className="popup popup_photo">
            <div className="popup__container-photo">
                <img className="popup__image" src="#" alt="" />
                <h2 className="popup__title"></h2>
                <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
            </div>
        </div>
    )
}