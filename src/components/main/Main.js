import './Main.css';
import MenuCard from './MenuCard';


function Main() {

    const data = [
        {
            title: 'Greek Salad',
            img: require('../../assets/greek salad.jpg'),
            price: '$' + 12.99,
            description: `The famous greek salad of crispy lettuce peppers, olives and our Chicago
                          style feta cheese, garnished with crunchy garlic and rosemary croutons`
        },
        {
            title: 'Bruchetta',
            img: require('../../assets/bruchetta.svg').default,
            price: '$' + 5.99,
            description: `Our bruchetta is made from grilled bread that has been smeared with garlic
                            and seasoned with salt and olive oil.`
        },
        {
            title: 'Lemon Dessert',
            img: require('../../assets/lemon dessert.jpg'),
            price: '$' + 5.00,
            description: `This comes straight from grandma's secret recipe book. Every last ingredient
                        has been sourced and is authentic as can be imagined.`
        },
    ]


    return (
        <main>
            <section className="hero">
                <div className="hero-summary">
                    <h2>Little Lemon </h2>
                    <h3>Chicago</h3> 
                    <p>We are a family owned <br></br>
                        Mediterrenean Restaurant,<br></br> 
                        focussed on traditional <br></br>
                        recipes, served with a modern twist.
                    </p>
                    <button>Reserve a Table</button>
                </div>
                <div className="hero-photo">
                    <img src={require("../../assets/restauranfood.jpg")} alt="restaurant food" />
                </div>
                </section>
                <section className="specials">
                    <div className='specials-header'>
                        <h2>This week specials!</h2>
                        <button>Online Menu</button>
                    </div>
                    <div className='specials-offers'>
                        {
                            data.map((menu) => <MenuCard 
                            title={menu.title} 
                            img={menu.img} 
                            price={menu.price} 
                            description={menu.description}
                            />)
                        }
                    </div>
                </section>
                <section className="testimonials">
                    <h2>Testimonials</h2>

                </section>
                <section className="about">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Little Lemon is a charming local bistro,
                        that serves simple food and classic cocktails
                        in a casual but lively environment.
                    </p>
                    <img src="" alt="founder"/>
                    <img src="" alt="co-founder"/>
                </section>
        </main>
    )
}

export default Main;