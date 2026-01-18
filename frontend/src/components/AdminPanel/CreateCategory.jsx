import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useCategory } from '../../store/useCategory';

const CreateCategory = () => {
  const { createCategory, sendingRequest } = useCategory();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.trim().length == 0) {
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createCategory(formData);
      toast.success(res.message);
    } catch (error) {
      console.log(error);
      toast.error('Error in creating category');
    } finally {
      navigate('/admin/category');
    }
  };

  return (
    <form className="p-4 ml-64 " onSubmit={handleSubmit}>
      <div className="py-2">
        <label
          htmlFor="first_name"
          class="block mb-2 text-sm font-medium font-bold text-gray-900 dark:text-white"
        >
          Category Name
        </label>
        <input
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="name"
          onChange={handleChange}
          placeholder="Name"
          required
        />
      </div>

      <div className="py-2">
        <label
          htmlFor="first_name"
          class="block mb-2 text-sm font-medium font-bold text-gray-900 dark:text-white"
        >
          Category Description
        </label>
        <textarea
          className="w-full border rounded-lg p-2 text-gray-800 text-sm bg-gray-50"
          placeholder="Write description in markdown..."
          name="description"
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        disabled={sendingRequest}
      >
        {sendingRequest ? 'Submiting...' : 'Submit'}
      </button>
    </form>
  );
};

export default CreateCategory;
