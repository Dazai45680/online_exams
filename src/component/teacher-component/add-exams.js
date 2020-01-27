import React, { Component } from 'react';

import AddFullQuestion from './AddFullQuestion'
import AddShortExams from './add-short-exams'
import ShowingExamjs from './ShowingExam'
import { SharedData } from '../../SharedData/Shareddata'
class adding_exams extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            server: 'http://localhost:3001/',
            i: 1,
            question_names: ['الاول', "الثانى", "الثالث", "الرابع"],
            question_var: ['MainQ1', 'MainQ2', 'MainQ3', 'MainQ4',]
        }
    }

    ShowExam = () => {
        this.HideExam.style.display = 'none'
        this.ShowingExam.style.display = 'block'
    }
    hideexam = () => {
        this.HideExam.style.display = 'block'
        this.ShowingExam.style.display = 'none'
    }

    AddandRemove = (e) => {

        if (e.target.id === "add") {
            if (this.state.i <= 3) {
                this.setState({
                    i: this.state.i + 1
                });
            } else {

            }
        } else if (e.target.id === "remove") {
            if (this.state.i > 1) {
                this.setState({
                    i: this.state.i - 1
                });
            } else {

            }
        }
    }

    render() {
        return (
            // 
            <SharedData.Consumer>{(context) => {
                let { ExamName } = context;
                return (
                    <div className="adding_exams">

                        <section className="color-white" >
                            <div class="container">
                                <div class="row ask" >
                                    <div class="board" style={{ marginTop: "10px", marginBottom: "5px" }}>

                                        <div class="">
                                            <ul class="nav nav-tabs pd-f" id="myTab" >
                                                <div class="liner resize" ></div>
                                                <div></div>
                                                <li class="active rearrange">
                                                    <a href="#home" data-toggle="tab" title="welcome">
                                                        <span class="round-tabs one">
                                                            <i class="glyphicon glyphicon-home"></i>
                                                        </span>
                                                    </a></li>

                                                <li class="rearrange"><a href="#profile" data-toggle="tab" title="النموذج الطويل">
                                                    <span class="round-tabs two">
                                                        <i class="glyphicon glyphicon-plus"></i>
                                                    </span>
                                                </a>
                                                </li>
                                                <li class="rearrange"><a href="#messages" data-toggle="tab" title="النموذج القصير">
                                                    <span class="round-tabs three">
                                                        <i class="glyphicon glyphicon-plus"></i>
                                                    </span> </a>
                                                </li>

                                            </ul></div>

                                        <div class="tab-content">
                                            <div class="tab-pane fade in active" id="home">

                                                <h3 class="head text-center" style={{ marginTop: "50px" }}>Welcome to Bootsnipp<sup>™</sup> <span style={{ color: "#f48260", marginTop: "50px" }}>♥</span></h3>
                                                <p class="narrow text-center" style={{ marginTop: "50px" }}>
                                                    Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.
                          </p>

                                                <p class="text-center">
                                                    <a href="" class="btn btn-success btn-outline-rounded green"> start using bootsnipp <span style={{ marginLeft: "10px" }} class="glyphicon glyphicon-send"></span></a>
                                                </p>
                                            </div>

                                            {/* <!-- Questions that will be added  --> */}
                                            {/* <!-- the full Exam model --> */}

                                            <div class="tab-pane fade " id="profile">
                                                <div ref={(el) => { this.HideExam = el }}>
                                                    <button className="ExamShowingButton" onClick={this.ShowExam}>معاينة</button>
                                                    <h3 class="head text-center"><b>النموذج الطويل</b></h3>
                                                    <label style={{ textAlign: "center", float: "right", marginTop: "5px" }}></label>
                                                    <div style={{ marginBottom: "10px" }} class="input-group question-input" >
                                                        <input type="text" class="form-control question-input" name="ask2" placeholder="ادخل اسم الامتحان: " onChange={ExamName} />
                                                    </div>
                                                    {[...Array(this.state.i)].map((e, i) => {
                                                        return (
                                                            <AddFullQuestion question_name={this.state.question_names[i]} question_var={this.state.question_var[i]} />
                                                        )
                                                    })}

                                                    <div className="addbtndiv">
                                                        <button onClick={this.AddandRemove} style={{ borderRadius: "20", margin: "20px" }} name="ask1" id="add" value="اضافة اسالة" class="btn btn-success ">اضافة سؤال جديد</button>
                                                        <button onClick={this.AddandRemove} style={{ borderRadius: "20", margin: "20px" }} name="ask1" id="remove" value="اضافة اسالة" class="btn btn-success ">حذف سؤال جديد</button>
                                                    </div>

                                                </div>


                                                <div ref={(el) => { this.ShowingExam = el }} style={{ display: 'none' }} >
                                                    <button className="ExamShowingButton" onClick={this.hideexam}>معاينة</button>
                                                    <ShowingExamjs />
                                                </div>


                                            </div>

                                            {/* <!-- the short Exam model that will have two types of --> */}
                                            <div class="tab-pane fade " id="messages">
                                                <h3 class="head text-center"><b>النموذج القصير</b></h3>
                                                <label style={{ textAlign: "center", float: "right", marginTop: "5px" }}></label>
                                                <div style={{ marginBottom: "10px" }} class="input-group question-input" >
                                                    <input type="text" class="form-control question-input" name="ask2" placeholder="ادخل اسم الامتحان: " onChange={ExamName} />
                                                </div>
                                                {[...Array(this.state.i)].map((e, i) => {
                                                    return (
                                                        <AddShortExams question_name={this.state.question_names[i]} question_var={this.state.question_var[i]} />
                                                    )
                                                })}

                                                <div className="addbtndiv">
                                                    <button onClick={this.AddandRemove} style={{ borderRadius: "20", margin: "20px" }} name="ask1" id="add" value="اضافة اسالة" class="btn btn-success ">اضافة سؤال جديد</button>
                                                    <button onClick={this.AddandRemove} style={{ borderRadius: "20", margin: "20px" }} name="ask1" id="remove" value="اضافة اسالة" class="btn btn-success ">حذف سؤال جديد</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="warning stick sticker">
                            please make sure to add exams in bigger screens
                </div>
                    </div>
                );
            }}
            </SharedData.Consumer>
        );
    }
}

export default adding_exams;