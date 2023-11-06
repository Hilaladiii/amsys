const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="block text-[12px] md:text-[15px] 2xl:text-[18px] font-normal">
      {children}
    </label>
  );
};

export default Label
