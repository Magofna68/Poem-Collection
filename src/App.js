// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar} from 'react-bootstrap';
import Nav from 'react-bootstrap/esm/Nav';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';



import ITyped from './components/Ityped';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      title: 'Poems of a Lifetime',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Poem List', path: '/poems' },
        // { title: 'Home', path: '/' },
      ],
      home: {
        title: 'Poems of a Lifetime by Brandon Magofna',
        subTitle: 'Checkout my featured poem for the month:',
        // text: <ITyped/>,
      },
      about: {
        title: 'Meet Brandon.',
        subTitle: 'Author, Developer, & Content Creater',
        // text: <ITyped/>,
      },
      poems: {
        title: 'My Archive: Poem\'s of a Lifetime.',
        subTitle: 'Even on the darkest of nights, all it takes is a single star to illuminate the sky.',
        text: '"Poetry is the clear expression of mixed feelings."',
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>
              <Link className="logo" to="/poems">Greatness Awaits</Link>
            </Navbar.Brand>

            <NavbarToggle className="border-0" aria-controls="navbar-toggle"/>
            <NavbarCollapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/collection">Collection</Link>

                {/* <div className="anchorTag1">
                  <a href="https://www.instagram.com/maddie_vitalityfitness/" alt="instagram"><span><InstagramIcon fontSize="large" /></span></a>
                </div>
                <div className="anchorTag2">
                  <a href="https://www.facebook.com/maddie.kiplinger" alt="facebook"><span><FacebookIcon fontSize="large" /></span></a>
                </div> */}
              </Nav>
            </NavbarCollapse>
            </Navbar>
            <Route path="/" exact render={()=> <HomePage title={this.state.home.title} subTitle={this.state.home.subString} text={this.state.home.text} />} />
            <Route path="/about" exact render={()=> <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text}/>}/>
            <Route path="/collection" exact render={()=> <CollectionPage title={this.state.collection.title} subTitle={this.state.collection.subTitle} text={this.state.collection.text}/>}/>
            <Footer/>
          </Container>
      </Router>
    )
  }
}

export default App;
