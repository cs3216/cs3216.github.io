export default function formatDate(dateString) {
  return new Intl.DateTimeFormat('default', {
    dateStyle: 'full',
    timeStyle: dateString.includes(':') ? 'short' : undefined,
  }).format(new Date(dateString));
}
