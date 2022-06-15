import { useState } from "react";

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

import '../index.css';

export default function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setIsImagePopupOpen(true);
    }

    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsImagePopupOpen(false);
    }

  return (
      <div className="page__content">
        <Header />
        <Main
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onCardClick={handleCardClick}
        />
        <ImagePopup
            card={selectedCard}
            isOpened={isImagePopupOpen}
            onClose={closeAllPopups}
        />
        <Footer />
        <PopupWithForm
            name="edit"
            title="Редактировать профиль"
            submitBtnText="Сохранить"
            isOpened={isEditProfilePopupOpen}
            onClose={closeAllPopups}
        >
            <label className="form__field">
                <input className="popup__input form__input form__input_type_name" id="name-input" type="text"
                    name="name" value="Жак-Ив Кусто" autoComplete="off" minLength="2" maxLength="40"
                    required
                />
                <span className="form__error name-input-error popup__error"></span>
            </label>
            <label className="form__field">
                <input className="popup__input form__input form__input_type_profession" id="profession-input"
                    type="text" name="profession" autoComplete="off" value="Исследователь океана"
                    placeholder="Профессия" minLength="2" maxLength="200" required
                />
                <span className="form__error profession-input-error popup__error"></span>
            </label>
        </PopupWithForm>

        <PopupWithForm
            name="add_card"
            title="Новое место"
            submitBtnText="Создать"
            isOpened={isAddPlacePopupOpen}
            onClose={closeAllPopups}
        >
            <label className="form__field">
                <input className="popup__input form__input form__input_type_place" id="place-input"
                       type="text" name="name-of-place" placeholder="Название" value="" minLength="2"
                       maxLength="30" required />
                <span className="form__error place-input-error popup__error"></span>
            </label>
            <label className="form__field">
                <input className="popup__input form__input form__input_type_link" id="link-input" type="url"
                       name="link" placeholder="Ссылка на картинку" value="" required />
                <span className="form__error link-input-error popup__error"></span>
            </label>
        </PopupWithForm>

        <PopupWithForm
            name="confirm"
            title="Вы уверены?"
            submitBtnText="Да"
        />

        <PopupWithForm
            name="update-avatar"
            title="Обновить аватар"
            submitBtnText="Создать"
            isOpened={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
        >
            <label className="form__field">
                <input className="popup__input form__input form__input_type_link" id="avatar-input" type="url"
                       name="avatar" placeholder="Ссылка на картинку" value="" required />
                <span className="form__error avatar-input-error popup__error"></span>
            </label>
        </PopupWithForm>
      </div>
  );
}