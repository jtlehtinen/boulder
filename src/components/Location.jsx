import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Address from './Address';
import LeafletMap from './LeafletMap';

const abbreviations = {
  monday: 'mon',
  tuesday: 'tue',
  wednesday: 'wed',
  thursday: 'thu',
  friday: 'fri',
  saturday: 'sat',
  sunday: 'sun',
};

function TableRow({open, close}) {
  const day = open.day;

  return (
    <tr>
      <td>{abbreviations[day]}</td>
      <td>{open.time} - {close.time}</td>
    </tr>
  );
}

function Location({location}) {
  const hours = location.hours;

  return (
    <>
      <h2>{location.name}</h2>
      <Row className='d-flex align-items-center justify-content-start' style={{}}>
        <Col md='3'>
          <p style={{fontWeight: 'bold'}}>Opening hours</p>
          <table>
            <tbody>
              {hours.map((h, i) => <TableRow key={i} open={h.open} close={h.close}/>)}
            </tbody>
          </table>
        </Col>
        <Col md='3'>
          <Address address={location.address}/>
          <LeafletMap coords={location.coords}/>
        </Col>
      </Row>
      <hr/>
    </>
  );
}

export default Location;
