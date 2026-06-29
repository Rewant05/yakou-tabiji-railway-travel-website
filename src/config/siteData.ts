export const siteData = {
  websiteName: '夜行旅路',
  romanizedName: 'Yakou Tabiji',
  tagline: '夜汽車の窓から、日本の小さな旅を見つける。',
  description: '夜行旅路は、夜行列車、ローカル線、駅町、週末の小さな国内旅行を紹介する独立編集型の旅ガイドです。',
  companyName: '夜行旅路編集部',
  address: '東京都千代田区神田須田町1-12-4 旅路編集室 3F',
  email: 'hello@yakou-tabiji.jp',
  businessHours: '平日 10:00〜18:00',
  instagram: 'https://instagram.com/yakou.tabiji',
  travelDisclaimer: '掲載している交通情報、時刻、料金、営業時間、イベント情報は変更される場合があります。旅行前には鉄道会社・自治体・施設の公式情報をご確認ください。',
  
  navLinks: [
    { label: 'ホーム', path: '/' },
    { label: '私たちについて', path: '/about' },
    { label: '路線の旅', path: '/routes' },
    { label: '駅町ガイド', path: '/station-towns' },
    { label: 'モデルコース', path: '/itineraries' },
    { label: 'お問い合わせ', path: '/contact' }
  ],

  footerLinks: [
    { label: 'プライバシーポリシー', path: '/privacy-policy' },
    { label: '利用規約', path: '/terms' }
  ],

  routes: [
    {
      id: 'route-1',
      title: '上野から青森へ、夜を越える北の旅',
      region: '東北・北海道',
      travelMood: 'ノスタルジック',
      recommendedSeason: '冬',
      duration: '1泊2日（車中泊）',
      highlights: ['夜明けの雪景色', 'レトロな食堂車', '終着駅の海風'],
      localFoodNote: '青森駅前の市場でのっけ丼',
      travelCaution: '冬季は遅延の可能性が高いため、スケジュールに余裕を。',
      imageUrl: '/images/retro_night_train.png'
    },
    {
      id: 'route-2',
      title: '小樽の運河へ向かう冬の鉄道旅',
      region: '北海道',
      travelMood: 'ロマンチック',
      recommendedSeason: '冬',
      duration: '日帰り〜1泊2日',
      highlights: ['雪明かりの運河', 'ガラス工房巡り', '海沿いの車窓'],
      localFoodNote: '小樽の新鮮な寿司と地酒',
      travelCaution: '夜は非常に冷え込むため防寒対策を万全に。',
      imageUrl: '/images/snowy_station.png'
    },
    {
      id: 'route-3',
      title: '松本と山景色を結ぶ週末ローカル線',
      region: '甲信越',
      travelMood: 'リラックス',
      recommendedSeason: '春〜秋',
      duration: '日帰り',
      highlights: ['アルプスの山並み', '松本城', '古い喫茶店'],
      localFoodNote: '信州そばと湧水コーヒー',
      travelCaution: 'ローカル線は本数が少ないので時刻表の確認を。',
      imageUrl: '/images/coastal_railway.png'
    },
    {
      id: 'route-4',
      title: '金沢の朝市へ向かう一泊二日の旅',
      region: '北陸',
      travelMood: '文化・歴史',
      recommendedSeason: '通年',
      duration: '1泊2日',
      highlights: ['近江町市場', 'ひがし茶屋街', '美しい駅舎'],
      localFoodNote: '冬の寒ブリとカニ',
      travelCaution: '人気の飲食店は事前の予約がおすすめです。',
      imageUrl: '/images/retro_night_train.png'
    },
    {
      id: 'route-5',
      title: '瀬戸内の島影を眺める海沿いルート',
      region: '中国・四国',
      travelMood: '穏やか',
      recommendedSeason: '夏〜秋',
      duration: '1泊2日',
      highlights: ['夕暮れの瀬戸内海', 'レモン畑', '小さなフェリー'],
      localFoodNote: '瀬戸内の白身魚と柑橘類',
      travelCaution: '海沿いは風が強い日があります。',
      imageUrl: '/images/coastal_railway.png'
    },
    {
      id: 'route-6',
      title: '温泉街へ続く静かな山間ルート',
      region: '全国',
      travelMood: '癒やし',
      recommendedSeason: '秋〜冬',
      duration: '1泊2日',
      highlights: ['秘湯', '紅葉の車窓', '温泉街の散策'],
      localFoodNote: '温泉街の饅頭と地元の山菜',
      travelCaution: '山間部は天候が変わりやすいです。',
      imageUrl: '/images/snowy_station.png'
    }
  ],

  stationTowns: [
    {
      id: 'town-1',
      name: '小樽',
      region: '北海道',
      stationAtmosphere: 'ガス燈が似合うレトロな港町駅',
      walkingTime: '駅から運河まで徒歩約10分',
      foodCafeRecommendationStyle: '古い石造りの倉庫を改装したカフェ',
      culturalNote: 'かつて「北のウォール街」と呼ばれた金融街の面影が残る。',
      photoSpotIdea: '夕暮れ時の小樽運河と倉庫群',
      shortDescription: '海と山に囲まれた、ガラスとオルゴールのノスタルジックな港町。',
      imageUrl: '/images/retro_japanese_town.png'
    },
    {
      id: 'town-2',
      name: '松本',
      region: '長野県',
      stationAtmosphere: 'アルプスの玄関口、城下町の落ち着き',
      walkingTime: '駅から松本城まで徒歩約15分',
      foodCafeRecommendationStyle: 'クラシック音楽が流れる老舗喫茶',
      culturalNote: '民芸運動が根付いており、美しい器や家具に出会える。',
      photoSpotIdea: 'お堀越しの黒と白のコントラストが美しい松本城',
      shortDescription: '北アルプスを望む、音楽と民芸、そして湧水の街。',
      imageUrl: '/images/retro_japanese_town.png'
    },
    {
      id: 'town-3',
      name: '金沢',
      region: '石川県',
      stationAtmosphere: '伝統と現代が交差する「もてなしドーム」',
      walkingTime: '近江町市場までバスで約10分',
      foodCafeRecommendationStyle: '古い町家を改装したモダンな和カフェ',
      culturalNote: '加賀百万石の文化が息づく、伝統工芸と茶の湯の街。',
      photoSpotIdea: 'ひがし茶屋街の夕暮れ時の石畳',
      shortDescription: '金箔や九谷焼、加賀友禅など、五感を刺激する美しい城下町。',
      imageUrl: '/images/retro_japanese_town.png'
    },
    {
      id: 'town-4',
      name: '尾道',
      region: '広島県',
      stationAtmosphere: '海と山が迫る、箱庭のような景色',
      walkingTime: '千光寺ロープウェイ乗り場まで徒歩約15分',
      foodCafeRecommendationStyle: '坂道の途中にひっそり佇む隠れ家カフェ',
      culturalNote: '数々の映画や文学の舞台となった、ノスタルジックな坂の街。',
      photoSpotIdea: '千光寺公園から見下ろす尾道水道',
      shortDescription: '迷路のような路地と坂道、海風を感じる瀬戸内の町。',
      imageUrl: '/images/coastal_railway.png'
    },
    {
      id: 'town-5',
      name: '高山',
      region: '岐阜県',
      stationAtmosphere: '古い町並みへの期待が高まる山間のターミナル',
      walkingTime: '古い町並み（さんまち通り）まで徒歩約10分',
      foodCafeRecommendationStyle: '飛騨の家具が置かれた落ち着いた珈琲店',
      culturalNote: '飛騨の匠の技が生きる、春と秋の高山祭が有名。',
      photoSpotIdea: '宮川にかかる赤い中橋と古い町並み',
      shortDescription: '江戸時代の面影を色濃く残す、飛騨の小京都。',
      imageUrl: '/images/retro_japanese_town.png'
    },
    {
      id: 'town-6',
      name: '湯布院',
      region: '大分県',
      stationAtmosphere: '由布岳を正面に望む、黒塗りのシックな駅舎',
      walkingTime: '湯の坪街道まで徒歩約5分',
      foodCafeRecommendationStyle: '緑に囲まれたテラス席のあるギャラリーカフェ',
      culturalNote: '辻馬車が走り、アートや音楽のイベントも盛んな温泉地。',
      photoSpotIdea: '朝霧に包まれる幻想的な金鱗湖',
      shortDescription: '雄大な由布岳の麓に広がる、アートと自然が調和する温泉町。',
      imageUrl: '/images/retro_japanese_town.png'
    }
  ],

  itineraries: [
    {
      id: 'itinerary-1',
      title: '夜に出発して、朝の市場へ向かう一泊二日',
      duration: '1泊2日',
      routeSummary: '都市部から夜行バスまたは夜行列車で出発し、早朝の港町へ。活気ある朝市で海鮮を楽しみ、歴史ある街並みを散策する週末リセット旅。',
      morningPlan: '早朝到着。市場へ直行し、新鮮な海鮮丼の朝食。その後は海沿いを散歩して目を覚ます。',
      afternoonPlan: '歴史ある洋館や倉庫群を見学。地元のカフェで一休みし、お土産探し。',
      eveningPlan: '温泉付きの宿にチェックインし、疲れを癒やす。夕食は地酒と郷土料理。',
      budgetRange: '25,000円〜35,000円',
      travelTip: '夜間の移動はアイマスクと耳栓があると快適です。',
      disclaimer: '市場の営業時間や定休日は事前に公式情報でご確認ください。'
    },
    {
      id: 'itinerary-2',
      title: 'ローカル線で巡る城下町と喫茶店の旅',
      duration: '日帰り',
      routeSummary: 'のんびり走るローカル線に揺られ、古き良き城下町へ。こだわりのコーヒーを出す老舗喫茶店を巡り、静かな時間を過ごす。',
      morningPlan: 'ローカル線に乗車。車窓からの田園風景を楽しむ。到着後、城の周辺を散策。',
      afternoonPlan: '有名な老舗喫茶店で自家焙煎コーヒーとケーキ。その後、古書店やアンティークショップを巡る。',
      eveningPlan: '夕暮れの駅舎で記念撮影。帰りの列車まで駅前の居酒屋で軽く一杯。',
      budgetRange: '10,000円〜15,000円',
      travelTip: 'ローカル線はICカードが使えない区間もあるため、現金を用意しておくと安心です。',
      disclaimer: '列車の本数が少ないため、事前に時刻表を必ず確認してください。'
    },
    {
      id: 'itinerary-3',
      title: '冬の駅町で温泉と古い商店街を歩く旅',
      duration: '1泊2日',
      routeSummary: '雪化粧をした山間の駅へ。ひなびた温泉街と、昭和の香りが残る商店街を歩き、心身ともに温まる冬の逃避行。',
      morningPlan: '雪景色を眺めながら列車で移動。駅前で温かいお蕎麦の昼食。',
      afternoonPlan: '商店街で地元のおやつ（おやきや饅頭）を食べ歩き。レトロな共同浴場に立ち寄る。',
      eveningPlan: '旅館で温泉にゆっくり浸かり、地元の冬の味覚を堪能する。',
      budgetRange: '30,000円〜40,000円',
      travelTip: '滑りにくい靴と重ね着できる防寒着が必須です。',
      disclaimer: '冬季は積雪により交通機関が乱れる場合があります。'
    },
    {
      id: 'itinerary-4',
      title: '海沿いの小さな駅を巡る週末旅',
      duration: '日帰り',
      routeSummary: '海沿いを走る列車に乗り、無人駅で途中下車。波の音を聞きながら、海辺のカフェで穏やかな午後を過ごす。',
      morningPlan: '海が見える駅で途中下車し、ホームから海を眺める。海辺を少し散歩。',
      afternoonPlan: '海沿いのカフェでランチ。午後はレンタサイクルで周辺の海岸線を走る。',
      eveningPlan: '海に沈む夕日を眺めてから、帰途につく。',
      budgetRange: '8,000円〜12,000円',
      travelTip: '海風が強いことがあるため、ウインドブレーカーがあると便利です。',
      disclaimer: '無人駅周辺は店舗がない場合が多いため、飲み物などは事前に準備してください。'
    }
  ],

  privacyPolicy: [
    {
      title: '個人情報の取得について',
      content: '夜行旅路（以下、「当サイト」といいます）は、お問い合わせフォームの利用等に際して、ユーザーの氏名、メールアドレス等の個人情報を取得する場合があります。'
    },
    {
      title: '利用目的',
      content: '取得した個人情報は、お問い合わせに対する回答や必要なご連絡のためにのみ利用し、それ以外の目的では利用いたしません。'
    },
    {
      title: 'お問い合わせ情報の管理',
      content: '当サイトは、ユーザーの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備等の必要な措置を講じ、個人情報の厳重な管理を行ないます。'
    },
    {
      title: 'Cookieの利用について',
      content: '当サイトでは、アクセス解析や利便性向上のためにCookieを使用する場合があります。Cookieによりブラウザを識別していますが、特定の個人の識別はできない状態で匿名性が保たれています。Cookieの使用を望まない場合、ブラウザからCookieを無効に設定できます。'
    },
    {
      title: 'アクセス解析について',
      content: '当サイトでは、サイトの利用状況を把握するためにGoogle Analytics等のアクセス解析ツールを利用しています。これらはトラフィックデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。'
    },
    {
      title: '第三者提供について',
      content: '当サイトは、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。'
    },
    {
      title: '安全管理',
      content: '個人情報の漏えい、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。'
    },
    {
      title: '免責事項',
      content: '当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。また当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。'
    },
    {
      title: 'お問い合わせ窓口',
      content: '本ポリシーに関するお問い合わせは、お問い合わせフォームまたは hello@yakou-tabiji.jp までお願いいたします。'
    },
    {
      title: '改定について',
      content: '当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。'
    }
  ],

  termsAndConditions: [
    {
      title: 'サービスの利用条件',
      content: '夜行旅路（以下、「当サイト」）を利用される方は、本利用規約に同意したものとみなします。当サイトは、日本の国内旅行に関する情報を提供する独立した編集メディアです。'
    },
    {
      title: '掲載情報について',
      content: '当サイトに掲載されている情報（文章、写真、イラスト等）は、夜行旅路編集部が独自に収集・作成したものです。これらの情報の著作権は当サイトに帰属します。無断での転載、複製、改変等を禁じます。'
    },
    {
      title: '旅行情報について',
      content: '当サイトで提供する旅行情報（モデルコース、観光スポット情報等）は、記事作成時点のものです。実際の旅行の際は、必ずご自身で最新の情報を確認してください。'
    },
    {
      title: '交通情報について',
      content: '鉄道の運行状況、時刻表、運賃等の交通情報は頻繁に変更される可能性があります。当サイトの情報は参考としてご利用いただき、最終的な確認は各鉄道会社等の公式発表で行ってください。'
    },
    {
      title: '禁止事項',
      content: 'ユーザーは、当サイトの利用にあたり、以下の行為をしてはなりません。・法令または公序良俗に違反する行為・犯罪行為に関連する行為・当サイトのサーバーまたはネットワークの機能を破壊したり，妨害したりする行為・その他、当サイトが不適切と判断する行為'
    },
    {
      title: '免責事項',
      content: '当サイトは、提供する情報の正確性、最新性、安全性を完全に保証するものではありません。当サイトの利用により生じた直接的、間接的な損害について、当サイトは一切の責任を負わないものとします。'
    },
    {
      title: '知的財産権',
      content: '当サイトを構成するすべての素材（テキスト、画像、デザイン等）に関する知的財産権は、当サイトまたは正当な権利を有する第三者に帰属します。'
    },
    {
      title: '外部リンクについて',
      content: '当サイトからリンクされている外部サイトについて、当サイトはその内容の正確性や安全性を保証するものではありません。外部サイトの利用は、ユーザーご自身の責任において行ってください。'
    },
    {
      title: 'コンテンツ変更について',
      content: '当サイトは、予告なくコンテンツの変更、追加、削除、またはサービスの提供を中断・終了することがあります。これにより生じた損害について、当サイトは一切責任を負いません。'
    },
    {
      title: '準拠法',
      content: '本規約の解釈にあたっては、日本法を準拠法とします。'
    },
    {
      title: 'お問い合わせ',
      content: '本規約に関するお問い合わせは、お問い合わせフォームよりお願いいたします。'
    }
  ]
};
