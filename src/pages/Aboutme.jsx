import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';




const Aboutme = () => {
  return (
    <>
       <Container className='container-fluid m-4'>
    <div className='container col'>
      <div className='row'>
          <Image src="src/assets/images/wXGYJQZK.jpeg" className="w-50 p-3" alt="photo of me at the beach"/>
          <p className='card-text text-start text-wrap w-medium w-50 mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam. Consectetur adipiscing elit ut aliquam purus sit amet. Nisi porta lorem mollis aliquam ut. Quis varius quam quisque id diam vel quam elementum.<br></br>

            Libero enim sed faucibus turpis in eu mi bibendum neque. Gravida arcu ac tortor dignissim convallis. Lectus proin nibh nisl condimentum id venenatis. Fusce ut placerat orci nulla pellentesque dignissim. Nulla facilisi cras fermentum odio eu feugiat. Eu turpis egestas pretium aenean pharetra magna ac placerat. Orci porta non pulvinar neque laoreet suspendisse. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum 
              
          </p>
      </div>
    </div>
      </Container>  
    
    </>
  );
}

export default Aboutme;
