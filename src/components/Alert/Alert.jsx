
import css from './Alert.module.css'
const alertStyles = {
  margin: 8,
  padding: "12 16",
  borderRadius: "4",
  backgroundColor: 'gray',
  color: "white",
}

const getBgColor = variant => {
  switch (variant) {
    case "info":
      return "blue";
    case "success":
      return "green";
    case "error":
      return "red";
    case "warning":
      return "orange";
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

export const Alert = ({ variant, children }) => {
    console.log( variant);
    console.log(children);
  return <p style={{ ...alertStyles , backgroundColor: getBgColor(variant) }}>
      {children}</p>;
};