import React, { Component, createContext } from 'react';
import { createBrowserHistory } from 'history'
export const SharedData = createContext();
let name = 'form-inline txt form-control bg-dark text-white control Search_text2'
export const history = createBrowserHistory({
  forceRefresh: true
});
class SharedDataProvider extends Component {

  state = {
    NumberOfOrderd: "",
    Exam: [],
    server: 'http://localhost:3001/',
    text : ""
  }
  ExamName = (e) => {
    // this handle most of entered data in adding exams

    let value = e.target.value;
    let var1 = e.target.getAttribute('var1');
    let var2 = e.target.getAttribute('var2');
    let var3 = e.target.getAttribute('var3');
    let var4 = e.target.getAttribute('var4');
    let var5 = e.target.getAttribute('var5');
    let var6 = e.target.getAttribute('var6');
    let var7 = e.target.getAttribute('var7');
    if (var4 == 'skip') {
      // this conditiob for determint the correction process so we save the choice by this code
      if (this.state.Exam[var1]) {
        // if the exam varialbe has MainQ1 or MainQ2 or ...etc and the change is in the same MainQi this code will run
        let Var1 = this.state.Exam[var1];
        if (Var1[var2]) {
          // if the exam varialbe has Q1 or Q2 or ...etc and the change is in the same Qi this code will run
          this.setState({
            Exam: {
              ...this.state.Exam, [var1]: {
                ...this.state.Exam[var1], [var2]: {
                  ...Var1[var2],
                  [var3]: value
                }
              }
            }
          } , ()=>{ 
            console.log(this.state.Exam);
          });
        } else {
          // if the exam varialbe has same  MainQi and different Qi that this Qi is not existed this code will run
          this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: [] } } }, () => {
            let Var1 = this.state.Exam[var1]
            this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: { ...Var1[var2], [var3]: [] } } } }, () => {
              let Var2 = Var1[var2]
              this.setState({
                Exam: {
                  ...this.state.Exam, [var1]: {
                    ...this.state.Exam[var1], [var2]: {
                      ...Var1[var2], [var3]: value
                    }
                  }
                }
              }, () => {
                console.log(this.state.Exam);
              });
            })
          });
        }
      } else {
        // if the exam variable don't have the MainQi and will create the whole branch from MainQi to subQi so this code will run
        this.setState({ Exam: { ...this.state.Exam, [var1]: [] } }, () => {
          this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: [] } } }, () => {
            let Var1 = this.state.Exam[var1];
            this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: { ...Var1[var2], [var3]: [] } } } }, () => {
              let Var2 = Var1[var2]
              this.setState({
                Exam: {
                  ...this.state.Exam, [var1]: {
                    ...this.state.Exam[var1], [var2]: {
                      ...Var1[var2], [var3]: value 
                    }
                  }
                }
              }, () => {
                console.log(this.state.Exam);

              });
            })
          });
        });
      }
    } else {
      if (var6) {
        // if it consist of multi answer or degrees in same question this code will run
        if (this.state.Exam[var1]) {
          // if the exam varialbe has MainQ1 or MainQ2 or ...etc and the change is in the same MainQi this code will run
          let Var1 = this.state.Exam[var1];
          if (Var1[var2]) {
            // if the exam varialbe has Q1 or Q2 or ...etc and the change is in the same Qi this code will run
            let Var2 = Var1[var2];
            if (Var2[var3]) {
              let Var3 = Var2[var3]
              // if the exam varialbe has subQ1 or subQ2 or ...etc and the change is in the same subQi this code will run  
              this.setState({
                Exam: {
                  ...this.state.Exam, [var1]: {
                    ...this.state.Exam[var1], [var2]: {
                      ...Var1[var2] ,[var7]:var5 , 
                      [var3]: { ...Var2[var3], [var4]: { ...Var3[var4], [var6]: value } }
                    }
                  }
                }
              }, () => {
                console.log(this.state.Exam);
              });
            } else {
              // if the exam varialbe has same  MainQi and same Qi and the change is in the different subQi this code will run

              this.setState({
                Exam: {
                  ...this.state.Exam, [var1]: {
                    ...this.state.Exam[var1], [var2]: {
                      ...Var1[var2] ,[var7]:var5 ,
                      [var3]: []
                    }
                  }
                }
              }, () => {
                this.setState({
                  Exam: {
                    ...this.state.Exam, [var1]: {
                      ...this.state.Exam[var1] , [var2]: {
                        ...Var1[var2] ,[var7]:var5 , [var3]: {
                          ...Var2[var3],
                          [var4]: []
                        }
                      }
                    }
                  }
                }, () => {
                  let Var3 = Var2[var3];
                  this.setState({
                    Exam: {
                      ...this.state.Exam, [var1]: {
                        ...this.state.Exam[var1] , [var2]: {
                          ...Var1[var2],[var7]:var5, [var3]: {
                            ...Var2[var3],
                            [var4]: { ...Var3[var4], [var6]: value }
                          }
                        }
                      }
                    }
                  });

                });
              });
            }
          } else {
            // if the exam varialbe has same  MainQi and different Qi that this Qi is not existed this code will run

            this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: [] } } }, () => {
              let Var1 = this.state.Exam[var1]
              this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: { ...Var1[var2], [var3]: [] } } } }, () => {
                let Var2 = Var1[var2]
                this.setState({
                  Exam: {
                    ...this.state.Exam, [var1]: {
                      ...this.state.Exam[var1], [var2]: {
                        ...Var1[var2] ,[var7]:var5 , [var3]: {
                          ...Var2[var3],
                          [var4]: []
                        }
                      }
                    }
                  }
                }, () => {
                  let Var3 = Var2[var3];
                  this.setState({
                    Exam: {
                      ...this.state.Exam, [var1]: {
                        ...this.state.Exam[var1], [var2]: {
                          ...Var1[var2] ,[var7]:var5 , [var3]: {
                            ...Var2[var3],
                            [var4]: { ...Var3[var4], [var6]: value }
                          }
                        }
                      }
                    }
                  });

                });
              })
            });
          }
        } else {
          // if the exam variable don't have the MainQi and will create the whole branch from MainQi to subQi so this code will run
          this.setState({ Exam: { ...this.state.Exam, [var1]: [] } }, () => {
            this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: [] } } }, () => {
              let Var1 = this.state.Exam[var1];
              this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: { ...Var1[var2], [var3]: [] } } } }, () => {
                let Var1 = this.state.Exam[var1];
                let Var2 = Var1[var2]
                this.setState({
                  Exam: {
                    ...this.state.Exam, [var1]: {
                      ...this.state.Exam[var1], [var2]: {
                        ...Var1[var2] ,[var7]:var5 , [var3]: {
                          ...Var2[var3],
                          [var4]: []
                        }
                      }
                    }
                  }
                }, () => {
                  let Var1 = this.state.Exam[var1];
                  let Var2 = Var1[var2]
                  let Var3 = Var2[var3];
                  this.setState({
                    Exam: {
                      ...this.state.Exam, [var1]: {
                        ...this.state.Exam[var1], [var2]: {
                          ...Var1[var2] ,[var7]:var5 , [var3]: {
                            ...Var2[var3],
                            [var4]: {...Var3[var4] , [var6]:value}
                          }
                        }
                      }
                    }
                  });

                });
              })
            });
          });
        }
      } else {
        // if it only contain question , answer , ..etc this cod will run
        if (this.state.Exam[var1]) {
          // if the exam varialbe has MainQ1 or MainQ2 or ...etc and the change is in the same MainQi this code will run
          let Var1 = this.state.Exam[var1];
          if (Var1[var2]) {
            // if the exam varialbe has Q1 or Q2 or ...etc and the change is in the same Qi this code will run
            let Var2 = Var1[var2];
            if (Var2[var3]) {
              // if the exam varialbe has subQ1 or subQ2 or ...etc and the change is in the same subQi this code will run  
              this.setState({
                Exam: {
                  ...this.state.Exam, [var1]: {
                    ...this.state.Exam[var1], [var2]: {
                      ...Var1[var2] ,[var7]:var5 ,
                      [var3]: { ...Var2[var3], [var4]: value }
                    }
                  }
                }
              }, () => {
                console.log(this.state.Exam);
              });
            } else {
              // if the exam varialbe has same  MainQi and same Qi and the change is in the different subQi this code will run

              this.setState({
                Exam: {
                  ...this.state.Exam, [var1]: {
                    ...this.state.Exam[var1], [var2]: {
                      ...Var1[var2] ,[var7]:var5 ,
                      [var3]: []
                    }
                  }
                }
              }, () => {
                this.setState({
                  Exam: {
                    ...this.state.Exam, [var1]: {
                      ...this.state.Exam[var1], [var2]: {
                        ...Var1[var2] ,[var7]:var5 , [var3]: {
                          ...Var2[var3],
                          [var4]: value
                        }
                      }
                    }
                  }
                }, () => {
                  console.log(this.state.Exam);

                });
              });
            }
          } else {
            // if the exam varialbe has same  MainQi and different Qi that this Qi is not existed this code will run
            this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: [] } } }, () => {
              let Var1 = this.state.Exam[var1]
              this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: { ...Var1[var2], [var3]: [] } } } }, () => {
                let Var2 = Var1[var2]
                this.setState({
                  Exam: {
                    ...this.state.Exam, [var1]: {
                      ...this.state.Exam[var1], [var2]: {
                        ...Var1[var2] ,[var7]:var5 , [var3]: {
                          ...Var2[var3],
                          [var4]: value
                        }
                      }
                    }
                  }
                }, () => {
                  console.log(this.state.Exam);
                });
              })
            });
          }
        } else {
          // if the exam variable don't have the MainQi and will create the whole branch from MainQi to subQi so this code will run
          this.setState({ Exam: { ...this.state.Exam, [var1]: [] } }, () => {
            this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: [] } } }, () => {
              let Var1 = this.state.Exam[var1];
              this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: { ...Var1[var2], [var3]: [] } } } }, () => {
                let Var2 = Var1[var2]
                this.setState({
                  Exam: {
                    ...this.state.Exam, [var1]: {
                      ...this.state.Exam[var1], [var2]: {
                        ...Var1[var2], [var7]:var5 , [var3]: {
                          ...Var2[var3],
                          [var4]: value
                        }
                      }
                    }
                  }
                }, () => {
                  console.log(this.state.Exam);

                });
              })
            });
          });
        }
      }
    }

  }

  ExamQuestion = (var1, var2, var3 , var4 , var5,var7 , content)=>{
    let value = content
    console.log(var1 + " "+ var2 + " " + var3 + " " + var4);
    
       // if it only special type of question , answer , ..etc this cod will run
       if (this.state.Exam[var1]) {
        // if the exam varialbe has MainQ1 or MainQ2 or ...etc and the change is in the same MainQi this code will run
        let Var1 = this.state.Exam[var1];
        if (Var1[var2]) {
          // if the exam varialbe has Q1 or Q2 or ...etc and the change is in the same Qi this code will run
          let Var2 = Var1[var2];
          if (Var2[var3]) {
            // if the exam varialbe has subQ1 or subQ2 or ...etc and the change is in the same subQi this code will run  
            this.setState({
              Exam: {
                ...this.state.Exam, [var1]: {
                  ...this.state.Exam[var1], [var2]: {
                    ...Var1[var2],[var7]:var5,
                    [var3]: { ...Var2[var3], [var4]: value }
                  }
                }
              }
            }, () => {
              console.log(this.state.Exam);
            });
          } else {
            // if the exam varialbe has same  MainQi and same Qi and the change is in the different subQi this code will run

            this.setState({
              Exam: {
                ...this.state.Exam, [var1]: {
                  ...this.state.Exam[var1], [var2]: {
                    ...Var1[var2], [var7]:var5,
                    [var3]: []
                  }
                }
              }
            }, () => {
              this.setState({
                Exam: {
                  ...this.state.Exam, [var1]: {
                    ...this.state.Exam[var1], [var2]: {
                      ...Var1[var2], [var3]: {
                        ...Var2[var3], [var7]:var5,
                        [var4]: value
                      }
                    }
                  }
                }
              }, () => {
                console.log(this.state.Exam);

              });
            });
          }
        } else {
          // if the exam varialbe has same  MainQi and different Qi that this Qi is not existed this code will run
          this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: [] } } }, () => {
            let Var1 = this.state.Exam[var1]
            this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: { ...Var1[var2], [var3]: [] } } } }, () => {
              let Var2 = Var1[var2]
              this.setState({
                Exam: {
                  ...this.state.Exam, [var1]: {...this.state.Exam[var1], [var2]: {...Var1[var2], [var7]:var5, [var3]: {...Var2[var3],
                        [var4]: value
                      }
                    }
                  }
                }
              }, () => {
                console.log(this.state.Exam);
              });
            })
          });
        }
      } else {
        // if the exam variable don't have the MainQi and will create the whole branch from MainQi to subQi so this code will run
        this.setState({ Exam: { ...this.state.Exam, [var1]: [] } }, () => {
          this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: [] } } }, () => {
            let Var1 = this.state.Exam[var1];
            this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: { ...Var1[var2], [var7]:var5 , [var3]: [] } } } }, () => {
              let Var2 = Var1[var2]
              this.setState({
                Exam: {...this.state.Exam, [var1]: {...this.state.Exam[var1], [var2]: {...Var1[var2], [var7]:var5 , [var3]: {...Var2[var3],
                        [var4]: value
                      }
                    }
                  }
                }
              }, () => {
                console.log(this.state.Exam);

              });
            })
          });
        });
      }
  }


  Examimage = (e)=>{
    // this function handel the image saving in the same exam varialbe 
    let file = e.target.files;
    let var1 = e.target.getAttribute('var1');
    let var2 = e.target.getAttribute('var2');
    let var3 = e.target.getAttribute('var3');
    let var4 = e.target.getAttribute('var4');
    let var5 = e.target.getAttribute('var5');
    let var6 = e.target.getAttribute('var6');
    let var7 = e.target.getAttribute('var7');

    console.log(var1 + " " + var4 + " " +var2 + " " +var3 + " " +var5 + " " +var6 + " " +var7);
    
    let reader = new FileReader();
    // this is to see is there files or not
    if (file.length) {
      // this is to read file data 
      reader.readAsDataURL(file[0]);
      reader.onload = (e)=>{
          let value ={image : e.target.result}
          // here is to set the image ro exam variable

          if (var6) {
            // if it consist of multi answer or degrees in same question this code will run
            if (this.state.Exam[var1]) {
              // if the exam varialbe has MainQ1 or MainQ2 or ...etc and the change is in the same MainQi this code will run
              let Var1 = this.state.Exam[var1];
              if (Var1[var2]) {
                // if the exam varialbe has Q1 or Q2 or ...etc and the change is in the same Qi this code will run
                let Var2 = Var1[var2];
                if (Var2[var3]) {
                  let Var3 = Var2[var3]
                  // if the exam varialbe has subQ1 or subQ2 or ...etc and the change is in the same subQi this code will run  
                  this.setState({
                    Exam: {
                      ...this.state.Exam, [var1]: {
                        ...this.state.Exam[var1], [var2]: {
                          ...Var1[var2] ,[var7]:var5 , 
                          [var3]: { ...Var2[var3], [var4]: { ...Var3[var4], [var6]: value } }
                        }
                      }
                    }
                  }, () => {
                    console.log(this.state.Exam);
                  });
                } else {
                  // if the exam varialbe has same  MainQi and same Qi and the change is in the different subQi this code will run
    
                  this.setState({
                    Exam: {
                      ...this.state.Exam, [var1]: {
                        ...this.state.Exam[var1], [var2]: {
                          ...Var1[var2] ,[var7]:var5 ,
                          [var3]: []
                        }
                      }
                    }
                  }, () => {
                    this.setState({
                      Exam: {
                        ...this.state.Exam, [var1]: {
                          ...this.state.Exam[var1] , [var2]: {
                            ...Var1[var2] ,[var7]:var5 , [var3]: {
                              ...Var2[var3],
                              [var4]: []
                            }
                          }
                        }
                      }
                    }, () => {
                      let Var3 = Var2[var3];
                      this.setState({
                        Exam: {
                          ...this.state.Exam, [var1]: {
                            ...this.state.Exam[var1] , [var2]: {
                              ...Var1[var2],[var7]:var5, [var3]: {
                                ...Var2[var3],
                                [var4]: { ...Var3[var4], [var6]: value }
                              }
                            }
                          }
                        }
                      });
    
                    });
                  });
                }
              } else {
                // if the exam varialbe has same  MainQi and different Qi that this Qi is not existed this code will run
    
                this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: [] } } }, () => {
                  let Var1 = this.state.Exam[var1]
                  this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: { ...Var1[var2], [var3]: [] } } } }, () => {
                    let Var2 = Var1[var2]
                    this.setState({
                      Exam: {
                        ...this.state.Exam, [var1]: {
                          ...this.state.Exam[var1], [var2]: {
                            ...Var1[var2] ,[var7]:var5 , [var3]: {
                              ...Var2[var3],
                              [var4]: []
                            }
                          }
                        }
                      }
                    }, () => {
                      let Var3 = Var2[var3];
                      this.setState({
                        Exam: {
                          ...this.state.Exam, [var1]: {
                            ...this.state.Exam[var1], [var2]: {
                              ...Var1[var2] ,[var7]:var5 , [var3]: {
                                ...Var2[var3],
                                [var4]: { ...Var3[var4], [var6]: value }
                              }
                            }
                          }
                        }
                      });
    
                    });
                  })
                });
              }
            } else {
              // if the exam variable don't have the MainQi and will create the whole branch from MainQi to subQi so this code will run
              this.setState({ Exam: { ...this.state.Exam, [var1]: [] } }, () => {
                this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: [] } } }, () => {
                  let Var1 = this.state.Exam[var1];
                  this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: { ...Var1[var2], [var3]: [] } } } }, () => {
                    let Var1 = this.state.Exam[var1];
                    let Var2 = Var1[var2]
                    this.setState({
                      Exam: {
                        ...this.state.Exam, [var1]: {
                          ...this.state.Exam[var1], [var2]: {
                            ...Var1[var2] ,[var7]:var5 , [var3]: {
                              ...Var2[var3],
                              [var4]: []
                            }
                          }
                        }
                      }
                    }, () => {
                      let Var1 = this.state.Exam[var1];
                      let Var2 = Var1[var2]
                      let Var3 = Var2[var3];
                      this.setState({
                        Exam: {
                          ...this.state.Exam, [var1]: {
                            ...this.state.Exam[var1], [var2]: {
                              ...Var1[var2] ,[var7]:var5 , [var3]: {
                                ...Var2[var3],
                                [var4]: {...Var3[var4] , [var6]:value}
                              }
                            }
                          }
                        }
                      });
    
                    });
                  })
                });
              });
            }
          } else {
            // if it only contain question , answer , ..etc this cod will run
            if (this.state.Exam[var1]) {
              // if the exam varialbe has MainQ1 or MainQ2 or ...etc and the change is in the same MainQi this code will run
              let Var1 = this.state.Exam[var1];
              if (Var1[var2]) {
                // if the exam varialbe has Q1 or Q2 or ...etc and the change is in the same Qi this code will run
                let Var2 = Var1[var2];
                if (Var2[var3]) {
                  // if the exam varialbe has subQ1 or subQ2 or ...etc and the change is in the same subQi this code will run  
                  this.setState({
                    Exam: {
                      ...this.state.Exam, [var1]: {
                        ...this.state.Exam[var1], [var2]: {
                          ...Var1[var2] ,[var7]:var5 ,
                          [var3]: { ...Var2[var3], [var4]: value }
                        }
                      }
                    }
                  }, () => {
                    console.log(this.state.Exam);
                  });
                } else {
                  // if the exam varialbe has same  MainQi and same Qi and the change is in the different subQi this code will run
    
                  this.setState({
                    Exam: {
                      ...this.state.Exam, [var1]: {
                        ...this.state.Exam[var1], [var2]: {
                          ...Var1[var2] ,[var7]:var5 ,
                          [var3]: []
                        }
                      }
                    }
                  }, () => {
                    this.setState({
                      Exam: {
                        ...this.state.Exam, [var1]: {
                          ...this.state.Exam[var1], [var2]: {
                            ...Var1[var2] ,[var7]:var5 , [var3]: {
                              ...Var2[var3],
                              [var4]: value
                            }
                          }
                        }
                      }
                    }, () => {
                      console.log(this.state.Exam);
    
                    });
                  });
                }
              } else {
                // if the exam varialbe has same  MainQi and different Qi that this Qi is not existed this code will run
                this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: [] } } }, () => {
                  let Var1 = this.state.Exam[var1]
                  this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: { ...Var1[var2], [var3]: [] } } } }, () => {
                    let Var2 = Var1[var2]
                    this.setState({
                      Exam: {
                        ...this.state.Exam, [var1]: {
                          ...this.state.Exam[var1], [var2]: {
                            ...Var1[var2] ,[var7]:var5 , [var3]: {
                              ...Var2[var3],
                              [var4]: value
                            }
                          }
                        }
                      }
                    }, () => {
                      console.log(this.state.Exam);
                    });
                  })
                });
              }
            } else {
              // if the exam variable don't have the MainQi and will create the whole branch from MainQi to subQi so this code will run
              this.setState({ Exam: { ...this.state.Exam, [var1]: [] } }, () => {
                this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: [] } } }, () => {
                  let Var1 = this.state.Exam[var1];
                  this.setState({ Exam: { ...this.state.Exam, [var1]: { ...this.state.Exam[var1], [var2]: { ...Var1[var2], [var3]: [] } } } }, () => {
                    let Var2 = Var1[var2]
                    this.setState({
                      Exam: {
                        ...this.state.Exam, [var1]: {
                          ...this.state.Exam[var1], [var2]: {
                            ...Var1[var2], [var7]:var5 , [var3]: {
                              ...Var2[var3],
                              [var4]: value
                            }
                          }
                        }
                      }
                    }, () => {
                      console.log(this.state.Exam);
    
                    });
                  })
                });
              });
            }
          }
          


      }
  }



  }
  render() {
    return (
      <SharedData.Provider value={{
        ...this.state, ExamName: this.ExamName , ExamQuestion : this.ExamQuestion , Examimage : this.Examimage
      }}>
        {this.props.children}
      </SharedData.Provider>
    );




  }
}

export default SharedDataProvider;
