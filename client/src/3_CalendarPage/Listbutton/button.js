import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"

const Bu = () => {
  return(
    <>
    <Todoo>
      <IconBox> 
        <FontAwesomeIcon className='icon icon1' icon={faCalendar}/>
          <CP>Calendar</CP>
      </IconBox>
    </Todoo>
    </>
  )
}
export default Bu; 

const Todoo = styled.div`
width: 209px;
height: 60px;
border-radius: 10px;
background-color: pink;
position: absolute;
z-index: 30;
display: flex;
top: 460px;
left: 100px;
`
const IconBox = styled.div`
width: 200px;
/* background-color: aqua; */
height: 50px;
`

const CP = styled.div`
  font-size: 23px;
  color: #3F4E4F;
  width: 100px;
  height: 30px;
  /* background-color: beige; */
  left: 90px;
  display: flex ;
  position: relative;
  bottom: 40px;
`