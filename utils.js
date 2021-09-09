import { useNavigation } from "@react-navigation/core";

export const trimText = (text = "", length) =>
  text.length > length ? `${text.slice(0, length)}...` : text;

export const formatDate = (date) => {
  const theDate = new Date(date);
  return theDate.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
