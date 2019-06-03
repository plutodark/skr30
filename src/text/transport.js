import React from 'react';
import Paragraph from '../components/atoms/Paragraph';

const text = {
  title: {
    en: 'Transport',
    tc: '交通',
  },
  content: {
    en: (
      <div>
        <Paragraph>Going to Pak Tam Chung P.H.A.B. Site</Paragraph>
        <Paragraph>Please go to Sai Kung Pier first. There are many methods going to Sai Kung Pier, which include (1) taking Bus 92 from MTR Diamond Hill Station; (2) taking Mini-bus 101M from MTR Hang Hau Station; and (3) taking taxi.</Paragraph>
        <Paragraph>From Sai Kung Pier, you may take (1) Bus 94; (2) Mini-bus 9; or (3) Mini-bus 7, to go to Pak Tam Chung P.H.A.B. Site.</Paragraph>
        <Paragraph>Leaving Pak Tam Chung P.H.A.B. Site</Paragraph>
        <Paragraph>You may take (1) Bus 94; (2) Mini-bus 9; or (3) Mini-bus 7, to go back to Sai Kung Pier.</Paragraph>
        <Paragraph>Schedule for <a href='http://search.kmb.hk/KMBWebSite/?action=routesearch&route=94&lang=en' target='_blank' rel='noopener noreferrer'>Bus 94</a></Paragraph>
        <Paragraph>Schedule for <a href='http://hketransport.td.gov.hk/ris_page/get_gmb_detail.php?route_id=2210&lang=EN' target='_blank' rel='noopener noreferrer'>Mini-bus 9</a></Paragraph>
        <Paragraph>Schedule for <a href='http://hketransport.td.gov.hk/ris_page/get_gmb_detail.php?route_id=2209&lang=EN' target='_blank' rel='noopener noreferrer'>Mini-bus 7</a></Paragraph>
      </div>
    ),
    tc: (
      <div>
        <Paragraph>前往北潭涌傷健樂園：</Paragraph>
        <Paragraph>請先去西貢碼頭。有很多方法可以去到西貢碼頭，例如：(1) 於鑽石山港鐵站乘搭巴士92號；(2) 於坑口港鐵站乘搭小巴101M號；及 (3) 的士。</Paragraph>
        <Paragraph>由西貢碼頭，你可以乘搭 (1) 巴士94號；(2) 小巴9號；或 (3) 小巴79號，前往北潭涌傷健樂園。</Paragraph>
        <Paragraph>離開北潭涌傷健樂園：</Paragraph>
        <Paragraph>你可以乘搭 (1) 巴士94號；(2) 小巴9號；或 (3) 小巴79號，返回西貢碼頭。</Paragraph>
        <Paragraph><a href='http://search.kmb.hk/KMBWebSite/?action=routesearch&route=94&lang=tc' target='_blank' rel='noopener noreferrer'>94號巴士班次</a></Paragraph>
        <Paragraph><a href='http://hketransport.td.gov.hk/ris_page/get_gmb_detail.php?route_id=2210&lang=TC' target='_blank' rel='noopener noreferrer'>9號小巴班次</a></Paragraph>
        <Paragraph><a href='http://hketransport.td.gov.hk/ris_page/get_gmb_detail.php?route_id=2209&lang=TC' target='_blank' rel='noopener noreferrer'>7號小巴班次</a></Paragraph>
      </div>
    ),
  },
};


export default text;
