import React from 'react';
import PropTypes from 'prop-types';
import { authService } from 'firebase/AppFirebase';
import { useHistory } from 'react-router-dom';

const Profile = props => {
  const history = useHistory()
  const onLogOutClick = () => {
    //google Servive signOut
    authService.signOut()
    //hook을 활용해서 로그아웃시 초기화면으로 복귀
    history.push("/")
  }
  return (
    <div>
      <button onClick={onLogOutClick}>Log Out</button>
    </div>
  );
};

Profile.propTypes = {
  
};

export default Profile;