import React from 'react'
import styled from 'styled-components';
import "../font/font.css"
import { Link } from 'react-router-dom';
import AuthService from '../service/auth.service'
import Usertitle from '../service/user';
import Sidebar from './sideBar';


const Layout = ({ children }) => {
  const logOut = () => {
    AuthService.logout();
  }

    return(
    <> 
        <ALL>
            <LeftContainer>
                <Link to="/">
                    <img alt='logoimg' src= './img/Life Calander_logo.png'/>
                    <p>Life</p>
                    <p>Calendar</p>
                </Link>

                <NavWrap>
                    <Sidebar/>
                </NavWrap>
            </LeftContainer>

            <RightContainer>
                <HeaderTitle>
                    <Usertitle/>
                    <LogoutBox>
                        <p><a href='/'onClick={logOut}>Logout</a></p>
                    </LogoutBox>
                </HeaderTitle>
                <div className="content"> {children} </div>
            </RightContainer>
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
const LeftContainer = styled.div`
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
        margin-top: 140px;
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
`


const RightContainer = styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    background-color: #F4F4F4;

    & .content {
        width: fit-content;
        height: auto;
        margin: 0 auto;
    }
`

const HeaderTitle = styled.div`
    width: fit-content;
    gap: 70px;
    display: flex;
    margin: 60px auto 30px auto;
`

const LogoutBox = styled.div`
  width: 100px;
  height: 50px;
  font-size: 18px;
  color: darkgray;
  background-color: white;
  border-radius: 25px;
  display: flex;
  & p {
    margin: 0 auto;
    line-height: 45px;
    a {
        text-decoration: none;
        color: rgb(122, 122, 122);
    }
  }
`
