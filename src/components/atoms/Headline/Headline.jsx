const Headline = ({ heading, description }) => {
  return (
    <div className="mb-10 flex justify-center">
      <div className="text-center w-full lg:w-2/5">
        <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
          {heading}
        </h2>
        <p className="text-base font-sans text-gray-600 leading-6">
          {description}
        </p>
      </div>
    </div>
  );
};
export default Headline;
