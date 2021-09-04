import React, {useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import students from './students';

const SIZE = 128;

export default function StudentsList({year}) {
  const [hideImage, setHideImage] = useState(false);

  return (
    <div>
      <img
        alt="Class photo"
        className="margin-bottom--lg"
        onError={() => {
          setHideImage(true);
        }}
        src={useBaseUrl(`/img/class-photos/${year}.jpg`)}
        style={{
          display: hideImage ? 'none' : 'inherit',
        }}
      />
      <div className="row">
        {students
          .filter((batch) => batch.year === year)[0]
          .students.map(({name, id, faculty, blog, one_liner}) => (
            <div className="col col--4 margin-bottom--lg" key={name}>
              <div
                className="card padding-top--lg text--center"
                style={{height: '100%'}}>
                <div className="card__image">
                  <img
                    alt={`${name} profile photo`}
                    style={{
                      borderRadius: SIZE / 2,
                      height: SIZE,
                      width: SIZE,
                      objectFit: 'cover',
                    }}
                    src={`/img/students/${year}/${id}.jpg`}
                  />
                </div>
                <div className="card__body">
                  <h3 className="margin-bottom--xs">{name}</h3>
                  {!!faculty && (
                    <div>
                      <small>{faculty}</small>
                    </div>
                  )}
                  <p>
                    <em>{one_liner}</em>
                  </p>
                </div>
                {!!blog && (
                  <div className="card__footer">
                    <a
                      className="button button--primary button--block"
                      href={blog}>
                      Profile
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
