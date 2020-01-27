import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Student_Profile extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            server: 'http://localhost:3001/',
            returned: '',
            value: "k.saad1281@gmail.com",
            Categorys: [],
            image: "./img/qrl3.jpg"
        }

    }
    upload = (e) => {
        let file = e.target.files;
        let reader = new FileReader();
        console.log(file.length);

        if (file.length) {
            reader.readAsDataURL(file[0]);
            reader.onload = (e) => {
                let data = { file: e.target.result }
                this.setState({
                    image: e.target.result
                });
                this.info1.style.display = "none"

            }
        }

    }
    change = (e) => {
        this.setState({
            value: e.target.value
        });
    }
    addOrRemove = (e) => {
        if (e.target.id === "add-info") {
            this.info1.style.display = "block"
            this.finding_Teacher.style.display = "none"

        } else if (e.target.id === "add-search") {
            this.info1.style.display = "none"
            this.finding_Teacher.style.display = "block"

        } else {
            this.info1.style.display = "none"
            this.finding_Teacher.style.display = "none"
        }

    }
    render() {
        return (
            <div className="Student_Profile">
                <div className="Main overflowcss">
                    <div className="Main-right">
                        <div class="containers">
                            <img class="profile-image shadow bg-white rounded" src={this.state.image} alt="" />

                        </div>
                        <div class="lines"></div>
                        <div class="containerss hovers" id="add">
                            <p class="student-info-link shadow rounded" style={{ marginRight: "20px" }} id="add">البيانات الاساسية للطالب</p>
                        </div>
                        <div class="containerss hovers">
                            <p class="student-info-link  shadow  rounded">مستوى الطالب</p>
                        </div>
                        <div class="containerss hovers">
                            <p class="student-info-link  shadow  rounded">الاختبارات المتاحة</p>
                        </div>
                        <div class="containerss hovers" onClick={this.addOrRemove} id="add-info">
                            <p class="student-info-link shadow rounded" onClick={this.addOrRemove} id="add-info">تعديل البيانات</p>
                        </div>
                        <div class="containerss hovers" onClick={this.addOrRemove} id="add-search">
                            <p class="student-info-link shadow rounded" onClick={this.addOrRemove} id="add-search">الاشتراك مع مدرس</p>
                        </div>
                    </div>
                    <div className="info-container overflowcss " ref={(el) => { this.info1 = el }} style={{ display: "none" }}>
                        <div className="info">
                            <div className="removes" onClick={this.addOrRemove} id="removes">X</div>
                            <div>
                                <h4 className="info-head">
                                    تعديل البيانات:
                  </h4>
                                <div className="info-body">
                                    <p className="info-border">الاسم  </p>
                                    <input className="info-border inpo" disabled value="khaled saad" />
                                </div>
                                <div className="info-body">
                                    <p className="info-border">الرقم</p>
                                    <input className="info-border inpo" value="01141501094" />
                                </div>
                                <div className="info-body">
                                    <p className="info-border">الايميل</p>
                                    <input className="info-border inpo" onChange={this.change} value={this.state.value} />
                                </div>

                                <div className="info-body">
                                    <p className="info-border">اضف صورة</p>
                                    <input style={{ display: "none" }} type="file" name="file-2[]" id="file-2" class="inputfile inputfile-2" onChange={(e) => this.upload(e)} data-multiple-caption="{count} files selected" multiple="" />
                                    <label className="info-uploader" for="file-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg> <span>Choose a file</span></label>
                                </div>


                                <button className="info-button">تحديث البيانات</button>
                            </div>
                        </div>
                    </div>


                    <div className="info-container  overflowcss " ref={(el) => { this.finding_Teacher = el }} style={{ display: "none" }}>
                        <div className="info teacher-seacrh-container">
                            <div className="removes" onClick={this.addOrRemove} id="removes">X</div>
                            <div>

                                <h4 className="info-head"> البحث عن مدرس </h4>
                                <div className="teacher_category">
                                    <h4 className="info-head info-uploader"> ابتدائى </h4>
                                    <h4 className="info-head info-uploader">اعدادى</h4>
                                    <h4 className="info-head info-uploader">ثانوى</h4>

                                </div>
                                <div style={{ display: 'flex' , marginTop:"20px" , width:"100%"}}>
                                    <img class="teacher-search-photo" src={this.state.image} alt="" />
                                    <div style={{ textAlign: "right" }}>
                                        <p>الاسم:خالد سعد عباس</p>
                                        <p>السنة الدراسية: 1ب ,2ب ,3ب</p>
                                        <p>الرقم:01141501094</p>
                                        <div style={{ display: "flex" }}>
                                            <p>للاشتراك ادخل الكود:</p>
                                            <input style={{ height: "25px", marginTop: "1px", width: "100px" }} type="text" />
                                        </div>
                                        <p>اسم المادة: لغة عربية</p>
                                    </div>
                                    <button style={{float:"left"}} className="info-button search-teacher-btn">اشترك الان</button>

                                </div>
                                <div style={{ display: 'flex'  , marginTop:"20px"}}>
                                    <img class="teacher-search-photo" src={this.state.image} alt="" />
                                    <div style={{ textAlign: "right" }}>
                                        <p>الاسم:خالد سعد عباس</p>
                                        <p>السنة الدراسية: 1ب ,2ب ,3ب</p>
                                        <p>الرقم:01141501094</p>
                                        <div style={{ display: "flex" }}>
                                            <p>للاشتراك ادخل الكود:</p>
                                            <input style={{ height: "25px", marginTop: "1px", width: "100px" }} type="text" />
                                        </div>
                                        <p>اسم المادة: لغة عربية</p>
                                    </div>
                                    <div>
                                    <button style={{float:"left"}} className="info-button search-teacher-btn">اشترك الان</button>
                                    </div>

                                </div>
                                <div style={{ display: 'flex' , marginTop:"20px"}}>
                                    <img class="teacher-search-photo" src={this.state.image} alt="" />
                                    <div style={{ textAlign: "right" }}>
                                        <p>الاسم:خالد سعد عباس</p>
                                        <p>السنة الدراسية: 1ب ,2ب ,3ب</p>
                                        <p>الرقم:01141501094</p>
                                        <div style={{ display: "flex" }}>
                                            <p>للاشتراك ادخل الكود:</p>
                                            <input style={{ height: "25px", marginTop: "1px", width: "100px" }} type="text" />
                                        </div>
                                        <p>اسم المادة: لغة عربية</p>
                                    </div>
                                    <button style={{float:"left"}} className="info-button search-teacher-btn">اشترك الان</button>

                                </div>
                                <div style={{ display: 'flex'  , marginTop:"20px"}}>
                                    <img class="teacher-search-photo" src={this.state.image} alt="" />
                                    <div style={{ textAlign: "right" }}>
                                        <p>الاسم:خالد سعد عباس</p>
                                        <p>السنة الدراسية: 1ب ,2ب ,3ب</p>
                                        <p>الرقم:01141501094</p>
                                        <div style={{ display: "flex" }}>
                                            <p>للاشتراك ادخل الكود:</p>
                                            <input style={{ height: "25px", marginTop: "1px", width: "100px" }} type="text" />
                                        </div>
                                        <p>اسم المادة: لغة عربية</p>
                                    </div>
                                    <div>
                                    <button style={{float:"left"}} className="info-button search-teacher-btn">اشترك الان</button>
                                    </div>

                                </div>
                                <div style={{ display: 'flex' , marginTop:"20px"}}>
                                    <img class="teacher-search-photo" src={this.state.image} alt="" />
                                    <div style={{ textAlign: "right" }}>
                                        <p>الاسم:خالد سعد عباس</p>
                                        <p>السنة الدراسية: 1ب ,2ب ,3ب</p>
                                        <p>الرقم:01141501094</p>
                                        <div style={{ display: "flex" }}>
                                            <p>للاشتراك ادخل الكود:</p>
                                            <input style={{ height: "25px", marginTop: "1px", width: "100px" }} type="text" />
                                        </div>
                                        <p>اسم المادة: لغة عربية</p>
                                    </div>
                                    <button style={{float:"left"}} className="info-button search-teacher-btn">اشترك الان</button>

                                </div>
                                <div style={{ display: 'flex'  , marginTop:"20px"}}>
                                    <img class="teacher-search-photo" src={this.state.image} alt="" />
                                    <div style={{ textAlign: "right" }}>
                                        <p>الاسم:خالد سعد عباس</p>
                                        <p>السنة الدراسية: 1ب ,2ب ,3ب</p>
                                        <p>الرقم:01141501094</p>
                                        <div style={{ display: "flex" }}>
                                            <p>للاشتراك ادخل الكود:</p>
                                            <input style={{ height: "25px", marginTop: "1px", width: "100px" }} type="text" />
                                        </div>
                                        <p>اسم المادة: لغة عربية</p>
                                    </div>
                                    <div>
                                    <button style={{float:"left"}} className="info-button search-teacher-btn">اشترك الان</button>
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

export default Student_Profile;