import Layout from "../layouts/main";
import {
  Spinner
  
} from 'reactstrap';


export default function Contacts() {
  return <Layout> 
     
  <div className="row ">
  
    <div className="container col-sm-12 widgets py-4">
       


    <div className="col-sm-4 pt-2">
    <img className="w-80 rounded"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwHg9NeCSUSpG3vAGOmcNuPnbjj-YpMtX9w&usqp=CAU" />
        </div>
        <div className="col-sm-4 pt-4"><span>رضا امیری</span></div>
        <div className="col-sm-4 pt-4">  <Spinner type="grow" color="success" /></div>
    </div>
    <div className="container col-sm-12 widgets py-4">
    <div className="col-sm-4 pt-2">
    <img className="w-80 rounded"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBj-1KIYtvjs4ft-nBOoDvTshg3UtK02xhhA&usqp=CAU" />
        </div>
        <div className="col-sm-4 pt-4"><span>علی مهدوی</span></div>
        <div className="col-sm-4 pt-4"> <i className="	fas fa-phone-slash"></i></div>
    </div>
    <div className="container col-sm-12 widgets py-4">
    <div className="col-sm-4 pt-2">
    <img className="w-80 rounded"  src="https://dental-smile.net/public/uploads/profile_png_1113533201904221555971977765.png" />
        </div>
        <div className="col-sm-4 pt-4"><span>حسن امیدوار</span></div>
        <div className="col-sm-4 pt-4">  <Spinner type="grow" color="success" /></div>
    </div>
    <div className="container col-sm-12 widgets py-4">
    <div className="col-sm-4 pt-2">
    <img className="w-80 rounded"  src="https://cnet2.cbsistatic.com/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg" />
        </div>
        <div className="col-sm-4 pt-4"><span>شقایق رحمتی</span></div>
        <div className="col-sm-4 pt-4"> <i className="	fas fa-phone-slash"></i></div>
    </div>
    
      
  </div>
  
  



</Layout>

};
