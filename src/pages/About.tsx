import React from 'react';
import { siteMeta } from '../config/siteMeta';
import styles from './Page.module.css';

export const About: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className={`container ${styles.contentContainer}`}>
        <h1 className="page-title">私たちについて</h1>
        
        <div className={styles.prose}>
          <p className={styles.lead}>
            「次の旅は、夜汽車の窓から。」
          </p>
          
          <h2>独立した編集型旅ガイド</h2>
          <p>
            {siteMeta.websiteName}は、日本の国内鉄道旅行、特に夜行列車やローカル線、そして魅力的な駅町を紹介する独立編集型のウェブメディアです。私たちは、単なる移動手段としての鉄道ではなく、「乗ること自体が目的となる旅」の美しさを伝えます。
          </p>

          <h2>スロートラベルの価値</h2>
          <p>
            現代はスピードと効率が重視される時代です。しかし、ゆっくりと流れる車窓の景色を眺め、小さな無人駅で途中下車し、地元の喫茶店で時間を過ごす「スロートラベル」には、他では得られない豊かな時間があります。私たちは、そんな静かで心満たされる旅の形を提案します。
          </p>

          <h2>地域文化への敬意</h2>
          <p>
            旅先の町が持つ独自の歴史、文化、そしてそこに暮らす人々への敬意を第一に考えています。有名な観光地だけでなく、何気ない日常の風景の中に潜む美しさを丁寧に取材し、お伝えします。
          </p>

          <h2>情報のキュレーションについて</h2>
          <p>
            掲載している路線や駅町、モデルコースは、編集部が独自に選定・構成したものです。流行にとらわれず、長く愛される旅のルートを厳選しています。
          </p>

          <div className={styles.disclaimerBox}>
            <h3>【重要】当サイトの立ち位置について</h3>
            <p>
              {siteMeta.websiteName}は、独立した編集に基づくトラベルガイドであり、公式の鉄道会社、宿泊予約プラットフォーム、または政府・自治体の観光局とは一切関係がありません。<br />
              当サイト内で列車の予約やチケットの購入を行うことはできません。実際の旅行計画やチケットの手配にあたっては、各鉄道会社や旅行会社の公式情報を必ずご確認ください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
