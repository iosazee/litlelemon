import MenuCard from './MenuCard';

const Specials = () => {

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
                key={menu.title}
                />)
            }
        </div>
    </section>
    )
}

export default Specials;