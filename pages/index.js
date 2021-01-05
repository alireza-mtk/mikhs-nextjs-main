import Layout from "../layouts/main";
import CardContactUs from "../components/CardContactUs";
import CardMsg from "../components/CardMsg";
import CardEdj from "../components/CardEdj";
import CardGroup from "../components/CardGroup";
import CardContacts from "../components/CardContacts";
import CardAboutUs from "../components/CardAboutUs";
import {
   Row ,Col
  } from 'reactstrap';

export default function Home() {
  return <Layout> 

     
      <img className="w-100" src="https://ponisha.ir/usercontent/337674/portfolios/106963/portfolio-f63e7bcf9275c6aedb964e48b430ffbc.jpg" />
      
      <Row className="my-3">
      <Col xs="6">
      <CardContactUs/>
      </Col>
      <Col xs="6">
      <CardMsg/>
      </Col>
      </Row>

      <Row className="my-3">
      <Col xs="6">
      <CardEdj/>
      </Col>
      <Col xs="6">
      <CardGroup/>
      </Col>
      </Row>

      <Row className="my-3">
      <Col xs="6">
      <CardContacts/>
      </Col>
      <Col xs="6">
      <CardAboutUs/>
      </Col>
      </Row>

     
</Layout>

};
