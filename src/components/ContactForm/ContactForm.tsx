import { forwardRef } from 'react';

import { FormikProps, useFormik } from 'formik';
import * as Yup from 'yup';

import Email from '@/components/Email/Email.tsx';
import { render } from '@react-email/render';

import './ContactForm.scss';

interface FormValues {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  privacyPolicy: boolean;
}

const ContactForm = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      privacyPolicy: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      company: Yup.string(),
      phone: Yup.string(),
      message: Yup.string().required('Required'),
      privacyPolicy: Yup.boolean()
        .oneOf([true], 'You must accept the privacy policy')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      const API_KEY = 'pk_802e16ef126b4e690a78466b78b2a67b923e9d757f763ae7'; // Replace with your actual Plunk API key

      const emailHtml = render(<Email {...values} />);

      try {
        const response = await fetch('https://api.useplunk.com/v1/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            to: 'ddo2102@gmail.com',
            subject: 'New Contact Request',
            body: emailHtml,
          }),
        });

        if (response.ok) {
          alert('Email sent successfully!');
        } else {
          console.error('Failed to send email', await response.json());
        }
      } catch (error) {
        console.error('Error sending email', error);
      }
    },
  });

  return (
    <div className='contact-wrapper'>
      <h1 className='contact-title'>Kontakt</h1>
      <form onSubmit={formik.handleSubmit}>
        <div ref={ref} className='blur contact-form'>
          <div className='form-group'>
            <label htmlFor='name'>Ihr Name</label>
            <input
              id='name'
              name='name'
              type='text'
              placeholder='z.b. Sam Grey'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className='error'>{formik.errors.name}</div>
            ) : null}
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Ihre E-Mail</label>
            <input
              id='email'
              name='email'
              type='email'
              placeholder='z.b. user.name@gmail.com'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='error'>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className='form-group'>
            <label htmlFor='company'>Firma</label>
            <input
              id='company'
              name='company'
              type='text'
              placeholder='z.b. Besure inc.'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.company}
            />
            {formik.touched.company && formik.errors.company ? (
              <div className='error'>{formik.errors.company}</div>
            ) : null}
          </div>

          <div className='form-group'>
            <label htmlFor='phone'>Telefon</label>
            <input
              id='phone'
              name='phone'
              type='text'
              placeholder='z.b. +000 000 000 000'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className='error'>{formik.errors.phone}</div>
            ) : null}
          </div>

          <div className='form-group full-width'>
            <label htmlFor='message'>Ihre Nachricht</label>
            <textarea
              id='message'
              name='message'
              placeholder='z.b. Ich möchte kooperieren'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className='error'>{formik.errors.message}</div>
            ) : null}
          </div>

          <div className='form-group checkbox-group full-width'>
            <label className='custom-checkbox'>
              <input
                type='checkbox'
                name='privacyPolicy'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.privacyPolicy}
              />
              <span className='checkmark'></span>
              <p>I agree to the Privacy Policy</p>
            </label>
            {formik.touched.privacyPolicy && formik.errors.privacyPolicy ? (
              <div className='error'>{formik.errors.privacyPolicy}</div>
            ) : null}
          </div>

          <div className='button-group'>
            <button type='submit' className='submit-button'>
              Senden
            </button>
          </div>
        </div>
      </form>
    </div>
  );
});

export default ContactForm;
