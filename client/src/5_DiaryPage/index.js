import DiaryForm from "./components/diaryForm";
import Layout from "../Layout/layout"
import ColorForm from "./components/colorForm";
import styled from "styled-components";

const Fivepage = () => {


  return (
    <>
      <Layout>
        <DiaryContainer>
        <ColorForm/>
        <DiaryForm/>
        </DiaryContainer>
      </Layout>
    </>
  )
};
export default Fivepage;

const DiaryContainer = styled.div`
  width: 800px;
  height: 920px;
  //background-color: yellowgreen;
  position: relative;
  left: 50px;
`