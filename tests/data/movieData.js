const directors = [
  {
    id: 1,
    name: '라이언 존슨',
  },
  {
    id: 2,
    name: '알렉스 해머',
  },
  {
    id: 3,
    name: '강신혜',
  },
  {
    id: 4,
    name: '김경래',
  },
  {
    id: 5,
    name: '루이사 잭슨',
  },
  {
    id: 6,
    name: '김마음',
  },
  {
    id: 7,
    name: '장주성',
  },
  {
    id: 8,
    name: '케이트 콜린스',
  },
  {
    id: 9,
    name: '소피아 듀랭',
  },
  {
    id: 10,
    name: '김동환',
  },
  {
    id: 11,
    name: '나탈리 맥킨지',
  },
  {
    id: 12,
    name: '톰 맥도날드',
  },
  {
    id: 13,
    name: '제임스 블랙',
  },
  {
    id: 14,
    name: '제시카 톰슨',
  },
  {
    id: 15,
    name: '한태민',
  },
];

const filmRatings = [
  {
    id: 1,
    rating: 'ALL',
  },
  {
    id: 2,
    rating: '12',
  },
  {
    id: 3,
    rating: '15',
  },
  {
    id: 4,
    rating: '18',
  },
];

const movies = [
  {
    id: 1,
    name: '잠 못 이루는 밤',
    english_name: 'White Night',
    simple_description:
      '한 여성이 자신의 아름다움에 대한 갈등과 불안으로 인해 잠을 이루지 못하는 이야기. 이 여성은 자신의 외모와 사회의 기대, 그리고 자신의 내면과의 갈등 속에서 존재감을 찾으려고 노력한다.',
    detail_description:
      '이 여성은 자신의 외모에 대한 인식이 매우 왜곡되어 있습니다. 그녀는 매우 아름다운 외모를 가지고 있지만, 그녀가 자신을 보는 시선은 매우 부정적입니다. 이는 그녀가 어릴 때부터 부모님, 친구들, 그리고 사회의 여러 영향으로부터 내면화된 것입니다. 그녀는 이러한 갈등 속에서 완벽한 아름다움을 추구하면서도, 그녀 자신이 원하는 삶과 행복을 찾으려고 노력합니다. 이 영화는 아름다움의 개념과 그것이 인간의 삶에 미치는 영향에 대한 진지하고 감동적인 메시지를 담고 있습니다.',
    thumbnail_image_url:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster1.png?raw=true',
    director_id: 1,
    opening_date: '2023-02-13',
    film_rating_id: 2,
    running_time: '125분',
    country: '미국',
    score_card: 8,
    created_at: '2023-02-28 13:22:42',
    updated_at: '2023-02-28 13:22:42',
  },
  {
    id: 2,
    name: '유령의 새벽',
    english_name: 'Dawn of Ghosts',
    simple_description:
      "'유령의 새벽'은 지하 도시에서 일어나는 이상한 사건들을 다룬 영화입니다. 이야기의 중심에는 한 여자의 이상한 꿈과 그 꿈에서 일어나는 일들이 포함되어 있습니다.",
    detail_description:
      "'유령의 새벽'은 지하 도시에서 발생하는 이상한 사건들을 다룬 영화입니다. 이 영화는 죽은 자들의 영혼이 깨어나 지하 도시를 방황하면서 일어나는 일들을 그립니다. 영화는 한 여자의 이상한 꿈과 그 꿈에서 일어나는 일들이 포함되어 있습니다. 이 여자는 지하 도시의 이상한 사건들과 그 사건들에 대한 자신의 꿈 사이에서 갈등합니다. 영화는 이 여자가 이상한 사건들을 해결하고 자신의 꿈을 이해하려고 노력하는 과정을 그립니다.",
    thumbnail_image_url:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster2.png?raw=true',
    director_id: 2,
    opening_date: '2023-02-10',
    film_rating_id: 4,
    running_time: '120분',
    country: '영국',
    score_card: 8,
    created_at: '2023-02-28 13:22:42',
    updated_at: '2023-02-28 13:22:42',
  },
  {
    id: 3,
    name: '한강에는 비가 내린다',
    english_name: "It's raining on the Han River",
    simple_description:
      '서로 다른 사람들의 이야기를 가진 인물들이 모여 있는 한강을 배경으로 하는 감성적인 영화입니다.',
    detail_description:
      "'한강에는 비가 내린다'는 서로 다른 사람들의 이야기를 가진 인물들이 모여 있는 한강을 배경으로 하는 감성적인 영화입니다. 이 영화는 비오는 날 한강을 찾은 인물들의 이야기를 다룹니다. 한강에서 비를 맞으면서 인물들은 서로의 이야기를 듣고 서로를 이해하고 위로합니다. 영화는 인간관계와 우정, 사랑, 이별, 회상, 성장 등 다양한 감성적인 이야기를 그립니다.",
    thumbnail_image_url:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster3.png?raw=true',
    director_id: 3,
    opening_date: '2023-02-19',
    film_rating_id: 1,
    running_time: '112분',
    country: '한국',
    score_card: 9,
    created_at: '2023-02-28 13:22:42',
    updated_at: '2023-02-28 13:22:42',
  },
  {
    id: 4,
    name: '꿈의 문',
    english_name: 'Dream Door',
    simple_description:
      '현실과 꿈의 경계가 희미해지면서 벌어지는 일들을 그린 판타지 영화입니다.',
    detail_description:
      "'꿈의 문'은 현실과 꿈의 경계가 희미해지면서 벌어지는 일들을 그린 판타지 영화입니다. 주인공은 꿈 속에서 특별한 능력을 가지게 되면서 현실과 꿈의 경계가 희미해지는 경험을 합니다. 그러던 중 꿈 속에서 마주한 미스터리한 문을 통해 다른 세계로 들어가게 됩니다. 주인공은 다른 세계에서 미지의 위험과 마주하게 되면서, 현실과 꿈의 경계가 희미해지는 이유를 찾아가는 이야기를 그립니다.",
    thumbnail_image_url:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster4.png?raw=true',
    director_id: 4,
    opening_date: '2023-02-19',
    film_rating_id: 2,
    running_time: '120',
    country: '한국',
    score_card: 8,
    created_at: '2023-02-28 13:22:42',
    updated_at: '2023-02-28 13:22:42',
  },
  {
    id: 5,
    name: '모래성',
    english_name: 'Sand Castle',
    simple_description:
      '모래성은 귀신이 나타나는 오컬트적인 요소를 담고 있는 공포 영화입니다.',
    detail_description:
      "영화 '모래성'은 외딴 해변에 위치한 모래성에서 발생하는 이상한 사건들을 다룹니다. 어떤 그룹이 그곳에서 숙박을 하게 되면, 그들은 자신들을 괴롭히는 귀신의 존재를 발견하게 됩니다. 그들은 그 귀신의 존재를 없애기 위해 분투합니다.",
    thumbnail_image_url:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster5.png?raw=true',
    director_id: 5,
    opening_date: '2023-02-15',
    film_rating_id: 4,
    running_time: '105',
    country: '미국',
    score_card: 7,
    created_at: '2023-02-28 13:22:42',
    updated_at: '2023-02-28 13:22:42',
  },
  {
    id: 6,
    name: '벚꽃이 지나는 길',
    english_name: 'Cherry Blossom Road',
    simple_description:
      "'벚꽃이 지나는 길'은 첫사랑과 이별, 성장 등을 그린 감성적인 멜로드라마입니다. 주인공들은 각자의 이유로 헤어져야 하지만, 서로를 지우지 못하고 끝없이 그리워하며 인생의 여정을 떠나게 됩니다.",
    detail_description:
      "'벚꽃이 지나는 길'은 첫사랑과 이별, 성장 등을 그린 감성적인 멜로드라마입니다. 서로를 지우지 못하고 끝없이 그리워하며 인생의 여정을 떠나게 된 주인공들의 이야기를 그립니다. 영화 속 인물들은 서로를 위해 희생을 하거나 고민하면서 성장하고, 인생의 의미를 찾아가는 과정에서 다양한 감정을 경험합니다.",
    thumbnail_image_url:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster6.png?raw=true',
    director_id: 6,
    opening_date: '2023-02-20',
    film_rating_id: 4,
    running_time: '130',
    country: '한국',
    score_card: 8,
    created_at: '2023-02-28 13:22:42',
    updated_at: '2023-02-28 13:22:42',
  },
  {
    id: 7,
    name: '방랑자',
    english_name: 'Wanderer',
    simple_description:
      "'방랑자'는 세상에서 외면받은 혼자서 살아가는 주인공이, 자신의 숨겨진 능력을 발견하게 되면서 벌어지는 모험을 그린 영화입니다.",
    detail_description:
      "'방랑자'는 혼자서 살아가는 주인공이 불시착한 이공간에서 자신의 능력을 발견하고, 새로운 세계와 인연을 맺어가는 모험을 그린 액션과 모험 요소가 가미된 영화입니다. 주인공은 자신의 능력으로 세상에서 외면받지만, 그 능력을 발휘해 사람들을 구하고 세상을 구하는 모험을 떠나게 됩니다. 그리고 주인공이 겪게 되는 여러 위기와 맞서야 하는 적들의 공격 등이 전개되면서, 자신의 능력을 더욱 발전시켜 나가는 모습을 그리고 있습니다.",
    thumbnail_image_url:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster7.png?raw=true',
    director_id: 7,
    opening_date: '2023-02-02',
    film_rating_id: 4,
    running_time: '125',
    country: '한국',
    score_card: 7,
    created_at: '2023-02-28 13:22:42',
    updated_at: '2023-02-28 13:22:42',
  },
  {
    id: 8,
    name: '바다의 흔적',
    english_name: 'Deep Blue Sea',
    simple_description:
      "'바다의 흔적'은 이야기꾼으로 유명한 주인공이, 세계 각지의 모험을 떠나며 발견하는 여러 비밀과 마주하는 모험을 그린 영화입니다.",
    detail_description:
      "'바다의 흔적'은 이야기꾼으로 유명한 주인공이, 세계 각지의 여러 장소를 돌아다니며 다양한 모험을 경험하면서, 자신의 과거와 관련된 비밀과도 마주하게 되는 드라마 요소가 가미된 영화입니다. 이를 통해 주인공은 과거의 자신을 바라보는 시선에서 삶의 방향을 찾아가는 여정을 그리고 있습니다. 이와 함께 주인공이 겪게 되는 여러 위험과 위기, 그리고 새로운 인연들을 맺어가는 모습도 그려지고 있습니다.",
    thumbnail_image_url:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster8.png?raw=true',
    director_id: 8,
    opening_date: '2023-02-06',
    film_rating_id: 2,
    running_time: '140',
    country: '영국',
    score_card: 8,
    created_at: '2023-02-28 13:22:42',
    updated_at: '2023-02-28 13:22:42',
  },
  {
    id: 9,
    name: '에밀리의 불행한 여름',
    english_name: "Emily's Unfortunate Summer",
    simple_description:
      "'에밀리의 불행한 여름'은 청소년 소설작가 에밀리의 성장 이야기를 그린 영화입니다.",
    detail_description:
      "'에밀리의 불행한 여름'은 20세기 초반, 캐나다의 작은 마을에서 펼쳐지는 에밀리의 성장 이야기를 그린 영화입니다. 어린 시절 사랑하는 아버지를 잃은 후, 가족들과 함께 농장에서 살게 된 에밀리는 사색과 상상력이 풍부한 소녀입니다. 하지만 가족 문제로 인해 도시로 이사하게 되면서 새로운 환경에서 겪는 어려움과 적응 문제, 그리고 새로운 인연들과의 만남을 통해 성장하는 과정을 그리고 있습니다. 이와 함께 주변에서 벌어지는 각종 사건과 인간들의 감정적인 부분도 자연스럽게 그려져 있습니다.",
    thumbnail_image_url:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster9.png?raw=true',
    director_id: 9,
    opening_date: '2023-02-14',
    film_rating_id: 3,
    running_time: '125',
    country: '캐나다',
    score_card: 8,
    created_at: '2023-02-28 13:22:42',
    updated_at: '2023-02-28 13:22:42',
  },
  {
    id: 10,
    name: '단편시선',
    english_name: 'Short Sight',
    simple_description:
      "'단편시선'은 다양한 단편 영화들을 하나의 이야기로 연결한 옴니버스 형태의 영화입니다.",
    detail_description:
      "'단편시선'은 서로 다른 배경과 시대를 가진 인물들의 이야기를 담은 5개의 단편 영화를 하나의 이야기로 연결한 옴니버스 형태의 영화입니다. 한 사람의 선택이 다른 인물들에게 미치는 영향, 시대적 차이가 가져오는 변화 등 다양한 요소가 얽혀서 전개됩니다. 이 과정에서 다양한 장르와 분위기를 가진 단편 영화들이 등장하며, 관객들은 각각의 이야기들을 살펴보면서 하나의 완성된 이야기를 만들어내는 과정에서 새로운 감동을 느낄 수 있습니다.",
    thumbnail_image_url:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster10.png?raw=true',
    director_id: 10,
    opening_date: '2023-02-16',
    film_rating_id: 3,
    running_time: '115',
    country: '한국',
    score_card: 9,
    created_at: '2023-02-28 13:22:42',
    updated_at: '2023-02-28 13:22:42',
  },
  {
    id: 11,
    name: '섀도우 플레이',
    english_name: 'Shadow Play',
    simple_description:
      '어둠과 빛의 조합으로 펼쳐지는 흑백 판타지 영화입니다. 무대 위에서 펼쳐지는 그림자 연극과 함께 펼쳐지는 인물들의 이야기를 담고 있습니다.',
    detail_description:
      "'shadow play'는 단순한 그림자 연극이 아닌, 그림자 연극을 이용해 새로운 장면과 인물을 표현하는 독특한 스타일의 판타지 영화입니다. 영화 속 주인공들은 그림자 연극을 연출하고, 연극 속 이야기와 뒤섞인 현실에서 벌어지는 일들을 경험하게 됩니다. 감각적인 비주얼과 묘한 분위기, 그리고 감동적인 이야기가 펼쳐지는 이 영화는 관객들에게 다양한 감정을 전달할 것입니다.",
    thumbnail_image_url:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster11.png?raw=true',
    director_id: 11,
    opening_date: '2023-02-26',
    film_rating_id: 3,
    running_time: '120',
    country: '프랑스',
    score_card: 8,
    created_at: '2023-02-28 13:22:42',
    updated_at: '2023-02-28 13:22:42',
  },
  {
    id: 12,
    name: '선키스드 드림',
    english_name: 'Sun Kissed Dream',
    simple_description:
      "'선키스드 드림'은 섬세하고 아름다운 로맨스 이야기입니다. 태양과 바다, 사랑 그리고 운명의 이야기를 담고 있습니다.",
    detail_description:
      "'sunkissed dream'은 비치에서 일어나는 두 사람의 로맨스 이야기를 그린 영화입니다. 비치의 얇은 모래와 맑은 바다, 무드에 어울리는 서핑보드의 움직임 등 자연 속에서 벌어지는 로맨스가 아름답게 그려져 있습니다. 주인공인 두 사람은 서로 다른 성격과 배경을 가지고 있지만, 운명의 끈으로 이어져 있습니다. 청량하고 아름다운 비주얼, 두 주인공의 첫사랑 이야기 등 매력적인 요소가 많은 이 영화는 시선과 마음을 사로잡을 것입니다.",
    thumbnail_image_url:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster12.png?raw=true',
    director_id: 12,
    opening_date: '2023-01-30',
    film_rating_id: 2,
    running_time: '102',
    country: '스페인',
    score_card: 8,
    created_at: '2023-02-28 13:22:42',
    updated_at: '2023-02-28 13:22:42',
  },
  {
    id: 13,
    name: '민환의 초상',
    english_name: "Minhwan's Portrait",
    simple_description:
      "'민환의 초상'은 천재 예술가 민환의 인생과 작품을 그린 감동적인 인물드라마입니다.",
    detail_description:
      '천재 예술가 민환은 자신만의 독특한 화풍으로 세계적인 명성을 얻었지만, 동시에 그의 인생은 상처와 고통으로 가득했습니다. 그의 어릴 적 가난한 시절부터 인정받지 못하는 현실, 연인과의 이별, 새로운 작품을 만들지 못하는 슬럼프 등 그가 겪은 어려움들이 그의 예술적 창작에도 영향을 미치게 됩니다. 그리고 그의 인생 마지막 작품이 곧 자신의 죽음을 예감하게 되는데...',
    thumbnail_image_url:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster13.png?raw=true',
    director_id: 13,
    opening_date: '2023-01-28',
    film_rating_id: 2,
    running_time: '122',
    country: '한국',
    score_card: 9,
    created_at: '2023-02-28 13:22:42',
    updated_at: '2023-02-28 13:22:42',
  },
  {
    id: 14,
    name: '엔드 오브 애프터글로우',
    english_name: 'End of Afterglow',
    simple_description:
      "End of Afterglow'는 인생의 후회와 죄책감, 그리고 다시 찾은 희망을 그린 감동적인 인생 드라마이다.",
    detail_description:
      '이 영화는 인생의 후회와 죄책감, 그리고 다시 찾은 희망을 그린 감동적인 인생 드라마이다. 주인공인 마이크는 과거의 실수로 가족과 친구들을 모두 잃고, 삶의 방향을 찾지 못한 채 살아가고 있다. 어느 날 그는 삶의 변화를 가져올 기회를 얻게 되는데, 그것은 과거를 바로잡고 새로운 시작을 위한 것이다. 마이크는 과거의 실수를 인정하고 바로잡기 위해 노력하며, 자신의 인생을 바꿀 수 있는 길을 찾아 나서게 된다.',
    thumbnail_image_url:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster14.png?raw=true',
    director_id: 14,
    opening_date: '2023-02-27',
    film_rating_id: 3,
    running_time: '121',
    country: '미국',
    score_card: 9,
    created_at: '2023-02-28 13:22:42',
    updated_at: '2023-02-28 13:22:42',
  },
  {
    id: 15,
    name: '언젠가 서울',
    english_name: 'Seoul someday',
    simple_description: '한 여성의 서울에서의 인생 여정을 그린 감성적인 드라마',
    detail_description:
      "'언젠가 서울'은 한 여성의 인생 여정을 그린 감성적인 드라마입니다. 서울의 여러 지역과 상징적인 장소들이 배경으로 사용되며, 서울에서의 다양한 경험과 만남을 통해 여성 주인공이 자신의 인생을 살아가는 모습을 그려냅니다.\n\n영화는 여성 주인공의 어린 시절부터 시작하여, 첫사랑, 직장 생활, 가족 등을 거쳐 인생의 다양한 과정을 그립니다. 또한 서울의 다양한 문화와 삶의 양상을 담아내어, 시청자들에게 여러 가지 생각과 감정을 전달합니다.",
    thumbnail_image_url:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster15.png?raw=true',
    director_id: 15,
    opening_date: '2023-02-24',
    film_rating_id: 2,
    running_time: '119',
    country: '한국',
    score_card: 8,
    created_at: '2023-02-28 13:22:42',
    updated_at: '2023-02-28 13:22:42',
  },
];

