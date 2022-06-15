import { useState, useEffect } from "react";

import avatarProfile from "../images/avatar.jpg";
import {api} from "../utils/Api";
import Card from "./Card";

export default function Main(props) {
    const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props;

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription ] = useState('');
    const [userAvatar, setUserAvatar] = useState(avatarProfile);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo().then((data) => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        api.getInitialCards().then((data) => {
            setCards(data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <main>
            <section className="profile">
                <div onClick={onEditAvatar} className="profile__avatar-container">
                    <img className="profile__avatar" src={userAvatar} alt="Аватар профиля"/>
                </div>
                <div className="profile__info-container">
                    <div className="profile__info">
                        <h1 className="profile__title">{userName}</h1>
                        <button onClick={onEditProfile} className="profile__edit-button" type="button" aria-label="Редактировать профиль"></button>
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button onClick={onAddPlace} className="profile__add-button" type="button" aria-label="Добавить карточку"></button>
            </section>
            <section className="elements">
                {cards.map((item) => {
                    return (
                        <Card key={item._id} card={item} onCardClick={onCardClick} />
                    )
                })}
            </section>
        </main>
    );
}