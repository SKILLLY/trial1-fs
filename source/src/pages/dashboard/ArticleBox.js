import React from "react"


class ArticleBox extends React.Component {
/*
    constructor(props) {
        super(props);
    }*/
    render() {
        const indarticleinfo = this.props.articleinfo
        return (
          <div className="tasks" id={indarticleinfo.cssid}>
            <div className="article-ind" id="article-1">
              <img src="images/food.png" alt="" className="tasklogo" />
              <div className="article-topic">
              <h3>{indarticleinfo.heading}</h3>
              </div>
              <div className="article-details">
              <p>
              {indarticleinfo.brief}
              </p>
              <br />
            <div className="progress-dashboard">Progress<span className="fright">{indarticleinfo.Progress}%</span></div>

      <div className="progressbar">
        <div></div>
      </div>
      <div className="engagement">
        <i className="fa fa-eye" aria-hidden="true">    {indarticleinfo.Views}</i>&nbsp;&nbsp;
        <i className="fa fa-comments-o" aria-hidden="true"> {indarticleinfo.comments}</i>
        <i className="fa fa-clock-o fright" aria-hidden="true"> {indarticleinfo.DaysTaken}</i>
      </div>
    </div>
  </div>
</div>
        );
    }
}

export default ArticleBox