const actors = [
  {
    id: 1,
    name: '사만다 미셸',
  },
  {
    id: 2,
    name: '루카스 피터슨',
  },
  {
    id: 3,
    name: '에밀리 레이놀즈',
  },
  {
    id: 4,
    name: '매디슨 카터',
  },
  {
    id: 5,
    name: '앤서니 존슨',
  },
  {
    id: 6,
    name: '애슐리 로드리게즈',
  },
  {
    id: 7,
    name: '이해인',
  },
  {
    id: 8,
    name: '김수현',
  },
  {
    id: 9,
    name: '방서빈',
  },
  {
    id: 10,
    name: '김은경',
  },
  {
    id: 11,
    name: '장주성',
  },
  {
    id: 12,
    name: '강종범',
  },
  {
    id: 13,
    name: '제이콥 데이비슨',
  },
  {
    id: 14,
    name: '리암 톰슨',
  },
  {
    id: 15,
    name: '올리비아 포스터',
  },
  {
    id: 16,
    name: '에단 카터',
  },
  {
    id: 17,
    name: '아드리앙 마틴',
  },
  {
    id: 18,
    name: '루카스 듀보이스',
  },
  {
    id: 19,
    name: '안토니 블랑샤',
  },
  {
    id: 20,
    name: '홍길순',
  },
  {
    id: 21,
    name: '이지현',
  },
  {
    id: 22,
    name: '김지우',
  },
  {
    id: 23,
    name: '박민지',
  },
  {
    id: 24,
    name: '피에르 모로',
  },
  {
    id: 25,
    name: '강승찬',
  },
  {
    id: 26,
    name: '이동민',
  },
  {
    id: 27,
    name: '김한솔',
  },
  {
    id: 28,
    name: '앨런 릭맨',
  },
  {
    id: 29,
    name: '에밀리 로즈',
  },
  {
    id: 30,
    name: '벤자민 스콧',
  },
  {
    id: 31,
    name: '최성민',
  },
  {
    id: 32,
    name: '박준영',
  },
  {
    id: 33,
    name: '강신혜',
  },
  {
    id: 34,
    name: '소피아 리',
  },
  {
    id: 35,
    name: '이사벨라 그라시아',
  },
];

