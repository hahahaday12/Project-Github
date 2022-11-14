import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const TodoList = () => {

  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "샌드위치 먹기",
    },
    {
      id: 2,
      text: "심부름 확인하기"
    },
    {
      id: 3,
      text: "버킷리스트 작성하기"
    },
  ])


  return (
    <>
      <TodoListWrap>
        <p>Todo</p>
        {todo.map((item) => (
          <TodoCheck key={item.id}>
            <div className="inputBox">
              <input 
                type={"text"} 
                value={item.text}
                readOnly
              />
              <div className="iconBox">
                <FontAwesomeIcon className="penIcon" icon={faPen}/>
                <FontAwesomeIcon className="XIcon" icon={faXmark}/>
              </div>
            </div>
          </TodoCheck>
        ))}
      </TodoListWrap>
    </>
  );
}

export default TodoList;


const TodoListWrap = styled.div`
  width: 276px;
  height: fit-content;
  padding: 15px;
  border-radius: 15px;
  background-color: #7A90E2;

  & p {
    text-align: center;
    margin: 30px 0 40px 0;
    font-size: 22px;
    font-family: 'SB 어그로 M';
    color: white;
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
    background-color: white;

    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .iconBox {
      width: auto;
      height: auto;
      display: flex;
      align-items: center;
      gap: 10px;
      color: #C4C4C4;

      .penIcon {
        width: 12px;
        height: 12px;
      }

      .XIcon {
        width: 15px;
        height: 15px;
      }
    }
  }

  & input {
    width: 160px;
    border: none;
    font-family: 'SB 어그로 L';
    color: #7A90E2;
    font-size: 16px;
    :focus {
      outline: none;
    }

    ::after {
      content: url('./img/square-regular.svg');
      width: 20px;
      height: 20px;
      display: inline-block;
    }
  }
`
