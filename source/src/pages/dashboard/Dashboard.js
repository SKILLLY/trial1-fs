import React from "react"
import "../../font-awesome/css/font-awesome.min.css"

import ArticleBox from "./ArticleBox.js"
import QuickOverviewBox from "./QuickOverviewBox.js"
import '../../Css/dashboard/Dashboard.css'
class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {

        const articleboxes = this.props.dashboarddata.map((articleinfo) => {
            return (
            <ArticleBox articleinfo={articleinfo}/>
            );
        });


        return (
          <div className="total-grid">

          <div className="headings">
            <h1>Your Tasks</h1>

            <div className="sub-nav" id="task-nav">
              <a href="#all" className="active">ALL</a>
              <a href="#Started">STARTED</a>
              <a href="#Completed">COMPLETED</a>
              <a href="#ondisplay">ON DISPLAY</a>

            </div>
          </div>
  {articleboxes}
  <div className="quick-view" id="">
    <div className="quickv">
      <div id="donut-chart">
        <img src="images/donutchart.png" alt=""/>
      </div>
      <hr className="rule"/>
      <div id="past-transactions">

      </div>
    </div>
  </div>
</div>
        );
    }
}

export default Dashboard
