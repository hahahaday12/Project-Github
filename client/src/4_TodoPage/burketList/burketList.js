import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const BurketList = () => {

  const [todo, setTodo] = useState([
    {
      id: 7,
      text: "운동 시작하기",
    },
    {
      id: 8,
      text: "그림그리기"
    },
    {
      id: 9,
      text: "버킷리스트 작성하기"
    },
  ])

  return (
    <>
      {todo.map((item) => (
        <Buket key={item.id}>
          <div className="inputBox">
            <input 
              type={"text"} 
              value={item.text}
            />
            <div className="iconBox">
                <FontAwesomeIcon className="penIcon" icon={faPen}/>
                <FontAwesomeIcon className="XIcon" icon={faXmark}/>
              </div>
          </div>
        </Buket>
      ))}
    </>
  );
}

export default BurketList;


const Buket = styled.div`
  width: 310px;
  height: 60px;
  margin: 0 auto;
  margin-top: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .inputBox {
    width: 310px;
    height: 60px;
    border-radius: 15px;
    padding: 0 30px;
    background-color: #FFCCCC;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .iconBox {
      width: auto;
      height: auto;
      display: flex;
      align-items: center;
      color: white;
      gap: 10px;

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
    max-width: 40%;
    border: none;
    font-family: 'SB 어그로 L';
    background-color: #FFCCCC;
    color: white;
    font-size: 16px;
    :focus {
      outline: none;
    }
  }
`