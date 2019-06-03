import React from 'react';
import { Link } from 'gatsby';
import { Table } from 'react-bootstrap';
import Paragraph from '../components/atoms/Paragraph';
import Smalltitle from '../components/atoms/Smalltitle';
import GPXLink from '../components/atoms/GPXLink';

const text = {
  title: {
    en: 'FAQ',
    tc: '常見問題',
  },
  content: {
    en: (
      <div>
        <div>
          <Smalltitle>Will my name be printed on my Race Bib?</Smalltitle>
          <Paragraph>Yes.</Paragraph>
        </div>
        <div>
          <Smalltitle>How do I check the weather on the event date?</Smalltitle>
          <Paragraph>You may visit the website of <a href='http://www.hko.gov.hk/contente.htm' target='_blank' rel='noopener noreferrer'>Hong Kong Observatory</a> to check the weather on the event date. Please make sure to dress and gear up appropriately.</Paragraph>
        </div>
        <div>
          <Smalltitle>What is the race packs collection arrangement?</Smalltitle>
          <Paragraph>Race packs collection will take place on the event day or around one to two weeks before the race at Cam2 Sport at 9/F., Yau Shing Comm. Centre, 51 Sai Yeung Choi Street, Mong Kok, Hong Kong. You may visit the website of <a href='https://cam2.com.hk/' target='_blank' rel='noopener noreferrer'>Cam2 Sport</a>.</Paragraph>
          <Paragraph>Details will be announced later.</Paragraph>
        </div>
        <div>
          <Smalltitle>Can I switch from Solo to Team, or from Team to Solo after registration?</Smalltitle>
          <Paragraph>Yes, we allow switching until 31 October. There is a HK$100 administrative fee for switching. After 31 October we will need to begin production of personalised Race Bibs so no further switching will be allowed.</Paragraph>
        </div>
        <div>
          <Smalltitle>Can I cancel my registration or transfer my registration to a friend?</Smalltitle>
          <Paragraph>No, neither is allowed.</Paragraph>
        </div>
        <div>
          <Smalltitle>Is drop bags service provided at the start/finish?</Smalltitle>
          <Paragraph>Yes.</Paragraph>
        </div>
        <div>
          <Smalltitle>What kinds of food and drinks are provided in the checkpoints?</Smalltitle>
          <Paragraph>According to SKR30 last year, at the checkpoints we will provide water, sports drinks, Coca-Cola, bread, jam, peanut butter, pear, banana and nuts.</Paragraph>
          <Paragraph>The refreshments are subject to change. The food and drinks information will be finalised in November 2019. Every effort will be made to ensure the availability of the refreshments to all the participants, but unforeseeable situations may affect the refreshment stocks. Hope the participants would understand this.</Paragraph>
          <Paragraph>Please only take what you need and do not waste the food and drinks provided.</Paragraph>
        </div>
        <div>
          <Smalltitle>Any interesting statistics about the previous SKR30?</Smalltitle>
          <u>SKR30 2017</u>
          <Paragraph>Total registrations: 194</Paragraph>
          <div style={{ overflow: 'auto' }}>
            <Table striped bordered hover>
              <thead>
                <tr><th></th><th>Finisher</th><th>DNF</th><th>DNS</th><th>Fastest</th><th>Slowest</th></tr>
              </thead>
              <tbody>
                <tr><td>Men Solo</td><td>69</td><td>6</td><td>32</td><td>3:22:37</td><td>8:41:13</td></tr>
                <tr><td>Women Solo</td><td>24</td><td>4</td><td>11</td><td>4:34:24</td><td>8:16:54</td></tr>
                <tr><td>Men Team</td><td>16 (8 teams)</td><td>2 (1 team)</td><td>0</td><td>4:10:52</td><td>8:22:21</td></tr>
                <tr><td>Women Team</td><td>8 (4 teams)</td><td>0</td><td>6 (3 teams)</td><td>5:21:45</td><td>7:39:16</td></tr>
                <tr><td>Mixed Team</td><td>16 (8 teams)</td><td>0</td><td>0</td><td>4:19:36</td><td>8:40:31</td></tr>
                <tr><td>Total</td><td>133</td><td>12</td><td>49</td><td></td><td></td></tr>
              </tbody>
            </Table>
          </div>
          <Paragraph>Attendance rate: 74.7%</Paragraph>
          <Paragraph>Completion rate of attendees: 91.7%</Paragraph>
          <u>SKR30 2018</u>
          <Paragraph>Total registrations: 206</Paragraph>
          <div style={{ overflow: 'auto' }}>
            <Table striped bordered hover>
              <thead>
                <tr><th></th><th>Finisher</th><th>DNF</th><th>DNS</th><th>Fastest</th><th>Slowest</th></tr>
              </thead>
              <tbody>
                <tr><td>Men Solo</td><td>66</td><td>4</td><td>22</td><td>3:12:36</td><td>8:49:37</td></tr>
                <tr><td>Women Solo</td><td>30</td><td>0</td><td>2</td><td>3:40:42</td><td>8:49:41</td></tr>
                <tr><td>Men Team</td><td>32 (16 teams)</td><td>6 (3 team)</td><td>2 (1 team)</td><td>3:56:56</td><td>8:16:22</td></tr>
                <tr><td>Women Team</td><td>10 (5 teams)</td><td>0</td><td>2 (1 teams)</td><td>5:20:50</td><td>7:22:28</td></tr>
                <tr><td>Mixed Team</td><td>20 (10 teams)</td><td>2 (1 teams)</td><td>8 (4 teams)</td><td>4:32:34</td><td>7:11:08</td></tr>
                <tr><td>Total</td><td>158</td><td>12</td><td>36</td><td></td><td></td></tr>
              </tbody>
            </Table>
          </div>
          <Paragraph>Attendance rate: 82.5%</Paragraph>
          <Paragraph>Completion rate of attendees: 92.9%</Paragraph>
        </div>
        <div>
          <Smalltitle>Can I get any ITRA points participating in SKR30 for Ultra Trail du Mont Blanc® (UTMB) or Ultra Trail Mount Fuji (UTMF)?</Smalltitle>
          <Paragraph>Yes, we have confirmed that finishers of SKR30 will get 2 ITRA points. Please refer to the websites of UTMB and ITRA.</Paragraph>
          <Paragraph>Links of ITRA:</Paragraph>
          <Paragraph>Update later.</Paragraph>
          <Paragraph>Update later.</Paragraph>
        </div>
        <div>
          <Smalltitle>Is there any GPS information for the course?</Smalltitle>
          <Paragraph><GPXLink /></Paragraph>
        </div>
        <div>
          <Smalltitle>How to go/leave Pak Tam Chung P.H.A.B. Site?</Smalltitle>
          <Paragraph>Please refer to: <Link to='/transport'>Transport Page</Link></Paragraph>
        </div>
        <div>
          <Smalltitle>Will any bowl/cup/bottle/cutlery be provided in checkpoints?</Smalltitle>
          <Paragraph>At the checkpoints there will not be any cups nor bowls, please bring your personal cup or bowl.</Paragraph>
        </div>
        <div>
          <Smalltitle>I have participated the team category. Will the result be recognised if I adopt such tactics that either me or my partner run first and wait for the other one shortly before each checkpoint or finish line, and then we scan-in at each checkpoint together and cross the finish line together?</Smalltitle>
          <Paragraph>The answer is absolutely “No”. The rules clearly state that “The two runners of the team must stay together at all times.”</Paragraph>
          <Paragraph>To further elaborate, besides all teams must start together, scan-in at each checkpoint together, and cross the finish line together, they must stay together at all times in any part of the course.</Paragraph>
          <Paragraph>Runners registering under team categories but failing to stay together with their partners at any part of the course will be penalised.</Paragraph>
          <Paragraph>Taking care of and supporting each other hand-in-hand throughout the whole course is the spirit of “running as a team”. If you wish to test your own limit and strike for your personal best time, we do recommend you to participate the solo category instead.</Paragraph>
        </div>
        <div>
          <Smalltitle>I have other questions. Any contact can provide? </Smalltitle>
          <Paragraph>Please email your queries to:</Paragraph>
          <Paragraph>info@hikgroup.com</Paragraph>
        </div>
      </div>
    ),
    tc: (
      <div>
        <div>
          <Smalltitle>號碼布會印有參賽者姓名嗎？</Smalltitle>
          <Paragraph>會。</Paragraph>
        </div>
        <div>
          <Smalltitle>如何查詢比賽日的天氣狀況？</Smalltitle>
          <Paragraph>可以去<a href='http://www.hko.gov.hk/contentc.htm' target='_blank' rel='noopener noreferrer'>香港天文台的網頁</a>查詢比賽日的天氣狀況。請選擇合適的裝備進行比賽。</Paragraph>
        </div>
        <div>
          <Smalltitle>如何領取選手包？</Smalltitle>
          <Paragraph>選手包將於比賽日派發或在比賽前一至兩星期經Cam2 Sport派發。其地址：旺角西洋菜街51號友誠商業大廈9樓。可以去Cam2 Sport的<a href='https://cam2.com.hk/' target='_blank' rel='noopener noreferrer'>網頁</a>。</Paragraph>
          <Paragraph>詳情容後發佈。</Paragraph>
        </div>
        <div>
          <Smalltitle>報名後，我可以轉換組別嗎？ 個人組別轉團隊組別，或團隊組別轉個人組別？</Smalltitle>
          <Paragraph>可以，但必須在10月31日以前提交申請。行政費用為港幣100元正。10月31日開始製作附有個人名字的號碼布，不再接受轉換申請。</Paragraph>
        </div>
        <div>
          <Smalltitle>可以取消報名或將報名轉讓給其他人嗎？</Smalltitle>
          <Paragraph>兩者皆不可以。</Paragraph>
        </div>
        <div>
          <Smalltitle>請問起點/終點有否提供行李包寄存服務？</Smalltitle>
          <Paragraph>有。</Paragraph>
        </div>
        <div>
          <Smalltitle>檢查站會有什麼食品及飲品提供？</Smalltitle>
          <Paragraph>按照上年做法，檢查站給予參賽者的補給物品有水、運動飲品、可口可樂、麵包、果醬、花生醬、梨、香蕉及堅果。</Paragraph>
          <Paragraph>食物及飲品安排可能會視乎情況而作出變動。最終安排將於2019年11月更新。我們將盡力確保所有參賽者可得到足夠的食物及飲品，但亦有可能因不能預測的情況導致某些食物及飲品數量不足，希望參賽者體諒。</Paragraph>
          <Paragraph>請按自己的需要選取食物及飲品的種類及份量，切勿浪費。</Paragraph>
        </div>
        <div>
          <Smalltitle>有關於以往「西貢30公里跑」的有趣數據嗎？</Smalltitle>
          <u>2017「西貢30公里跑」</u>
          <Paragraph>總報名人數：194</Paragraph>
          <div style={{ overflow: 'auto' }}>
            <Table striped bordered hover>
              <thead>
                <tr><th></th><th>完成</th><th>沒有完成DNF</th><th>沒有起步DNS</th><th>最快完成時間</th><th>最慢完成時間</th></tr>
              </thead>
              <tbody>
                <tr><td>男子單人</td><td>69人</td><td>6人</td><td>32人</td><td>3:22:37</td><td>8:41:13</td></tr>
                <tr><td>女子單人</td><td>24人</td><td>4人</td><td>11人</td><td>4:34:24</td><td>8:16:54</td></tr>
                <tr><td>男子雙人</td><td>16 人（即8隊）</td><td>2 人（即1隊）</td><td>0</td><td>4:10:52</td><td>8:22:21</td></tr>
                <tr><td>女子雙人</td><td>8 人（即4隊）</td><td>0</td><td>6 人（即3隊）</td><td>5:21:45</td><td>7:39:16</td></tr>
                <tr><td>男女混合</td><td>16 人（即8隊）</td><td>0</td><td>0</td><td>4:19:36</td><td>8:40:31</td></tr>
                <tr><td>合計</td><td>133人</td><td>12人</td><td>49人</td><td></td><td></td></tr>
              </tbody>
            </Table>
          </div>
          <Paragraph>出席率： 74.7%</Paragraph>
          <Paragraph>出席者完成率： 91.7%</Paragraph>
          <u>2018「西貢30公里跑」</u>
          <Paragraph>總報名人數： 206</Paragraph>
          <div style={{ overflow: 'auto' }}>
            <Table striped bordered hover>
              <thead>
                <tr><th></th><th>完成</th><th>沒有完成DNF</th><th>沒有起步DNS</th><th>最快完成時間</th><th>最慢完成時間</th></tr>
              </thead>
              <tbody>
                <tr><td>男子單人</td><td>66人</td><td>4人</td><td>22人</td><td>3:12:36</td><td>8:49:37</td></tr>
                <tr><td>女子單人</td><td>30人</td><td>0人</td><td>2人</td><td>3:40:42</td><td>8:49:41</td></tr>
                <tr><td>男子雙人</td><td>32人（即16隊）</td><td>6人（即3隊）</td><td>2人（即1隊）</td><td>3:56:56</td><td>8:16:22</td></tr>
                <tr><td>女子雙人</td><td>10人（即5隊）</td><td>0</td><td>2 人（即1隊）</td><td>5:20:50</td><td>7:22:28</td></tr>
                <tr><td>男女混合</td><td>20人（即10隊）</td><td>2人（即1 隊）</td><td>8人（即4隊）</td><td>4:32:34</td><td>7:11:08</td></tr>
                <tr><td>合計</td><td>158人</td><td>12人</td><td>36人</td><td></td><td></td></tr>
              </tbody>
            </Table>
          </div>
          <Paragraph>出席率： 82.5%</Paragraph>
          <Paragraph>出席者完成率： 92.9%</Paragraph>
        </div>
        <div>
          <Smalltitle>請問「西貢30公里跑」可獲得多少ITRA分用來參加Ultra Trail Mont Blanc (UTMB) or Ultra Trail Mount Fuji (UTMF) ？</Smalltitle>
          <Paragraph>完成可獲2 ITRA分。請參考UTMB及ITRA的網頁</Paragraph>
          <Paragraph>Update later.</Paragraph>
          <Paragraph>Update later.</Paragraph>
        </div>
        <div>
          <Smalltitle>請問有沒有關於賽事路段的GPS資料？</Smalltitle>
          <Paragraph><GPXLink /></Paragraph>
        </div>
        <div>
          <Smalltitle>怎樣前往/離開北潭涌傷健樂園？</Smalltitle>
          <Paragraph>請參考<Link to='/transport?locale=tc'>交通</Link>。</Paragraph>
        </div>
        <div>
          <Smalltitle>請問支援站會有餐具提供嗎？</Smalltitle>
          <Paragraph>因支援站將不會有任何餐具/容器提供，請自備餐具容器。</Paragraph>
        </div>
        <div>
          <Smalltitle>我參加了團隊組別。如果本人或我的同伴先前行然後於檢查站或終點附近的位置等待另一位隊友，再一起進入檢查站掃描，及再一起到達終點。請問採用這個策略後的成績會否被認可？</Smalltitle>
          <Paragraph>絕對不會。參賽規則清楚說明「全程需維持兩人行進」。</Paragraph>
          <Paragraph>進一步說明，除了所有的隊伍必須一起出發、在每個檢查站一起掃描及一起到達終點外，他們亦必須於比賽過程中的其他任何期間內保持在一起。</Paragraph>
          <Paragraph>參加了團隊組別的參賽者如不與其隊友於比賽過程中的任何期間內保持在一起會被處罰。</Paragraph>
          <Paragraph>互相扶持及攜手同行於整個比賽過程是團隊的精神。假如你希望挑戰個人極限或突破個人最佳成績，我們建議你參加個人組別。</Paragraph>
        </div>
        <div>
          <Smalltitle>我有其他問題，可以找誰？</Smalltitle>
          <Paragraph>請將問題電郵至：</Paragraph>
          <Paragraph>info@hikgroup.com</Paragraph>
        </div>
      </div>
    ),
  },
};


export default text;
