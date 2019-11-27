import React from 'react';

import './PricingRow.css';

const PricingRow = ({ durationText, durationAmount, lang }) => <div className="pricing-row-wrapper">
    <span>{durationText[lang ? 0 : 1]}</span>
    <span className="amount">{durationAmount}</span>
</div>

export default PricingRow;