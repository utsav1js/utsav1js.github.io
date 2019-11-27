import React,{Component} from "react";
import './tabHeading.css'

class TabHeading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { activeTab, changeActiveTab  } = this.props;
    return (
      <div>
        <h1>Manage Campaigns</h1>

        <div className="tab-wrapper">
          <span
            className={`tab-heading ${(activeTab === 0 && "active") || ""}`}
            onClick={() => changeActiveTab(0)}
          >
            Upcoming Campaigns
          </span>
          <span
            className={`tab-heading ${(activeTab === 1 && "active") || ""}`}
            onClick={() => changeActiveTab(1)}
          >
            Live Campaigns
          </span>
          <span
            className={`tab-heading ${(activeTab === 2 && "active") || ""}`}
            onClick={() => changeActiveTab(2)}
          >
            Past Campaigns
          </span>
        </div>
      </div>
    );
  }
}

export default TabHeading;


