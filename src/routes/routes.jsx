import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Authentication/Registration";
import Login from "../Pages/Authentication/Login";
import DashboardLayout from "../Layout/Admin/DashboardLayout";
import EmailVerification from "../Pages/Authentication/EmailVerification";
import OTP_Verification from "../Pages/Authentication/OTP_Verification";
import ResetPassword from "../Pages/Authentication/ResetPassword";
import Admin_Home from "../Layout/Admin/Admin_Home";
import MayMemorials from "../Pages/MayMemorials/MayMemorials";
import CreatMemorial from "../Pages/MayMemorials/CreatMemorial/CreatMemorial";
// import CreateDigital from "../Pages/CreateDigitalWill/CreateDigital";
import CreateDigitalWills from "../Pages/CreateDigitalWills/CreateDigitalWills";
import DownloadPage from "../Pages/CreateDigitalWills/DownloadPage";
import Forget_Password_OTP_Verification from "../Pages/Authentication/Forget_Password_OTP_Verification";
// import CreatMemorial from "../Pages/MayMemorials/CreatMemorial/CreatMemorial";
  

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
        children: [
          {path: '/', element: <Home/>},
          {
            path: '/may_memorials',
             element: <MayMemorials/>
            },
          {
            path: '/create_memorial',
             element: <CreatMemorial/>
            },
          {
            path: '/create_digital',
             element: <CreateDigitalWills/>
            },
          {
            path: '/download_page',
             element: <DownloadPage/>
            },
      ]
    },

    {
        path: '/dashboard',
        element: <DashboardLayout />,
      children: [
      {index: true, element: <Admin_Home />},
      {path: 'admin_home', element: <Admin_Home/>}
        ]
    },

    {path: '/sign_up', element: <Registration/>},
    {path: '/login', element: <Login/>},
    {path: '/email_verify', element: <EmailVerification/>},
    {path: '/otp_verify', element: <OTP_Verification/>},
    {path: '/forget_password_otp_verify', element: <Forget_Password_OTP_Verification/>},
    {path: '/reset_password', element: <ResetPassword/>},
  ]);