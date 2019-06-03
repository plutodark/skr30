import React from 'react';
import Subtitle from '../components/atoms/Subtitle';
import Smalltitle from '../components/atoms/Smalltitle';
import Paragraph from '../components/atoms/Paragraph';

const text = {
  title: {
    en: 'Procedures',
    tc: '賽事流程',
  },
  content: {
    en: (
      <div>
        <div>
          <Subtitle>Race Packs Collection Arrangement</Subtitle>
          <Paragraph>Before the event day, we will confirm participants whether they are required to collect their race packs (including Number Bibs and Wristbands with Electronic Record Cards) in a designated period and venue, or just come to collect their race packs on the event day. Details will be emailed to participants one to two weeks before the race.</Paragraph>
        </div>
        <div>
          <Subtitle>Registration</Subtitle>
          <Paragraph>If race packs have already been distributed before the event day, before going to registration area on the event day, every participant has to bring and wear his/her own race pack including:</Paragraph>
          <ul>
            <li>Number Bib (printed with name of participant) at the front of the body, and</li>
            <li>Wristband with Electronic Record Card on wrist.</li>
          </ul>
          <Paragraph>Upon arrival of participants at the registration counter:</Paragraph>
          <ul>
            <li>We will distribute the race packs (if they have not yet been distributed)<b>(Please do check your bib number before registration in order to speed up the process.)</b></li>
            <li>We will collect the duly signed Health Declaration and Disclaimer (standard form will be provided during registration);and</li>
            <li>We may also check the Mandatory Equipment.</li>
          </ul>
          <Paragraph><b>Note: On the event day, every participant must bring along his/her own Identity Card/ Passport or its clear copy for verifying identity upon our request at Start Point / Checkpoints / Finish Point.</b></Paragraph>
        </div>
        <div>
          <Subtitle>Drop Bags Arrangement</Subtitle>
          <Paragraph>Each participant, if required, can store ONE well-packed bag there. The upper limit of each bag is 15L maximum capacity and 5 kg of weight.</Paragraph>
          <ul>
            <li>Forbidden items: Breakable items, valuable or flammable items.</li>
            <li>Please prepare your own waterproof, sealed bag to pack your belongings. Whilst we would do all possible to protect the items from rain, etc., it is best that the bag itself is well packed.</li>
            <li>Please bring along your Identity Card/ Passport or its clear copy, and your Number Bib for the drop bags arrangement.</li>
            <li>We are not responsible for any damages or loss during handling, transiting and storage of any bag.</li>
            <li>We have the right to re-organise the drop bags arrangement during any special situation or adverse weather.</li>
          </ul>
        </div>
        <div>
          <Smalltitle>Time for drop bags at start point</Smalltitle>
          <Paragraph>8:00am – 8:45am</Paragraph>
          <Smalltitle>Time for collecting bags at end point</Smalltitle>
          <Paragraph>9:00am – 8:00pm</Paragraph>
        </div>
        <div>
          <Smalltitle>Waiting Area</Smalltitle>
          <Paragraph>After completing the above procedures, all participants should gather in the open area before the signboard at the entrance of Pak Tam Chung P.H.A.B. Site for getting ready to start the race. The starting line will be just below the signboard of Pak Tam Chung P.H.A.B. Site.</Paragraph>
        </div>
        <div>
          <Subtitle>Arrive at Checkpoints</Subtitle>
          <Paragraph>The participant should report to us immediately upon arrival at each checkpoint for recording your arrival time. Please ensure successful recording.</Paragraph>
        </div>
        <div>
          <Subtitle>Arrive at Finish Point and Collect Bags</Subtitle>
          <Paragraph>Upon arrival at Finish Point, please register immediately at the Registration Counter. Participant completing the designated route with the shortest time and without violating the Rules will be the winner.</Paragraph>
          <ul>
            <li>Register course completion time with Electronic Record Card. Please ensure successful recording.</li>
            <li>Members of a Team must register together.</li>
            <li>We may request the participant to show his/her original Identity Card/ Passport or clear copy to verify his/her identity. If the document cannot be shown on-site, it may result in no ranking.</li>
            <li>Participants can collect their bags at Finish Point.</li>
          </ul>
        </div>
      </div>
    ),
    tc: (
      <div>
        <div>
          <Subtitle>領取選手包</Subtitle>
          <Paragraph>在賽事前，我們會通知參賽者是否需要於指定時段和地點領取選手包（包括號碼布及電子記錄手帶），或只須於比賽當日領取選手包。有關詳情，我們將於比賽前一至兩星期前以電郵通知各參賽者。</Paragraph>
        </div>
        <div>
          <Subtitle>登記</Subtitle>
          <Paragraph>如於比賽日前已派發選手包，在賽事日登記前，參賽者必須攜帶並配戴屬於自己的參賽裝備：</Paragraph>
          <ul>
            <li>於身前繫上號碼布（印有參賽者姓名）及</li>
            <li>於手腕戴上電子記錄手帶</li>
          </ul>
          <Paragraph>於登記處:</Paragraph>
          <ul>
            <li>我們會派發選手包 (如未派發)<b>(請務必於登記前查閱自己的號碼以減省時間)</b></li>
            <li>我們會要求參賽者交出已簽署之健康及免責聲明(標準表格會於賽事日登記時提供)；及</li>
            <li>我們亦可能會檢查指定裝備。</li>
          </ul>
          <Paragraph><b>注意: 於賽事日，每位參賽者必須帶備身份證／護照正本或清晰副本，以便大會工作人員於起點／檢查站／終點核對身份。</b></Paragraph>
        </div>
        <div>
          <Subtitle>行李寄存安排</Subtitle>
          <Paragraph>參賽者可於大會寄存不隨身及非貴重物品。寄存物必須包裝妥當成一件行李。 行李容量上限為15公升，重量上限為5公斤。</Paragraph>
          <ul>
            <li>違禁物品: 易碎物品、貴重物品或易燃物品。</li>
            <li>請自行準備防水密封袋包裝行李。儘管我們會盡力防止相關行李被雨水或其他東西導致損壞，但最理想的是相關行李本身已包裝妥當。</li>
            <li>請帶同你的身份證／護照正本或清晰副本及你的號碼布以作行李寄存安排。</li>
            <li>任何因處理、運送及存放行李時而導致的損壞或遺失，大會不會為此負責。</li>
            <li>大會有權因應任何突發情況或惡劣天氣而更改行李寄存的安排。</li>
          </ul>
        </div>
        <div>
          <Smalltitle>行李寄存時間</Smalltitle>
          <Paragraph>8:00am – 8:45am</Paragraph>
          <Smalltitle>行李提取時間</Smalltitle>
          <Paragraph>9:00am – 8:00pm</Paragraph>
        </div>
        <div>
          <Smalltitle>等候區</Smalltitle>
          <Paragraph>完成以上所有程序，參賽者須等候在傷健樂園入口牌匾前的空地準備起步。起步線正正在傷健樂園入口牌匾下方。</Paragraph>
        </div>
        <div>
          <Subtitle>到達檢查站</Subtitle>
          <Paragraph>參賽者須到達檢查站後並盡快向工作人員報到以記錄到達時間。請確保你的到達時間能成功記錄。</Paragraph>
        </div>
        <div>
          <Subtitle>到達賽程終點站及提取行李</Subtitle>
          <Paragraph>參賽者到達賽程終點時，請盡快前往報到處報到。以最快時間完成大會的指定路線及無違犯賽事規則之參賽者為優勝者。</Paragraph>
          <ul>
            <li>用電子記錄卡登記完成時間，請確保成功記錄。</li>
            <li>團隊參賽者的所有隊員必須同時一起到達賽程終點報到。</li>
            <li>檢查員可能要求參賽者出示身份證／護照正本或清晰副本以核對身份。若未能現場提供文件，會有可能不獲排名。</li>
            <li>參賽者可於終點提取寄存於大會之行李。</li>
          </ul>
        </div>
      </div>
    ),
  },
};


export default text;
