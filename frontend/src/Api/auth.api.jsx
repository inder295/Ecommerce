import Api from './index';

export const signup = async (formData) => {
  
  const res = await Api.post('/auth/signup',formData,{
    headers: { "Content-Type": "application/json" },
    withCredentials: true
  });
  return res.data;
};

export const signin = async (formData) => {
  const res = await Api.post('/auth/signin',formData);
  return res.data;
};

export const logout = async () => {
  const res = await Api.post('/auth/logout');
  return res.data;
};

export const adminLogin = async ({ email, password }) => {
  const res = await Api.post('/auth/admin-signin', { email, password });
  return res.data;
};

export const adminLogout=async()=>{
   const res=await Api.get('/auth/admin-logout');
   return res.data;
}

export const check = async () => {
  const res = await Api.get('/auth/check');
  return res.data;
};

export const checkAdmin=async()=>{
  const res=await Api.get('/auth/admin-check');
  return res.data;
}
