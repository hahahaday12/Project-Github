import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import axios from 'axios';


const DiaryForm = () => {

  const [Viewtitle, setViewTitle] = useState({
    id:"",
    title:"",
    content:"",
    date:"",
    color:""
  })

  const [viewContent, setViewContent] = useState([]);


  const getValue = e => {
    const{name, value} = e.target;
    console.log(name,value);
    setViewTitle({
      ...Viewtitle,
      [name]: value
    })
    console.log('제목이 쓰입니다');
  };


  const submit = () => {
    axios.post('http://kai.dahyeon.us:10200/todo', {
      title: Viewtitle.title,
      content: Viewtitle.content
    }).then(() => {
      alert('완료');
    })
  };



  const Content = e => {
    const{name, value} = e.target;
    console.log(name, value);
    setViewContent({
      ...viewContent,
      [name]: value
    })
    console.log('내용이 쓰이고 있습니다.')
  }

  return (
    <>
      <ContainerOutBox>
        
        <PostTitle>
          <p>2022.10.10</p>

          <div className="inputBox">
            <input className='title-input'
              type="text"
              placeholder="제목을 작성해주세요"
              onChange={getValue}
              name='title'
            />
          </div>

          {/* <FontAwesomeIcon className="penIcon" icon={faPen}/> */}
        <button className='submit-button'
         onClick={submit} 
        >등록</button>

        </PostTitle>

        <WriteInnerBox>
          <PostForm>
            <textarea
              type="text"
              placeholder="일기내용을 작성해주세요"
              onChange={Content}
              name='content'
            />
          </PostForm>
        </WriteInnerBox>
      </ContainerOutBox>
    </>
  );
}

export default DiaryForm;


const ContainerOutBox = styled.div`
  max-width: 676px;
  max-height: 400PX;
  margin: 0 auto;
  border-radius: 15px;
  background-color: #C4C4C4;
  justify-content: center;
  padding: 27px;
`

const PostTitle = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 20px;

  & p {
    margin-right: 30px;
    text-align: center;
    font-size: 18px;
    color: white;
    font-family: 'SB 어그로 M';
  }

  & .inputBox{
    width: 50%;
    height: 40px;
    border-radius: 20px;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 0 20px;

    & input {
      width: 100%;
      font-family: 'SB 어그로 L';
      border: none;
      :focus {
        outline: none;
      }
    }
  }

  & .penIcon {
    width: 20px;
    height: 20px;
    color: white;
    margin-left: 40px;
    margin-right: 15px;
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