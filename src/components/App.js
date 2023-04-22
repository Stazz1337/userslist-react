import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

  const [userDataResult, setUserDataResult] = useState({});

  const [cardsResult, setCardsResult] = useState([]);

  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setUserDataResult(userData);
        console.log(cards);

        setCardsResult(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardClick(e) {
    console.log(e);
    setSelectedCard(e);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function handleOuterClick(evt) {
    if (evt.target.classList.contains("popup_opened")) {
      closeAllPopups();
    }
    if (evt.target.classList.contains("popup__close")) {
      closeAllPopups();
    }
  }

  return (
    <div className="wrapper">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        userName={userDataResult.name}
        userDescription={userDataResult.about}
        userAvatar={userDataResult.avatar}
        cards={cardsResult}
      />
      <Footer />

      <PopupWithForm
        title="Редактировать профиль"
        name="edit-profile"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onOuterClick={handleOuterClick}
        children={
          <>
            <input
              type="text"
              id="name-input"
              name="name"
              className="popup__text popup__text_type_name"
              placeholder="Имя"
              minLength={2}
              maxLength={40}
              required=""
            />
            <span className="popup__input-error name-input-error">Error</span>
            <input
              type="text"
              id="about-input"
              name="about"
              className="popup__text popup__text_type_about"
              placeholder="Профессия"
              minLength={2}
              maxLength={200}
              required=""
            />
            <span className="popup__input-error about-input-error">Error</span>
          </>
        }
      />
      <PopupWithForm
        title="Новое место"
        name="add-card"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onOuterClick={handleOuterClick}
        children={
          <>
            <input
              type="text"
              id="imageName-input"
              name="name"
              className="popup__text popup__text_type_imageName"
              placeholder="Название"
              minLength={2}
              maxLength={30}
              required=""
            />
            <span className="popup__input-error imageName-input-error">
              Error
            </span>
            <input
              type="url"
              id="imageLink-input"
              name="link"
              className="popup__text popup__text_type_imageLink"
              placeholder="Ссылка на картинку"
              required=""
            />
            <span className="popup__input-error imageLink-input-error">
              Error
            </span>
          </>
        }
      />
      <PopupWithForm title="Вы уверены?" name="confirm" buttonText="Да" />

      <PopupWithForm
        title="Обновить аватар"
        name="update-avatar"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onOuterClick={handleOuterClick}
        children={
          <>
            <input
              type="url"
              id="avatarLink-input"
              name="imageLink"
              className="popup__text popup__text_type_imageLink"
              placeholder="Ссылка на картинку"
              required=""
            />
            <span className="popup__input-error avatarLink-input-error">
              Error
            </span>
          </>
        }
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        onOuterClick={handleOuterClick}
      />
    </div>
  );
}

export default App;