const actorMovies = [
  {
    id: 1,
    movie_id: 1,
    actor_id: 1,
  },
  {
    id: 2,
    movie_id: 1,
    actor_id: 2,
  },
  {
    id: 3,
    movie_id: 1,
    actor_id: 3,
  },
  {
    id: 4,
    movie_id: 2,
    actor_id: 4,
  },
  {
    id: 5,
    movie_id: 2,
    actor_id: 5,
  },
  {
    id: 6,
    movie_id: 2,
    actor_id: 6,
  },
  {
    id: 7,
    movie_id: 3,
    actor_id: 7,
  },
  {
    id: 8,
    movie_id: 3,
    actor_id: 8,
  },
  {
    id: 9,
    movie_id: 3,
    actor_id: 9,
  },
  {
    id: 10,
    movie_id: 4,
    actor_id: 10,
  },
  {
    id: 11,
    movie_id: 4,
    actor_id: 11,
  },
  {
    id: 12,
    movie_id: 4,
    actor_id: 12,
  },
  {
    id: 13,
    movie_id: 5,
    actor_id: 13,
  },
  {
    id: 14,
    movie_id: 6,
    actor_id: 7,
  },
  {
    id: 15,
    movie_id: 6,
    actor_id: 8,
  },
  {
    id: 16,
    movie_id: 7,
    actor_id: 10,
  },
  {
    id: 17,
    movie_id: 7,
    actor_id: 9,
  },
  {
    id: 18,
    movie_id: 7,
    actor_id: 33,
  },
  {
    id: 19,
    movie_id: 8,
    actor_id: 14,
  },
  {
    id: 20,
    movie_id: 8,
    actor_id: 15,
  },
  {
    id: 21,
    movie_id: 8,
    actor_id: 16,
  },
  {
    id: 22,
    movie_id: 9,
    actor_id: 17,
  },
  {
    id: 23,
    movie_id: 9,
    actor_id: 18,
  },
  {
    id: 24,
    movie_id: 9,
    actor_id: 19,
  },
  {
    id: 25,
    movie_id: 10,
    actor_id: 20,
  },
  {
    id: 26,
    movie_id: 10,
    actor_id: 21,
  },
  {
    id: 27,
    movie_id: 10,
    actor_id: 22,
  },
  {
    id: 28,
    movie_id: 10,
    actor_id: 23,
  },
  {
    id: 29,
    movie_id: 11,
    actor_id: 24,
  },
  {
    id: 30,
    movie_id: 12,
    actor_id: 34,
  },
  {
    id: 31,
    movie_id: 12,
    actor_id: 35,
  },
  {
    id: 32,
    movie_id: 13,
    actor_id: 25,
  },
  {
    id: 33,
    movie_id: 13,
    actor_id: 26,
  },
  {
    id: 34,
    movie_id: 13,
    actor_id: 27,
  },
  {
    id: 35,
    movie_id: 14,
    actor_id: 29,
  },
  {
    id: 36,
    movie_id: 14,
    actor_id: 30,
  },
  {
    id: 37,
    movie_id: 15,
    actor_id: 31,
  },
  {
    id: 38,
    movie_id: 15,
    actor_id: 32,
  },
];

