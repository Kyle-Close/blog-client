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
  const textarea = document.createElement('textarea');
  textarea.innerHTML = encodedString;
  return textarea.value;
}

export const formatDate = (date: string) => {
  const dateObject = new Date(date);

  let options: any = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const formattedDate = dateObject.toLocaleDateString(undefined, options);
  return formattedDate.toUpperCase();
};

export const limitChars = (inputString: string, limit: number) => {
  return inputString.length > limit
    ? inputString.substring(0, limit) + '...'
    : inputString;
};

export function capitalizeWords(str: string) {
  const words = str.split(' ');
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(' ');
}
