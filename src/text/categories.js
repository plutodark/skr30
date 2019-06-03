import React from 'react';
import Subtitle from '../components/atoms/Subtitle';
import Paragraph from '../components/atoms/Paragraph';

const text = {
  title: {
    en: 'Categories',
    tc: '組別',
  },
  content: {
    en: (
      <div>
        <div>
          <Paragraph>Awards for the top 3 of each category for the race:</Paragraph>
        </div>
        <div>
          <Paragraph>Women Open</Paragraph>
          <Paragraph>Men Open</Paragraph>
          <Paragraph>Team Women</Paragraph>
          <Paragraph>Team Men</Paragraph>
          <Paragraph>Team Mixed</Paragraph>
        </div>
      </div>
    ),
    tc: (
      <div>
        <div>
          <Paragraph>本賽事各個組別如下：（各組別前三名可獲獎品）</Paragraph>
        </div>
        <div>
          <Paragraph>女子公開組</Paragraph>
          <Paragraph>男子公開組</Paragraph>
          <Paragraph>女子雙人組</Paragraph>
          <Paragraph>男子雙人組</Paragraph>
          <Paragraph>混合雙人組</Paragraph>
        </div>
      </div>
    ),
  },
};


export default text;
