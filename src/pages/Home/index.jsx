import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './home.css'

function Home(){

    return(
      <>  
      <body> </body>
        <div>
            <center><h1 className='titulo'>Projeto Academia</h1></center>
           <script src="img.jpeg"></script>
            <p></p>
            <br/><br />
        </div>
        <p>Aqui ficara uma imagem dividindo a tela, conteudo</p><br />

        <div>
            <CardGroup className='carde'>
            <Card>
              <Card.Img variant="top" src="img1.jpeg" />
              <Card.Body>
                <Card.Title>Academias</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="Imagem 2" />
              <Card.Body>
                <Card.Title>Cadastre-se</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="Imagem 3" />
              <Card.Body>
                <Card.Title>Sobre nós</Card.Title>
                <Card.Text>
                  <b>aqui ficará as informações</b>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
            </div>
        </>   
    )



}

export default Home;


