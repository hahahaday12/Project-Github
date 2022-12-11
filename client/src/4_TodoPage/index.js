import Layout from "../Layout/layout"
import TodoList from "./todoList/todoList";
import BuketList from "./bucketList/bucket";
import styled from "styled-components";


const Fourpage = () => {
  return (
    <>
      <Layout>
        <ListWrap>
          <TodoListForm/>
          <BuketList/>
        </ListWrap>
      </Layout>
    </>
  )
};
export default Fourpage;

const ListWrap = styled.div`
  width: 1300px;
  height: 700px;
  display: flex;
  position: relative;
  justify-content: space-between;
  right: 250px;
`