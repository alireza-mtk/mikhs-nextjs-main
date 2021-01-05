import Layout from "../layouts/main";
import { Badge,CardSubtitle} from 'reactstrap';

export default function msg() {
  return <Layout> 
 <div className="row ">
  
  <div className="container col-sm-12 widgets py-4">
     


  <div className="col-sm-4 pt-2">
  <img className="w-80 rounded"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwHg9NeCSUSpG3vAGOmcNuPnbjj-YpMtX9w&usqp=CAU" />
      </div>
      <div className="col-sm-4 pt-4"><span>رضا امیری</span> <CardSubtitle tag="h6" className="mt-2 text-muted">سلام خوبی؟</CardSubtitle></div>
      <div className="col-sm-4 pt-4">  <Badge color="success" pill>1</Badge></div>
  </div>
  <div className="container col-sm-12 widgets py-4">
  <div className="col-sm-4 pt-2">
  <img className="w-80 rounded"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBj-1KIYtvjs4ft-nBOoDvTshg3UtK02xhhA&usqp=CAU" />
      </div>
      <div className="col-sm-4 pt-4"><span>علی مهدوی</span><CardSubtitle tag="h6" className="mt-2 text-muted">مهندس سلام</CardSubtitle></div>
      <div className="col-sm-4 pt-4">  <Badge color="success" pill>3</Badge></div>
  </div>
  <div className="container col-sm-12 widgets py-4">
  <div className="col-sm-4 pt-2">
  <img className="w-80 rounded"  src="https://dental-smile.net/public/uploads/profile_png_1113533201904221555971977765.png" />
      </div>
      <div className="col-sm-4 pt-4"><span>حسن امیدوار</span><CardSubtitle tag="h6" className="mt-2 text-muted">تماس بگیر</CardSubtitle></div>
      <div className="col-sm-4 pt-4"><Badge color="success" pill>2</Badge></div>
  </div>
  <div className="container col-sm-12 widgets py-4">
  <div className="col-sm-4 pt-2">
  <img className="w-80 rounded"  src="https://cnet2.cbsistatic.com/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg" />
      </div>
      <div className="col-sm-4 pt-4"><span>شقایق رحمتی</span> <CardSubtitle tag="h6" className="mt-2 text-muted">کجا هستین؟</CardSubtitle></div>
      <div className="col-sm-4 pt-4"><Badge color="success" pill>13</Badge></div>
  </div>
  
    
</div>




</Layout>

};
