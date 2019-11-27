import React from "react";
import "./CampaignTable.css";
import CampaignTableRow from '../CampaignTableRow';
import Modal from '../Modal';


class CampaignsDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
            selectedCampaign: null
        }
    }

    findDateDiff (createdDate) {
        const date1 = new Date();
        const date2 = new Date(createdDate);
        const diffTime = date2 - date1;
        const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const text = days === 0 ? "Live" : days < 0 ? `${Math.abs(days)} day${Math.abs(days) === 1 ? "" : "s"} ago` : `${Math.abs(days)} day${Math.abs(days) === 1 ? "" : "s"} to go`
        return { days, text};
    }

    render(){
        const { data, onChange, activeTab,} = this.props;
        const {isModalOpen,selectedCampaign } = this.state;
        return <div className="table-wrapper">
        <div className="table-header">
            <div>DATE</div>
            <div>CAMPAIGN</div>
            <div>VIEW</div>
            <div>ACTIONS</div>
        </div>
        {data && data.map((listItem, index) => {
            const diff = this.findDateDiff(listItem.createdOn);
            const isPositive = diff.days > 0;
            const isNegative = diff.days < 0;
            const zero= diff.days === 0;
            if (!((isPositive && activeTab === 0) || (zero && activeTab === 1) || (isNegative && activeTab === 2))) return null;
            return <CampaignTableRow
                key={index}
                diffText={diff.text}
                onChange={(date) => onChange(date, index)} data={listItem} openModal={() => {
                    this.setState({
                        isModalOpen: true,
                        selectedCampaign: index,
                    })
                }} 
                />
        })}
        {isModalOpen && <Modal close={() => this.setState({isModalOpen: false})} modalData={data[selectedCampaign]} />}
    </div>
    }
}



export default CampaignsDetail;

