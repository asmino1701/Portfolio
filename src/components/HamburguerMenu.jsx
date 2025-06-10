import React, { useState } from 'react';

export default function Hamburguer() {
    const [open, setOpen] = useState(false);

    return (
        <button
            className={`tham tham-e-squeeze tham-w-6${open ? ' is-active' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            type="button"
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
            <div className="tham-box">
                <div className="tham-inner" />
            </div>
        </button>
    );
}