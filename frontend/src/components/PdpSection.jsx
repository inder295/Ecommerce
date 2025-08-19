import React, { useState } from 'react';
import {
  Star,
  Heart,
  ShoppingCart,
  Minus,
  Plus,
  Truck,
  Shield,
  RotateCcw,
} from 'lucide-react';

export const PdpSection = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('black');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = {
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.5,
    reviews: 1234,
    description:
      'Experience exceptional sound quality with our premium wireless headphones. Featuring advanced noise cancellation, 30-hour battery life, and premium comfort for all-day listening.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium leather ear cushions',
      'Wireless charging case',
      'Hi-Res audio certified',
    ],
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'black', value: '#000000' },
      { name: 'white', value: '#FFFFFF' },
      { name: 'blue', value: '#2563EB' },
      { name: 'red', value: '#DC2626' },
    ],
    inStock: true,
    stockCount: 15,
  };

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, Math.min(product.stockCount, quantity + change)));
  };

  const handleAddToCart = () => {
    console.log('Added to cart:', {
      product: product.name,
      quantity,
      size: selectedSize,
      color: selectedColor,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pt-40 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImage === index
                    ? 'border-blue-500'
                    : 'border-transparent hover:border-gray-300'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-gray-600 ml-2">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-3">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price}
            </span>
            <span className="text-xl text-gray-500 line-through">
              ${product.originalPrice}
            </span>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
              {Math.round((1 - product.price / product.originalPrice) * 100)}%
              OFF
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
            <div className="flex space-x-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedColor === color.name
                      ? 'border-gray-900 scale-110'
                      : 'border-gray-300 hover:border-gray-500'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? 'border-gray-900 bg-gray-900 text-white'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Quantity
              </h3>
              <div className="flex items-center space-x-3">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-gray-50 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 text-center min-w-[3rem]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-gray-50 transition-colors"
                    disabled={quantity >= product.stockCount}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-500">
                  {product.stockCount} items available
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`px-4 py-3 border rounded-md transition-colors ${
                  isWishlisted
                    ? 'border-red-500 text-red-500 bg-red-50'
                    : 'border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`}
                />
              </button>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Key Features
            </h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm text-gray-600"
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Shipping & Returns */}
          <div className="border-t pt-6 space-y-4">
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Truck className="w-5 h-5" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <RotateCcw className="w-5 h-5" />
              <span>30-day return policy</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Shield className="w-5 h-5" />
              <span>2-year warranty included</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
