import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='footer-logo-ctn'>
                <img src={require('../../assets/footer-logo.png')} alt="footer-logo" className='footer-logo'/>
            </div>
            <ul>
                <li> <a href="#home">Home</a> </li>
                <li> <a href="#about">About</a> </li>
                <li> <a href="#menu">Menu</a> </li>
                <li> <a href="#reservations">Reservations</a> </li>
                <li> <a href="#online-menu">Order Online</a> </li>
                <li> <a href="#login">Login</a> </li>
            </ul>
            <div>
                <h3>Contacts</h3>
                <ul>
                    <li className='footer-contacts'> Address: <span>22 Chicago Way, IL, Chicago</span> </li>
                    <li className='footer-contacts'> Phone Number:  <span>+01123456798</span> </li>
                    <li className='footer-contacts'> Email:  <span>contact@litlelemon.rest</span></li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li> <a href="#meta"><img src={require('../../assets/facebook.svg').default} alt='facebook-icon' /></a> </li>
                    <li> <a href="#instagram"><img src={require('../../assets/instagram.svg').default} alt='facebook-icon' /></a> </li>
                    <li> <a href="#twitter"><img src={require('../../assets/twitter.svg').default} alt='facebook-icon' /></a> </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;