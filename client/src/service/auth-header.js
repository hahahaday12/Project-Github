const AuthHeader = () =>  {
  const tokenData = localStorage.getItem("token");
  
  if (tokenData) {
    return { Authorization: 'Bearer ' + tokenData};
  } else {
    return{};
  }
}
export default AuthHeader;

/*
auth header 부분 
이 부분을 내보낼수 있고,
처음 우리는 JSON.pars(localStorage.getItem("token"));  이부분에 대해 정보를 얻을수 있다. 
로컬스토리지로부터 , user 라고 불리우는 것을
그리고 다음 사용자가 실제로 존재 하는지 , accesstoken과 함께 존재 하는지. 
존재할 경우 user, g헤더가 a
accesstoken 을 반환하고 싶음으로 

private 인 게시글을 보여주려면 여기 있는 헤더 값으로
헤더의 유무를 판단한다. 

*/