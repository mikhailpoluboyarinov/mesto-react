import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


export default function App() {
  return (
      <div className="page__content">
        <Header />
        <Main />
        <ImagePopup />
        <Footer />




          <div className="popup popup_edit">
              <div className="popup__container">
                  <form className="form popup__form form_edit" name="form" noValidate>
                      <h2 className="form__title">Редактировать профиль</h2>
                      <label className="form__field">
                          <input className="popup__input form__input form__input_type_name" id="name-input" type="text"
                                 name="name" value="Жак-Ив Кусто" autoComplete="off" minLength="2" maxLength="40"
                                 required />
                              <span className="form__error name-input-error popup__error"></span>
                      </label>
                      <label className="form__field">
                          <input className="popup__input form__input form__input_type_profession" id="profession-input"
                                 type="text" name="profession" autoComplete="off" value="Исследователь океана"
                                 placeholder="Профессия" minLength="2" maxLength="200" required />
                              <span className="form__error profession-input-error popup__error"></span>
                      </label>
                      <button className="form__save-button popup__button" type="submit">Сохранить</button>
                  </form>
                  <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
              </div>
          </div>

          <div className="popup popup_add">
              <div className="popup__container">
                  <form className="form popup__form form_add_card" name="add" noValidate>
                      <h2 className="form__title">Новое место</h2>
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
                      <button className="form__save-button popup__button popup__button_add" type="submit">Создать
                      </button>
                  </form>
                  <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
              </div>
          </div>

          <div className="popup popup_confirm">
              <div className="popup__container">
                  <h2 className="popup__title popup__title_confirm">Вы уверены?</h2>
                  <button className="popup__save-button popup__confirm-button popup__button">Да</button>
                  <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
              </div>
          </div>

          <div className="popup popup_update-avatar">
              <div className="popup__container">
                  <form className="form popup__form form_update_avatar" name="form" noValidate>
                      <h2 className="form__title">Обновить аватар</h2>
                      <label className="form__field">
                          <input className="popup__input form__input form__input_type_link" id="avatar-input" type="url"
                                 name="avatar" placeholder="Ссылка на картинку" value="" required />
                              <span className="form__error avatar-input-error popup__error"></span>
                      </label>
                      <button className="form__save-button popup__button popup__button_add_avatar"
                              type="submit">Создать
                      </button>
                  </form>
                  <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
              </div>
          </div>

          <template id="template-element">
              <article className="element">
                  <img className="element__image" src="#" alt="изображение" />
                      <button className="element__delete-button" type="button" aria-label="Удаление карточки"></button>
                      <div className="element__info">
                          <h2 className="element__title"></h2>
                          <div className="element__like">
                              <button className="element__like-button" type="button" aria-label="Мне нравится"></button>
                              <span className="element__likes-count">0</span>
                          </div>
                      </div>
              </article>
          </template>




      </div>
  );
}