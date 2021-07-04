import './App.css'
import productImage from './product_img.png'
import { Container, Row, Col } from 'react-bootstrap'
import img from './info-tooltip.svg'
const feature = [
  '4X more efficient as a standard model',
  '10-year manufacturer warranty',
  'Build-in leak prevention system',
  'Control settings with a mobile app',
]
const style = {
  width: '6px',
  height: '6px',
  backgroundColor: '#fff',
  borderRadius: '50px',
  top: '10px',
  left: '4px',
  position: 'absolute',
}
const Circle = () => {
  return (
    <>
      <div
        style={{
          position: 'relative',
        }}
      >
        <i class="fa fa-circle text-warning"></i>

        <div style={style}></div>
      </div>
    </>
  )
}
function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm={4} className="border">
            <Row className="bg-dark d-block text-left p-1 text-light">
              <h4 className="p-0 m-0">Rheem</h4>
              <span>Pro Prestige 50 LeakGuard</span>
            </Row>

            <Row className="mt-2">
              <Col sm={3}>
                <img src={productImage} alt="product image" />
              </Col>

              <Col sm={9} className="text-left">
                {feature.map((info, index) => (
                  <div key={index} className="d-flex">
                    <Circle />
                    <p className="ml-1">{info}</p>
                  </div>
                ))}
              </Col>
            </Row>
            <hr />

            <Container>
              <Row className="justify-content-between">
                <h6>Base Price </h6>
                <span className="text-muted" style={{ lineHeight: '0.8' }}>
                  ...............................................................
                </span>
                <h6>$1,500</h6>
                <p className="text-muted">(Installation not included)</p>
              </Row>
              <Row className="justify-content-between">
                <p className="ml-2">
                  Available Incentives <img src={img} />
                </p>
                <span className="text-muted" style={{ lineHeight: '1.1' }}>
                  .................................................
                </span>
                <p>$0</p>
              </Row>
              <Row className="justify-content-between">
                <h6 className="text-left">
                  Equipment Cost <img src={img} />
                </h6>
                <span className="text-muted" style={{ lineHeight: '0.8' }}>
                  .................................................
                </span>
                <h6 className="text-warning">$1,500</h6>
              </Row>

              <Row className="p-2  border rounded border-success">
                <Col>
                  <h6 className="text-center ">
                    Your Est. Annual Savings is{' '}
                    <span className="text-success font-weight-bold">
                      $160 <img src={img} />
                    </span>
                  </h6>
                </Col>
              </Row>

              <Row className=" mt-2">
                <p className="container col-6 rounded bg-warning text-light p-2">
                  Get Install Quote
                </p>
              </Row>
            </Container>
            <Row className="text-center bg-light ">
              <Col>
                <a className="font-weight-bold" href="#">
                  View More Details
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
