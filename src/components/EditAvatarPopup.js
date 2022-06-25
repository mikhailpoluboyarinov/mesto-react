import { useEffect, useRef, useState } from "react";

import PopupWithForm from "./PopupWithForm";

export function EditAvatarPopup (props) {
    const { isOpen, onClose, onUpdateAvatar } = props;
    const [avatar, setAvatar] = useState('');
    const avatarLink = useRef('');


    //Сбрасываю поле ввода
    useEffect(() => {
        if (isOpen) {
            setAvatar('');
        }
    }, [isOpen]);

    const handleChangeAvatar = (evt) => {
        setAvatar(evt.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
            avatar: avatarLink.current.value
        });
    }

    return (
        <PopupWithForm
            name="update-avatar"
            title="Обновить аватар"
            submitBtnText="Создать"
            isOpened={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label className="form__field">
                <input className="popup__input form__input form__input_type_link" id="avatar-input" type="url"
                       name="avatar" placeholder="Ссылка на картинку" value={avatar} ref={avatarLink} required
                       onChange={handleChangeAvatar} />
                <span className="form__error avatar-input-error popup__error"></span>
            </label>
        </PopupWithForm>
    )
}