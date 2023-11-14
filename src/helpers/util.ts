export function areAllFieldsPopulated<T>(data: T): boolean {
  for (const key in data) {
    if (typeof data[key] === 'string' && data[key] === '') {
      return false;
    }
  }
  return true;
}

export function removeMarkup(inputString: string) {
  var decodedString = decodeEntities(inputString);
  return decodedString.replace(/<[^>]*>/g, '');
}

export function decodeEntities(encodedString: string) {
  var doc = new DOMParser().parseFromString(encodedString, 'text/html');
  return doc.body.textContent || '';
}

export const formatDate = (date: string) => {
  const gmtDate = date.split('T')[0];
  const localDate = new Date(gmtDate);
  const options: any = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = localDate.toLocaleDateString(undefined, options);
  return formattedDate.toUpperCase();
};