const keywords = [
  {
    id: 1,
    keyword: '감동적인',
  },
  {
    id: 2,
    keyword: '짜릿한',
  },
  {
    id: 3,
    keyword: '로맨틱한',
  },
  {
    id: 4,
    keyword: '재미있는',
  },
  {
    id: 5,
    keyword: '슬픈',
  },
  {
    id: 6,
    keyword: '웅장한',
  },
  {
    id: 7,
    keyword: '감미로운',
  },
  {
    id: 8,
    keyword: '몽환적인',
  },
  {
    id: 9,
    keyword: '압도적인',
  },
  {
    id: 10,
    keyword: '역동적인',
  },
  {
    id: 11,
    keyword: '신나는',
  },
  {
    id: 12,
    keyword: '괴상한',
  },
  {
    id: 13,
    keyword: '불안한',
  },
  {
    id: 14,
    keyword: '감성적인',
  },
  {
    id: 15,
    keyword: '무서운',
  },
  {
    id: 16,
    keyword: '자극적인',
  },
  {
    id: 17,
    keyword: '낭만적인',
  },
  {
    id: 18,
    keyword: '냉정한',
  },
  {
    id: 19,
    keyword: '비극적인',
  },
  {
    id: 20,
    keyword: '희망적인',
  },
];

const keywordMovies = [
  {
    id: 1,
    movie_id: 1,
    movie_keyword_id: 3,
  },
  {
    id: 2,
    movie_id: 1,
    movie_keyword_id: 8,
  },
  {
    id: 3,
    movie_id: 1,
    movie_keyword_id: 17,
  },
  {
    id: 4,
    movie_id: 2,
    movie_keyword_id: 6,
  },
  {
    id: 5,
    movie_id: 2,
    movie_keyword_id: 13,
  },
  {
    id: 6,
    movie_id: 2,
    movie_keyword_id: 2,
  },
  {
    id: 7,
    movie_id: 3,
    movie_keyword_id: 1,
  },
  {
    id: 8,
    movie_id: 3,
    movie_keyword_id: 5,
  },
  {
    id: 9,
    movie_id: 3,
    movie_keyword_id: 20,
  },
  {
    id: 10,
    movie_id: 4,
    movie_keyword_id: 18,
  },
  {
    id: 11,
    movie_id: 4,
    movie_keyword_id: 10,
  },
  {
    id: 12,
    movie_id: 4,
    movie_keyword_id: 14,
  },
  {
    id: 13,
    movie_id: 5,
    movie_keyword_id: 12,
  },
  {
    id: 14,
    movie_id: 5,
    movie_keyword_id: 15,
  },
  {
    id: 15,
    movie_id: 5,
    movie_keyword_id: 19,
  },
  {
    id: 16,
    movie_id: 6,
    movie_keyword_id: 7,
  },
  {
    id: 17,
    movie_id: 6,
    movie_keyword_id: 3,
  },
  {
    id: 18,
    movie_id: 6,
    movie_keyword_id: 14,
  },
  {
    id: 19,
    movie_id: 7,
    movie_keyword_id: 15,
  },
  {
    id: 20,
    movie_id: 7,
    movie_keyword_id: 18,
  },
  {
    id: 21,
    movie_id: 7,
    movie_keyword_id: 13,
  },
  {
    id: 22,
    movie_id: 8,
    movie_keyword_id: 1,
  },
  {
    id: 23,
    movie_id: 8,
    movie_keyword_id: 14,
  },
  {
    id: 24,
    movie_id: 8,
    movie_keyword_id: 8,
  },
  {
    id: 25,
    movie_id: 9,
    movie_keyword_id: 16,
  },
  {
    id: 26,
    movie_id: 9,
    movie_keyword_id: 14,
  },
  {
    id: 27,
    movie_id: 9,
    movie_keyword_id: 19,
  },
  {
    id: 28,
    movie_id: 10,
    movie_keyword_id: 14,
  },
  {
    id: 29,
    movie_id: 10,
    movie_keyword_id: 7,
  },
  {
    id: 30,
    movie_id: 10,
    movie_keyword_id: 17,
  },
  {
    id: 31,
    movie_id: 11,
    movie_keyword_id: 18,
  },
  {
    id: 32,
    movie_id: 11,
    movie_keyword_id: 19,
  },
  {
    id: 33,
    movie_id: 11,
    movie_keyword_id: 6,
  },
  {
    id: 34,
    movie_id: 12,
    movie_keyword_id: 20,
  },
  {
    id: 35,
    movie_id: 12,
    movie_keyword_id: 17,
  },
  {
    id: 36,
    movie_id: 12,
    movie_keyword_id: 14,
  },
  {
    id: 37,
    movie_id: 13,
    movie_keyword_id: 18,
  },
  {
    id: 38,
    movie_id: 13,
    movie_keyword_id: 8,
  },
  {
    id: 39,
    movie_id: 13,
    movie_keyword_id: 10,
  },
  {
    id: 40,
    movie_id: 14,
    movie_keyword_id: 15,
  },
  {
    id: 41,
    movie_id: 14,
    movie_keyword_id: 18,
  },
  {
    id: 42,
    movie_id: 14,
    movie_keyword_id: 13,
  },
  {
    id: 43,
    movie_id: 15,
    movie_keyword_id: 14,
  },
  {
    id: 44,
    movie_id: 15,
    movie_keyword_id: 7,
  },
  {
    id: 45,
    movie_id: 15,
    movie_keyword_id: 17,
  },
];

