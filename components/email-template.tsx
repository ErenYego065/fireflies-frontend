import * as React from 'react';

interface EmailTemplateProps {
  verifyCode: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  verifyCode,
}) => (
  <div>
    <h1>{verifyCode}</h1>
  </div>
);
