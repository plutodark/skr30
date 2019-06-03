import React from 'react';
import Paragraph from '../components/atoms/Paragraph';

const text = {
  title: {
    en: 'Registration',
    tc: '線上報名',
  },
  content: {
    en: (
      <div>
        <Paragraph>The registration for Sai Kung 30km Run is on a “first-come, first served” basis. There will not be any balloting.</Paragraph>
        <Paragraph>The registration starts from 1 June 2019. Below please find the link:</Paragraph>
        <Paragraph><a href='https://www.racematix.com/site/a/REGISTER-SKR30' target='_blank' rel='noopener noreferrer'>Racematix</a></Paragraph>
        <Paragraph>The registration closes at 11:59 p.m. on 31 October 2019.</Paragraph>
      </div>
    ),
    tc: (
      <div>
        <Paragraph>西貢30公里跑的報名以先到先得的方式進行，不會進行抽籤。並將於6月1日開始：</Paragraph>
        <Paragraph><a href='https://www.racematix.com/site/a/REGISTER-SKR30' target='_blank' rel='noopener noreferrer'>Racematix</a></Paragraph>
        <Paragraph>報名會於2019年10月31日晚上11點59分結束。</Paragraph>
      </div>
    ),
  },
};


export default text;
