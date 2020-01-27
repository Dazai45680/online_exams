import React, { Component } from 'react';

import { SharedData } from '../../SharedData/Shareddata'
class ShowingExam extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            x: 1,
            g: 0,
            question_names: ['الاول', "الثانى", "الثالث", "الرابع"],
            question_name: ['أ', "ب", "ج", "د"],
        }
    }

imageURl = (e)=>{
    var html = '<html>' +
    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
    '<body>' +
    '<iframe src="' + e.target.src + '"></iframe>' +
    '</body></html>';
    console.log(e.target.src);
    var x = window.open();
    x.document.open();
x.document.write(html);
x.document.close();
    // window.open(e.target.src , "_blank");

}
    render() {
        return (
            <SharedData.Consumer>{(context) => {
                let { Exam } = context;
                return (<div>
                    {/* this is the first loop to show the main questions in the exam page  */}
                    {Object.keys(Exam).map((key, i) => {

                        let Var1 = Exam[key];
                        return (<div>  <h1 class="head " style={{ textAlign: "right" }}><b>السؤال {this.state.question_names[i]}:-</b></h1>
                            {/* this is the second loop to show the questions in the exam page  */}
                            {
                                Object.keys(Var1).map((key, i) => {
                                    let Var2 = Var1[key]
                                    
                                    return (<div className="question_types" style={{display:"block"}}>
                                        <div className="question-form" style={{display:"block"}} ref={(el) => { this.Fo = el }}>
                                            <h3 class="head"><b>{this.state.question_name[i] + " - "+Var2["QType"]}</b></h3>
                                                {
                                                Object.keys(Var2).map((key , i )=>{
                                                    if(key === "QType"){

                                                    }else{
                                                        let Var3 = Var2[key]
                                                        console.log(Var3["Question"]);
                                                        let Var4 = Var3["Question"];
                                                        if(Var4){
                                                        if(Var4["image"]){
                                                            return(<div>
                                                              <a rel="" href={Var4["image"]} target='_blank' > {i + "-"} <img style={{width:"200px"}} onClick={this.imageURl} src={Var4["image"]}></img></a>
                                                            </div>);

                                                        }else{
                                                        return(<div>
                                                    <h5 style ={{display:"flex"}} dangerouslySetInnerHTML={{ __html: i+ " ) "+ Var3["Question"] }}></h5>
                                                    <input style={{ width: "50px;" }} type="text" class="form-control complete-input " placeholder="ادخل الاجابة الصحيح" />

                                                        </div>)
                                                    }
                                                }
                                            }
                                                })
                                                
                                                }
                                            <div class="form-group">
                                            </div>
                                        </div>
                                    </div>);
                                })

                            }
                        </div>);
                    })}
                </div>);

            }}</SharedData.Consumer>
        );
    }
}

export default ShowingExam;