function CustomButton(props) {
  const { text, color } = props;
  return <button style={{ backgroundColor: color }}>{text}</button>;
}

export default CustomButton;
