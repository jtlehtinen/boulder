import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {MdLocationOn} from 'react-icons/md';

function Address({address}) {
  const secondaryColor = '#666';

  return (
    <Col>
      <Row>
        <span style={{fontWeight: 'bold'}}><MdLocationOn/> Address</span>
      </Row>
      <Row>
        <span style={{color: secondaryColor}}>{address.street}</span>
      </Row>
      <Row>
        <span style={{color: secondaryColor}}>{address.postalCode} {address.city}</span>
      </Row>
    </Col>
  );
}

export default Address;
