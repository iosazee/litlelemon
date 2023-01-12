import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className='footer-logo-ctn'>
                <img src={require('../../assets/footer-logo.png')} alt="footer-logo" className='footer-logo'/>
            </div>
            <ul>
                <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='/about'>About</Link> </li>
                <li> <Link to='/menu'>Menu</Link> </li>
                <li> <Link to='/booking'>Reservations</Link> </li>
                <li> <Link to='/'>Order Online</Link> </li>
                <li> <Link to='/'>Login</Link> </li>
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
                    <li> <Link href="#meta"><img src={require('../../assets/facebook.svg').default} alt='facebook-icon' /></Link> </li>
                    <li> <Link href="#instagram"><img src={require('../../assets/instagram.svg').default} alt='facebook-icon' /></Link> </li>
                    <li> <Link href="#twitter"><img src={require('../../assets/twitter.svg').default} alt='facebook-icon' /></Link> </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;