const About = () => {
    return (
        <section className="about">
            <div className='about-info'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Little Lemon is a charming local bistro,
                    that serves simple food and classic cocktails
                    in a casual but lively environment. It was founded
                    by brothers, Mario and Adrian who learnt the secrets 
                    of making a good meal from their grandma!
                </p>
            </div>
            <div className='about-img-ctn'>
                <img src={require('../../assets/founder.jpg')} alt="founder" className='founder'/>
                <img src={require('../../assets/cofounder.jpg')} alt="co-founder" />
            </div>
        </section>
    )
}

export default About;