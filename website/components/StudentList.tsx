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
            src={`/img/class-photos/${year}.jpg`}
            loading="lazy"
          />
        )}
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {students
            .find((batch) => batch.year === year)
            .students.map((student) => (
              <li key={student.name}>
                <object
                  className="aspect-square w-full rounded-2xl object-cover bg-neutral-100 dark:bg-neutral-800"
                  data={`/img/students/${year}/${student.id}.jpg`}
                  type="image/jpeg"
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                  <Link
                    className="hover:underline"
                    href={student.url}
                    target="_blank"
                    rel="noreferrer noopener">
                    {student.name} ↗
                  </Link>
                </h3>
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
