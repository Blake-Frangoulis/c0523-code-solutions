function CustomButton(props) {
  const { text, color, onCustomClick } = props;
  return (
    <button
      onClick={() => onCustomClick(text)}
      style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

export default CustomButton;
