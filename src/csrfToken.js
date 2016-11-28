export default function csrfToken() {
  return document.getElementById('csrf-token-meta-tag').content;
}
