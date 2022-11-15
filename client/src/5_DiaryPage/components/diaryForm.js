import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons";


const DiaryForm = () => {
  return (
    <>
      <ContainerOutBox>
        
        <PostTitle>
          <p>2022.10.10</p>
          <div className="inputBox">
            <input
              type={"text"}
              placeholder={"제목을 작성해주세요"}
            />
          </div>
          <FontAwesomeIcon className="penIcon" icon={faPen}/>
        </PostTitle>

        <WriteInnerBox>
          <PostForm>
            <textarea
              placeholder={"일기내용을 작성해주세요"}
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
  max-height: 424PX;
  margin: 30px 0 20px 0;
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
  height: 313px;
  background-color: white;
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
    height: 240px;
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