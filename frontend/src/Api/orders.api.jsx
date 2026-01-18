import Api from './index';

export const placeOrder = async (formData) => {
  const res = await Api.post('/order/place-order', formData);
  return res.data;
};

export const orderConfirmation = async (session_id) => {
  const res = await Api.get(`/order/order-confirmation/${session_id}`);
  return res.data;
};

export const getUsersOrders = async () => {
  const res = await Api.get('/order/my-orders');
  return res.data;
};

export const getOrderById = async (orderId) => {
  const res = await Api.get(`/order/my-order/${orderId}`);
  return res.data;
};

export const getAllOrders = async () => {
  const res = await Api.get('/order/all-orders');
  return res.data;
};

export const getAdminOrderById = async (orderId) => {
  const res = await Api.get(`/order/order-by-id/${orderId}`);
  return res.data;
};

export const changeOrderStatus = async (orderId, status) => {
  console.log(orderId, status);

  const res = await Api.patch(
    `/order/update-order-status/${orderId}`,
    { status: status },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );

  return res.data;
};
