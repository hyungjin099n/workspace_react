import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const board_list = [
    {
      'boardNo' : 1,
      'title' : '1번 글',
      'content' : '1번글 내용',
      'writer' : '김자바',
      'regDate' : '2024-02-01'
    },
    {
      'boardNo' : 2,
      'title' : '2번 글',
      'content' : '2번글 내용',
      'writer' : '홍길동',
      'regDate' : '2024-02-02'
    }, 
    {
      'boardNo' : 3,
      'title' : '3번 글',
      'content' : '3번글 내용',
      'writer' : '임꺽정',
      'regDate' : '2024-02-10'
    }, 
    {
      'boardNo' : 4,
      'title' : '4번 글',
      'content' : '4번글 내용',
      'writer' : '유관순',
      'regDate' : '2024-02-15'
    }, 
    {
      'boardNo' : 5,
      'title' : '5번 글',
      'content' : '5번글 내용',
      'writer' : '세종대왕',
      'regDate' : '2024-02-20'
    }
  ];

 
  let [isShow, setIsShow] = useState(false);

  return (
    <div className="App">
      <div>
        게시글
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <td>글번호</td>
              <td>제 목</td>
              <td>작성자</td>
              <td>작성일</td>
            </tr>
          </thead>
          <tbody>
            {
              board_list.map((board, i) => {
                return (
                  <tr key={i}>
                    <td>{board.boardNo}</td>
                    <td>
                      <span onClick={() => {
                        
                        setIsShow(true)
                      }}>{board.title}</span>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
      {
        isShow ? <Detail board_list={board_list} idx={}/> : ''
      }
      
    </div>
  );
}

//상세 정보 컴포넌트
function Detail(props){
  return (
    <div>
      <div>글번호 : {props.board_list[0].boardNo}</div>
      <div>제목 : {props.board.title}</div>
      <div>내용 : </div>
      <div>작성자 : </div>
      <div>작성일 : </div>
    </div>
  );
}

export default App;

