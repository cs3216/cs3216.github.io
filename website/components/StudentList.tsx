import { useState } from "react";
import students from "./students.json";

type Props = Readonly<{
  year: number;
}>;

export default function StudentList({ year }: Props) {
  const [hideImage, setHideImage] = useState(false);

  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto lg:mx-0 flex flex-col gap-y-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Class of {year}
          </h1>
          <img
            alt="Class photo"
            className={hideImage && "hidden"}
            onError={() => {
              setHideImage(true);
            }}
            src={`/img/class-photos/${year}.jpg`}
          />
        </div>
        <ul
          role="list"
          className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {students
            .find((batch) => batch.year === year)
            .students.map((student) => (
              <li key={student.name}>
                <img
                  className="aspect-square w-full rounded-2xl object-cover"
                  src={`/img/students/${year}/${student.id}.jpg`}
                  alt=""
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                  {student.name}
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
                <ul role="list" className="mt-4 flex gap-x-6">
                  <li>
                    <a
                      href={student.blog}
                      className="text-gray-400 dark:text-gray-600 hover:text-gray-500 dark:hover:text-gray-500"
                    >
                      <span className="sr-only">Blog</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
