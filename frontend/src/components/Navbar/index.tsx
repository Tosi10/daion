import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';


function Navbar() {

    return (
        <header>
            <nav  className="container">
                <div className='daion-nav-content'>
                    <h1>Daion</h1>
                    <a href="https://github.com/Tosi10">
                        <div className='daion-contact-container'>
                            <GithubIcon />
                            <p className='daion-contact-link'>
                                Daion
                            </p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );

}

export default Navbar; 