import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

const DiaryReadTitle = () => {

  const [list, setList] = useState([
    {
      id: 15,
      date: "2022.09.30",
      title: "일기 제목 보이기",
      color: "#FFCCCC",
    },
    {
      id: 16,
      date: "2022.09.27",
      title: "일기 제목 보이기",
      color: "#C4C4C4",
    },
    {
      id: 17,
      date: "2022.09.23",
      title: "일기 제목 보이기",
      color: "#FFDF78",
    },
    {
      id: 18,
      date: "2022.09.22",
      title: "일기 제목 보이기",
      color: "#7A90E2",
    },
    {
      id: 19,
      date: "2022.09.20",
      title: "일기 제목 보이기",
      color: "#FFCCCC",
    },
  ])

  const settings = {
    dots: true,
    arrow: true,
    speed: 700,
    infinite: true,
    rows: 2,
    slidesPerRow: 2,
  }

  return (
    <>
      <WhiteContainer>
        <div className="sliderWrap">
          <Slider {...settings}>
            {list.map((item) => (
              <DiaryBoxContainer key={item.id}>
                <div className="diaryWrap">
                  <div 
                    className="dateBox" 
                    style={{color: item.color, borderColor: item.color}}
                  >
                    {item.date}
                    <FontAwesomeIcon className="XIcon" icon={faXmark}/>
                  </div>
                  <div 
                    className="titleBox"
                    style={{backgroundColor: item.color}}
                  >
                    <div>
                      {item.title}
                    </div>
                  </div>
                </div>
              </DiaryBoxContainer>
            ))}
          </Slider>
        </div>
      </WhiteContainer>
    </>
  );
}

export default DiaryReadTitle;

const WhiteContainer = styled.div`
  width: 676px;
  height: 310px;
  margin: 0 auto;
  background-color: white;
  overflow: hidden;

  & .sliderWrap {
    margin: 0 auto;
    padding-top: 10px;
  }
`

const DiaryBoxContainer = styled.div`
  font-family: 'SB 어그로 M';
  
  & .diaryWrap {
    margin: 20px 0;
  }

  & .dateBox {
    width: 261px;
    height: 30px;
    border-radius: 10px 10px 0 0;
    border: 2px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin: 0 auto;

    & .XIcon {
      color: #C4C4C4;
      position: relative;
      left: 65px;
      bottom: 2px;
    }
  }

  & .titleBox {
    width: 265px;
    height: 55px;
    margin: 0 auto;
    border-radius: 0 0 10px 10px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
