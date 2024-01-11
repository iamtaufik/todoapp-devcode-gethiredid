import React, { ButtonHTMLAttributes } from 'react';

type Props = {
  text: string;
  type: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  onClick: () => void;
};

const Button = ({ text, type, onClick, disabled }: Props) => {
  return (
    <button disabled={disabled} onClick={onClick} type={type} data-cy="activity-add-button" className="bg-primary font-medium flex items-center gap-2 text-white py-3 px-6 rounded-3xl">
      {disabled ? (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        </svg>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          {text}
        </>
      )}
      {/* 
        create spinner loading
      */}
    </button>
  );
};

export default Button;
