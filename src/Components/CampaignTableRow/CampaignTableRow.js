/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './CampaignTableRow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import calendarImage from '../../assets/calendar.png';
import csvImage from '../../assets/csv.png';
import priceImage from '../../assets/price.png';
import reportImage from '../../assets/report.png';

import camp1 from "../../assets/camp1.png";
import camp2 from "../../assets/camp2.png";
import camp3 from "../../assets/camp3.png";
import camp4 from "../../assets/camp4.png";
import camp5 from "../../assets/camp5.png";
import camp6 from "../../assets/camp6.png";
import camp7 from "../../assets/camp7.png";
import camp8 from "../../assets/camp8.png";

const imageConfig = {
    camp1,
    camp2,
    camp3,
    camp4,
    camp5,
    camp6,
    camp7,
    camp8,
};

const months = ['Jan', "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


const CampaignTableRow = ({ data, openModal, onChange, diffText}) => {
    const { imageKey, name, region, createdOn } = data;
    const createdDate = new Date(createdOn);
    return <div className="row-wrapper">
        <div className="flex-column">
            <span className="date-text">{months[createdDate.getMonth()]} {createdDate.getFullYear()}, {createdDate.getDate()}</span>
            <span className="date-diff">{diffText}</span>
        </div>
        <div className="campaign">
            <div className="campaign-image">
                <img src={imageConfig[imageKey]} />
            </div>
            <div className="campaign-text flex-column">
                <span>{name}</span>
                <span><i>{region}</i></span>
            </div>
        </div>
        <div className="action-wrapper" onClick={openModal}>
            <div className="icon-wrapper">
                <img src={priceImage} alt="price-icon" />
            </div>
            <span> View Pricing</span>
        </div>
        <div className="action-col">
            <div className="action-wrapper">
                <div className="icon-wrapper">
                    <img src={csvImage} alt="csv-icon" />
                </div>
                <span>CSV</span>
            </div>
            <div className="action-wrapper">
                <div className="icon-wrapper">
                    <img src={reportImage} alt="report-icon" />
                </div>
                <span> Report</span>
            </div>
            <div className="action-wrapper">
                <div className="icon-wrapper">
                    <img className="imgfix" src={calendarImage} alt="calendar-icon" />
                </div>
                <DatePicker
                    onChange={onChange}
                    selected={data.createdDate}
                    withPortal={false}
                />
                <span className="scheduleAgain"> Schedule Again </span>
            </div>
        </div>
    </div>
}

export default CampaignTableRow;