import { useEffect, useState } from "react";
import UserLightIcon from "../../icons/UserLightIcon";
import UserProfilePic from "../../assets/images/avatar.png";
import CloseIcon from "../../icons/CloseIcon";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { handleApiResponse } from "../../helper/apiHelpers";
import { toast } from "react-toastify";
import { apiUrl } from "../../utils/constants";

const ProfileContainer = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const isUserProfilePic = true;
  const navigate = useNavigate();

  function toggleProfile() {
    setIsProfileOpen(!isProfileOpen);
  }

  const Logout = async () => {
    try {
      const token = localStorage.getItem("AdminSessionToken");
      localStorage.removeItem("AdminSessionToken");
      axios.defaults.headers.common["Authorization"] = `${token}`;
      const response = await axios.post(`${apiUrl}/user/logout`, {
        token: token,
      });
      handleApiResponse(
        response,
        (data) => {
          navigate("/admin/login");
        },
        (error) => {}
      );
    } catch (error) {
      console.log(error);
      toast.error("Logout Failed.");
    }
  };

  return (
    <>
      <button type="button" className="profile-btn" onClick={toggleProfile}>
        <span className="user-profile-icon">
          {!isUserProfilePic ? (
            <UserLightIcon />
          ) : (
            <img
              src={UserProfilePic}
              alt="User Profile"
              height="40px"
              width="40px"
            />
          )}
        </span>
        <span className="user-profile-name">User</span>
      </button>
      <div
        className={`profile-section-background  ${
          isProfileOpen ? "profile-open" : ""
        }`}
      >
        <div className={`profile-section`}>
          <div className="profile-pic-section">
            {!isUserProfilePic ? (
              <UserLightIcon height="80px" />
            ) : (
              <img
                src={UserProfilePic}
                alt="User Profile"
                height="80px"
                width="80px"
              />
            )}
            <div className="close" onClick={toggleProfile}>
              <CloseIcon />
            </div>
          </div>
          <div className="user-profile-info">
            <h6 className="mb-0">Rahul Singh</h6>
            <small className="text-secondary">Admin</small>
          </div>
          <hr />
          <div>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={Logout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileContainer;