const genres = [
  {
    id: 1,
    genre: '액션',
  },
  {
    id: 2,
    genre: '범죄',
  },
  {
    id: 3,
    genre: 'SF',
  },
  {
    id: 4,
    genre: '코미디',
  },
  {
    id: 5,
    genre: '로맨스',
  },
  {
    id: 6,
    genre: '스릴러',
  },
  {
    id: 7,
    genre: '공포',
  },
  {
    id: 8,
    genre: '전쟁',
  },
  {
    id: 9,
    genre: '스포츠',
  },
  {
    id: 10,
    genre: '판타지',
  },
  {
    id: 11,
    genre: '음악',
  },
  {
    id: 12,
    genre: '뮤지컬',
  },
  {
    id: 13,
    genre: '멜로',
  },
];

const genreMovies = [
  {
    id: 1,
    movie_id: 1,
    genre_id: 13,
  },
  {
    id: 2,
    movie_id: 1,
    genre_id: 5,
  },
  {
    id: 3,
    movie_id: 2,
    genre_id: 6,
  },
  {
    id: 4,
    movie_id: 2,
    genre_id: 7,
  },
  {
    id: 5,
    movie_id: 3,
    genre_id: 13,
  },
  {
    id: 6,
    movie_id: 3,
    genre_id: 12,
  },
  {
    id: 7,
    movie_id: 4,
    genre_id: 8,
  },
  {
    id: 8,
    movie_id: 4,
    genre_id: 9,
  },
  {
    id: 9,
    movie_id: 5,
    genre_id: 6,
  },
  {
    id: 10,
    movie_id: 5,
    genre_id: 2,
  },
  {
    id: 11,
    movie_id: 6,
    genre_id: 13,
  },
  {
    id: 12,
    movie_id: 6,
    genre_id: 5,
  },
  {
    id: 13,
    movie_id: 7,
    genre_id: 6,
  },
  {
    id: 14,
    movie_id: 7,
    genre_id: 7,
  },
  {
    id: 15,
    movie_id: 8,
    genre_id: 3,
  },
  {
    id: 16,
    movie_id: 8,
    genre_id: 10,
  },
  {
    id: 17,
    movie_id: 9,
    genre_id: 6,
  },
  {
    id: 18,
    movie_id: 9,
    genre_id: 2,
  },
  {
    id: 19,
    movie_id: 10,
    genre_id: 13,
  },
  {
    id: 20,
    movie_id: 10,
    genre_id: 4,
  },
  {
    id: 21,
    movie_id: 11,
    genre_id: 6,
  },
  {
    id: 22,
    movie_id: 11,
    genre_id: 7,
  },
  {
    id: 23,
    movie_id: 12,
    genre_id: 13,
  },
  {
    id: 24,
    movie_id: 12,
    genre_id: 11,
  },
  {
    id: 25,
    movie_id: 13,
    genre_id: 13,
  },
  {
    id: 26,
    movie_id: 13,
    genre_id: 9,
  },
  {
    id: 27,
    movie_id: 14,
    genre_id: 6,
  },
  {
    id: 28,
    movie_id: 14,
    genre_id: 3,
  },
  {
    id: 29,
    movie_id: 15,
    genre_id: 13,
  },
  {
    id: 30,
    movie_id: 15,
    genre_id: 11,
  },
];

