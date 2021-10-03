import logo from './logo.svg';
import './App.css';

import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './components/blog/Blog';
import { useEffect, useState } from 'react';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';

function App() {

  //all logic goes before return cause return only includes html
  const [page, setPage] = useState();
 
 
  const setPageRequest = (pageRequest)=> {
    console.log(pageRequest);
    switch(pageRequest){

      case "home": setPage(<Home/>);
        break;
      case "resume": setPage(<Resume/>);
        break;
      case "blog": setPage(<Blog/>);
        break;
  
  
    }
  };
  
  return (

    <>
    <Navbar bg="transparent" variant="light" className= "custom_navbar">
                <Container>
                    <Navbar.Brand onClick= {() => setPageRequest("home")}>Sukanya</Navbar.Brand>
                    <Nav className="ml-auto mr-0">
                        <Button variant="light" onClick= {() => setPageRequest("blog")}>Blog</Button>
                        <Button variant="light" onClick= {() => setPageRequest("resume")}>Resume</Button>
                    </Nav>
                </Container>
            </Navbar>
    {page} 
        

        
    </>
    
  );
}

export default App;
