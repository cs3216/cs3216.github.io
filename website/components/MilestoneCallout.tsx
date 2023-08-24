import {Callout} from 'nextra/components';
import {ReactNode} from 'react';

export default function MilestoneCallout({
  children,
  customNumber,
  labelSuffix,
}: Readonly<{
  children: ReactNode;
  customNumber: string; // For odd milestone numbers like "5a" or to start the current milestone from another number.
  labelSuffix: ReactNode; // Text added behind the "Milestone X" label.
}>) {
  return (
    <Callout type="info" emoji="🏁">
      <div
        className="milestone"
        style={{
          counterSet: customNumber ? `milestone ${customNumber}` : undefined,
        }}>
        <strong>
          Milestone {customNumber ?? <span className="milestone-counter" />}
          {labelSuffix && <> {labelSuffix}</>}:
        </strong>{' '}
        {children}
      </div>
    </Callout>
  );
}
