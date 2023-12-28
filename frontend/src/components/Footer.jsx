import {Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
    const currentYearForCopyright=new Date().getFullYear();//getting the current year
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    <p>Proshop &copy; {currentYearForCopyright}</p>
                </Col>            
            </Row>
        </Container>
    </footer>
  )
}

export default Footer