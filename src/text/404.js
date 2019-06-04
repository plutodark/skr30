import React from 'react';
import Subtitle from '../components/atoms/Subtitle';
import Paragraph from '../components/atoms/Paragraph';

const text = {
  title: {
    en: 'Enchantment',
    tc: '結界',
  },
  content: {
    en: (
      <div>
        <div>
          <Subtitle>Oops, getting Lost?</Subtitle>
          <Paragraph>You just hit a route that doesn&#39;t exist... the sadness.</Paragraph>
          <Paragraph><a href='/'>Home</a></Paragraph>
        </div>
      </div>
    ),
    tc: (
      <div>

        <div>
          <Subtitle>不小心入了結界？</Subtitle>
          <Paragraph>行錯路點算？請跑手回主頁由頭開始</Paragraph>
          <Paragraph><a href='/?locale=tc'>重新出發</a></Paragraph>
        </div>
      </div>
    ),
  },
};


export default text;
