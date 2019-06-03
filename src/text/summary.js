import React from 'react';
import Subtitle from '../components/atoms/Subtitle';
import Paragraph from '../components/atoms/Paragraph';

const text = {
  title: {
    en: 'Race Summary',
    tc: '比賽撮要',
  },
  content: {
    en: (
      <div>
        <div>
          <Subtitle>Event Date</Subtitle>
          <Paragraph>1 Dec 2019</Paragraph>
        </div>
        <div>
          <Subtitle>Starting Ceremony</Subtitle>
          <Paragraph>It will be held at 8:45am 1 Dec 2019 at the Start Point.</Paragraph>
        </div>
        <div>
          <Subtitle>Registration Time</Subtitle>
          <Paragraph>8:00am – 8:45am</Paragraph>
        </div>
        <div>
          <Subtitle>Start Time</Subtitle>
          <Paragraph>9:00am</Paragraph>
        </div>
        <div>
          <Subtitle>Venue</Subtitle>
          <Paragraph>Pak Tam Chung P.H.A.B. Site</Paragraph>
        </div>
        <div>
          <Subtitle>Check Point 1 close time</Subtitle>
          <Paragraph>12pm</Paragraph>
        </div>
        <div>
          <Subtitle>Check Point 2 close time</Subtitle>
          <Paragraph>3pm</Paragraph>
        </div>
        <div>
          <Subtitle>Finish cut-off time</Subtitle>
          <Paragraph>7pm</Paragraph>
        </div>
      </div>
    ),
    tc: (
      <div>
        <div>
          <Subtitle>活動日期</Subtitle>
          <Paragraph>2019年12月1日</Paragraph>
        </div>
        <div>
          <Subtitle>開幕典禮</Subtitle>
          <Paragraph>典禮將會在當日8:45am於起點舉行</Paragraph>
        </div>
        <div>
          <Subtitle>參賽者點名時間</Subtitle>
          <Paragraph>8:00am – 8:45am</Paragraph>
        </div>
        <div>
          <Subtitle>比賽開始時間</Subtitle>
          <Paragraph>9:00am</Paragraph>
        </div>
        <div>
          <Subtitle>起點</Subtitle>
          <Paragraph>北潭涌傷健樂園</Paragraph>
        </div>
        <div>
          <Subtitle>1號檢查站收站時間</Subtitle>
          <Paragraph>12:00pm</Paragraph>
        </div>
        <div>
          <Subtitle>2號檢查站收站時間</Subtitle>
          <Paragraph>3:00pm</Paragraph>
        </div>
        <div>
          <Subtitle>終點收站時間</Subtitle>
          <Paragraph>7:00pm</Paragraph>
        </div>
      </div>
    ),
  },
};


export default text;
