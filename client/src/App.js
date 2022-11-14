import {RecoilRoot} from 'recoil';
import { Routes, Route} from 'react-router-dom';
import axios from 'axios';
import PrivateRoute from "./privateRoute";
import AuthService from './service/auth.service';
import Onepage from './1_LoginPage';
import TwoPage from './2_JoinPage'
import ThirdPage from './3_CalendarPage';
import Fourpage from './4_TodoPage';
import Fivepage from './5_DiaryPage';



function App() {
  return (
    <div className="App">
      <>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={
            <PrivateRoute component={<ThirdPage/>} status={<Onepage/>}/>
          }/>
          <Route path="/twopage" element={<TwoPage/>}/>

          <Route path="/thirdpage" element={
            <PrivateRoute component={<ThirdPage/>}/>
          }/>

          <Route path="/fourpage" element={
            <PrivateRoute component={<Fourpage/>}/>
          }/>
          <Route path="/fivepage" element={
            <PrivateRoute component={<Fivepage/>}/>
          }/>
        </Routes>
        </RecoilRoot>
      </>
    </div>
   )
};
export default App;