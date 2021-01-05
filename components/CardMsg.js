import React from 'react';
import {
  Card, CardText, CardBody,NavLink
} from 'reactstrap';

const Example = (props) => {
  return (
    <div className="container">
    
      <Card className="card-cus">
        <CardBody>
         
        </CardBody>
        <img className="w-100 rounded"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1H-0puWsngi7IYxf_ohpSmAffDENdPuQaJw&usqp=CAU" alt="Card image cap" />
        <CardBody>
        <CardText><NavLink href="/msg"><a>پیام ها</a></NavLink></CardText>
          
        </CardBody>
      </Card>
      </div>
   
  );
};

export default Example;