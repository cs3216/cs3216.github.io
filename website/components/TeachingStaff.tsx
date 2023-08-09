import students from "./students.json";
import Link from "next/link";

type Props = Readonly<{
  hasClassPhoto?: boolean;
  year: number;
}>;

export default function TeachingStaff({ hasClassPhoto = true, year }: Props) {
  return (
    <div className="py-4">
      <div className="mx-auto max-w-7xl flex flex-col gap-y-8">
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {students
            .find((batch) => batch.year === year)
            .staff.map((person) => (
              <li key={person.name}>
                <img
                  className="aspect-square w-full rounded-2xl object-cover"
                  src={person.image}
                  alt={person.name}
                  loading="lazy"
                />
                <Link
                  className="hover:underline"
                  href={person.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                    {person.name} ↗
                  </h3>
                </Link>
                {person.role && (
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                    {person.role}
                  </p>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
