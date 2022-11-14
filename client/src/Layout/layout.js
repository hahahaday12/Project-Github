import React from 'react'
import styled from 'styled-components';
import "../font/font.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import { faListCheck, faBook } from "@fortawesome/free-solid-svg-icons"
import AuthService from '../service/auth.service'
import Usertitle from '../service/user';


const Layout = ({ children }) => {
  const logOut = () => {
    AuthService.logout();
  }

    return(
    <> 
        <ALL>
            <Lcontainer>

             <HeaderTitle>
                <Usertitle/>
                <LogoutBox>
          <P><a href='/'onClick={logOut}>Logout</a></P>
                </LogoutBox>
            </HeaderTitle>

                <Link to="/">
                    <img alt='logoimg' src= './img/Life Calander_logo.png'/>
                    <p>Life</p>
                    <p>Calendar</p>
                </Link>

                <NavWrap>
                    <Link to='/thirdpage'>
                    <div className='iconBox'>
                        <FontAwesomeIcon className='icon icon1' icon={faCalendar}/>
                        <p>claendar</p>
                    </div>
                    </Link>

                    <Link to='/fourpage'>
                    <div className='iconBox'>
                        <FontAwesomeIcon className='icon' icon={faListCheck}/>
                        <p>checklist</p>
                    </div>
                    </Link>

                    <Link to='/fivepage'>
                    <div className='iconBox'>
                        <FontAwesomeIcon className='icon icon3' icon={faBook}/>
                        <p>diarybook</p>
                    </div>
                    </Link>
                    
                </NavWrap>
            </Lcontainer>

            <Rcontainer>
                <div className="content"> {children} </div>
            </Rcontainer>
        </ALL>
    </>
    )
}
export default Layout;

// 전체적으로 들어가야할  공통 레이아웃 
const ALL = styled.div`
    width: 1920px;
    height: 1080px;
    display: flex;
    border: 1px solid aqua;
    margin: 0 auto;
`
const Lcontainer = styled.div`
    width: 300px;
    height: 1080px;
    border: 1px solid aqua;
    font-family: 'SB 어그로 L';
    color: #545454;

    & a {
        text-decoration: none;
        color: #545454;
    }

    & img {
        width: 80px;
        height: 80px;
        display: block;
        margin: 0 auto;
        margin-top: 150px;
        margin-bottom: 40px;
    }

    & p {
        text-align: center;
        line-height: 2px;
    }
`


const NavWrap = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    height: 600px;

    & .iconBox {
        width: 100%;
        height: 58px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        border: 2px solid #545454;
        font-size: 14px;
        gap: 25px;
        /* background-color: yellow; */

        & .icon {
            margin-left: 30px;
        }
        
        & .icon, .icon p {
            width: 30px;
            height: 30px;
            color: #545454;
        }

        & .icon1, .icon1 + p {
        }

        & .icon3, .icon3 + p {
        }
    }
`

const Rcontainer = styled.div`
    width: 100%;
    height: auto;
    /* padding-top: 100px; */
    display: flex;
    justify-content: center;
    background-color: #F4F4F4;

    & .content {
        width: fit-content;
        height: auto;
        margin: 0 auto;
    }
`

const LogoutBox = styled.div`
  width: 90px;
  font-size: 20px;
  left: 200px;
  color: darkgray;
  text-decoration: none;
  background-color: white;
  border-radius: 20px;
  z-index: 10;
  display: flex;
  position: relative;  
`

const HeaderTitle = styled.div`
    width: 700px;
    /* background-color: yellow; */
    position: relative;
    display: flex;
    left: 760px;
    top: 60px;
`

const P = styled.p`
    margin-left: 10px;
    text-decoration: none;
    color: rgb(122, 122, 122);
`