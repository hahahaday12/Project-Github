import Layout from "../Layout/layout"
import TodoListForm from "./todoList/todoListForm";
import BurketListForm from "./burketList/burketListForm";
import styled from "styled-components";


const Fourpage = () => {

  return (
    <>
      <Layout>
        <ListWrap>
          <TodoListForm/>
          <BurketListForm/>
        </ListWrap>
      </Layout>
    </>
  )
}

export default Fourpage;


const ListWrap = styled.div`
  width: fit-content;
  height: auto;
  display: flex;
  justify-content: space-between;
`