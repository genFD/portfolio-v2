import React, { useState } from 'react';

const Textarea = ({ onChange, form }) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };
  const input = {
    id: 3,
    message: 'message',
    type: 'text',
    placeholder: 'Enter your message',
    label: 'Your message',
    required: true,
  };

  return (
    <div className="form-row">
      <label htmlFor="name" className="form-label text-body-4">
        {input.label}
      </label>
      <textarea
        {...input}
        onChange={onChange}
        className="form-textarea"
        onBlur={handleFocus}
        value={form.message}
        focused={focused.toString()}
      />
      <small className="form-alert text-body-3 mt-2">
        Please enter your Message
      </small>
    </div>
  );
};

export default Textarea;
