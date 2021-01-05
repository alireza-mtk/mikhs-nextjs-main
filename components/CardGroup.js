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
        <img className="w-100 rounded"  src="https://metricschampion.org/wp-content/uploads/home-presentation.jpg" alt="Card image cap" />
        <CardBody>
          <CardText><NavLink href="/groups"><a>گروه ها</a></NavLink></CardText>
          
        </CardBody>
      </Card>
      </div>
   
  );
};

export default Example;