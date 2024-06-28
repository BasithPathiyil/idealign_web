export const formatDate = (isoString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const date = new Date(isoString);
    return date.toLocaleDateString('en-GB', options);
  };