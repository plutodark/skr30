import React from 'react';
import { Table } from 'react-bootstrap';
import Paragraph from '../components/atoms/Paragraph';

const text = {
  title: {
    en: 'Fee',
    tc: '報名費',
  },
  content: {
    en: (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr><th></th><th>Registration Time</th><th>Price per head</th></tr>
          </thead>
          <tbody>
            <tr><td>Early bird</td><td>1 June 2019 – 31 August 2019</td><td>HKD 420</td></tr>
            <tr><td>Late registration</td><td>1 September 2019 – 31 October 2019</td><td>HKD 480</td></tr>
        </tbody>
      </Table>
      <Paragraph>*Including transaction fee charged by external service providers</Paragraph>
    </div>
    ),
    tc: (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr><th></th><th>報名期限</th><th>價錢（每位）</th></tr>
          </thead>
          <tbody>
            <tr><td>早鳥優惠</td><td>2019年6月1日 – 2019年8月31日</td><td>港幣420元</td></tr>
            <tr><td>普通</td><td>2019年9月1日 -2019年10月31日</td><td>港幣480元</td></tr>
        </tbody>
      </Table>
      <Paragraph>*已包括第三方服務供應商所收取的交易費用</Paragraph>
    </div>
    ),
  },
};
/*
content: {
  en: (
    <div>
      <Paragraph>Early bird (1 June 2019 – 31 August 2019): HKD 420 per head (including transaction fee charged by external service providers)</Paragraph>
      <Paragraph>Late registration (1 September 2019 – 31 October 2019): HKD 480 per head (including transaction fee charged by external service providers)</Paragraph>
    </div>
  ),
  tc: (
    <div>
      <Paragraph>早鳥優惠 (2019年6月1日 – 2019年8月31日): 港幣420元每位（已包括第三方服務供應商所收取的交易費用）</Paragraph>
      <Paragraph>普通 (2019年9月1日 -2019年10月31日):港幣480元每位（已包括第三方服務供應商所收取的交易費用）</Paragraph>
    </div>
  ),
},
*/

export default text;
