'use client';

import { useEffect, useState } from 'react';

export default function ObfuscatedEmail() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Construct email to avoid bot scraping
    const user = 'evaluation';
    const domain = 'robot-seo.com';
    const fullEmail = user + '@' + domain;
    setEmail(fullEmail);
  }, []);

  if (!email) return null;

  return (
    <a href={`mailto:${email}`}>{email}</a>
  );
}