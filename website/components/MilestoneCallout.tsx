import {Callout} from 'nextra/components';
import {ReactNode} from 'react';

export default function MilestoneCallout({
  children,
  labelSuffix,
}: Readonly<{
  children: ReactNode;
  labelSuffix: ReactNode;
}>) {
  return (
    <Callout type="info" emoji="🏁">
      <div className="milestone">
        <strong>
          Milestone <span className="milestone-counter" />
          {labelSuffix && <> {labelSuffix}</>}:
        </strong>{' '}
        {children}
      </div>
    </Callout>
  );
}
