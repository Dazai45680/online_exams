import React, { Component } from 'react';
import { Link } from "react-router-dom";
class login_student extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            server: 'http://localhost:3001/',
            returned: '',
            user_id: '',
            Categorys: []
        }
    }

    render() {
        return (
            <div className="login_student">
                <div class="about-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-12">
                                <div class="about-container">
                                    <h3>تسجيل دخول المدرسين </h3>
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <div id="login-overlay" class="modal-dialog">
                                                <div class="modal-content" style={{ borderRadius: "0" }}>
                                                    <div class="modal-body">
                                                        <h1 style={{ color: "black", textAlign: "center" }}>تسجيل دخول</h1>
                                                        <form id="registerForm" method="POST" >
                                                            <div class="form-group">

                                                                <div class="col-xs-12 col-lg-12">
                                                                    <label for="InputEmail">البريد الألكتروني</label>
                                                                    <div class="input-group">
                                                                        <input type="email" class="form-control" name="email" placeholder="ادخل البريد الألكتروني" required />
                                                                        <span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>
                                                                    </div>

                                                                    <label for="InputPassword">كلمه المرور</label>
                                                                    <div class="input-group">
                                                                        <input type="password" class="form-control" name="password" placeholder="ادخل كلمه المرور" required />
                                                                        <span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>
                                                                    </div>



                                                                    {/* <!--------------------------------------separator---------------------------------------------------------------> */}

                                                                </div>
                                                            </div>


                                                            <div class="form-group">
                                                                <div class="input-group-addon" style={{ transform: "rotate(720deg)" }}>
                                                                    <input type="submit" style={{ borderRadius: 0, backgroundColor: "#86bc42", borderColor: "#86bc42;" }} name="submit" id="submit" value="ارسال البيانات" class="btn btn-success pull-right" />

                                                                </div>
                                                            </div>
                                                        </form>
                                                        <p  style={{ color: "black" }}><Link to ="signout-teacher" >اذا كنت لا تمتلك حساب يمكنك انشاء حسابمن هنا</Link></p>
                                                    </div>{/*<!---modal-body---> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default login_student;