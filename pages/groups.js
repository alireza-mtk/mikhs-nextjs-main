import Layout from "../layouts/main";


export default function groups() {
  return <Layout> 
     
  <div className="row ">
  
    <div className="container col-sm-12 widgets py-4">
        <div className="col-sm-4 pt-2">
        <i className="		fas fa-users"></i>
        </div>
        <div className="col-sm-4"><span>ایجاد گروه</span></div>
        <div className="col-sm-4 pt-2"> <i className="	fa fa-angle-double-left"></i></div>
    </div>
    <div className="container col-sm-12 widgets py-4">
        <div className="col-sm-4 pt-2">
        <i className="		fas fa-user-friends"></i>
        </div>
        <div className="col-sm-4"><span>هم گروهی ها</span></div>
        <div className="col-sm-4 pt-2"> <i className="	fa fa-angle-double-left"></i></div>
    </div>
    <div className="container col-sm-12 widgets py-4">
        <div className="col-sm-4 pt-2">
        <i className="	fas fa-user-plus"></i>
        </div>
        <div className="col-sm-4"><span>عضویت در گروه جدید</span></div>
        <div className="col-sm-4 pt-2"> <i className="	fa fa-angle-double-left"></i></div>
    </div>
    <div className="container col-sm-12 widgets py-4">
        <div className="col-sm-4 pt-2">
        <i className="		fas fa-plus-circle"></i>
        </div>
        <div className="col-sm-4"><span>ایجاد کانال محلی</span></div>
        <div className="col-sm-4 pt-2"> <i className="	fa fa-angle-double-left"></i></div>
    </div>
    
      
  </div>
  
  



</Layout>

};
