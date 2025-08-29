import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div>
      <section class="bg-gray-200 dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Get Existing Deals At Best Prices And Low Cost Emi's
            </h1>
            <p class="max-w-2xl mb-6 font-light text-black-500 lg:mb-8 md:text-lg lg:text-xl dark:text-black-400">
              Upgrade your tech, power up your life – grab the hottest deals
              before they’re gone!
            </p>

            <Link
              to="/product-list"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black-900 border border-blue-300 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-black-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Go to Sales
            </Link>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
