import React from 'react';
import { Switch ,BrowserRouter as Router, Route } from 'react-router-dom'
import QuestionLike from './questionlike'
import QuestionDislike from './questiondislike'

function ReviewArticleQuestion() {
  const QuestionLikeComponent = () => {
    return( < QuestionLike />)
  }

  const QuestionDislikeComponent = () => {
    return( < QuestionDislike />)
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' exact component= {QuestionLikeComponent} />
          <Route path='/second' exact component= {QuestionDislikeComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default ReviewArticleQuestion;
