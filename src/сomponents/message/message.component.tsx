import React from 'react';
import './message.component.css';

export default ({text}: { text: string }) => (
    <div className="Message">
        {text}
    </div>
)
