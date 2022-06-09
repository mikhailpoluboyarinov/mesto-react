import avatarProfile from "../images/avatar.jpg";

export default function Main() {

    const handleEditAvatarClick = () => {
        const editAvatarPopup = document.querySelector('.popup_update-avatar');

        editAvatarPopup.classList.add('popup_opened');
    }

    const handleEditProfileClick = () => {
        console.log('test');

        const editProfilePopup = document.querySelector('.popup_edit');

        editProfilePopup.classList.add('popup_opened');
    }

    const handleAddPlaceClick = () => {
        const addPlacePopup = document.querySelector('.popup_add');

        addPlacePopup.classList.add('popup_opened');
    }


    return (
        <main>
            <section className="profile">
                <div onClick={handleEditAvatarClick} className="profile__avatar-container">
                    <img className="profile__avatar" src={avatarProfile} alt="Аватар профиля" />
                </div>
                <div className="profile__info-container">
                    <div className="profile__info">
                        <h1 className="profile__title">Жак-Ив Кусто</h1>
                        <button onClick={handleEditProfileClick} className="profile__edit-button" type="button" aria-label="Редактировать профиль"></button>
                    </div>
                    <p className="profile__subtitle">Исследователь океана</p>
                </div>
                <button onClick={handleAddPlaceClick} className="profile__add-button" type="button" aria-label="Добавить карточку"></button>
            </section>
            <section className="elements">
            </section>
        </main>
    )
}