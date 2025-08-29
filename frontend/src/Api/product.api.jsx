import Api from './index';

export const getAllPrducts = async () => {
  const res = await Api.get('/product/get-products');
  return res.data;
};
