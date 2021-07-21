import moment from "moment";

export const formatDate = (date) =>
  moment(date).format(`🔥YYYY[년] MM[월] DD[일] 개봉박두🔥`);

export const trimText = (text, limit) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;
