import React from "react";
import {  Navbar,  Button, ButtonGroup,Badge} from 'reactstrap';
export default function Footer() {
  return (
    <footer class="footer ">
            <Navbar className="navbar-primery " light>
            <div className="row mx-auto">
            <ButtonGroup>
                
  <Button className="btn-footer" href="./."><i className="fa 	fa fa-home"></i> </Button>
  <Button className="btn-footer" href="/msg"><i className="	far fa-comments"></i></Button>
  <Button className="btn-footer"><i className=" fa fa-phone"></i></Button>
  <Button className="btn-footer" href="/contacts"><i className="fa fa-user-circle"></i></Button>
  
           </ButtonGroup>
           </div>
      </Navbar>
        </footer>
  );
}
