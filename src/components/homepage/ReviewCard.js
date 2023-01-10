import './HomePage.css';

const ReviewCard = (props) => {

    return (
        <section className="review-card">
            <div>
                <h3>{props.heading}</h3>
                <p>{props.rating}</p>
            </div>
            <div>
                {props.img}
                <p>{props.name}</p>
            </div>
            <p>{props.reviewText}</p>
        </section>
    )
}

export default ReviewCard;