import React from 'react'
import LoginInput from './logininput'
import LogoIner from './logoimg'
import Join from './Joinbutton'
import styled from 'styled-components'
//메인화면에서 토큰 여부 체크 
// 로그인 버튼 클릭후 토큰을 로컬 스토리지에 저장
// recoil 등등 전역 상태로 토큰값이 저장되게끔. 일단 로컬로 잘 저장되는지 요청을 보낼때 토큰보낼때 


const Onepage = () => {
    return(
        <>
            <Allwrap>
                <Centerwrap>
                    <LogoIner/>
                    <LoginInput/>
                    <Join/>
                </Centerwrap>
            </Allwrap>
        </>
    )
};
export default Onepage;

const Allwrap = styled.div`
    width: 1920px;
    height: 1080px;
    margin: 0 auto;
    border: 1px solid aqua;
`

const Centerwrap = styled.div`
    width: 410px;
    height: 1080px;
    margin: 0 auto;
`