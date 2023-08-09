import students from './students.json';
import Link from 'next/link';

type Props = Readonly<{
  hasClassPhoto?: boolean;
  year: number;
}>;

export default function StudentList({hasClassPhoto = true, year}: Props) {
  return (
    <div className="py-4">
      <div className="mx-auto max-w-7xl flex flex-col gap-y-8">
        {hasClassPhoto && (
          <img
            alt="Class photo"
            className="rounded-2xl w-full"
            src={`/img/class-photos/${year}.jpg`}
            loading="lazy"
          />
        )}
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {students
            .find((batch) => batch.year === year)
            .students.map((student) => (
              <li key={student.name}>
                <img
                  className="aspect-square w-full rounded-2xl object-cover"
                  src={`/img/students/${year}/${student.id}.jpg`}
                  alt={student.name}
                  loading="lazy"
                />
                <Link
                  className="hover:underline"
                  href={student.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                    {student.name} ↗
                  </h3>
                </Link>
                {student.faculty && (
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                    {student.faculty}
                  </p>
                )}
                {student.one_liner && (
                  <p className="mt-4 text-base leading-7 text-gray-800 dark:text-gray-200">
                    {student.one_liner}
                  </p>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
