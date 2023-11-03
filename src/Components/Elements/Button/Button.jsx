const Button = (props) => {
  const { children = "...", classname = "bg-white", onClick, } = props;
  return (
    <button
      onClick={onClick}
      className={`font-normal py-3 px-4 rounded-2xl ${classname}`}
    >
      {children}
    </button>
  );
};

export default Button



