import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen, faXmark  } from "@fortawesome/free-solid-svg-icons";
import { useState, forwardRef, useEffect} from 'react';
import { API_URL } from '../../Common/Common';
import styled from "styled-components";
import DatePicker from "react-datepicker";
import axios from 'axios';


const BucketList = () => {
const [Viewcontent, setViewcontent] = useState([]);
 const [ViewData, setViewData] = useState({
    content:""
    ,date:""
  });

  const search = () => {
    axios.get(API_URL+ '/bucketlist')
    .then((response) => {
    setViewcontent(response.data.data);
    });
  };

const {content, date } = ViewData;

const DatePick = forwardRef(({ value, onClick }, ref) => (
    <Datebutton className='custom-btn'
      onClick={onClick} ref={ref}>
        {value}
    </Datebutton> ));
 useEffect(()=> {
    setViewData({
       date:new Date()
    })
    search();
  },[]);

  const RemoveBucketList = (idx) => {
    window.confirm("삭제하시겠습니까?");
    axios.delete(API_URL +'/bucketlist/' + idx,{
  }).then((response) => { 
    console.log(response);
    if(response.data.message === "successful"){
      alert('삭제완료');
      search();
    } else {
      alert('다시 선택해 주세요');
    }
  });
  };

   const getChangeBucket = (e) => {
    const{name, value} = e.target;
    console.log(name,value);
    setViewData({
      ...ViewData,
      [name]: value
    });
  };

  const submitBucket = () => {
    axios.post(API_URL+'/bucketlist', {
           title: "test"
          ,content: ViewData.content
          ,date: ViewData.date
        }).then((response) => {
          alert('완료');
          setViewData({
          title: "test"
          ,content:""
          ,date:new Date()
        })
        search();
    });
};

  return(
    <>
      <BucketWhiteBox>
        <div className="bucketWrap">
          <div className="dateBox">
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
          </div>
          <p className="bucketText">Bucket List</p>
          
          <BucketInputWrap>
            <input
              type="text"
              placeholder="버킷리스트를 추가해 주세요"
              onChange={getChangeBucket}
              name='content'
              value={content}
            />
            <FontAwesomeIcon 
            className="faPlus" 
            icon={faPlus}
            onClick={submitBucket}
            />
          </BucketInputWrap>
        </div>
            {Viewcontent.map((item) => (
            <Bucket>
              <div className='bucketinner'>
                {item.content}
              </div>
              <div className="iconBox">
                <FontAwesomeIcon className="penIcon" icon={faPen}/>
                <FontAwesomeIcon className="XIcon" 
                icon={faXmark}
                onClick={(e) => RemoveBucketList(item._id, e)}
              />
              </div>  
            </Bucket>
          ))};
      </BucketWhiteBox>
    </>
  );
};
export default BucketList;

const BucketWhiteBox = styled.div`
  width: 400px;
  height: 630px;
  padding: 35px;
  margin-left: 40px;
  background-color: white;
  & .bucketWrap {
    margin: 0 auto;
    margin-bottom: 20px;
  }
  & .dateBox {
    width: 177px;
    height: 42px;
    margin: 0 auto;
    display: flex;
    position: relative;
    left: 30px;
  }
  & .bucketText {
    text-align: center;
    font-size: 18px;
    font-family: 'SB 어그로 M';
    color: #FFCCCC;
  }
`
const Datebutton = styled.button`
  width: 110px;
  height: 40px;
  border: none;
  border-radius: 30px;
  background-color: pink;
  color: white;
  :hover{
    background-color: #8D9EFF;
  }
`

const BucketInputWrap = styled.div`
  width: 256px;
  height: 22px;
  display: flex;
  margin: 30px auto 50px auto;
  & p {
    font-size: 18px;
    color: #FFCCCC;
    font-family: 'SB 어그로 M';
    margin: 0;
  }
  & input {
    width: 220px;
    border: none;
    font-family: 'SB 어그로 L';
    border-bottom: 1px solid #474747;
    margin-right: 15px;
    padding-left: 10px;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: #AFAFAF;
    }
  }
  & .faPlus {
    color: white;
    background-color: #FFCCCC;
    border-radius: 20px;
    width: 18px;
    height: 18px;
    padding: 3px;
  }
`

const Bucket = styled.div`
  width: 310px;
  background-color: #FFCCCC;
  height: 60px;
  margin-top: 13px;
  display: flex;
  position: relative;
  left: 45px;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;

    & .bucketinner{
    width: 150px;
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
    left: 60px;
    color: white;
    font-size: 18px;
  }; 

    &.iconBox {
      width: 60px;
      height: 30px;
      display: flex;
      align-items: center;
      color: white;
      gap: 15px;

      .penIcon {
        width: 15px;
        height: 15px;
      };
      .XIcon {
        width: 17px;
        height: 17px;
      };
    };
`