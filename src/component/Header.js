import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Header extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            server: 'http://localhost:3001/',
            returned: '',
            user_id: '',
            Categorys:[]
        }
    }

    render() {
        return (
            <div className="Header">
                 <div className="header-top ">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-6 col-sm-5 hidden-xs">
                                    <span>للسؤال اتصل بهذا الرقم : 01554238047</span>
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-7 col-xs-12">
                                    <div className="header-top-right">
                                        <div className="content"><a href="#"> <i className="zmdi zmdi-facebook"></i></a></div>
                                        <div className="content"><a href="#"><i className="zmdi zmdi-instagram"></i></a></div>
                                        <div className="content"><a href="#"><i className="zmdi zmdi-twitter"></i></a></div>
                                        <div className="content"><a href="#"><i className="zmdi zmdi-google"></i></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-logo-menu sticker headd">
                        <div className="container">
                            <div className="row">
                                
                                <div className="">
                                    <div className="mainmenu-area  pull-left">
                                        <div className="mainmenu">
                                            <nav>
                                                <ul id="nav" style={{marginTop:"15px"}}className="flexs">
                                                <li className="">< Link to="/" className="current">الرئيسيه</Link></li>
                                                <li className=""><Link to="/Teacher-Profile" className="current">الصفحه الشخصيه</Link></li>
                                                <li className=""><Link to="/Student-Profile"  className="current">الصفحه الشخصيه2</Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    
                                        {/* <!--Search Form-->
                                        
                                        <!--End of Search Form--> */}
                                    </div> 
                                </div>
                                <div className="mrl">
                                    <div className="logo float-right">
                                        < Link to="/"><img className="image-size" src="img/logo/logo.png" alt="EDUCAT"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Header;