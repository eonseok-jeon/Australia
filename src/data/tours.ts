import type { TourScheduleData } from '../types/tour';

export const tourData: TourScheduleData = {
  days: [
    {
      id: 'day1',
      date: '11/1',
      dayOfWeek: '토',
      spots: [
        {
          id: 'city-botanic-gardens',
          name: '시티 보타닉 가든',
          description:
            '브리즈번 중심가에 위치한 아름다운 식물원으로 다양한 열대 식물을 감상할 수 있습니다.',
          imageUrl: [
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4no1OOCuHJcQeFlaitKpl5MYuSz1V1m1rgGz1SbA8ksq0axXehTcw5GjtivnGXQMym07_nqfsEne0sB_3fsDqNKnTUJr2gwTbeh0TCP2tSYCLLgtMzyliOUZzSq1U10cGO4uHR6C=w400-h300-n-k-no-nu',
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqWsRHdqUlJyTOnHi49yn2joVBcMvOmUJj2ahTCqxuDoSni32nafYtmXnYhZdXFGrbiLXp_WTZwj9T9ipkOcv8b-WR3zvJi1m3iFeJZonzvzKCm248Rvm5MukQTrAhjze7L0ySs=w400-h500-n-k-no-nu',
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrGQNOGI4haYz8etwxX68gB0gUeB0AYBzN35ew44nUgPcQUqkGLmNxyzf4eFVx8CskKHj1ATeEcvPueOzzu695xSjr6zzFcsN7AKQ6NhtWriImt4gnj391Kig72L7KvQglAIsbW=w400-h300-n-k-no-nu',
          ],
          infoUrl: 'https://blog.naver.com/reinato/223930014467',
          estimatedTime: 90,
          transportToNext: {
            method: 'walking',
            duration: 15,
            distance: '1.2km',
          },
        },
        {
          id: 'hotel-checkin',
          name: '숙소 체크인',
          description: '로얄 온 더 파크 호텔에서 체크인을 진행합니다.',
          imageUrl: [
            'https://pix8.agoda.net/hotelImages/292/2923/2923_16090713100046184226.jpg?ca=6&ce=1&s=800x',
            'https://pix8.agoda.net/hotelImages/292/2923/2923_19071712400078186206.jpg?ca=9&ce=1&s=800x',
          ],
          infoUrl:
            'https://www.agoda.com/ko-kr/royal-on-the-park-hotel/hotel/brisbane-au.html?ds=OYXvXM43lanip5oq',
          estimatedTime: 30,
          transportToNext: {
            method: 'walking',
            duration: 20,
            distance: '1.5km',
          },
        },
        {
          id: 'south-bank-parklands',
          name: '사우스 뱅크 파크랜드',
          description:
            '브리즈번강 남쪽에 위치한 문화 및 레크리에이션 지구로 박물관, 갤러리, 레스토랑이 있습니다.',
          imageUrl: [
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqDczutsm0k9Yt3nA-3wRPKQZdbTCm60XJejvkGeEZNn8kgHDCUCNoeXr0CvCiyrOL0giNZVrx1otAOiDoAjfpv8ycv4CvP2KNPI8a9W4NkCyyRSrhddrQSw7sP93DeyNFaXnmtlA=s1360-w1360-h1020-rw',
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrRnOybUKlLsJEorL2dRyRgHrvXA5rUG4UmN8jgpA_JZDesc4mqTpaQAzamBvA2jfoy3Hsvi9shGtUUL-uNsdrRZhAWxe4keW9l1tzFt6vtV2ipq7eV-tJevSIPoFncd1WCP5PJ=s1360-w1360-h1020-rw',
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrDFxQTisBl77lly1FJq_JOQq7t45oSdNSVmZntu4WGX--eYo94A7Q0Uh0dTzqEno3C8LfYHVLVffmX9ttULHMFZcOFneC4MMftWnnqtLZpiaxFr6_CSuj04SOI3zOUpOZr1CAI=s1360-w1360-h1020-rw',
          ],
          infoUrl: 'https://blog.naver.com/kuzpilot/223884749164',
          estimatedTime: 120,
          transportToNext: {
            method: 'walking',
            duration: 10,
            distance: '800m',
          },
        },
        {
          id: 'goma',
          name: '현대 미술관 (GOMA)',
          description:
            '호주에서 가장 큰 현대미술관으로 아시아 태평양 지역의 현대 예술 작품을 전시합니다.',
          imageUrl: [
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqAO4stNkK_PacPw2EuAJ-HvUpkcm-xplJhxuHMA8-yRFHPLGXl6s-pzzSNMoq1emdgQRe4-ch70JaXvQukVxf5ajXjKOc_YS-CaMEds29Ig7d8KMUUaZMs6_BdAe9Z3_-X59wt=s1360-w1360-h1020-rw',
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noj-jaUVjZycGcuiH0Dz_6JTO5-8FQhezioH8so39GZ7kqJDVzEtTq-oh65m4T4Ra_GCBEddhwNlp67F0SZFKLU5h-nGLBj4uPA2pslHP8Xhtc0PrO5Sr3LCOZvGhowZGTBoHE9zQ=s1360-w1360-h1020-rw',
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqeBij_WXfhln54ChTnQAMEX-OhBkvA3YqLsXirPS1Ay0dLGORUupdgZLkP558KAry6a9HhKzyIOIjJXDQA2ia8jvq6BgiDUV-pjwAaDAQQwsDiDQOZANZcKTS8FV8Z35X2Gb9IpQ=s1360-w1360-h1020-rw',
          ],
          infoUrl:
            'https://triple.guide/attractions/7592600c-fda4-4a53-9d0d-538d60adf755',
          estimatedTime: 90,
          transportToNext: {
            method: 'walking',
            duration: 5,
            distance: '400m',
          },
        },
        {
          id: 'riverside',
          name: '리버사이드',
          description: '브리즈번강변의 아름다운 산책로와 레스토랑 지역입니다.',
          imageUrl: [
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqtQ31-N-DY9RSBlOsT_0sswlphEI58VE8YqX6LrYFUO37iFv89fIeYNrHCMX-aa0S5lUSJslKZo4FjS3Gk-xAlqZxX17uMAOj2kKOx_fCQkjMUhiObWdNn5QkallkbfL5wi5w6sw=s1360-w1360-h1020-rw',
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqTHUNUqUR1rL8apu4fl3FiCqhogZ44VWMZcF8jztm2B3xjGXFY1HbLH9gPVdW_drjFF7sTcQqA9tHSrJBZROKaTWpxetbsoSYp0VCFeRTbia9A0EUF52eByCKuFekn5A2mO9MX2_k9jMvo=s1360-w1360-h1020-rw',
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npVqCvBE6WoxM6Cu2yKLFKaxd1YA2zrlLpAkw4UtY55UJo0i4kUOxhCYa42DL-VOiPudFPzAUJoHTFNhLhmfSXLnGcvAFrrrkSkdRFQdFeW_LWrM2YRDdBZlpsniT2JL5qCLjgl=s1360-w1360-h1020-rw',
          ],
          infoUrl: 'https://blog.naver.com/expert_gc/223554788407',
          estimatedTime: 45,
          transportToNext: {
            method: 'walking',
            duration: 25,
            distance: '2km',
          },
        },
        {
          id: 'story-bridge',
          name: '스토리 브릿지',
          description: '브리즈번의 상징적인 다리로 야경이 아름답습니다.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFakoczFlHkLnilPOak0Jl5g-TWaH1JEKTQg&s',
          infoUrl: 'https://travel.naver.com/overseas/AUBNE584302/poi/summary',
          estimatedTime: 30,
          transportToNext: {
            method: 'walking',
            duration: 15,
            distance: '1.2km',
          },
        },
        {
          id: 'st-johns-cathedral',
          name: '세인트 존 대성당',
          description:
            '브리즈번에서 가장 큰 성공회 대성당으로 고딕 양식의 아름다운 건축물입니다.',
          imageUrl: [
            'https://search.pstatic.net/common?src=http%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-o%2F02%2F62%2Fb9%2Fa0%2Fst-john-s-cathedral-in.jpg&type=m1500_travelsearch',
            'https://search.pstatic.net/common?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250418_89%2F1744945262545WXaRN_JPEG%2Fp-20200225-103141-largejpg.jpg&type=m1500_travelsearch',
          ],
          infoUrl: 'https://travel.naver.com/overseas/AUBNE256517/poi/summary',
          estimatedTime: 45,
        },
      ],
    },
    {
      id: 'day2',
      date: '11/2',
      dayOfWeek: '일',
      spots: [
        {
          id: 'brisbane-city-hall',
          name: '브리즈번 시청',
          description:
            '1930년에 지어진 브리즈번의 상징적인 건물로 무료 투어를 제공합니다.',
          imageUrl: [
            'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/d55b8a59-4365-4b17-8f7c-0a1c90915c75.jpeg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBL-EGgu8_qViWEcI3bJKj9TA6puBCS4vrlo&s',
          ],
          infoUrl: 'https://travel.naver.com/overseas/AUBNE256510/poi/summary',
          estimatedTime: 60,
          transportToNext: {
            method: 'bus',
            duration: 90,
            distance: '80km',
          },
        },
        {
          id: 'gold-coast',
          name: '골드코스트',
          description:
            '세계적으로 유명한 해변 도시로 57km의 아름다운 해안선을 자랑합니다.',
          imageUrl: [
            'https://i.namu.wiki/i/KkIV1I5IR_T-I5mMLVs_k4rWlCmBuwMXoOWs0XFT39zXuvcpm4kaO_yYJGhwjudJtv2PMD4U0ssDR25mEtISJA.webp',
            'https://cdn.imweb.me/upload/S201806045b14e127704de/7e6b06b58b7a4.jpg',
          ],
          infoUrl: 'https://travel.naver.com/overseas/AUGOC255337/city/summary',
          estimatedTime: 120,
          transportToNext: {
            method: 'walking',
            duration: 10,
            distance: '800m',
          },
        },
        {
          id: 'paradise-center',
          name: '파라다이스 센터',
          description: '서퍼스 파라다이스의 중심가에 위치한 쇼핑몰입니다.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4tVDMZzJuWYgcoEOYryjt2iJfS-dNhgO5Q&s',
          infoUrl: 'https://blog.naver.com/o3ot3tzz/223650884600',
          estimatedTime: 90,
          transportToNext: {
            method: 'walking',
            duration: 5,
            distance: '300m',
          },
        },
        {
          id: 'surfers-paradise-beach',
          name: '서퍼스 파라다이스 비치',
          description:
            '골드코스트의 가장 유명한 해변으로 서핑과 해수욕을 즐길 수 있습니다.',
          imageUrl:
            'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/9bf1796c-c3d3-4ae9-8961-7613111fb5d8.jpeg',
          infoUrl: 'https://travel.naver.com/overseas/AUGOC524199/poi/summary',
          estimatedTime: 180,
          transportToNext: {
            method: 'walking',
            duration: 15,
            distance: '1km',
          },
        },
        {
          id: 'skypoint',
          name: '스카이 포인트 전망대',
          description: 'Q1 빌딩 77층에 위치한 남반구 최고의 해안 전망대입니다.',
          imageUrl: [
            'https://aws-tiqets-cdn.imgix.net/images/content/a0a830e0ef174b42956668a6f20b36a7.jpeg?auto=format%2Ccompress&fit=crop&ixlib=python-4.0.0&q=70',
            'https://upload.wikimedia.org/wikipedia/commons/b/b2/Q1_oberservation_deck.jpg',
          ],
          infoUrl: 'https://travel.naver.com/overseas/AUGOC1987823/poi/summary',
          estimatedTime: 60,
        },
      ],
    },
    {
      id: 'day3',
      date: '11/3',
      dayOfWeek: '월',
      choices: [
        {
          id: 'choice1',
          title: '모튼섬 투어',
          price: 200000,
          spots: [
            {
              id: 'moreton-island',
              name: '모튼섬 투어 (카약, 스노쿨링, 모래썰매 등 취사 선택)',
              description:
                '세계에서 세 번째로 큰 모래섬에서 다양한 액티비티를 즐길 수 있는 당일 투어입니다.',
              imageUrl: [
                'https://d1blyo8czty997.cloudfront.net/tour-photos/15934/800x800/1977084310.jpg',
                'https://image.kkday.com/v2/image/get/c_fit%2Cq_55%2Ct_webp%2Cw_960/s1.kkday.com/product_10637/20220920080230_fASH3/png',
                'https://www.tangalooma.com/TangaloomaV2/media/GeneratedImages/360x220/Desert-Safari-BM-Couple-Sliding.jpg',
              ],
              infoUrl: 'https://www.zoomzoomtour.com/tour/15934',
              estimatedTime: 480,
            },
          ],
        },
        {
          id: 'choice2',
          title: '마운트 쿠사 & 별보기 투어',
          price: 100000,
          spots: [
            {
              id: 'mt-cootha-lookout',
              name: '마운트 쿠사 전망대',
              description:
                '브리즈번 시내 전경을 한눈에 볼 수 있는 최고의 전망대입니다.',
              imageUrl: [
                'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/67e43845-d7eb-4985-92a0-275cc8752d4b.jpeg',
                'https://media-cdn.tripadvisor.com/media/photo-s/09/2a/89/2d/mount-coot-tha-lookout.jpg',
              ],
              infoUrl:
                'https://travel.naver.com/overseas/AUBNE1206454/poi/summary',
              estimatedTime: 90,
              transportToNext: {
                method: 'walking',
                duration: 10,
                distance: '500m',
              },
            },
            {
              id: 'mt-cootha-botanic-gardens',
              name: '마운트 쿠사 보타닉 가든',
              description:
                '56헥타르 규모의 식물원으로 열대 및 아열대 식물을 전시합니다.',
              imageUrl: [
                'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/05fd72c7-fd33-4f3f-a829-a30207c28917.jpeg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXjG4E5hui2n8Y285xNjvlBNsewDPgEuIPyw&s',
                'https://mblogthumb-phinf.pstatic.net/MjAyNDExMjNfMjU2/MDAxNzMyMjkyMzU5MTY4.4aL7s7dviwhXTejkYzouHkVAtEMcci4sUxrBrCUIp4wg.kxAVdQM51XW0nRa7KKvJnWtzClhbkHWen4LedCXAWQsg.JPEG/IMG_3620.jpeg?type=w800',
              ],
              infoUrl: 'https://blog.naver.com/aube-rosee-/224006818331',
              estimatedTime: 120,
              transportToNext: {
                method: 'bus',
                duration: 60,
                distance: '25km',
              },
            },
            {
              id: 'mulongum-stargazing',
              name: '무게라 별보기 투어',
              description:
                '어둠이 내린 후 밤하늘의 별자리를 관측하는 특별한 투어입니다.',
              imageUrl:
                'https://dry7pvlp22cox.cloudfront.net/mrt-images-prod/2024/11/27/cCJh/YDRtM2GGNZ.jpg',
              infoUrl: 'https://www.zoomzoomtour.com/tour/6113',
              estimatedTime: 180,
            },
          ],
        },
      ],
    },
    {
      id: 'day4',
      date: '11/4',
      dayOfWeek: '화',
      spots: [
        {
          id: 'sydney-hotel-checkin',
          name: '숙소 체크인',
          description: '드비어 호텔에서 체크인을 진행합니다.',
          imageUrl: [
            'https://q-xx.bstatic.com/xdata/images/hotel/max500/52415195.jpg?k=b6895b000efd0af599b5595fcf6691e022ed26aefdd654dbfb95a6390f4dd4b1&o=&s=800x',
            'https://pix8.agoda.net/hotelImages/42677/0/01d8a023910b475bd3da88357c039b58.jpeg?ce=0&s=800x',
          ],
          infoUrl:
            'https://www.agoda.com/ko-kr/devere-hotel/hotel/sydney-au.html?ds=OYXvXM43lanip5oq',
          estimatedTime: 30,
          transportToNext: {
            method: 'walking',
            duration: 15,
            distance: '1.2km',
          },
        },
        {
          id: 'sydney-mca',
          name: '시드니 현대 미술관',
          description:
            '시드니 하버 브릿지 근처에 위치한 호주 최고의 현대미술관입니다.',
          imageUrl: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vb3JRD0_7AYIj37FASUcTxSALpH52at66A&s',
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq1h5itrZk_pw6m9UlZdz6zJrempAy8H257dzlUrjyv5c0W6t7CF-skALH6TRTM7Md6lRB81NGYVtTEyXO7bHoifKa5A8jEuQl3Tje760Am_f4csvIPnHYLyv5o4l6cuN-WgOSabQ=s800-w800-h600-rw',
          ],
          infoUrl: 'https://travel.naver.com/overseas/AUSYD256692/poi/summary',
          estimatedTime: 90,
          transportToNext: {
            method: 'walking',
            duration: 10,
            distance: '700m',
          },
        },
        {
          id: 'sydney-observatory',
          name: '시드니천문대',
          description:
            '1858년에 설립된 호주에서 가장 오래된 천문대로 하버 브릿지 전망이 아름답습니다.',
          imageUrl: [
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noKBRBHntanBuE84GhoRJYI75tK_1hE8fxK_23rCm56N1H-PTNeVbfVUPfTdhFPSCZZzxhiO31ytQlPzFZHOY-pZLB-WoARy6SFBUGe215_LtdG9FyYQHxqB8jeExptShohH4pt=s800-w800-h600-rw',
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npNKb2gdm9QqOrJDK4vP0iGnY-v-BPNrEzESGti9kPTUJUBE-GXYrOeTDcQ7vkzfz4oKIaXUMsneM-C5rvBEGkkztBmZmJvzthTAXvdoOVUBwUhS-bjOGgGTXwiR4D9vMsETmfLVw=s800-w800-h600-rw',
          ],
          infoUrl: 'https://travel.naver.com/overseas/AUSYD256722/poi/summary',
          estimatedTime: 60,
          transportToNext: {
            method: 'walking',
            duration: 20,
            distance: '1.5km',
          },
        },
        {
          id: 'opera-house',
          name: '오페라 하우스',
          description:
            '시드니의 상징이자 세계문화유산으로 등재된 건축물입니다.',
          imageUrl:
            'https://lh3.googleusercontent.com/gps-cs-s/AC9h4no1Mbvr9CdN-wQw93OJYL5Bf-5FjVUirVZMYjPbYKjOVZh6fj8EvbC0EZal5QpDA-ATebmHmkB0cmHO73JtRn1Fy10RaQ8yK9m0NrJPZ4wwEriOBiqCNQ3cJs21WQizaqd96oxD=w400-h300-n-k-no-nu',
          infoUrl: 'https://travel.naver.com/overseas/AUSYD257278/poi/summary',
          estimatedTime: 120,
        },
      ],
    },
    {
      id: 'day5',
      date: '11/5',
      dayOfWeek: '수',
      choices: [
        {
          id: 'choice1',
          title: '시드니 시내 투어',
          spots: [
            {
              id: 'taronga-zoo',
              name: '타롱가주 (동물원)',
              description:
                '시드니 하버가 내려다보이는 세계적으로 유명한 동물원입니다.',
              imageUrl: [
                'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noIjg4-otxte9rwDlyQpjafhN6cqFLVNI2p_tJTYkOb60UkbOrLb848kgl3qKqIWtK64_m-8lpJX_7Xn43TAtnAaszFQ7eNk9KmMDHVBptFMvvqz9QMmbn9R5v_NYdvqtmL8kfgLw=s800-w800-h600-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npPjMAFRUscFDqf8q69JLgZAms1UdU1uGwC7z-Fhs-OFiwgB84nNIqHngy2IIooZeLaN5QVj6bUcod5zq8syX21qeJbSM-b7V-6RuBxYt9xNt-QD8eIBRPQ7UAfF5LfIalt02gg=s800-w800-h600-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npY8P_BBbHuOMcMjq9dpNLhE6jvG4lMaXrmYD-3_kEtWB5kNnA14z26nKj81uY1w3YzVCbnR_k-vbDTPJ3tFFv_u3kmSOuSERlvcvd8btIJA0u6Fx8TotttpfZL0Oe8n6BmDNMh=s800-w800-h600-rw',
              ],
              infoUrl: 'https://blog.naver.com/peanut_s_/223992209826',
              estimatedTime: 180,
              transportToNext: {
                method: 'bus',
                duration: 45,
                distance: '15km',
              },
            },
            {
              id: 'paddys-market',
              name: '패디스마켓',
              description:
                '시드니에서 가장 유명한 재래시장으로 기념품과 현지 상품을 구매할 수 있습니다.',
              imageUrl: [
                'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrtgkA1D1Y2hx7cyt1uQ7khVwHjMjFk7tdE0HFvVaHSRL9hhvsGujAy2GhP3psT3KkCLBKAPAmxZNjlp3Ud9ZYuM724cA8OyP7SJ_nSUgMHbe9yuFjmq_MQcIihgdOnL3juQ8PPz7CcpuL6=w400-h300-n-k-no-nu',
                'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npm7fkvz0r_C5Spy0Ghm56kMxemL5bPPTKMupYcDcNQnzQOnGNlIUnRo-4HY15VEOAPpysckTccN9_dOIwKE4pXOTBZ9qPLqkBu3AEZHaN0VaGvTORVf-9ZwM-er29wOXCcJ28=s800-w800-h600-rw',
              ],
              infoUrl:
                'https://travel.naver.com/overseas/AUSYD258583/poi/summary',
              estimatedTime: 90,
              transportToNext: {
                method: 'bus',
                duration: 30,
                distance: '8km',
              },
            },
            {
              id: 'sydney-university',
              name: '시드니대학교',
              description:
                '1850년에 설립된 호주에서 가장 오래된 대학교로 아름다운 캠퍼스로 유명합니다.',
              imageUrl: [
                'https://lh3.googleusercontent.com/p/AF1QipNYXjeF8SV7U85Y5OHOtETfy7zpMVrTRcE_2aOP=s800-w800-h600-rw',
                'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noNVLDLhXKbL6pV2UQTX0_a5ET2O_SYhQqQjsTT6-Kg1m6rr8D_R5FLTqjvrwE2Op584YHSUhktJ95Zgwt_FjTfJ-bKKNCMXoKfkls-LtngHacXwq1KGM45b-tmE2s4zxCIQ18=w300-h250-n-k-no-nu',
              ],
              infoUrl:
                'https://terms.naver.com/entry.naver?docId=6209619&cid=67966&categoryId=67966',
              estimatedTime: 60,
            },
          ],
        },
        {
          id: 'choice2',
          title: '액티비티 투어',
          price: 200000,
          spots: [
            {
              id: 'dolphin-cruise-combo',
              name: '돌핀 크루즈 + 모래 썰매 + 오크베일 동물원',
              description:
                '포트 스티븐스에서 돌고래 크루즈, 모래썰매, 동물원을 한번에 즐기는 콤보 투어입니다.',
              imageUrl: [
                'https://thumb.tidesquare.com/tour/public/product/PRV3000078320/PRD3001396770/origin/da1975c5-83bf-4660-8485-6d28f779b74b.png?type=og',
                'https://d1blyo8czty997.cloudfront.net/tour-photos/890/800x800/4736635265.jpg',
                'https://d1blyo8czty997.cloudfront.net/tour-photos/890/800x800/4856678549.jpg',
              ],
              infoUrl: 'https://www.zoomzoomtour.com/tour/17676',
              estimatedTime: 480,
            },
          ],
        },
      ],
    },
    {
      id: 'day6',
      date: '11/6',
      dayOfWeek: '목',
      spots: [
        {
          id: 'blue-mountains',
          name: '블루마운틴',
          description:
            '시드니에서 서쪽으로 2시간 거리에 위치한 세계문화유산 국립공원입니다.',
          imageUrl: [
            'https://thumb.tidesquare.com/tour/public/product/PRV3001309905/PRD3001315258/origin/20240110020203165_yhc1O.jpg?type=wide',
            'https://mblogthumb-phinf.pstatic.net/MjAyMzEyMzFfMjEy/MDAxNzAzOTkwODc2NTcx.KwM5Zanhp0OsSCEJ-k8mwNbgg6fBvcsR9FQEMwN17qIg.EC7OsCxKZ9qDhjIAgjojAjr9DEeql6OLuNkYIQrVUncg.JPEG.jh4332/SE-b9163a91-66a0-415d-8a3c-e1e5e8ed208c.jpg?type=w800',
          ],
          infoUrl: 'https://blog.naver.com/diyoungishere/223996317869',
          estimatedTime: 480,
        },
      ],
    },
    {
      id: 'day7',
      date: '11/7',
      dayOfWeek: '금',
      spots: [
        {
          id: 'bondi-beach',
          name: '본다이비치',
          description:
            '시드니에서 가장 유명한 해변으로 서핑 문화의 메카입니다.',
          imageUrl: [
            'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/543000/543088-sydney.jpg',
            'https://ko.skyticket.com/guide/wp-content/uploads/2025/07/iStock-1151778902-1200x675.jpg',
          ],
          infoUrl: 'https://travel.naver.com/overseas/AUSYD257354/poi/summary',
          estimatedTime: 180,
          transportToNext: {
            method: 'bus',
            duration: 30,
            distance: '12km',
          },
        },
        {
          id: 'darling-harbour',
          name: '달링하버',
          description:
            '시드니 중심가의 대표적인 관광지로 수족관, 박물관, 레스토랑이 밀집되어 있습니다.',
          imageUrl: [
            'https://ko.skyticket.com/guide/wp-content/uploads/2025/03/shutterstock_650042611-1.jpg',
            'https://ko.skyticket.com/guide/wp-content/uploads/2025/03/shutterstock_610684142-1-e1578216524309-680x451.jpg',
          ],
          infoUrl: 'https://travel.naver.com/overseas/AUSYD257275/poi/summary',
          estimatedTime: 180,
        },
      ],
    },
    {
      id: 'day8',
      date: '11/8',
      dayOfWeek: '토',
      spots: [
        {
          id: 'departure',
          name: '아침 먹고 귀국',
          description: '즐거웠던 호주 여행을 마치고 공항으로 이동합니다.',
          imageUrl:
            'https://i.namu.wiki/i/SqJTX9I5QjFTDNuP4xC-qYI7mEZZSet-VESVBl5F7nWOT4XYrFyh9xZxqGT4yAQE1jAAirOjABrOt_A772ALEw.webp',
          infoUrl: '',
          estimatedTime: 60,
        },
      ],
    },
  ],
};
