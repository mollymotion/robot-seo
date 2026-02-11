import Link from 'next/link';

interface DocumentHeaderProps {
  title: string;
  version: string;
  status: string;
  scope: string;
  showCTA?: boolean;
}

export default function DocumentHeader({ title, version, status, scope, showCTA = false }: DocumentHeaderProps) {
  return (
    <div className="document-header">
      <div className="document-meta">
        <h1 className="document-title">{title}</h1>
        <div className="document-labels">
          <span className="version-label">{version}</span>
          <span className="status-label">{status}</span>
        </div>
      </div>
      <p className="scope-statement">{scope}</p>
      {showCTA && (
        <div className="document-actions">
          <Link href="/contact" className="cta-standard">
            Request an evaluation
          </Link>
        </div>
      )}
    </div>
  );
}