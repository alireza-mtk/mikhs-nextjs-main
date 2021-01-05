import React, { useState } from 'react';

import { InputGroup, InputGroupAddon, 
   
    InputGroupText, Input,  Col, FormGroup, Label,Button } from 'reactstrap';



const Example = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
   
  
    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
    
  return (
      
<div className="row containet">
    <div className="col-md-12">
      <InputGroup className="col-sm-5">
        <InputGroupAddon  addonType="prepend">
          <InputGroupText>نام کاربری:</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <br />
      <InputGroup className="col-sm-5">
        <InputGroupAddon  addonType="prepend">
          <InputGroupText>تاریخ تولد:</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="00/00/00" />
      </InputGroup>
      <br />
      <InputGroup className="col-sm-5">
        <InputGroupAddon  addonType="prepend">
          <InputGroupText>تلفن همراه:</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="09xxxxxx" />
      </InputGroup>
      <br />
      <InputGroup className="col-sm-5">
        <InputGroupAddon  addonType="prepend">
          <InputGroupText>تحصیلات:</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="..." />
      </InputGroup>
      <br />
      <FormGroup>
        <Label for="exampleSelect">تاهل:</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>مجرد</option>
          <option>متاهل</option>
          <option>غیره</option>
          
        </Input>
      </FormGroup>
        <FormGroup row>
        <Label for="exampleText" >توضیحات:</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" />
        </Col>
      </FormGroup>
      <br/>
      <div className="row">
      <Button className="my-2 mx-auto" color="primary">ثبت</Button>{' '}
      </div>
    
    </div>
    </div>
  );
};

export default Example;