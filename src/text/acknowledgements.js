import React from 'react';
import Paragraph from '../components/atoms/Paragraph';
import ExternalLink from '../components/atoms/ExternalLink';
import cam2Logo from '../asset/images/cam2Logo.jpg';

const text = {
  title: {
    en: 'Acknowlegements',
    tc: '鳴謝',
  },
  content: {
    en: (
      <div>
        <Paragraph>Thanks to Cam2 Sport for offering us the venue for race kit distribution:</Paragraph>
        <img src={cam2Logo} alt='cam2Logo' />
        <Paragraph>Address: 9/F., Yau Shing Comm. Centre, 51 Sai Yeung Choi Street, Mong Kok, Hong Kong</Paragraph>
        <ExternalLink href='https://www.facebook.com/cam2sportshop/'>
          Cam2Sport FB Page
        </ExternalLink>
      </div>
    ),
    tc: (
      <div>
        <Paragraph>衷心感謝 Cam2 Sport 答應提供場地，給我們的各選手提取選手包。</Paragraph>
        <img src={cam2Logo} alt='cam2Logo' />
        <Paragraph>地址：旺角西洋菜街51號友誠商業大廈9樓</Paragraph>
        <ExternalLink href={'https://www.facebook.com/cam2sportshop/'}>
          Cam2Sport FB 專頁
        </ExternalLink>
      </div>
    ),
  },
};

export default text;
