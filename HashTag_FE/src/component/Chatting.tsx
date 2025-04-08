import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput
} from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import "./Chatting.css"
import Modal from './Modal';

interface ChattingInterface {
  ChattingModal : boolean
  setChattingModal : React.Dispatch<React.SetStateAction<boolean>>;
}

const Chatting = (props : ChattingInterface) => {
  const toggleModal = () => {
    props.setChattingModal(!props.ChattingModal);
  };

  useEffect(() => {
    const messageInputDiv = document.querySelector('.cs-message-input__tools');
    if (messageInputDiv) {
      messageInputDiv.addEventListener('click', toggleModal);
      console.log("클릭됨")
    }

    // 클린업 함수에서 이벤트 리스너 제거
    return () => {
      if (messageInputDiv) {
        messageInputDiv.removeEventListener('click', toggleModal);
      }
    };
  }, [props.ChattingModal]);
  
  return (
    <div className='Chatting'>
        <MainContainer style={{width: "70%", margin: 'auto' }}>
          <ChatContainer>
            <MessageList>
              <Message
                model={{
                  message: '안녕',
                  direction: 'incoming',
                  position: 'first',
                }}
              />
              <Message
                model={{
                  message: '나도 안녕',
                  direction: 'outgoing',
                  position: 'first',
                }}
              />
            </MessageList>
            <MessageInput placeholder="메세지 작성" />
          </ChatContainer>
          {props.ChattingModal && <Modal isOpen={props.ChattingModal} />} 
        </MainContainer>
        
        </div>
  );
};

export default Chatting