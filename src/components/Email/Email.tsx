import React from 'react';

interface EmailProps {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

const Email: React.FC<EmailProps> = ({ name, email, company, phone, message }) => {
  return (
    <html lang='en'>
      <body>
        <h1>New Contact Request</h1>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Company:</strong> {company}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Message:</strong> {message}
        </p>
      </body>
    </html>
  );
};

export default Email;
