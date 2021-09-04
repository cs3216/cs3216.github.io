export default function formatDate(dateString) {
  return new Intl.DateTimeFormat('en-SG', {
    dateStyle: 'full',
    timeStyle: dateString.includes(':') ? 'long' : undefined,
  }).format(new Date(dateString));
}
