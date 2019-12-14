import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoardsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allBoardsObj = result.data;
      const boards = [];
      if (allBoardsObj != null) {
        Object.keys(allBoardsObj).forEach((boardId) => {
          const newBoard = allBoardsObj[boardId];
          newBoard.id = boardId;
          boards.push(newBoard);
        });
      }
      resolve(boards);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSingleBoard = (boardId) => axios.get(`${baseUrl}/boards/${boardId}.json`);

export default { getBoardsByUid, getSingleBoard };
