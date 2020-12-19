import React from "react"
import "../../font-awesome/css/font-awesome.min.css"
import AnalyticsStructure from "./AnalyticsStructure.js"


class Analytics extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        const analyticsoverview = this.props.analyticsdata.map((article) => {
            return (
            <AnalyticsStructure article={article}/>
            );
        });


        return (
            <div>
                    {analyticsoverview}
            </div>
        );
    }
}

export default Analytics
