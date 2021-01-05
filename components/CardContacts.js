import React from 'react';
import {
  Card, CardText, CardBody, NavLink
  
} from 'reactstrap';

const Example = (props) => {
  return (
    <div className="container">
    
      <Card className="card-cus">
        <CardBody>
         
        </CardBody>
        <img className="w-100 rounded" src="https://images.farnet.io/2020/07/Google-Contacts-featured.jpg" alt="Card image cap" />
        <CardBody>
        <CardText><NavLink href="/contacts"><a>مخاطبین</a></NavLink></CardText>
          
        </CardBody>
      </Card>
      </div>
   
  );
};

export default Example;