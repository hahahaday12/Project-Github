import DiaryForm from "./components/diaryForm";
import Layout from "../Layout/layout"
import ColorForm from "./components/colorForm";
import DiaryReadTitle from "./components/diaryReadTitle";

const Fivepage = () => {


  return (
    <>
      <Layout>
        <ColorForm/>
        <DiaryForm/>
        <DiaryReadTitle/>
      </Layout>
    </>
  )
}

    

export default Fivepage;
