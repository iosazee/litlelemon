function Hero () {
    return (
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
    )
}

export default Hero;