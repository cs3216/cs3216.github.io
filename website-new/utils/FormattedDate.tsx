export default function FormattedDate({
  date: dateString,
  emphasize = true,
}: Readonly<{ date: string; emphasize?: boolean }>) {
  const formattedString = new Intl.DateTimeFormat("en-SG", {
    dateStyle: "full",
    timeStyle: dateString.includes(":") ? "short" : undefined,
    timeZone: "Australia/Sydney",
  }).format(new Date(dateString));

  const Tag = emphasize ? "strong" : "span";
  return <Tag suppressHydrationWarning={true}>{formattedString}</Tag>;
}
