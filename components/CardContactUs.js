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
        <img className="w-100 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzj-MkobpWDGTkwXPz3Nsaq5BFcumoJmZCiw&usqp=CAU" alt="Card image cap" />
        <CardBody>
        <CardText><NavLink href="/contactUs"><a>تماس با ما</a></NavLink></CardText>
          
        </CardBody>
      </Card>
      </div>
   
  );
};

export default Example;