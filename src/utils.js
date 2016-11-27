// Source: http://stackoverflow.com/a/2117523/1177228
// With adaptions from: http://stackoverflow.com/a/24203297/123048
export default function generateId() {
  const guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

  return guid
           .replace(/x/g, () => (Math.random() * 16 || 0).toString(16))
           .replace(/y/, () => ((Math.random() * 4) + 8 || 0).toString(16));
}
