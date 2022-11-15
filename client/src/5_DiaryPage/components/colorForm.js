import { useState } from "react";
import styled from "styled-components";

const ColorForm = () => {


// 현재는 임시로
// 공통으로 쓰일 color 데이터는 recoil로 전역으로 관리할 예정
  const [color,setColor] = useState([
    {
      id: 10,
      data: "pink",
      color: "#FFCCCC",
      text: "설렘",
    },
    {
      id: 11,
      data: "blue",
      color: "#7A90E2",
      text: "슬픔",
    },
    {
      id: 12,
      data: "yellow",
      color: "#FFDF78",
      text: "기쁨",
    },
    {
      id: 13,
      data: "red",
      color: "#E5636F",
      text: "화남",
    },
    {
      id: 14,
      data: "gray",
      color: "#C4C4C4",
      text: "무기력",
    },
  ])

  return (
    <>
      <WhiteContainer>
        <p className="titleText">오늘의 기분은 무슨 색인가요?</p>
        <div className="colorWrap">
          {color.map((item) => (
            <ColorBox key={item.id}>
              <div style={{backgroundColor: item.color}}/> {item.text}
            </ColorBox>
          ))}
        </div>
      </WhiteContainer>
    </>
  )
}

export default ColorForm;

const WhiteContainer = styled.div`
  width: 676px;
  height: 106px;
  background-color: white;
  display: inline-block;
  margin: 0 auto;
  font-family: 'SB 어그로 L';

  & .titleText {
    text-align: center;
    margin-top: 25px;
  }

  & .colorWrap {
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`

const ColorBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #C4C4C4;
  
  & div {
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
`