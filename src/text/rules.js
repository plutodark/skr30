import React from 'react';
import Subtitle from '../components/atoms/Subtitle';
import Smalltitle from '../components/atoms/Smalltitle';
import Paragraph from '../components/atoms/Paragraph';
import GPXLink from '../components/atoms/GPXLink';

const text = {
  title: {
    en: 'Rules and Equipment',
    tc: '參賽規則及裝備',
  },
  content: {
    en: (
      <div>
        <div>
          <Paragraph>We will provide food, water and sports drinks for the participants. Support crews of the participants must not eat the provided food at checkpoints. The food is for the participants only.</Paragraph>
        </div>
        <div>
          <Subtitle>Equipment</Subtitle>
          <Paragraph>All participants must have their mandatory equipment with them at all times during the race. There may be random gear checks during the race. There is no drop bag service during the course and the support crews of the participants can only provide food/drinks supports at the checkpoints. No assistance is authorised outside the checkpoints (the participant will be penalised if he/she receives any food/drinks supports outside the checkpoints). Nevertheless, the participants are allowed to buy food/drinks from the stores, restaurants and vending machines on the course. Pacers and support runners are prohibited. </Paragraph>
        </div>
        <div>
          <Smalltitle>Mandatory equipment</Smalltitle>
          <ul>
            <li>Stock of water minimum 1 litre (bottle or bladder).</li>
            <li>Mobile phone.</li>
            <li>Whistle.</li>
            <li>Food reserve (min. 200 kcals).</li>
            <li>Cash (min. HKD100).</li>
            <li>Octopus card (min. HKD100).</li>
            <li>Race bib.</li>
            <li>Personal cup/utensils. To avoid the wastage of plastic, we will not provide any disposable cups/utensils throughout the race.</li>
          </ul>
        </div>
        <div>
          <Smalltitle>Strongly Recommended</Smalltitle>
          <ul>
            <li>One headlamp with replacement batteries<b>(especially for those participants need relatively more time to finish the course. The maximum time for the event is ten (10) hours, i.e. finish on or before 7:00 p.m., which does have the possibly that during the last section of the route, daylight would not be much available.)</b></li>
            <li>Water-resistant jacket with hood (not disposable)</li>
            <li>Hiking poles. If you decide to use poles, you must keep them throughout the whole race. It is forbidden to start without poles and recover them up along the way.</li>
            <li>Long-sleeved clothes in the case of cold weather, rain or injury.</li>
            <li>First aid kits (including band-aids, disinfectant and blister pads, etc).</li>
            <li>Sunscreen.</li>
            <li>Even though we have purchased public liability insurance for the participants, it does not include any personal accident insurance, participants are strongly recommended to purchase their own personal accident insurance.</li>
          </ul>
        </div>
        <div>
          <Subtitle>Rescue and Medical Assistance</Subtitle>
          <Paragraph>First aid posts are positioned at start/finish and all checkpoints. If it appears that a participant is in difficulty or seriously injured, please immediately call for assistance:</Paragraph>
          <ul>
            <li>Go in person to a first aid point.</li>
            <li>Phone the race organiser (phone number of the organiser will be on your bib).</li>
            <li>Ask another participant to alert the first aid team.</li>
          </ul>
          <Paragraph>It is essential that each participant helps anybody in danger and alerts the first aid point.</Paragraph>
          <Paragraph>Please do not forget that due to the difficulty of access to certain locations, one might have to wait for assistance for longer than anticipated. Your security, therefore, depends upon the quality of the materials that you have in your backpack. A participant calling on the medical team must submit himself to its authority and undertake to accept its decisions.</Paragraph>
          <Paragraph>The first-aiders are authorised especially:</Paragraph>
          <ul>
            <li>To put any competitor unfit to continue with the event out of the race (by invalidating the race bib);</li>
            <li>To evacuate runners whom they judge in danger, by any means at their disposal; and</li>
            <li>To hospitalise at their convenience any runners whose state of health requires it.</li>
          </ul>
          <Paragraph>All expenses incurred, resulting from emergency assistance or evacuation, including all cost relating to the return of the rescue team from the area to where the participant was rescued, are payable by the participant rescued. If for any reason it is impossible to make contact with the race organiser, in emergency situation you can directly call 112 (especially if you find yourselves in a zone « emergency call only » as several sections do not have mobile network coverage).</Paragraph>
          <Paragraph>Each participant must stay on the way-marked paths, even if to rest for a while. Any participant who voluntarily leaves such paths is no longer under the responsibility of the organiser.</Paragraph>
        </div>
        <div>
          <Smalltitle>Checkpoints</Smalltitle>
          <Paragraph>Every participant will be provided with a race bib, and the race bib must be clearly visible and worn on the front and outside of the clothing during the entire race, failing which he/she will be penalised. Members of a Team must check-in together.</Paragraph>
          <Paragraph>Drinks and foods are offered at each checkpoint.</Paragraph>
          <Paragraph>Any participant who commits littering along the route will be disqualified. Trash cans will be provided at every checkpoint.</Paragraph>
        </div>
        <div>
          <Smalltitle>Maximum Authorised Time and Checkpoints Closing Time</Smalltitle>
          <Paragraph>The event starts at 9:00 a.m. and the maximum time for the event is ten (10) hours. The closing time of:</Paragraph>
          <Paragraph>Check Point 1 is 12:00 p.m.;</Paragraph>
          <Paragraph>Check Point 2 is 3:00 p.m.; and</Paragraph>
          <Paragraph>Finish is 7:00 p.m.</Paragraph>
          <Paragraph>The closing time of checkpoints is calculated to enable the participants to reach the Finish within the maximum time imposed. To be authorised to continue with the event, runners must reach each checkpoint before its closing time imposed. In the case of poor meteorological conditions and/or for reasons of safety, we reserve the right to modify the route and the time barriers.</Paragraph>
        </div>
        <div>
          <Smalltitle>Drop Bags</Smalltitle>
          <Paragraph>The drop bags service is only available at the start/finish. On the morning of the race, there will be tents where you can drop your bag that you will recover when you finish.</Paragraph>
        </div>
        <div>
          <Smalltitle>Dropping Out of The Race</Smalltitle>
          <Paragraph>Except for injuries, a participant must not drop out anywhere else other than the checkpoint. He/She must therefore inform the person in charge of the checkpoint, who will invalidate his/her race bib and recuperate the electronic chip.</Paragraph>
          <Paragraph>Checkpoints are easily accessible by public transportation. Therefore, the participant who drops out from the race will be redirected to the nearest bus stop or minibus stop.</Paragraph>
        </div>
        <div>
          <Smalltitle>Course Markers</Smalltitle>
          <Paragraph>The route will be marked with ribbons. Intersections of the route will be marked with arrows and crosses. For better night vision, the markers include a section of reflective material, which will be easily visible with a headlamp. It is recommended to bring the map with you and/or download the <GPXLink /> file of the route in your tracking device.</Paragraph>
          <Paragraph>You must follow the paths with the markers without taking any shortcuts. Any participant taking any shortcut will be disqualified.</Paragraph>
        </div>
        <div>
          <Smalltitle>Weather</Smalltitle>
          <ul>
            <li><b>T8 signal</b> If still on or put up at 2 hours before race start, the race will be cancelled.</li>
            <li><b>T3 signal</b> If still on or put up 15 minutes before race start, the decision to start will be made on course conditions and other prevailing weather factors (including the likelihood of changing to T8 during the event). </li>
            <li><b>Thunderstorm Warning</b> If thunderstorm warning is in place 15 minutes before the start, the start will be postponed until thunderstorm warning has been dropped and thunderstorms have passed over race course area. If feasible, the race will then be restarted at a later time in the same day. If Thunderstorm Warning goes up during the event, the participants will be asked to finish at the next checkpoint and then, unless so directed by the checkpoint leader of an alternate race course, the participants will have to make their way back to start/finish where their bags are.</li>
            <li><b>Black Rain Storm Warning</b> If still on or put up at 2 hours before the race start, the race will be cancelled.</li>
            <li><b>Red Rain Storm Warning</b> If still on or put up 15 minutes before race start, the decision to start will be made on course conditions and other prevailing weather factors (including the likelihood of changing to Black Rain Storm during the event).</li>
          </ul>
          <Paragraph>For more information on the weather signals see here: [<a href='http://www.hko.gov.hk/wxinfo/climat/warndb/warndba_e.shtml' target='_blank' rel='noopener noreferrer'>Hong Kong Government Weather Website</a>]</Paragraph>
          <Paragraph>There will be no refund in the case of a race cancellation due to weather circumstances. We will do our best to reschedule the race.</Paragraph>
        </div>
        <div>
          <Smalltitle>Insurance</Smalltitle>
          <Paragraph>Even though we have purchased accident insurance and public liability insurance for the participants, participants are strongly recommended to purchase their own personal accident insurance.</Paragraph>
        </div>
        <div>
          <Smalltitle>Team</Smalltitle>
          <Paragraph>The two runners of the team must stay together at all times. If one runner decides to stop (for example: Do Not Finish (DNF)), the other runner will be allowed to continue and finish, nevertheless, the finish time will be reported as a finisher but won’t be ranked either in the team or solo category.</Paragraph>
        </div>
        <div>
          <Smalltitle>Age</Smalltitle>
          <Paragraph>Participants must be at least 18 years old on race day: Saturday 1 December 2019.</Paragraph>
        </div>
        <div>
          <Smalltitle>Awards</Smalltitle>
          <Paragraph>If there are fewer than 3 teams participated in any team category, we reserve the right to cancel the relevant team category and awards assigned to that team category, and will inform the relevant team(s) to be re-designated to solo category.</Paragraph>
        </div>
        <div>
          <Smalltitle>Photos and videos</Smalltitle>
          <Paragraph>All the copyrights and usage rights of all photography and videography materials taken by our official photographers are reserved, and we may use them for our future promotional purposes.</Paragraph>
        </div>
      </div>
    ),
    tc: (
      <div>
        <div>
          <Paragraph>我們會提供食物、水和運動飲品給予參賽者。參賽者的支援人員不可食用檢查站提供的食物，站裡的食物僅提供予參賽者。</Paragraph>
        </div>
        <div>
          <Subtitle>參賽裝備</Subtitle>
          <Paragraph>參賽選手需於整個比賽過程中攜帶大會指定裝備。賽事途中可能會有隨機的裝備檢查。比賽不設中途補給包寄存和提取，參賽選手的支援隊伍只限於各個檢查站提供支援。檢查站以外不允許支援（如發現參賽選手於檢查站以外領取食物或飲料，將對參與者予以懲罰）。然而，參賽者在沿途的商店、餐廳和售賣機購買飲料/食物，則不在此限。嚴禁陪跑員或支援跑手陪跑。</Paragraph>
        </div>
        <div>
          <Smalltitle>指定裝備</Smalltitle>
          <ul>
            <li>隨身攜帶至少1公升水（水壺或者水袋）</li>
            <li>手機</li>
            <li>哨子</li>
            <li>個人補給物品（至少200 大卡）</li>
            <li>現金（至少100港元）</li>
            <li>八達通（內附至少100港元）</li>
            <li>號碼布</li>
            <li>個人杯/食具。比賽全程不會提供任何即棄杯/食具。</li>
          </ul>
        </div>
        <div>
          <Smalltitle>建議裝備</Smalltitle>
          <ul>
            <li>1個頭燈及備用電池<b>(尤其是相對要用較長間完成賽事的參賽者。比賽的完成時間設定為限於10小時，即晚上7:00或之前，因而是有機會於最後一段路程中天色已暗)</b></li>
            <li>有帽防潑水外套（不包括便利雨衣）</li>
            <li>登山杖。如果您決定使用登山杖，您必須從比賽一開始就配帶使用。禁止在比賽開始時不配備帶登山杖，卻在比賽過程中經由各種途徑取得及使用登山杖。</li>
            <li>長袖衣服，以應付低溫、下雨或受傷情況</li>
            <li>急救包（包括繃帶、消毒劑及水泡墊片等）</li>
            <li>防曬油</li>
            <li>主辦單位已為參賽選手購買公共意外責任保險，但不包括個人人身意外保險，強烈建議選手自行加保個人人身意外保險。</li>
          </ul>
        </div>
        <div>
          <Subtitle>救援和醫療協助</Subtitle>
          <Paragraph>急救站設於起/終點及所有檢查站。如果在比賽過程中出現不宜作賽或嚴重受傷的情況，請及時尋求協助：</Paragraph>
          <ul>
            <li>自行到急救站</li>
            <li>致電賽事總監 (主辦單位聯絡人電話將會列印在號碼布上)</li>
            <li>尋求其他參賽者協助，代為通知急救站工作人員</li>
          </ul>
          <Paragraph>請發揮互助精神，若遇上其他參賽者受傷或不適，應加以援手並通知急救站的工作人員。</Paragraph>
          <Paragraph>請緊記由於賽道的某些地方比較難以到達，可能會延長等待救援的時間。因此，等待救援期間，參賽選手的安全將取決於跟身的指定裝備之品質。參賽選手在選擇求助醫療隊伍後，將被視為同時授權並接受醫療隊伍的決定。</Paragraph>
          <Paragraph>急救人員特別授權：</Paragraph>
          <ul>
            <li>終止不適宜繼續比賽的選手繼續行進（記錄號碼布號碼並退出賽事）；</li>
            <li>在必要時撤離參賽者；及</li>
            <li>如有醫療需要，將參賽者送院治理。</li>
          </ul>
          <Paragraph>緊急救援和接載的費用將由被救的參賽者承擔，其中包括救援人員來回救援的費用。在無法聯絡賽事總監的情況下，於緊急情況下可以直接撥打112（特別身處不在移動網絡覆蓋範圍內，請使用« 緊急呼救 »）。</Paragraph>
          <Paragraph>參賽者應緊隨標示賽道前進。即使休息時，每位參賽選手都必須留在賽道上。任何一個參賽選手如果擅自偏離賽道而導致任何意外，主辦單位將不為其承擔任何責任。</Paragraph>
        </div>
        <div>
          <Smalltitle>檢查站</Smalltitle>
          <Paragraph>每個參賽選手都必須掛上號碼布。號碼布須置於衣服外及正面並要清晰可見。沒有全程掛上號碼布的參賽選手將會被處罰。團隊參賽者的所有隊員必須同時一起進入檢查站報到。</Paragraph>
          <Paragraph>檢查站會提供飲料和食物。</Paragraph>
          <Paragraph>參賽者嚴禁在沿途亂扔垃圾。被發現亂扔垃圾者，將被取消資格。請善用各檢查站的垃圾桶。</Paragraph>
        </div>
        <div>
          <Smalltitle>上限完成時限和各個檢查站關站時限</Smalltitle>
          <Paragraph>比賽於上午9:00起步而完成時間設定為限於10小時。各檢查站之關閉時間如下：</Paragraph>
          <Paragraph>1號檢查站為下午12:00；</Paragraph>
          <Paragraph>2號檢查站為下午3:00；及</Paragraph>
          <Paragraph>終點為晚上7:00。</Paragraph>
          <Paragraph>各個檢查站的關站時限以上限完成時間推算。各參賽選手必須於關站時限前通過各個檢查站，才被允許繼續進行比賽。若因天氣條件惡劣或者為了安全的情況下，大會保留改道和修改時限的權利。</Paragraph>
        </div>
        <div>
          <Smalltitle>行李寄存</Smalltitle>
          <Paragraph>只有起/終點會提供行李寄存。選手包中有一個行李牌，必須在行李牌填上閣下的參賽編號、手機號碼與緊急聯繫號碼。比賽當天早上可寄存行李於大會帳篷並於賽後取回。</Paragraph>
        </div>
        <div>
          <Smalltitle>退出比賽</Smalltitle>
          <Paragraph>除了傷病情況，參賽選手不能在檢查站之外的地方退出比賽。參賽選手必須通知檢查站的負責人，由工作人員記錄號碼布號碼並取回電子計時芯片作為退出手續。</Paragraph>
          <Paragraph>因檢查站有鄰近公共交通接駁，退出比賽的選手將被送至最近的巴士站或小巴站。</Paragraph>
        </div>
        <div>
          <Smalltitle>比賽標記</Smalltitle>
          <Paragraph>比賽路線將以專用彩帶標記，分岔路口另設箭頭及交叉標記指示方向。為了確保參賽者於入黑後仍能依循標記行進，標記都帶有反光物料，頭燈照明下很容易辨識。同時建議參賽選手隨身攜帶比賽地圖及/或下載比賽路線之<GPXLink />檔案於閣下之導航裝置。</Paragraph>
          <Paragraph>參賽選手必須遵循大會指定路線，不能取道捷徑。如參賽選手抄取捷徑，將被取消資格。</Paragraph>
        </div>
        <div>
          <Smalltitle>天氣</Smalltitle>
          <ul>
            <li><b>八號風球</b> 如比賽起步時掛起或比賽起步2小時前掛起，比賽取消。</li>
            <li><b>三號風球</b> 如比賽起步時掛起或比賽起步15分鐘前掛起，決定是否起步會視乎賽道情況及其他實時天氣狀況 (例如比賽過程中會否改掛八號風球的機率)。</li>
            <li><b>雷暴警告</b> 如雷暴警告於比賽起步15分鐘前掛起，起步會延遲到雷暴警告被除下及雷暴帶離開比賽區域。如情況許可，比賽會於同一日稍後時分起步。如雷暴警告於比賽中途掛起，參賽者會被要求到下一個檢查站完成，及 (除非檢查站主管另有所指的其他路線) 按原路返回起/終點取回行李。</li>
            <li><b>黑色暴雨</b> 如比賽起步時掛起或比賽起步2小時前掛起，比賽取消。</li>
            <li><b>紅色暴雨</b> 如比賽起步時掛起或比賽起步15分鐘前掛起，決定是否起步會視乎賽道情況及其他實時天氣狀況 (例如比賽過程中會否改掛黑色暴雨的機率)</li>
          </ul>
          <Paragraph>如因以上天氣情況而令賽事終止，報名費將不會歸還。我們會安排擇日重賽並儘早通知各參賽者。</Paragraph>
        </div>
        <div>
          <Smalltitle>保險</Smalltitle>
          <Paragraph>主辦單位已為參賽選手購買人身意外保險及公眾責任保險，但強烈建議選手自行加保個人人身意外保險。</Paragraph>
        </div>
        <div>
          <Smalltitle>團隊</Smalltitle>
          <Paragraph>全程需維持兩人行進。假如其中一位隊員決定棄賽 (例如：未完成 )，另一位隊員仍可選擇繼續進行及完成比賽 ，但在這種情況下，單人完賽仍有時間記錄，但將不列入團隊或個人排名計算。</Paragraph>
        </div>
        <div>
          <Smalltitle>年齡</Smalltitle>
          <Paragraph>參加者必須於比賽當日最少年滿18歲，即是2019年12月1日(星期六)。</Paragraph>
        </div>
        <div>
          <Smalltitle>獎項</Smalltitle>
          <Paragraph>若某一隊伍組別少於3個隊伍報名，我們有權取消該隊伍組別及該隊伍組別的相關獎項，及會通知相關隊伍轉為個人組別。</Paragraph>
        </div>
        <div>
          <Smalltitle>照片及視頻</Smalltitle>
          <Paragraph>由我們的官方攝影師拍攝的所有攝影和錄像材料的版權和使用權均予保留，及我們將來可能會將其用作宣傳用途。</Paragraph>
        </div>
      </div>
    ),
  },
};


export default text;
