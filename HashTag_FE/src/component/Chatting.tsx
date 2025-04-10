// import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios'; // 백엔드 연결을 위한 axios 임포트
// import {
//   MainContainer,
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput
// } from '@chatscope/chat-ui-kit-react';
// import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import "./Chatting.css"
// import Modal from './Modal';

// interface ChattingInterface {
//   ChattingModal : boolean
//   setChattingModal : React.Dispatch<React.SetStateAction<boolean>>;
// }

// const Chatting = (props : ChattingInterface) => {
//   const toggleModal = () => {
//     props.setChattingModal(!props.ChattingModal);
//   };

//   useEffect(() => {
//     const messageInputDiv = document.querySelector('.cs-message-input__tools');
//     if (messageInputDiv) {
//       messageInputDiv.addEventListener('click', toggleModal);
//       console.log("클릭됨")
//     }

//     // 클린업 함수에서 이벤트 리스너 제거
//     return () => {
//       if (messageInputDiv) {
//         messageInputDiv.removeEventListener('click', toggleModal);
//       }
//     };
//   }, [props.ChattingModal]);
  
//   return (
//     <div className='Chatting'>
//         <MainContainer style={{width: "70%", margin: 'auto' }}>
//           <ChatContainer>
//             <MessageList>
//               <Message
//                 model={{
//                   message: '안녕',
//                   direction: 'incoming',
//                   position: 'first',
//                 }}
//               />
//               <Message
//                 model={{
//                   message: '나도 안녕',
//                   direction: 'outgoing',
//                   position: 'first',
//                 }}
//               />
//             </MessageList>
//             <MessageInput placeholder="메세지 작성" />
//           </ChatContainer>
//           {props.ChattingModal && <Modal isOpen={props.ChattingModal} />} 
//         </MainContainer>
        
//         </div>
//   );
// };

// export default Chatting

import React, { useState } from 'react';
import axios from 'axios'; // axios 임포트
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput
} from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import "./Chatting.css";

interface ChattingInterface {
  ChattingModal: boolean;
  setChattingModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Chatting = (props: ChattingInterface) => {
  const [messages, setMessages] = useState<any[]>([]); // 메시지를 저장할 상태
  const [message, setMessage] = useState<string>(''); // 사용자가 입력한 메시지 상태

  // 메시지를 백엔드로 전송하는 함수
  const sendMessage = () => {
    if (message.trim() !== '') {
      axios.post('http://localhost:8080/hashtag/main', { chat: message })
        .then((response) => {
          // 서버에서 응답받은 메시지를 상태에 추가
          setMessages([
            ...messages,
            { userMessage: message, botMessage: response.data.botMessage }
          ]);
          setMessage(''); // 메시지 입력 필드 초기화
        })
        .catch((error) => {
          console.error("Error sending message:", error);
        });
    }
  };

  // 사용자가 입력할 때마다 메시지 상태 업데이트 (MessageInput의 onChange 핸들러에 맞춰서 수정)
  const handleMessageChange = (innerHtml: string, textContent: string, innerText: string, nodes: NodeList) => {
    setMessage(innerText); // 입력된 메시지의 텍스트를 상태에 저장
  };

  return (
    <div className='Chatting'>
      <MainContainer style={{ width: "70%", margin: 'auto' }}>
        <ChatContainer>
          <MessageList>
            {messages.map((msg, index) => (
              <Message
                key={index}
                model={{
                  message: msg.userMessage,
                  direction: 'incoming', // 사용자 메시지
                  position: 'first',
                }}
              />
            ))}
            {messages.map((msg, index) => (
              <Message
                key={index + "_bot"} // bot 메시지
                model={{
                  message: msg.botMessage,
                  direction: 'outgoing', // 봇의 응답 메시지
                  position: 'first',
                }}
              />
            ))}
          </MessageList>
          <MessageInput
            placeholder="메시지 작성"
            value={message}
            onChange={handleMessageChange} // onChange 이벤트 처리
            onSend={sendMessage} // 메시지 전송
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Chatting;
