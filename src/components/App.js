import {useEffect, useState} from "react";

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {EditProfilePopup} from "./EditProfilePopup";
import {EditAvatarPopup} from "./EditAvatarPopup";
import {api} from "../utils/Api";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

import '../index.css';

import avatarProfile from "../images/avatar.jpg";
import {AddPlacePopup} from "./AddPlacePopup";

export default function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getInitialCards().then((data) => {
            setCards(data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        api.getUserInfo().then((user) => {
            setCurrentUser(user);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

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

    const handleUpdateUser = (data) => {
        api.patchUserInfo(data).then((user) => {
            setCurrentUser(user);
            closeAllPopups();
        }).catch((err) => {
            console.log(err);
        });
    }

    const handleUpdateAvatar = (data) => {
        api.patchUserAvatar(data).then((user) => {
            setCurrentUser(user);
            closeAllPopups();
        }).catch((err) => {
            console.log(err);
        });
    }

    const handleAddPlace = (card) => {
        api.postNewCard(card).then((card) => {
            setCards([card, ...cards]);
            closeAllPopups();
        }).catch((err) => {
            console.log(err);
        });
    }

    const updateCards = (card) => {
        setCards((state) => {
            return state.map(item => item._id === card._id ? card : item);
        })
    }

    const handleCardLike = (card) => {
        const isLiked = card.likes.some(item => item._id === currentUser._id);

        if (isLiked) {
            api.deleteLike(card._id).then((card) => {
                updateCards(card);
            }).catch((err) => {
                console.log(err);
            });
        } else {
            api.putLike(card._id).then((card) => {
                updateCards(card);
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    const handleDeleteCard = (card) => {
        const isOwn = card.owner._id === currentUser._id;

        if (isOwn) {
            api.deleteCard(card._id).then(() => {
                setCards((state) => {
                    return state.filter(item => item._id !== card._id);
                })
            })
        }
    }

  return (
      <CurrentUserContext.Provider value={currentUser}>
          <div className="page__content">
            <Header />
            <Main
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onCardClick={handleCardClick}
                cards={cards}
                onCardLike={handleCardLike}
                onCardDelete={handleDeleteCard}
            />
            <ImagePopup
                card={selectedCard}
                isOpened={isImagePopupOpen}
                onClose={closeAllPopups}
            />
            <Footer />
            <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser}
            />

            <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                onAddPlace={handleAddPlace}
            />

            <PopupWithForm
                name="confirm"
                title="Вы уверены?"
                submitBtnText="Да"
            />

              <EditAvatarPopup
                  isOpen={isEditAvatarPopupOpen}
                  onClose={closeAllPopups}
                  onUpdateAvatar={handleUpdateAvatar}
              />
          </div>
      </CurrentUserContext.Provider>
  );
}