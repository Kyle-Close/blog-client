export function areAllFieldsPopulated<T>(data: T): boolean {
  for (const key in data) {
    if (typeof data[key] === "string" && data[key] === "") {
      return false;
    }
  }
  return true;
}
