import React from 'react';
import { Link } from 'gatsby';
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
          <Paragraph><Link to='/'>Home</Link></Paragraph>
        </div>
      </div>
    ),
    tc: (
      <div>

        <div>
          <Subtitle>不小心入了結界？</Subtitle>
          <Paragraph>行錯路點算？請跑手回主頁由頭開始</Paragraph>
          <Paragraph><Link to='/?locale-tc'>重新出發</Link></Paragraph>
        </div>
      </div>
    ),
  },
};


export default text;
