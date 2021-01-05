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
        <img className="w-100 rounded" src="https://nevisesh.com/blog/wp-content/uploads/2020/04/10-%D8%B5%D9%81%D8%AD%D9%87-%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D9%85%D8%A7%D8%8C-%D8%A7%D8%B2-%D8%B3%DB%8C%D8%B1-%D8%AA%D8%A7-%D9%BE%DB%8C%D8%A7%D8%B2-.jpg" alt="Card image cap" />
        <CardBody>
        <CardText><NavLink href="/aboutUs"><a>درباره ما</a></NavLink></CardText>
          
        </CardBody>
      </Card>
      </div>
   
  );
};

export default Example;