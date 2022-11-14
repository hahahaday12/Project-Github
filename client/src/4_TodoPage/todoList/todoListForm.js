import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import TodoList from "./todoList";
import TodoListDone from "./todoListDone";

const TodoListForm = () => {

  return (
    <>
      <TodoWhiteBox>
        <div className="dateWrap">
            <FontAwesomeIcon className="prevBtn" icon={faChevronLeft} />
          <div className="dateBox">
            <p>2022.10.26</p>
          </div>
            <FontAwesomeIcon className="nextBtn" icon={faChevronRight}/>
        </div>
        
        <TodoInputWrap>
          <p>Todo List</p>
          <input
            type={"text"}
            placeholder={"할 일을 추가해주세요"}
          />
          <FontAwesomeIcon className="faPlus" icon={faPlus}/>
        </TodoInputWrap>

        <TodoListWrap>
          <TodoList/>
          <TodoListDone/>
        </TodoListWrap>
      </TodoWhiteBox>
    </>
  )
}

export default TodoListForm;

const TodoWhiteBox = styled.div`
  width: 650px;
  height: auto;
  padding: 35px;
  background-color: white;

  & .dateWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  & .prevBtn {
    width: 15px;
    height: 15px;
    margin-right: 30px;
    color: #545454;
  }

  & .nextBtn {
    width: 15px;
    height: 15px;
    margin-left: 30px;
    color: #545454;
  }

  & .dateBox {
    width: 177px;
    height: 42px;
    border-radius: 20px;
    font-family: 'SB 어그로 M';
    background-color: #7A90E2;
    display: flex;
    justify-content: center;
    line-height: 11px;
    color: white;
    font-size: 18px;
  }
`

const TodoInputWrap = styled.div`
  width: 403px;
  height: 22px;
  display: flex;
  margin: 0 auto;
  margin-bottom: 60px;

  & p {
    font-size: 18px;
    color: #7A90E2;
    font-family: 'SB 어그로 M';
    margin: 0;
    padding-top: 3px;
  }

  & input {
    width: 220px;
    border: none;
    font-family: 'SB 어그로 L';
    border-bottom: 1px solid #474747;
    margin-left: 15px;
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
    background-color: #7A90E2;
    border-radius: 20px;
    width: 18px;
    height: 18px;
    padding: 3px;
  }
`
const TodoListWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin: 0;
  gap: 20px;
`