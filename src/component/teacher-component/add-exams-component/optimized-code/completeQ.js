import React, { Component } from 'react';

import { SharedData } from '../../../../SharedData/Shareddata'
class adding_exams extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            x: 1,
            g: 0,
            image: []
        }
    }

    AddandRemove = (e) => {
        e.preventDefault();
        if (e.target.id === "Form1Addchoice") {
            if (this.state.x < 4) {
                this.setState({
                    x: this.state.x + 1
                });
            }
        } else if (e.target.id === "Form1Removechoice") {
            if (this.state.x >= 2) {
                this.setState({
                    x: this.state.x - 1
                });
            }
        }
    }

    upload = (e) => {
        let file = e.target.files;

        this.setState({
            image: []
        });
        console.log(e.target.result);

        if (file.length) {
            for (let i = 0; i < file.length; i++) {
                let reader = new FileReader();
                reader.readAsDataURL(file[i]);
                reader.onload = (e) => {
                    let data = { file: e.target.result }
                    this.state.image.push(e.target.result)
                    console.log(this.state.image);
                    this.setState({ g: i + 1 })

                }
            }
            // reader.readAsDataURL(file[0]);
            // reader.onload = (e)=>{
            //     let data ={file : e.target.result}
            //     this.state.image.push(e.target.result)

            // }
        }

    }

    render() {
        return (
            <SharedData.Consumer>{(context) => {
                let { ExamName } = context;
                return (
            <div className="adding_exams">
                <div className="input-flex">
                    <div class="input-flexs">
                        {[...Array(this.state.x)].map((e, i) => {
                            return (
                                <div class="">
                                    <input style={{ width: "50px" }} type="text" class="form-control complete-input " onChange={(e) => { ExamName(e) }} var1={this.props.MainQ} var2={this.props.Q} var3={this.props.subQ} var4="Answer" var5="سؤال اكمل العبارات التاليه" var6={i + 1} var7="QType" placeholder="ادخل الاجابة الصحيح" />
                                    <fieldset style={{ width: "250px" }}>
                                        <label ><h4>اختر الدرجة-></h4></label>
                                        <select onChange={(e) => { ExamName(e) }} var1={this.props.MainQ} var2={this.props.Q} var3={this.props.subQ} var4="degree" var5="سؤال اكمل العبارات التاليه" var6={i + 1} var7="QType" className="myList">
                                            <option value="0">0</option>
                                            <option value="0.5">0.5</option>
                                            <option value="1">1</option>
                                            <option value="1.5">1.5</option>
                                            <option value="2">2</option>
                                            <option value="2.5">2.5</option>
                                            <option value="3">3</option>

                                        </select>
                                    </fieldset>
                                </div>);
                        })}
                    </div>
                </div>
                <div class="form-group" >
                    <button type="" onClick={this.AddandRemove} style={{ borderRadius: "60", marginLeft: "20px" }}  id="Form1Addchoice" value="اضافة السؤال" class="btn btn-success">+ اضافة اجابة</button>
                    <button type="" onClick={this.AddandRemove} style={{ borderRadius: "60", marginLeft: "20px" }}  id="Form1Removechoice" value="حذف السؤال" class="btn btn-success">- حذف اجابة</button>
                </div>
                <div style={{ display: "flex" }}>
                    <h3 style={{ width: "360px" }} class="" name="ask3" >اضف صورة فى السؤال اذا اردت:-></h3>
                    <div class="box">
                        <input style={{ display: "none" }} onChange={(e) => { ExamName(e) }} var1={this.props.MainQ} var2={this.props.Q} var3={this.props.subQ} var4="image" var5="complete" var7="QType" onChange={(e) => this.upload(e)} type="file"  id={"file-" + " " + this.props.MainQ + " " + this.props.Q + " " + this.props.subQ} class="inputfile inputfile-4" data-multiple-caption="{count} files selected" multiple />
                        <label for={"file-" + " " + this.props.MainQ + " " + this.props.Q + " " + this.props.subQ} ><figure><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" /></svg></figure> <span>Choose a file&hellip;</span></label>

                    </div>

                </div>
                {[...Array(this.state.g)].map((e, i) => {
                    return (<div>
                        <img class="Qimage" src={this.state.image[i]} alt="" />
                        <p>{i + 1}</p>
                    </div>)
                })}
            </div>
              );
            }}</SharedData.Consumer>
        );
    }
}

export default adding_exams;