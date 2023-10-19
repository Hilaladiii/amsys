export const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="block text-[18px] font-normal">
      {children}
    </label>
  );
};
