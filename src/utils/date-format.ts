export const formatDate = (dateString: string) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (dateString) {
    const date = Date.parse(dateString);
    const dateObj = new Date(date);
    const day = dateObj.getDate() > 9 ? dateObj.getDate() : ('0' + dateObj.getDate());
    return `${day} ${months[dateObj.getMonth()]}, ${dateObj.getFullYear()}`;
  }
  return '';
};
