 import styled from 'styled-components';
 import React from 'react';

const UserName = ({ users }) => {
    console.log(users)
    return (
      <Userbox>
        <P>💕{users}님 환영합니다.</P>
      </Userbox>
    );
};
export default UserName;

const Userbox = styled.div`
  width: 400px;
  height: 50px;
  border-radius: 30px;
  background-color: white;
  font-size: 40px;
  display: flex;
`
const P = styled.div`
  font-size: 30px;
  font-family: "Gaegu", serif;
  margin: 0 auto;
`