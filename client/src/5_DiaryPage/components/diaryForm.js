import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useState, forwardRef, useEffect} from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './diary.css'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import {API_URL} from '../../Common/Common'

const DiaryForm = () => {
  //false 새글정보 
  //true 수정정보 
  const [btnStatus, setBtnStatus] = useState(false);
  const [ViewData, setViewData] = useState({
     id:""
    ,title:""
    ,content:""
    ,date:""
    ,color:""
  })
  const {title, content, date, color } = ViewData;
  const [list, setData] = useState([]);

  useEffect(()=> {
    //페이지 처음 들어올때 기본 날짜 설정 
    setViewData({
       date:new Date()
      ,color:"#7A90E2"
    })
    search();
  },[])

  const search = () => {
    axios.get(API_URL+ '/diary').then((response) => {
    setData(response.data.data);
    //setViewData(response.data.data)
    })
  }

  const defaultSetting = () => {
    setViewData({
       id:""
      ,title:""
      ,content:""
      ,date:new Date()
      ,color:"#7A90E2"
    })
  }

  const DatePick = forwardRef(({ value, onClick }, ref) => (
    <Datebutton className='custom-btn'
      onClick={onClick} ref={ref}>
        {value}
    </Datebutton> ));

  const getChangeValue = (e) => {
    const{name, value} = e.target;
    console.log(name,value);
    setViewData({
      ...ViewData,
      [name]: value
    })
  };

  const submit = () => {
    if(!btnStatus){
        axios.post(API_URL+'/diary', {
           title: ViewData.title
          ,content: ViewData.content
          ,date: ViewData.date
          ,color:'#FFCCCC'
        }).then((response) => {
          alert('완료');
          defaultSetting();
          search();
        })
    }else{
        if(window.confirm('수정하시겠습니까?')){
          axios.patch(API_URL+ '/diary/' + ViewData.id,{
            title:ViewData.title
            ,content: ViewData.content
            ,date: ViewData.date
            ,color:'#FFCCCC'
          }).then((response) => {
            if(response.data.message === "successful"){
              search()
              defaultSetting();
              setBtnStatus(false);
            } else {
              console.error(response.data.message)
            }
          })
        }else{
          alert("다른거 선택해주세요.")
        }
    }
  };

  const ResetBtnClick = () => {
    if(window.confirm('처음으로 돌아가시겠습니까?')) {
      defaultSetting();
      setBtnStatus(false);
    }
  };


  const Removediary = (idx) => {
    window.confirm("삭제하시겠습니까?");
    axios.delete(API_URL +'/diary/' + idx,{
  }).then((response) => { 
    console.log(response);
    if(response.data.message === "successful"){
      alert('삭제완료');
      search();
    } else {
      alert('다시 선택해 주세요');
    }
  });
}

  const Viewdiary = (item) => {
    console.log("박스클릭" + JSON.stringify(item));
    if(ViewData.id !== item._id){
      setViewData({
           title : item.title
          ,content : item.content
          ,color : item.color
          ,id : item._id
          ,date : new Date(item.date)
      })
      setBtnStatus(true);
  }
};
// 슬라이드 세팅값
  const settings = {
    dots: true,
    arrow: true,
    speed: 700,
    infinite: true,
    rows: 2,
    slidesPerRow: 2,
  }

  return (
    <>
    <AllDiaryBox>
      <DiaryContainer style={{backgroundColor: ViewData.color}}>
        <PostTitle>
          <Datebox>
            <DatePicker
              value={date}
              dateFormat="yyyy-MM-dd"
              selected={ViewData.date}
              onChange={(date) => setViewData({
              ...ViewData,
              'date': date
              })}
              customInput={<DatePick/>}
            />
          </Datebox>

          <div className='inputBox'>
            <input
              type="text"
              placeholder="제목을 작성해주세요"
              onChange={getChangeValue}
              name='title'
              value={title}
            />
          </div>

          <FontAwesomeIcon
            type='button'
            className="CheckIcon" 
            icon={faCircleCheck} 
            onClick={submit}
          />

          <FontAwesomeIcon
            type='button'
            className="beforeIcon" 
            icon={faCircleArrowLeft}
            onClick={ResetBtnClick}
          />
        </PostTitle>
          <WriteInnerBox>
            <PostForm>
              <textarea
                type="text"
                placeholder="일기내용을 작성해주세요"
                onChange={getChangeValue}
                name='content'
                value={content}
              />
            </PostForm>
          </WriteInnerBox>
      </DiaryContainer>

        <WhiteContainer>
          <div className="sliderWrap">
            <Slider {...settings}>
            {list.map((item) => (
              <DiaryBoxContainer key={item._id}>
                <div className="diaryWrap">
                  <div className="dateBox" 
                    style={{color: item.color, borderColor: item.color}}
                  >
                    {item.date.substr(0,10)}

                    <FontAwesomeIcon className="XIcon" 
                    icon={faXmark}
                    onClick={(e) => Removediary(item._id, e)}/>

                  </div>
                  <div 
                    className="titleBox"
                    style={{backgroundColor: item.color}}
                    onClick={() => Viewdiary(item)}
                  >
                    <div>
                      {item.title}
                    </div>
                  </div>
                </div>
              </DiaryBoxContainer>
            ))}
            </Slider>
          </div>
        </WhiteContainer>
    </AllDiaryBox>
    </>
  );
};
export default DiaryForm;

