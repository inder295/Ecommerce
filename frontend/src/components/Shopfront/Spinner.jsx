import { Loader } from 'lucide-react';

const Spinner = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin h-10 w-10 text-indigo-600" />
      </div>
    </>
  );
};

export default Spinner;