const movieImgs = [
  {
    id: 1,
    image_url: '잠 못 이루는 밤 이미지url',
    movie_id: 1,
  },
  {
    id: 2,
    image_url: '유령의 새벽 이미지url',
    movie_id: 2,
  },
  {
    id: 3,
    image_url: '한강에는 비가 내린다 이미지url',
    movie_id: 3,
  },
  {
    id: 4,
    image_url: '꿈의 문 이미지url',
    movie_id: 4,
  },
  {
    id: 5,
    image_url: '모래성 이미지url',
    movie_id: 5,
  },
  {
    id: 6,
    image_url: '벚꽃이 지나는 길 이미지url',
    movie_id: 6,
  },
  {
    id: 7,
    image_url: '방랑자 이미지url',
    movie_id: 7,
  },
  {
    id: 8,
    image_url: '바다의 흔적 이미지url',
    movie_id: 8,
  },
  {
    id: 9,
    image_url: '에밀리의 불행한 여름 이미지url',
    movie_id: 9,
  },
  {
    id: 10,
    image_url: '단편시선 이미지url',
    movie_id: 10,
  },
  {
    id: 11,
    image_url: '섀도우 플레이 이미지url',
    movie_id: 11,
  },
  {
    id: 12,
    image_url: '선키스드 드림 이미지url',
    movie_id: 12,
  },
  {
    id: 13,
    image_url: '민환의 초상 이미지url',
    movie_id: 13,
  },
  {
    id: 14,
    image_url: '엔드 오브 애프터글로우 이미지url',
    movie_id: 14,
  },
  {
    id: 15,
    image_url: '언젠가 서울 이미지url',
    movie_id: 15,
  },
  {
    id: 16,
    image_url: '잠 못 이루는 밤 이미지url2',
    movie_id: 1,
  },
  {
    id: 17,
    image_url: '유령의 새벽 이미지url2',
    movie_id: 2,
  },
  {
    id: 18,
    image_url: '한강에는 비가 내린다 이미지url2',
    movie_id: 3,
  },
  {
    id: 19,
    image_url: '꿈의 문 이미지url2',
    movie_id: 4,
  },
  {
    id: 20,
    image_url: '모래성 이미지url2',
    movie_id: 5,
  },
  {
    id: 21,
    image_url: '벚꽃이 지나는 길 이미지url2',
    movie_id: 6,
  },
  {
    id: 22,
    image_url: '방랑자 이미지url2',
    movie_id: 7,
  },
  {
    id: 23,
    image_url: '바다의 흔적 이미지url2',
    movie_id: 8,
  },
  {
    id: 24,
    image_url: '에밀리의 불행한 여름 이미지url2',
    movie_id: 9,
  },
  {
    id: 25,
    image_url: '단편시선 이미지url2',
    movie_id: 10,
  },
  {
    id: 26,
    image_url: '섀도우 플레이 이미지url2',
    movie_id: 11,
  },
  {
    id: 27,
    image_url: '선키스드 드림 이미지url2',
    movie_id: 12,
  },
  {
    id: 28,
    image_url: '민환의 초상 이미지url2',
    movie_id: 13,
  },
  {
    id: 29,
    image_url: '엔드 오브 애프터글로우 이미지url2',
    movie_id: 14,
  },
  {
    id: 30,
    image_url: '언젠가 서울 이미지url2',
    movie_id: 15,
  },
];

