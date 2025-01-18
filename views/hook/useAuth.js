import { useState, useCallback } from 'react';
import { Config } from '../constants';
import { setLocalStorage, emptyLocalStorage } from '../components/local_storage/index.js';
import {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  useChangePasswordMutation,
  useGetCurrentUserQuery,
  useUpdateAccountMutation,
  useUpdateAvatarMutation,
  useCreateSubscriptionMutation,
} from '../redux/storeApis.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { RouteConstant } from '../constants/RouteConstant';

const useAuth = () => {
  const [error, setError] = useState(null);
  const [loginUser] = useLoginUserMutation();
  const [registerUser] = useRegisterUserMutation();
  const [logoutUser] = useLogoutUserMutation();
  const [changePassword] = useChangePasswordMutation();
  const [updateAccount] = useUpdateAccountMutation();
  const [updateAvatar] = useUpdateAvatarMutation();
  const [createSubscription] = useCreateSubscriptionMutation();
  const { data: currentUser, isLoading, refetch } = useGetCurrentUserQuery();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = async (credentials) => {
    try {
      const response = await loginUser(credentials).unwrap();
      if (response?.data?.accessToken) {
        setLocalStorage(Config.token, response.data.accessToken);
        await refetch();
        return { success: true, data: response.data };
      }
      return { success: false, error: 'Invalid response from server' };
    } catch (err) {
      setError(err.message || 'Login failed');
      return { success: false, error: err.message || 'Login failed' };
    }
  };

  const handleGoogleLogin = useCallback(async (loginResult) => {
    try {
      if (loginResult.success && loginResult.data?.accessToken) {
        setLocalStorage(Config.token, loginResult.data.accessToken);
        await refetch();
        navigate(RouteConstant?.HOME);
      } else {
        console.error("Login error:", loginResult.error);
        alert(loginResult.error || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error("Google login error:", error);
      alert("Error during Google login: " + (error.message || 'Please try again'));
    }
  }, [navigate, refetch]);

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      emptyLocalStorage();
      window.location.reload()
      navigate("/login");
    }
  };
  const handleRegister = async (userData) => {
    try {
      const response = await registerUser(userData).unwrap();
      if (response?.data?.accessToken) {
        setLocalStorage(Config.token, response.data.accessToken);
        await refetch();
        return { success: true, data: response.data };
      }
      return { success: false, error: 'Invalid response from server' };
    } catch (err) {
      setError(err.message || 'Registration failed');
      return { success: false, error: err.message || 'Registration failed' };
    }
  };

  const handleChangePassword = async (passwordData) => {
    try {
      await changePassword(passwordData).unwrap();
      return { success: true };
    } catch (err) {
      setError(err.message || 'Password change failed');
      return { success: false, error: err.message || 'Password change failed' };
    }
  };


  const handleUpdateAccount = async (accountData) => {
    try {
      const response = await updateAccount(accountData).unwrap();
      return { success: true, data: response.data };
    } catch (err) {
      setError(err.message || 'Account update failed');
      return { success: false, error: err.message || 'Account update failed' };
    }
  };

  const handleUpdateAvatar = async (avatarData) => {
    try {
      const response = await updateAvatar(avatarData).unwrap();
      return { success: true, data: response.data };
    } catch (err) {
      setError(err.message || 'Avatar update failed');
      return { success: false, error: err.message || 'Avatar update failed' };
    }
  };

  const handleCreateSubscription = async (planId, paymentMethodId) => {
    try {
      const response = await createSubscription({
        planId: planId,
        paymentMethodId: paymentMethodId,
      }).unwrap();
      return { success: true, data: response.data };
    } catch (err) {
      setError(err.message || 'Subscription creation failed');
      return { success: false, error: err.message || 'Subscription creation failed' };
    }
  };
  const user = currentUser?.data
  return {
    user,
    error,
    isLoading,
    handleLogin,
    handleGoogleLogin,
    handleRegister,
    handleLogout,
    handleChangePassword,
    handleUpdateAccount,
    handleUpdateAvatar,
    handleCreateSubscription,
  };
};
export default useAuth;