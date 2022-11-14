import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import BurketList from "./burketList";

const BurketListForm = () => {

  return (
    <>
      <BurketWhiteBox>

        <div className="dateWrap">
          <div className="dateBox">
            <p>2022</p>
          </div>
          <p className="burketText">Burket List</p>
          
          <BukerInputWrap>
            <input
              type={"text"}
              placeholder={"버킷리스트를 추가해 주세요"}
            />
            <FontAwesomeIcon className="faPlus" icon={faPlus}/>
          </BukerInputWrap>
        </div>
        
        <BurketList/>
      </BurketWhiteBox>

    </>
  );
}

export default BurketListForm;

const BurketWhiteBox = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 35px;
  margin-left: 40px;
  background-color: white;

  & .dateWrap {
    margin: 0 auto;
    margin-bottom: 20px;
  }

  & .dateBox {
    width: 177px;
    height: 42px;
    margin: 0 auto;
    border-radius: 20px;
    font-family: 'SB 어그로 M';
    font-size: 18px;
    color: white;
    background-color: #FFCCCC;
    display: flex;
    justify-content: center;
    line-height: 11px;
  }
  
  & .burketText {
    text-align: center;
    font-size: 18px;
    font-family: 'SB 어그로 M';
    color: #FFCCCC;
  }
`


const BukerInputWrap = styled.div`
  width: 256px;
  height: 22px;
  display: flex;
  margin: 30px auto 50px auto;


  & p {
    font-size: 18px;
    color: #FFCCCC;
    font-family: 'SB 어그로 M';
    margin: 0;
  }

  & input {
    width: 220px;
    border: none;
    font-family: 'SB 어그로 L';
    border-bottom: 1px solid #474747;
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
    background-color: #FFCCCC;
    border-radius: 20px;
    width: 18px;
    height: 18px;
    padding: 3px;
  }
`