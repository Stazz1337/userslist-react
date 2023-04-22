function ImagePopup(props) {
  return (
    <div className= {`popup popup_type_image ${(props.card && Object.keys(props.card).length !== 0) ? 'popup_opened' : ''}`} onMouseDown={props.onOuterClick}>
      <div className="popup__container-image">
        <button
          className="popup__close link"
          type="button"
          aria-label="закрыть"
        />
        <img src={props.card.link} alt={props.card.name} className="popup__image" />
        <p className="popup__image-title">{props.card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
