import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(avatarRef.current.value);
    props.onUpdateAvatar(avatarRef.current.value);
    avatarRef.current.value = "";
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="update-avatar"
      buttonText={props.isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onOuterClick={props.onOuterClick}
      onSubmit={handleSubmit}
      children={
        <>
          <input
            ref={avatarRef}
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
  );
}

export default EditAvatarPopup;
