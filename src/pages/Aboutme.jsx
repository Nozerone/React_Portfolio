import React from 'react';
import { BookOpenText } from 'lucide-react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';



const Aboutme = () => {
  return (
    <>
    <div className='card'>
      <div className='card-title-container'>
        <BookOpenText size={32} style={{border:'9px'}}/>
        <h2 className='card-title'>About me</h2>
      </div>
      <div>
        <Container className='container-md'>
          <Image src="src/assets/images/wXGYJQZK.jpeg" rounded className="card-img-top col-sm-6 " />
        </Container>  
    <p className='card-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam. Consectetur adipiscing elit ut aliquam purus sit amet. Nisi porta lorem mollis aliquam ut. Quis varius quam quisque id diam vel quam elementum.

        Libero enim sed faucibus turpis in eu mi bibendum neque. Gravida arcu ac tortor dignissim convallis. Lectus proin nibh nisl condimentum id venenatis. Fusce ut placerat orci nulla pellentesque dignissim. Nulla facilisi cras fermentum odio eu feugiat. Eu turpis egestas pretium aenean pharetra magna ac placerat. Orci porta non pulvinar neque laoreet suspendisse. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum </p>
      </div>
    </div>
    
    </>
  );
}

export default Aboutme;
