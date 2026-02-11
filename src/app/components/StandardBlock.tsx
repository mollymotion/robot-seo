import { ReactNode } from 'react';

interface StandardBlockProps {
  type: 'definition' | 'requirement' | 'example' | 'limitation';
  children: ReactNode;
}

export default function StandardBlock({ type, children }: StandardBlockProps) {
  const typeLabels = {
    definition: 'Definition',
    requirement: 'Requirement',
    example: 'Example',
    limitation: 'Limitation'
  };

  return (
    <div className="standard-block">
      <div className="block-label">{typeLabels[type]}</div>
      <div className="block-content">
        {children}
      </div>
    </div>
  );
}