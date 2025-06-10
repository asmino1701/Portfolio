import PropTypes from 'prop-types';
import React from 'react';

export function GradientButton({ text = '', btnClass = '', onClick = () => {} }) {
    return(
        <button
            className={btnClass}
            onClick={onClick}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                {text}
            </span>
        </button>
    );
}

export function Anchor({ text = '', btnClass = '', target = '_blank', rel = 'noopener noreferrer', href = '#' }) {
    return(
        <a
            className={btnClass}
            target={target}
            rel={rel}
            href={href}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                {text}
            </span>
        </a>
    );
}

GradientButton.propTypes = {
    text: PropTypes.string,
    btnClass: PropTypes.string,
    onClick: PropTypes.func,
};