import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '28rem' }}>
      <Card.Img  src="./src/assets/china.jpg" />
      <Card.Body>
        <Card.Title><h3>Bienvenidos a Instaya</h3></Card.Title>
        <Card.Text>
          La Plataforma para el envio y Recogida de Paquetes
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default BasicExample;