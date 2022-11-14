import Cbutton from '../Listbutton/calendar';
import Ckbutton from '../Listbutton/checklist'
import DiaryButton from '../Listbutton/diary';
import styled from 'styled-components';

const Listbutton = () => {
  return(
    <>
      <ListBox>
        <Cbutton/>
        <Ckbutton/>
        <DiaryButton/>
      </ListBox>
    </>
  )
}
export default Listbutton;

const ListBox = styled.div`
  width: 290px;
  background-color: yellow;
  height: 300px;
  bottom: 60px;
  position: relative;
`