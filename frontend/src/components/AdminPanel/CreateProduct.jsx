import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Attribute } from './Attribute';
import { useCategory } from '../../store/useCategory';
import { useProduct } from '../../store/useProduct';

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    inventory: '',
    brand: '',
    images: [],
    preview: [],
  });

  const [attribute, setAttribute] = useState({});
  const [attrKey, setAttrKey] = useState('');
  const [attrValue, setAttrValue] = useState('');
  const [category, setCategory] = useState([]);

  const { fetchAllCategories, categories } = useCategory();
  const { createProduct, isproductCreating } = useProduct();

  useEffect(() => {
    try {
      fetchAllCategories();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleAddAttribute = () => {
    if (!attrKey || !attrValue) return;

    setAttribute((prev) => {
      // Split by comma and trim spaces
      const newValues = attrValue.split(',').map((v) => v.trim());

      // Merge with existing or create new
      const updatedValues = prev[attrKey]
        ? [...new Set([...prev[attrKey], ...newValues])]
        : newValues;

      return { ...prev, [attrKey]: updatedValues };
    });

    setAttrValue('');
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    if (!e.target.files) {
      return;
    }
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: files,
      preview: files.map((file) => URL.createObjectURL(file)),
    });
  };

  const handleCategory = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCategory((prev) => [...prev, value]);
    } else {
      setCategory((prev) => prev.filter((p) => p !== value));
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      data.append('price', formData.price);
      data.append('inventory', formData.inventory);
      data.append('brand', formData.brand);
      data.append('attributes', JSON.stringify(attribute));
      data.append('categories', JSON.stringify(category));

      formData.images.forEach((img) => {
        data.append('image', img);
      });

      await createProduct(data);

      toast.success('Product Created Successfully');
      navigate('/admin/products');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-4xl ml-64 p-6">
      <form onSubmit={handleSubmit}>
        <div className="py-2">
          <label
            htmlFor="first_name"
            class="block mb-2 text-sm font-medium font-bold text-gray-900 dark:text-white"
          >
            Product name
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="name"
            value={formData.name}
            placeholder="Name"
            required
            onChange={handleChange}
          />
        </div>

        <div className="py-2">
          <label
            htmlFor="first_name"
            class="block mb-2 text-sm font-medium font-bold text-gray-900 dark:text-white"
          >
            Product Description
          </label>
          <textarea
            className="w-full border rounded-lg p-2 text-gray-800 text-sm bg-gray-50"
            placeholder="Write description in markdown..."
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="py-2">
          <label
            htmlFor="first_name"
            class="block mb-2 text-sm font-medium font-bold text-gray-900 dark:text-white"
          >
            Product Inventory
          </label>
          <input
            type="number"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Inventory"
            required
            name="inventory"
            value={formData.inventory}
            onChange={handleChange}
          />
        </div>

        <div className="py-2">
          <label
            htmlFor="first_name"
            class="block mb-2 text-sm font-medium font-bold text-gray-900 dark:text-white"
          >
            Product Price
          </label>
          <input
            type="number"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Price"
            required
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className="py-2">
          <label
            htmlFor="brand"
            class="block mb-2 text-sm font-medium font-bold text-gray-900 dark:text-white"
          >
            Product Brand
          </label>
          <input
            type="text"
            id="brand"
            class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="brand"
            value={formData.brand}
            placeholder="Brand"
            required
            onChange={handleChange}
          />
        </div>

        <label
          htmlFor="brand"
          class="block mb-2 text-sm font-medium font-bold text-gray-900 dark:text-white mt-2"
        >
          Product Attributes
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Attribute (e.g. color)"
            value={attrKey}
            onChange={(e) => setAttrKey(e.target.value.toLowerCase())}
            class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Value (e.g. red, blue)"
            value={attrValue}
            onChange={(e) => setAttrValue(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            type="button"
            onClick={handleAddAttribute}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
        </div>

        <Attribute attribute={attribute} />

        <div className="my-2">
          <label
            htmlFor="Image"
            class="block mb-2 text-sm font-medium font-bold text-gray-900 dark:text-white"
          >
            Product Image
          </label>
          <div class="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or webp (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                multiple
                class="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          {formData.preview.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="preview"
              className="w-24 h-24 object-cover rounded-lg border"
            />
          ))}
        </div>

        <label
          htmlFor="brand"
          class="block mb-2 text-sm font-medium font-bold text-gray-900 dark:text-white mt-2"
        >
          Product Category
        </label>

        {categories.map((category, id) => (
          <div key={id} className="flex items-center m-4 ">
            <input
              id={`category-${id}`}
              type="checkbox"
              value={category.id}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
              onChange={handleCategory}
            />
            <label
              htmlFor={`category-${id}`}
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
            >
              {category.name}
            </label>
          </div>
        ))}

        <div className="py-2">
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isproductCreating ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
