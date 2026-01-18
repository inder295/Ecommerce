export const PdpImageCorosel = ({ image }) => {
  return (
    <>
      <div className="rounded mt-0 w-[600px] h-[500px] p-5 pt-0 ">
        <img
          src={image}
          alt="image"
          className="rounded-lg w-full h-full px-2 py-4 object-fit border border-blue-500"
        />
      </div>
    </>
  );
};
