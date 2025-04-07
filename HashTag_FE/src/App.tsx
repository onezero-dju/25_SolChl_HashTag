import './App.css'
import MainCalendar from './component/MainCalendar'
import Chatting from './component/Chatting'
import NabiBa from './component/NabiBa'
import Diarypage from './component/Diarypage'
import { useState } from 'react'


function App() {
  let [ChattingModal , setChattingModal] = useState<boolean>(false)
  
  return (
    <>
      <section className="MainPage">
      <NabiBa />
        <ul>
          <li>
            <div className="MonthTarget">
              <h1>이달의 목표</h1>
              <p>우주 최강 푸바오되기.</p>
            </div>      
                <MainCalendar />
          </li>
          <li>
            <div className="Chatting">
              <Chatting ChattingModal={ChattingModal} setChattingModal={setChattingModal} />
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}

export default App