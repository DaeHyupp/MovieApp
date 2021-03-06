import moment from "moment";

export const formatDate = (date) =>
  moment(date).format(`ğ¥YYYY[ë] MM[ì] DD[ì¼] ê°ë´ë°ëğ¥`);

export const trimText = (text = "", limit) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;