const DiaryContainer = styled.div`
  max-width: 676px;
  max-height: 400PX;
  margin: 0 auto;
  border-radius: 15px;
  background-color: #7A90E2;
  //background-color: red;
  //background-color: ${(props) => props.color};
  justify-content: center;
  padding: 27px;
`
const PostTitle = styled.div`
  width: 670px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: end;
  margin-bottom: 10px;
  //background-color: blue;
  left: 10px;

  & p {
    margin-right: 30px;
    text-align: center;
    font-size: 18px;
    color: white;
    font-family: 'SB 어그로 M';
  }

  & .inputBox{
    width: 300px;
    height: 40px;
    border-radius: 20px;
    background-color: white;
    display: flex;
    position: relative;
    align-items: center;
    padding: 0 20px;
    margin-right: 10px;
    right: 60px;

    & input {
      width: 100%;
      font-family: 'SB 어그로 L';
      border: none;
      :focus {
        outline: none;
      }
    }
  }

  & .CheckIcon {
    width: 50px;
    height: 35px;
    color: white;
    position: relative;
    display: flex;
    //background-color: aliceblue;
    right: 50px;
  }

  & .beforeIcon{
    display: flex;
    position: relative;
    width: 35px;
    height: 35px;
    border-radius: 50px;
    color: white;
    right: 40px;
  }
`

const WriteInnerBox = styled.div`
  width: 100%;
  height: 260px;
  /* background-color: black; */
  border-radius: 10px;
  margin: 0 auto;
`
const PostForm = styled.form`
  width: auto;
  height: auto;
  margin: 0 auto;
  padding: 20px;

  & textarea {
    resize: none;
    width: 95%;
    height: 190px;
    font-family: 'SB 어그로 L';
    border: none;
    padding: 15px 15px;
    ::-webkit-scrollbar {
      width: 8px;
      background-color: #F4F4F4;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      width: 8px;
      background-color: #c4c4c4;
      border-radius: 10px;
    }
    :focus {
      outline: none;
    }
  }
`
const Datebutton = styled.button`
  width: 110px;
  height: 40px;
  border: none;
  border-radius: 30px;
  background-color: #8D72E1;
  color: white;
  :hover{
    background-color: #8D9EFF;
  }
`
const Datebox = styled.div`
  width: 140px;
  height: 40px;
  //background-color: yellow;
  position: relative;
  display: flex;
  right: 70px;
  


`
const AllDiaryBox = styled.div`
  width: 800px;
  position: relative;
  height: 800px;
  //background-color: blueviolet;
  z-index: 10;
`

const WhiteContainer = styled.div`
  width: 676px;
  height: 310px;
  margin: 0 auto;
  background-color: #CED0E9;
  overflow: hidden;
  margin-top: 50px;

  & .sliderWrap {
    margin: 0 auto;
    padding-top: 10px;
  }
`

const DiaryBoxContainer = styled.div`
  font-family: 'SB 어그로 M';
  & .diaryWrap {
    margin: 20px 0;
  }

  & .dateBox {
    width: 261px;
    height: 30px;
    border-radius: 10px 10px 0 0;
    border: 2px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin: 0 auto;

    & .XIcon {
      color: black;
      position: relative;
      left:20px;
      bottom: 2px;
    }
  }

  & .titleBox {
    width: 265px;
    height: 55px;
    margin: 0 auto;
    border-radius: 0 0 10px 10px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`