function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }  


  return (
    <li className="place__item-wrapper" onClick={handleClick}>
      <figure className="place__item">
        <img src={props.card.link} alt={props.card.name} className="place__image" />
        <button
          className="place__delete link"
          type="button"
          aria-label="удалить"
        />
        <figcaption className="place__title-wrapper">
          <h2 className="place__title">{props.card.name}</h2>
          <div className="place__like-wrapper">
            <button className="place__like" type="button" />
            <p className="place__count">{props.card.likes.length}</p>
          </div>
        </figcaption>
      </figure>
    </li>
  );
}

export default Card;
