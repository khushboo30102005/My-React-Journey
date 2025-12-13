

const Button = ({step, onClick, style}) => {
  return (
    <div>
      <button className="bg-amber-400 px-8 py-4 font-bold text-2xl active:bg-amber-700 rounded-2xl m-2 active:scale-95 cursor-pointer text-black" style = {style} onClick = {onClick}>
        {step}
      </button>
    </div>
  );
};

export default Button;
