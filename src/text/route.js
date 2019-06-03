import React from 'react';
import Paragraph from '../components/atoms/Paragraph';
import RouteMap from '../components/atoms/RouteMap';
import GPXLink from '../components/atoms/GPXLink';

const text = {
  title: {
    en: 'Route',
    tc: '路線圖',
  },
  content: {
    en: (
      <div>
        <Paragraph>Start at Pak Tam Chung P.H.A.B. Site → Sai Kung Man Yee Road → Sai Kung Sai Wan Road → Tai Cham Koi → Luk Woo Country Trail → Sai Wan Pavillion (CP 1) (around 8km)</Paragraph>
        <Paragraph>Sai Wan Pavillion (CP 1) → Lo Tei Tun → Sai Wan → Maclehose Trail Section 2 → Ham Tin Wan → Chek Kang → To Kwa Peng → Wong Shek Pier (CP2) (around 11km)</Paragraph>
        <Paragraph>Wong Shek Pier (CP2) → Pak Tam Road → Tai Tan Country Trail → Ho Hai Road → Cheung Sheung Country Trail → Cheung Sheung → Maclehose Trail Section 3 → Yung Pak Corridor → Christian New Being Fellowship Training Centre → Pak Tam Chung Family Walk → End at Pak Tam Chung P.H.A.B. Site (around 11km)</Paragraph>
        <Paragraph>Total distance: 29.8km</Paragraph>
        <Paragraph>Total climb: 1270 m</Paragraph>
        <Paragraph>Total descent: 1270 m</Paragraph>
        <Paragraph>A GPS file of the full route can be downloaded to your device: <GPXLink /> file</Paragraph>
        <RouteMap />
      </div>
    ),
    tc: (
      <div>
        <Paragraph>北潭涌傷健樂園起步，北潭郊遊徑→ 西貢萬宜路→ 西貢西灣路→ 大枕蓋→ 鹿湖郊遊徑→ 西灣亭 (CP 1)(約 8公里)</Paragraph>
        <Paragraph>西灣亭 (CP 1)→ 螺地墩→ 西灣→ 麥理浩徑第2段→ 鹹田灣→ 赤徑→ 土瓜坪→ 黃石碼頭涼亭 (CP2)(約 11公里)</Paragraph>
        <Paragraph>黃石碼頭涼亭 (CP2)→ 北潭路→ 大灘郊遊徑→ 海下路→ 嶂上郊遊徑→ 嶂上→ 麥理浩徑第3段→ 榕北走廊→基督教得生團契訓練村→ 北潭涌家樂徑→ 北潭涌傷健樂園為終點(約 11公里)</Paragraph>
        <Paragraph>總距離： 29.8 公里</Paragraph>
        <Paragraph>總攀升： 1270 米</Paragraph>
        <Paragraph>總下降： 1270 米</Paragraph>
        <Paragraph>賽道的GPS檔案可在此預先下載：<GPXLink />檔案</Paragraph>
        <RouteMap />
      </div>
    ),
  },
};
export default text;
