import Layout from "../Layout/layout"
import TodoListForm from "./todoList/todoListForm";
import BurketListForm from "./burketList/burketListForm";
import styled from "styled-components";


const Fourpage = () => {

  return (
    <>
      <Layout>
        <Todobox>
          <ListWrap>
            <TodoListForm/>
            <BurketListForm/>
          </ListWrap>
        </Todobox>
      </Layout>
    </>
  )
};
export default Fourpage;


const ListWrap = styled.div`
  width: fit-content;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  /* background-color: blueviolet; */
`

const Todobox = styled.div`
  width: 1200px;
  /* background-color: cadetblue; */
  height: 600px;
  top: 200px;
  display: flex;
  position: relative;
`