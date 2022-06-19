import React from 'react';
import { ContactMe, Footerback } from '../components';

const Footer = () => {
  return (
    <footer className="mt-20 laptop:mt-40">
      <ContactMe />
      <Footerback />
    </footer>
  );
};

export default Footer;
