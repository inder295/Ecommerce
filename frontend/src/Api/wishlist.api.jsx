import Api from './index';

export const addRemovewishlist = async (productId) => {
  if (!productId) {
    console.log('no product id return ');
  }
  console.log('id = ', productId.id);

  const res = await Api.get(
    `/wishlist/add-remove-product-in-wishlist/${productId.id}`
  );

  return res.data;
};

export const getAllWishlistItems = async () => {
  const res = await Api.get('/wishlist/get-all-wishlist-items');
  return res.data;
};

export const checkWishlistItem = async (productId) => {
  const res = await Api.get(`/wishlist/check-wishlist-item/${productId.id}`);
  return res.data;
};
