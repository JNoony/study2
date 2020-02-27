import React,{useState,useEffect} from 'react';
import './App.css';
// import config from '../sendEmail/config';
// import axios from 'axios';
// import { Form, Text } from 'informed'; //https://joepuzzo.github.io/informed/
// import { gapi, loadAuth2 } from 'gapi-script';
// import ReactGoogleSheets from 'react-google-sheets';
import { useForm } from 'react-hook-form'
// import { Modal } from 'react-materialize';

// const SPREADSHEET_ID = '1CBAUZ1_4pVyg8AYgVo4DF_sg2SOLZzcCzT3sqelsF0w';
// const CLIENT_ID = '860950019480-769savlgubf09qc11m06itllii5oi6e0.apps.googleusercontent.com';
// const API_KEY = 'AIzaSyBefCotMWHy0pVhqTdUyzHCJOsKErNO34g';
// const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

// const formUrl = 'https://script.google.com/a/mobidays.com/macros/s/AKfycby0oJMqibm0T45bsloDgwsyV_IJBHppUlzEunGuryxqyTyAyUNy/exec'
// const masterEmail = "mjhan@mobidays.com"
const formUrl = 'https://script.google.com/macros/s/AKfycbyHYo1zPBEeIUxSMWRU1bdIW1miwsrfW-tSjBzflpog0wm4yww/exec'
export default function FrmTable(){  
    //selsect option
    const handleSelect = ()=>{
        const selBox1 = document.querySelector('#type1');
        const selBox2 = document.querySelector('#type2');
        const idx = selBox1.selectedIndex;
        var objOption = document.createElement("option");

        var optData = [
            {text:['기업 마케팅 / 채용 컨설팅 문의','기업 마케터 / 인재 채용 문의','기업 제휴 / 파트너쉽 문의' ]},
            {text:['마케터 커리어 개발 / 컨설팅 문의','마케터 이직/구직 문의']},
            {text:['기타문의']}
        ]

        selBox2.options.length = 0;
        if(idx){
            selBox2.style.display = 'inline-block';
            for( var i=0;i<optData[idx-1].text.length;i++){
                selBox2.options[i] = new Option(optData[idx-1].text[i],optData[idx-1].text[i]);
            }
        }
        
    }

    // const { register, errors, required ,handleSubmit } = useForm();
    const [loading,setLoading] = useState(false)

    // useEffect(()=>{

    //     console.log("Contact form submission handler loaded successfully.");
    //     // bind to the submit event of our form
    //     var forms = document.querySelectorAll("form");
    //     for (var i = 0; i < forms.length; i++) {
    //         forms[i].addEventListener("submit", handleFormSubmit, false);
    //     }


    //     //document.addEventListener("DOMContentLoaded", loaded, false);

    //     function validateHuman(honeypot) {
    //         if (honeypot) {  //if hidden form filled up
    //             console.log("Robot Detected!");
    //             return true;
    //         } else {
    //             console.log("Welcome Human!");
    //         }
    //     }

    //     // get all data in form and return object
    //     function getFormData(form) {
    //         var elements = form.elements;
    //         var honeypot;

    //         var fields = Object.keys(elements).filter(function (k) {
    //             if (elements[k].name === "honeypot") {
    //                 honeypot = elements[k].value;
    //                 return false;
    //             }
    //             return true;
    //         }).map(function (k) {
    //             if (elements[k].name !== undefined) {
    //                 return elements[k].name;
    //                 // special case for Edge's html collection
    //             } else if (elements[k].length > 0) {
    //                 return elements[k].item(0).name;
    //             }
    //         }).filter(function (item, pos, self) {
    //             return self.indexOf(item) === pos && item;
    //         });

    //         var formData = {};
    //         fields.forEach(function (name) {
    //             var element = elements[name];

    //             // singular form elements just have one value
    //             formData[name] = element.value;

    //             // when our element has multiple items, get their values
    //             if (element.length) {
    //                 var data = [];
    //                 for (var i = 0; i < element.length; i++) {
    //                     var item = element.item(i);
    //                     if (item.checked || item.selected) {
    //                         data.push(item.value);
    //                     }
    //                 }
    //                 formData[name] = data.join(', ');
    //             }
    //         });

    //         // add form-specific values into the data
    //         formData.formDataNameOrder = JSON.stringify(fields);
    //         formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    //         //formData.formGoogleSend = form.dataset.email || ""; // no email by default

    //         console.log(formData);
    //         return { data: formData, honeypot };
    //     }

    //     function handleFormSubmit(event) {  // handles form submit without any jquery
    //         event.preventDefault();           // we are submitting via xhr below
    //         var form = event.target;
    //         var formData = getFormData(form);
    //         var data = formData.data;

    //         // If a honeypot field is filled, assume it was done so by a spam bot.
    //         if (formData.honeypot) {
    //             return false;
    //         }

    //         disableAllButtons(form);
    //         var url = form.action;
    //         var xhr = new XMLHttpRequest();
    //         xhr.open('POST', url);
    //         // xhr.withCredentials = true;
    //         xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //         xhr.onreadystatechange = function () {
    //             console.log(xhr.status, xhr.statusText);
    //             console.log(xhr.responseText);
    //             form.reset();

    //             return;
    //         };
    //         // url encode form data for sending as post data
    //         var encoded = Object.keys(data).map(function (k) {
    //             return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    //         }).join('&');
    //         xhr.send(encoded);
    //     }

    //     function disableAllButtons(form) {
    //         var buttons = form.querySelectorAll("button");
    //         for (var i = 0; i > buttons.length; i++) {
    //             buttons[i].disabled = true;
    //         }
    //     }

    // },[])



    return(
        <div className="section-form">
            <form name="frm"  
                  method="post"
                  action={formUrl}
                //   onSubmit={handleSubmit(onSubmit)}
            >   
                <div className="form-elements">
                    <div className="pure-group">
                        <label className="pure-group-label active" >문의 유형</label>
                        <div className="custom-select pure-group-text" >
                            <select id="type1" name="header" className="input-field first" 
                                    onChange={()=>handleSelect()} 
                                    // ref={register({ required: true })} 
                            >
                                <option value="" selected disabled>세부 문의 유형을 선택하세요.</option>
                                <option value="company" >company</option>
                                <option value="marketer">marketer</option>
                                <option value="기타">기타</option>                               
                            </select>
                            <select id="type2" name="subject" className="second" ></select>
                        </div>
                        {/* {errors.type1 && <span className="alert-txt teal-text">선택해주세요</span>} */}
                    </div>

                    <div className="pure-group ">
                        <label className="pure-group-label " >성함</label>
                        <input id="name" name="userName" className="pure-group-text"
                               type="text"  
                               placeholder="모비인"
                               maxLength="10"
                            //    ref={
                            //        register({ 
                            //            required: true, 
                            //            maxLength: 10,
                            //            pattern: /^[가-힣a-zA-Z]+$/ 
                            //         })
                            //    }
                        />
                    </div>

                    <div className="pure-group ">
                        <label className="pure-group-label">소속기업 <span className="small">(선택사항)</span></label>
                        <input name="companyName" className="pure-group-text"
                               type="text" 
                               placeholder="모비데이즈"
                               maxLength="10"
                            //    ref={ register({ maxLength: 10 }) }
                        />
                    </div>

                    <div className="pure-group">
                        <label className="pure-group-label">직함 <span className="small">(선택사항)</span> </label>
                        <input id="position" name="position" className="pure-group-text"
                               type="text" 
                               placeholder="팀장"
                               maxLength="10"
                            //    ref={ register({ maxLength: 10 }) }
                        />
                    </div>

                    <div className="pure-group">
                        <label className="pure-group-label" >연락처</label>
                        <input type="text" name="phoneNum" className="pure-group-text" 
                               placeholder="00012340000" maxLength="12"
                            //    ref={ register({ required: true, pattern:/^[0-9]+$/ }) } 
                        />
                    </div>

                    <div className="pure-group">
                        <label className="pure-group-label" >이메일</label>
                        <input id="email" name="email" 
                               type="email"
                               className="pure-group-text"
                               placeholder="yourEmail@email.com" 
                            //    ref={ register({ required: true,pattern:/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/ }) }
                        />
                    </div>

                    <div className="pure-group">
                        <label className="pure-group-label" >문의사항</label>
                        <textarea id="message" name="message" rows="10" className="pure-group-text" 
                          placeholder="채용 또는 커리어 관련 문의사항을 남겨주세요.&#13;&#10;모비인터치 담당자가 배정되어 연락을 드릴 예정입니다.&#13;&#10;(*영업일 3일 기준)" 
                          maxLength="1000"
                        //   ref={ register({ required: true,maxLength:1000 }) } 
                        ></textarea>
                    </div>
                </div>

                <div className="pure-group-modal">
                    <label>
                        <input className="filled-in" name="agr" type="checkbox"  
                               required
                            //    ref={ register({ required: true }) } 
                        />
                        <span className="text-deco">개인정보 취급방침</span>
                       {/* <span>
                        <Modal className="form"
                               actions={[
                                   <div className="modal-btn">   
                                       <div className="modal-close " > 
                                       <i className="Medium material-icons">close</i> 
                                       </div>
                                   </div>
                               ]}
                               trigger={ <span className="text-deco">개인정보 취급방침</span> }
                        >  
                          <ul className="text-contents">
                                <li>수집항목 : 이름, 휴대전화번호, 이메일주소, 경력정보 등의 지원자가 직접 작성한 본 서베이 및 향후 제출하는 이력서 내 모든 정보</li>
                                <li>수집 및 활용목적 : 면접 관련 정보 제공, 면접자 불만처리 및 상담 등 민원 처리, 분쟁조정 및 해결을 위한 기록보존, 모비데이즈에서 제공하는 다양한 광고/마케팅 관련 정보 공유</li>
                                <li>보관기간
                                    <ul>
                                        <li>개인정보 제공일로부터 1년간 보관되며, 보관기간 내에 신청자가 직접 개인정보 파기 요청을 하지 않는 경우, 자동으로 1년 연장</li>
                                        <li>단, 상법 및 ‘전자상거래 등에서의 소비자 보호에 관한 법률’ 등 관련 법령에 의하여 일정 기간 보관이 필요한 경우에는 해당 기간 동안 보관함</li>
                                    </ul>
                                </li>
                                <li>동의 거부권 등에 대한 고지: 정보주체는 개인정보의 수집 및 이용 동의를 거부할 권리가 있으나, 이 경우 채용 프로세스 지원에 제한이 있을 수 있습니다.</li>
                            </ul>
                        </Modal>에 동의합니다
                        </span> */}
                    </label>
                </div>
                <p className="loading-txt">{loading == true ? 'Loading.....' : ''}</p>
                <div className="pure-group pure-group-btn">
                    <button className="button-success pure-button button-xlarge btn-style" >문의하기</button>
                </div>
            </form>
        </div>
    )
}
