import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const TodoListDone = () => {

  const [done, setDone] = useState([
    {
      id: 4,
      text: "샌드위치 먹기",
    },
    {
      id: 5,
      text: "투두리스트 완성하기",
    },
  ])

  return (
    <>
      <TodoDoneWrap>
        <p>Done</p>
        {done.map((item) => (
          <TodoCheck key={item.id}>
            <div className="inputBox">
              <input 
                type={"text"} 
                value={item.text}
                readOnly
              />
              <div className="checkDot">
                <FontAwesomeIcon className="faCheck" icon={faCheck}/>
              </div>
            </div>
          </TodoCheck>
        ))}
      </TodoDoneWrap>
    </>
  )
}

export default TodoListDone;


const TodoDoneWrap = styled.div`
  width: 276px;
  padding: 15px;
  border-radius: 15px;
  height: fit-content;
  background-color: white;
  border: 2px solid #7A90E2;

  & p {
    text-align: center;
    margin: 30px 0 40px 0;
    font-size: 22px;
    font-family: 'SB 어그로 M';
    color: #7A90E2;
  }
`

const TodoCheck = styled.div`
  width: 100%;
  height: 60px;
  margin: 0 auto;
  margin-top: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .inputBox {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: #7A90E2;
    display: flex;
    padding: 0 30px;
    align-items: center;
    justify-content: space-between;

    .checkDot {
      width: 17px;
      height: 17px;
      border-radius: 10px;
      background-color: white;

      .faCheck {
        width: 12px;
        margin: 0 auto;
        position: relative;
        bottom: 2px;
        left: 3px;
        color: #7A90E2;
      }
    }
  }

  & input {
    width: 160px;
    border: none;
    font-family: 'SB 어그로 L';
    color: white;
    
    background-color: #7A90E2;
    font-size: 16px;
    :focus {
      outline: none;
    }
  }
`