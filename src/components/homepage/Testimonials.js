import ReviewCard from "./ReviewCard";

const Testimonials = () => {

    
    const reviewInfo = [

        {
            id: '1',
            heading: 'Rating :',
            rating: '⭐⭐⭐⭐⭐',
            img: <img src="https://placehold.co/199x199"  alt="placeholder" />,
            name: 'Jason Meffy',
            reviewText: `LitleLemon Chicago serves the most delicious meals at a very pocket 
                            friendly price. I give them a five out of five`
        },

        {
            id: '2',
            heading: 'Rating :',
            rating: '⭐⭐⭐⭐⭐',
            img: <img src="https://placehold.co/199x199"  alt="placeholder" />,
            name: 'Jason Meffy',
            reviewText: `LitleLemon Chicago serves the most delicious meals at a very pocket 
                            friendly price. I give them a five out of five`
        },

        {
            id: '3',
            heading: 'Rating :',
            rating: '⭐⭐⭐⭐⭐',
            img: <img src="https://placehold.co/199x199"  alt="placeholder" />,
            name: 'Jason Meffy',
            reviewText: `LitleLemon Chicago serves the most delicious meals at a very pocket 
                            friendly price. I give them a five out of five`
        },

        {
            id: '4',
            heading: 'Rating :',
            rating: '⭐⭐⭐⭐⭐',
            img: <img src="https://placehold.co/199x199"  alt="placeholder" />,
            name: 'Jason Meffy',
            reviewText: `LitleLemon Chicago serves the most delicious meals at a very pocket 
                            friendly price. I give them a five out of five`
        }
    ]

    return (
        <section className="testimonials">
        <h2>Testimonials</h2>
        <div className='reviews-ctn'>
            {
                reviewInfo.map((info) => <ReviewCard 
                heading={info.heading}
                rating={info.rating}
                img={info.img}
                name={info.name}
                reviewText={info.reviewText}
                key={info.id}
                />)
            }
        </div>
    </section>
    )
}

export default Testimonials;