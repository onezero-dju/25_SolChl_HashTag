import React from 'react'
import "./Modal.css"
import { useNavigate } from 'react-router-dom';

function Modal({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null
  const ModalClickDiary = () => {
    window.open('/diarypage' , '_blank');  // 새 탭 또는 새 창에서 열기
};
  return (
    <div>
      <ul className="ClickModal">
        <li>
            <div onClick={ModalClickDiary}>잘자요</div>
            <div>애칭 설정</div>
            <div>Diary List</div>
        </li>
      </ul>
    </div>
  )
}

export default Modal