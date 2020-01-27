import React, { Component } from 'react';

class Footer extends Component {

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
            <div >
                  <div class="footer-widget-area pd ">
                    <div class="container wid">
                        <div class="">
                            <div class="col-l-6 col-sm-4">
                                <div class="single-footer-widget float-right">
                                    <div class="footer-logo">
                                        <a href="index.html"><img src="img/logo/footer.png" alt=""/></a>
                                    </div>
                                    <p>تطوير نظام التقدير والتقييم والتصحيح الإلكترونى لما يقرب من 125 مليون اختبار عبر شبكة الإنترنت "On Line" على مدار أربع سنوات.</p>
                                    
                                </div>
                            </div>
       
                        </div>
                    </div>
                </div>

                <footer class="footer-area">
                    <div class="container wid">
                        <div class=" float-right wid">
                            <h5 ><b>جميع الحقوق محفوظه للموقع احد مشاريع <a href="/">CODE</a></b></h5>
                        </div>
                    </div>
                </footer>

            </div>   


        );
    }
}

export default Footer;