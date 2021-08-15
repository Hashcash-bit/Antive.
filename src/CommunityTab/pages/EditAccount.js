import HeaderTab from '../components/Header';
import UpdateForm from '../components/UpdateForm';
// import FlashMessage from '../components/FlashMessage';

import {
  ProfileContainer,
  EditContainer,
  MenuList,
  MenuBody,
  MenuItem,
} from '../styles/profile';

export default function EditAccount() {
  return (
    <ProfileContainer>
      {/* <FlashMessage message="Profile updated" /> */}
      <HeaderTab />
      <EditContainer>
        <MenuList>
          <MenuItem className="active">Edit Profile</MenuItem>
        </MenuList>
        <MenuBody>
          <UpdateForm />
        </MenuBody>
      </EditContainer>
    </ProfileContainer>
  );
}
