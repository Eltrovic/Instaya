import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="./src/assets/LOGO2.jpg" />
        <Card.Body>
          <Card.Title>SOLUCIONES DIGITALES</Card.Title>
          <Card.Text>
          servicios y soluciones digitales en línea que simplifican, facilitan y mejoran tus procesos físicos y manuales en donde a nivel general te acompañamos en el proceso de transformación digital.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
         
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="./src/assets/china.jpg" />
        <Card.Body>
          <Card.Title>SOLUCIONES DE ENTREGA</Card.Title>
          <Card.Text>
          Hacemos la entrega, transporte y envío de documentos y mercancías, los recogemos en la puerta de tu casa y los llevamos hasta su destino en el tiempo que requieras.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
         
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="./src/assets/logo.png" />
        <Card.Body>
          <Card.Title>SOLUCIONES DE LOGISTICA</Card.Title>
          <Card.Text>
          Nos encargamos de tus importaciones y exportaciones de pequeño y gran tonelaje gracias a nuestras alianzas estratégicas alrededor del mundo, Te apoyamos en el desarrollo de tus actividades promocionales y logística promocional.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;