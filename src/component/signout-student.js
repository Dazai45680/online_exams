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
                                    <h3>تسجيل دخول الطلاب </h3>
                                    <div class="col-lg-12">
                                        <div class="row">
                                            <div id="login-overlay" class="modal-dialog">
                                                <div class="modal-content bor">

                                                    <div class="modal-body">
                                                        <h1 className ="co">انشاء حساب</h1>
                                                        <form id="registerForm" method="POST" >
                                                            <div class="form-group">
                                                                <div class="col-xs-12 col-lg-12">
                                                                    <label for="InputName">الأسم بالكامل</label>
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control" name="first_name" placeholder="ادخل اسمك بالكامل" required />
                                                                        <span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>
                                                                    </div>
                                                                    <br />
                                                                    <label for="InputEmail">رقم هاتف ولي الامر</label>
                                                                    <div class="input-group">
                                                                        <input type="text" class="form-control" name="unmber" placeholder="ادخل رقم هاتف ولي الامر " required />
                                                                        <span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>
                                                                    </div>
                                                                    <br />
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
                                                                    <br />
                                                                    <label for="InputName">تأكيد كلمه المرور</label>
                                                                    <div class="input-group">
                                                                        <input type="password" class="form-control" name="password" placeholder="تأكيد كلمه المرور" required />
                                                                        <span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>
                                                                    </div>

                                                                 

                                                                    {/* <!--------------------------------------separator--------------------------------------------------------------->  */}
                                                                    <hr />
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <div class="input-group-addon TRA " >
                                                                    <button type="submit CSS"  value="ارسال البيانات" class="btn btn-success pull-right" > ارسال البيانات</button>

                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*                                     
                                    <!--     end form        -->
                                    <!--     end form        --> */}
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