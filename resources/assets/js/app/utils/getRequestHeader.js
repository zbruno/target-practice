export default function getRequestHeader() {
  const csrf = window.Laravel.csrfToken;
  return { Accept: 'application/json', 'X-CSRF-TOKEN': csrf };
}
