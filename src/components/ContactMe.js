import React from 'react';
import { Link } from 'react-router-dom';

const ContactMe = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-8 tablet:flex-row tablet:justify-between tablet:px-10 laptop:px-40 w-full">
      <h3 className="text-heading-2 heading-footer  text-center">
        Interested in doing a project together?
      </h3>
      <Link to="/contact">
        <button className="w-40 h-12 border ">Contact me</button>
      </Link>
    </div>
  );
};

export default ContactMe;
