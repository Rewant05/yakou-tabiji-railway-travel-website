export const featuredRoutes = [
  {
    "id": "route-1",
    "title": "上野から青森へ、夜を越える北の旅",
    "region": "東北・北海道",
    "travelMood": "ノスタルジック",
    "recommendedSeason": "冬",
    "duration": "1泊2日（車中泊）",
    "highlights": [
      "夜明けの雪景色",
      "レトロな食堂車",
      "終着駅の海風"
    ],
    "localFoodNote": "青森駅前の市場でのっけ丼",
    "travelCaution": "冬季は遅延の可能性が高いため、スケジュールに余裕を。",
    "imageUrl": "/images/retro_night_train.png"
  },
  {
    "id": "route-2",
    "title": "小樽の運河へ向かう冬の鉄道旅",
    "region": "北海道",
    "travelMood": "ロマンチック",
    "recommendedSeason": "冬",
    "duration": "日帰り〜1泊2日",
    "highlights": [
      "雪明かりの運河",
      "ガラス工房巡り",
      "海沿いの車窓"
    ],
    "localFoodNote": "小樽の新鮮な寿司と地酒",
    "travelCaution": "夜は非常に冷え込むため防寒対策を万全に。",
    "imageUrl": "/images/snowy_station.png"
  },
  {
    "id": "route-3",
    "title": "松本と山景色を結ぶ週末ローカル線",
    "region": "甲信越",
    "travelMood": "リラックス",
    "recommendedSeason": "春〜秋",
    "duration": "日帰り",
    "highlights": [
      "アルプスの山並み",
      "松本城",
      "古い喫茶店"
    ],
    "localFoodNote": "信州そばと湧水コーヒー",
    "travelCaution": "ローカル線は本数が少ないので時刻表の確認を。",
    "imageUrl": "/images/coastal_railway.png"
  }
] as const;

export const featuredStationTowns = [
  {
    "id": "town-1",
    "name": "小樽",
    "region": "北海道",
    "stationAtmosphere": "ガス燈が似合うレトロな港町駅",
    "walkingTime": "駅から運河まで徒歩約10分",
    "foodCafeRecommendationStyle": "古い石造りの倉庫を改装したカフェ",
    "culturalNote": "かつて「北のウォール街」と呼ばれた金融街の面影が残る。",
    "photoSpotIdea": "夕暮れ時の小樽運河と倉庫群",
    "shortDescription": "海と山に囲まれた、ガラスとオルゴールのノスタルジックな港町。",
    "imageUrl": "/images/retro_japanese_town.png"
  },
  {
    "id": "town-2",
    "name": "松本",
    "region": "長野県",
    "stationAtmosphere": "アルプスの玄関口、城下町の落ち着き",
    "walkingTime": "駅から松本城まで徒歩約15分",
    "foodCafeRecommendationStyle": "クラシック音楽が流れる老舗喫茶",
    "culturalNote": "民芸運動が根付いており、美しい器や家具に出会える。",
    "photoSpotIdea": "お堀越しの黒と白のコントラストが美しい松本城",
    "shortDescription": "北アルプスを望む、音楽と民芸、そして湧水の街。",
    "imageUrl": "/images/retro_japanese_town.png"
  },
  {
    "id": "town-3",
    "name": "金沢",
    "region": "石川県",
    "stationAtmosphere": "伝統と現代が交差する「もてなしドーム」",
    "walkingTime": "近江町市場までバスで約10分",
    "foodCafeRecommendationStyle": "古い町家を改装したモダンな和カフェ",
    "culturalNote": "加賀百万石の文化が息づく、伝統工芸と茶の湯の街。",
    "photoSpotIdea": "ひがし茶屋街の夕暮れ時の石畳",
    "shortDescription": "金箔や九谷焼、加賀友禅など、五感を刺激する美しい城下町。",
    "imageUrl": "/images/retro_japanese_town.png"
  }
] as const;

export const featuredItineraries = [
  {
    "id": "itinerary-1",
    "title": "夜に出発して、朝の市場へ向かう一泊二日",
    "duration": "1泊2日",
    "routeSummary": "都市部から夜行バスまたは夜行列車で出発し、早朝の港町へ。活気ある朝市で海鮮を楽しみ、歴史ある街並みを散策する週末リセット旅。",
    "morningPlan": "早朝到着。市場へ直行し、新鮮な海鮮丼の朝食。その後は海沿いを散歩して目を覚ます。",
    "afternoonPlan": "歴史ある洋館や倉庫群を見学。地元のカフェで一休みし、お土産探し。",
    "eveningPlan": "温泉付きの宿にチェックインし、疲れを癒やす。夕食は地酒と郷土料理。",
    "budgetRange": "25,000円〜35,000円",
    "travelTip": "夜間の移動はアイマスクと耳栓があると快適です。",
    "disclaimer": "市場の営業時間や定休日は事前に公式情報でご確認ください。"
  },
  {
    "id": "itinerary-2",
    "title": "ローカル線で巡る城下町と喫茶店の旅",
    "duration": "日帰り",
    "routeSummary": "のんびり走るローカル線に揺られ、古き良き城下町へ。こだわりのコーヒーを出す老舗喫茶店を巡り、静かな時間を過ごす。",
    "morningPlan": "ローカル線に乗車。車窓からの田園風景を楽しむ。到着後、城の周辺を散策。",
    "afternoonPlan": "有名な老舗喫茶店で自家焙煎コーヒーとケーキ。その後、古書店やアンティークショップを巡る。",
    "eveningPlan": "夕暮れの駅舎で記念撮影。帰りの列車まで駅前の居酒屋で軽く一杯。",
    "budgetRange": "10,000円〜15,000円",
    "travelTip": "ローカル線はICカードが使えない区間もあるため、現金を用意しておくと安心です。",
    "disclaimer": "列車の本数が少ないため、事前に時刻表を必ず確認してください。"
  }
] as const;