const movieVideos = [
  {
    id: 1,
    video_url: '잠 못 이루는 밤 비디오url',
    movie_id: 1,
  },
  {
    id: 2,
    video_url: '유령의 새벽 비디오url',
    movie_id: 2,
  },
  {
    id: 3,
    video_url: '한강에는 비가 내린다 비디오url',
    movie_id: 3,
  },
  {
    id: 4,
    video_url: '꿈의 문 비디오url',
    movie_id: 4,
  },
  {
    id: 5,
    video_url: '모래성 비디오url',
    movie_id: 5,
  },
  {
    id: 6,
    video_url: '벚꽃이 지나는 길 비디오url',
    movie_id: 6,
  },
  {
    id: 7,
    video_url: '방랑자 비디오url',
    movie_id: 7,
  },
  {
    id: 8,
    video_url: '바다의 흔적 비디오url',
    movie_id: 8,
  },
  {
    id: 9,
    video_url: '에밀리의 불행한 여름 비디오url',
    movie_id: 9,
  },
  {
    id: 10,
    video_url: '단편시선 비디오url',
    movie_id: 10,
  },
  {
    id: 11,
    video_url: '섀도우 플레이 비디오url',
    movie_id: 11,
  },
  {
    id: 12,
    video_url: '선키스드 드림 비디오url',
    movie_id: 12,
  },
  {
    id: 13,
    video_url: '민환의 초상 비디오url',
    movie_id: 13,
  },
  {
    id: 14,
    video_url: '엔드 오브 애프터글로우 비디오url',
    movie_id: 14,
  },
  {
    id: 15,
    video_url: '언젠가 서울 비디오url',
    movie_id: 15,
  },
  {
    id: 16,
    video_url: '잠 못 이루는 밤 비디오url2',
    movie_id: 1,
  },
  {
    id: 17,
    video_url: '유령의 새벽 비디오url2',
    movie_id: 2,
  },
  {
    id: 18,
    video_url: '한강에는 비가 내린다 비디오url2',
    movie_id: 3,
  },
  {
    id: 19,
    video_url: '꿈의 문 비디오url2',
    movie_id: 4,
  },
  {
    id: 20,
    video_url: '모래성 비디오url2',
    movie_id: 5,
  },
  {
    id: 21,
    video_url: '벚꽃이 지나는 길 비디오url2',
    movie_id: 6,
  },
  {
    id: 22,
    video_url: '방랑자 비디오url2',
    movie_id: 7,
  },
  {
    id: 23,
    video_url: '바다의 흔적 비디오url2',
    movie_id: 8,
  },
  {
    id: 24,
    video_url: '에밀리의 불행한 여름 비디오url2',
    movie_id: 9,
  },
  {
    id: 25,
    video_url: '단편시선 비디오url2',
    movie_id: 10,
  },
  {
    id: 26,
    video_url: '섀도우 플레이 비디오url2',
    movie_id: 11,
  },
  {
    id: 27,
    video_url: '선키스드 드림 비디오url2',
    movie_id: 12,
  },
  {
    id: 28,
    video_url: '민환의 초상 비디오url2',
    movie_id: 13,
  },
  {
    id: 29,
    video_url: '엔드 오브 애프터글로우 비디오url2',
    movie_id: 14,
  },
  {
    id: 30,
    video_url: '언젠가 서울 비디오url2',
    movie_id: 15,
  },
  {
    id: 31,
    video_url: '잠 못 이루는 밤 비디오url3',
    movie_id: 1,
  },
  {
    id: 32,
    video_url: '유령의 새벽 비디오url3',
    movie_id: 2,
  },
  {
    id: 33,
    video_url: '한강에는 비가 내린다 비디오url3',
    movie_id: 3,
  },
  {
    id: 34,
    video_url: '꿈의 문 비디오url3',
    movie_id: 4,
  },
  {
    id: 35,
    video_url: '모래성 비디오url3',
    movie_id: 5,
  },
  {
    id: 36,
    video_url: '벚꽃이 지나는 길 비디오url3',
    movie_id: 6,
  },
  {
    id: 37,
    video_url: '방랑자 비디오url3',
    movie_id: 7,
  },
  {
    id: 38,
    video_url: '바다의 흔적 비디오url3',
    movie_id: 8,
  },
  {
    id: 39,
    video_url: '에밀리의 불행한 여름 비디오url3',
    movie_id: 9,
  },
  {
    id: 40,
    video_url: '단편시선 비디오url3',
    movie_id: 10,
  },
  {
    id: 41,
    video_url: '섀도우 플레이 비디오url3',
    movie_id: 11,
  },
  {
    id: 42,
    video_url: '선키스드 드림 비디오url3',
    movie_id: 12,
  },
  {
    id: 43,
    video_url: '민환의 초상 비디오url3',
    movie_id: 13,
  },
  {
    id: 44,
    video_url: '엔드 오브 애프터글로우 비디오url3',
    movie_id: 14,
  },
  {
    id: 45,
    video_url: '언젠가 서울 비디오url3',
    movie_id: 15,
  },
];

module.exports = {
  directors,
  filmRatings,
  movies,
  actors,
  actorMovies,
  keywords,
  keywordMovies,
  genres,
  genreMovies,
  movieImgs,
  movieVideos,
};
