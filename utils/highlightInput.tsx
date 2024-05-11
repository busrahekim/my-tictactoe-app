import { Text } from "react-native";

interface HighlightProps {
  text: string;
  query: string;
}

export const highlightInput = (
  text: string,
  query: string
): React.ReactNode => {
  const index = text.toLowerCase().indexOf(query.toLowerCase());
  console.log(index);

  if (index !== -1) {
    return (
      <>
        {text.substring(0, index)}
        <Text>{text.substring(index, index + query.toLowerCase().length)}</Text>
        {text.substring(index + query.toLowerCase().length)}
      </>
    );
  }

  return text;
};
