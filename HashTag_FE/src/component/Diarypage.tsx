import React from 'react'
import NabiBa from './NabiBa'
import "./Diarypage.css"

function Diarypage() {
  return (
    <div className="Diarypage">
      <NabiBa />
      <div className="DiarypageBody">
          <ul>
            <li className="DiarypageBodyTitle">대화 내용을 요악하여 작성한 일기 (수정이 필요하시면 직접 클릭하여 수정해주세요.) </li>
            <li className="DiarypageBodyDetail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam
                            non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio
                            facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec
                            adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor
                            augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis.
                            Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst
                            quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.</li>
            <li>
              <div className="DiarypageOption">
                <div>재작성하기</div>
                <div>저장하기</div>
              </div>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Diarypage
