const Text = ({
  weight = "regular",
  color = "black",
  size = "md",
  label,
  children,
}) => {
  return (
    <div>
      <span
        className={`font-${weight} text-${color}  text-${size}`}
        title={label}
      >
        {children}
      </span>
    </div>
  );
};
export default Text;
