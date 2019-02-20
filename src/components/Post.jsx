import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      upVote: 0,
      downVote: 0
    };
    this.handleUpTheVote = this.handleUpTheVote.bind(this);
    this.handleDownTheVote = this.handleDownTheVote.bind(this);
  }

  handleUpTheVote() {
    var newUpVote = this.state.upVote + 1;
    this.setState({upVote: newUpVote});
  }

  handleDownTheVote() {
    var newDownVote = this.state.downVote + 1;
    this.setState({downVote: newDownVote});
  }

  render(){
    return (
      <div>
        <h3>Name: {this.props.name}</h3>
        <p><em>Message: {this.props.message}</em></p>
        <h3>Up Votes: {this.props.upVote}</h3><button type='button' onClick={this.handleUpTheVote}>Up Vote</button>
        <h3>Down Votes: {this.props.downVote}</h3><button type='button' onClick={this.handleDownTheVote}>Down Vote</button>
        <hr/>
      </div>
    );
  }
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  upVote: PropTypes.number,
  downVote: PropTypes.number
};

export default Post;
