import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import './App.css'
import Container from 'react-bootstrap/Container';
import {Navbar} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Home from './pages/Home';
import {Route} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Nicholas Wease',
            headerLinks: [
                { title: 'Home', path: '/' },
                { title: 'About', path: '/about' },
                { title: 'Contact', path: '/contact' }
            ],

            home: {
                title: 'Be Powerful',
                subTitle: 'Projects that Matter',
                text: 'Some of my work'
            },

            about: {
                title: 'About Me'
            },

            contact: {
                title: 'Lets Talk About the Possibilities'
            }
        }
    }

    render() {
        return (
            <Router>
                <Container className='p-0' fluid={true}>
                    <Navbar className='border-bottom' bg='transparent' expand='lg'>
                        <Navbar.Brand>
                            Nicholas Wease
                        </Navbar.Brand>

                        <Navbar.Toggle className='border-0' aria-controls='navBar-toggle' />

                        <Navbar.Collapse id='navBar-toggle'>
                            <Nav className='ml-auto'>
                                <Link className='nav-link' to='/'>
                                    Home
                                </Link>

                                <Link className='nav-link' to='/about'>
                                    About
                                </Link>

                                <Link className='nav-link' to='/contact'>
                                    Contact
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Route exact path='/'>
                        <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />
                    </Route>

                    <Route exact path='/about'>
                        <About title={this.state.about.title} />
                    </Route>

                    <Route exact path='/contact'>
                        <Contact title={this.state.contact.title} />
                    </Route>

                    {/*<Footer />*/}
                </Container>
            </Router>
        );
    }
}

export default App;
