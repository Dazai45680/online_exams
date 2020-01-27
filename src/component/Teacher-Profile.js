import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Teacher_Profile extends Component {

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
    addOrRemove = (e)=>{
        if(e.target.id === "add-info"){
            this.info1.style.display ="block"
    
        }else{
            this.info1.style.display ="none"
        }
    

    }
    change = (e) =>{
        this.setState({
            value:e.target.value
        });
    }
    render() {
        return (
            <div className="Teacher_Profile">
                 <div class="Main overflowcss">
                 <div className="Main-right">
            <div class="containers">
                <img class="profile-image hovers shadow rounded" src="./img/qrl3.jpg" alt=""/>

            </div>
            <div class="lines"></div>
            <Link to ="/adding-exams">
            <div class="containerss hovers" >
                <p class="student-info-link  shadow rounded">اضافة امتحان</p>
              </div>
              </Link>
            <div class="containerss hovers">
                <p class="student-info-link  shadow rounded"  >مستوى الطلاب</p>
            </div>

            <div class="containerss hovers">
                <p style={{marginRight:"20px"}} class="student-info-link  shadow rounded" >الامتحانات الوارد تصحيحها</p>
            </div>
            <div class="containerss hovers"  onClick={this.addOrRemove} id="add-info">
                <p class="student-info-link shadow rounded" onClick={this.addOrRemove} id="add-info">تعديل البيانات</p>
            </div>
        </div>

        <div className ="info-container overflowcss" ref={(el) => { this.info1 = el }} style={{display:"none"}}>
            <div className="info">
                <div className="removes" onClick={this.addOrRemove} id="removes">X</div>
                <div>
                  <h4 className="info-head">
                      تعديل البيانات:
                  </h4>
                  <div className="info-body">
                  <p className = "info-border">الاسم  </p>
                  <input  className = "info-border inpo" disabled value="khaled saad"/>
                  </div>
                  <div className="info-body">
                  <p className = "info-border">الرقم</p>
                  <input   className = "info-border inpo" value="01141501094"/>
                  </div>
                  <div className="info-body">
                  <p  className = "info-border">الايميل</p>
                  <input  className = "info-border inpo" onChange={this.change} />
                  </div>
                  <div className="info-body">
                  <p  className = "info-border">اسم المادة</p>
                  <input  className = "info-border inpo" onChange={this.change} />
                  </div>
                  
                  <div className="info-body">
                  <p  className = "info-border">السنة الدراسية</p>
                  <input  className = "info-border inpo" onChange={this.change} />
                  </div>

                  <div className="info-body">
                  <p  className = "info-border">المرحلة الدراسية</p>
                   <fieldset >
                        <select onChange={this.addingQ} id="teacher-list" className="teacher-list">
                            <option value="0">none</option>
                            <option value="1">ابتدائى</option>
                            <option value="2">اعدادى</option>
                            <option value="3">ثانوى</option>

                        </select>
                    </fieldset>
                  </div>

                  <div className="info-body">
                  <p  className = "info-border">اضف صورة</p>
                  <input  style={{display:"none"}}type="file" name="file-2[]" id="file-2" class="inputfile inputfile-2" onChange={(e)=>this.upload(e)} data-multiple-caption="{count} files selected" multiple=""/>
					<label className="info-uploader" for="file-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg> <span>Choose a file</span></label>
                  </div>
    
                  
                    <button className="info-button">تحديث البيانات</button>
                </div>
            </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Teacher_Profile;