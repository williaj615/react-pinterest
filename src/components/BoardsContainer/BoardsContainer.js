import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';
import boardData from '../../helpers/data/boardData';
import SingleBoard from '../SingleBoard/SingleBoard';


class BoardsContainer extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func,
  }

  state = {
    boards: [],
  }

  componentDidMount() {
    boardData.getBoardsByUid(authData.getUid())
      .then((boards) => {
        this.setState({ boards });
      })
      .catch((errFromBoardsContainer) => console.error({ errFromBoardsContainer }));
  }

  render() {
    const { setSingleBoard } = this.props;

    return (
    <div>
      {this.state.boards.map((board) => (<SingleBoard key={board.id} board={board} setSingleBoard={setSingleBoard} />))}
    </div>);
  }
}

export default BoardsContainer;
