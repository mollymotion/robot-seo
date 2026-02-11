interface DefinitionPanelProps {
  children: React.ReactNode;
}

export default function DefinitionPanel({ children }: DefinitionPanelProps) {
  return (
    <section className="definition-panel" role="region" aria-labelledby="definition-heading">
      <div className="definition-content">
        {children}
      </div>
    </section>
  );
}