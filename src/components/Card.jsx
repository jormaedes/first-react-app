import '../styles/card.css';

function Card({title="title", description="description of card"}) {
	return (
		<div className="card__container">
			<h1 className="card__title">{title}</h1>
			<p className="card__discription">{description}</p>
		</div>
	)
}

export default Card;