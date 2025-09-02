import Api from './index';

export const signup = async ({ name, email, password }) => {
  const res = await Api.post('/auth/signup', { name, email, password });
  return res.data;
};

export const signin = async ({ email, password }) => {
  const res = await Api.post('/auth/signin', { email, password });
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

export const check = async () => {
  const res = await Api.get('/auth/check');
  return res.data;
};
