import React from 'react';

class SmallTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="small-tile">
            <div className="small-tile-articles">
                <img className="small-tile-articles-image" src={this.props.image} alt="" />

                <div className="small-tile-article-content">
                    <div className="small-tile-article-content-heading">
                        {this.props.title}
                    </div>

                    <span className="small-tile-article-content-text">
                        {this.props.metaText}
                    </span>

                    <div className="small-tile-article-content-details">
                        <div className="small-tile-article-content-date">
                            {this.props.date}
                        </div>
                        <div className="small-tile-article-content-length">
                            {this.props.readTime}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
export default SmallTile;
