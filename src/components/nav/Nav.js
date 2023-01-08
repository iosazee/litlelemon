import './Nav.css'
// import {ReactComponent as Logo} from '../../assets/logo.svg'


const Nav = () => {

    return (
        <nav>
            {/* <Logo /> */}
            <img src={require('../../assets/logo.svg').default} alt="logo" className='logo'/>
            <ul>
                <li> <a href="#">Home</a> </li>
                <li> <a href="#">About</a> </li>
                <li> <a href="#">Menu</a> </li>
                <li> <a href="#">Reservations</a> </li>
                <li> <a href="#">Order Online</a> </li>
                <li> <a href="#">Login</a> </li>
            </ul>
        </nav>
    )
}

export default Nav;