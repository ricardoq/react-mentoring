export const stringifyDate = (date) => {
  if (isInvalidDate(date)) {
    date = new Date();
  }
  const offset = date.getTimezoneOffset()
  date = new Date(date.getTime() + (offset*60*1000))
  return date.toISOString().split('T')[0]
}

export const isInvalidDate = (date) => date instanceof Date && isNaN(date);
