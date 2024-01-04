<template>
  <v-container class="pa-0 tab-menu">
    <v-tabs align-tabs="center" v-model="tab" bg-color="white" color="#3471DC" class="fixed">
      <v-tab value="local">
        국내 숙소
      </v-tab>
      <v-tab value="overseas">
        해외 숙소
      </v-tab>
      <v-tab value="lesser">
        레저∙티켓
      </v-tab>
    </v-tabs>
    <v-card-text class="pa-0">
      <v-window v-model="tab">
        <v-window-item value="local" class="local inner">
          <div class="fixed-search">
            <v-text-field density="compact" placeholder="지역, 지하철역, 숙소" prepend-inner-icon="mdi-magnify" variant="solo"
              bg-color="#f5f5f5" height="50"/>
            <div class="fixed-search-flex">
              <v-btn prepend-icon="mdi-calendar-blank" variant="flat" color="#f5f5f5">{{ currentDateRange }}</v-btn>
              <v-btn prepend-icon="mdi-account" variant="flat" color="#f5f5f5"> 2명</v-btn>
            </div>
            <v-btn prepend-icon="mdi-navigation-variant" variant="outlined" rounded="xl" class="my-5 blue-btn font-weight-bold">
              내 주변에서 검색
            </v-btn>
          </div>
          <div class="fixed-text">
            <div class="current">
              <h3 class="font-weight-bold">최근 검색 기록</h3>
              <ul class="py-4">
                <li v-for="(record , i) in search.slice(0, 2)" :key="record" class="d-flex justify-space-between align-center py-5">
                  <div class="d-flex align-center">
                    <v-icon icon="mdi-clock-outline" class="mr-3" />
                    <div class="d-flex flex-column">
                      <em class="font-weight-medium">{{ record }}</em>
                      <span>{{ currentDateRange }}, {{ (i+1) * 2 }}명</span>
                    </div>
                  </div>
                  <v-icon icon="mdi-close" class="record-del" />
                </li>
              </ul>
              <span class="text-grey font-weight-bold">전체삭제</span>
            </div>
            <div class="search-order">
              <h3 class="font-weight-bold">여기어때 검색 순위</h3>
              <ol class="py-3">
                <li v-for="(li, i) in search" :key="li"><span class="font-weight-bold py-3">{{ i+1 }}</span>{{ li }}</li>
              </ol>
            </div>
          </div>
        </v-window-item>

        <v-window-item value="overseas" class="overseas">
          <div class="fixed-search">
            <v-text-field density="compact" placeholder="여행지, 숙소" prepend-inner-icon="mdi-magnify" variant="solo"
              bg-color="#f5f5f5" />
            <div class="fixed-search-flex">
              <v-btn prepend-icon="mdi-calendar-blank" variant="flat" color="#f5f5f5">{{ afterMonthRange }}</v-btn>
              <v-btn prepend-icon="mdi-account" variant="flat" color="#f5f5f5"> 객실 1개, 성인 2명</v-btn>
            </div>
            <v-btn class="my-5 blue-btn font-weight-bold" rounded="lg">검색</v-btn>
          </div>
        </v-window-item>

        <v-window-item value="lesser" class="lesser">
          <div class="fixed-search">
            <v-text-field density="compact" placeholder="여행지, 액티비티, 티켓" prepend-inner-icon="mdi-magnify" variant="solo" bg-color="#f5f5f5" />
            <div class="recommand mb-5">
              <h3 class="font-weight-bold">추천 검색어</h3>
              <ul class="py-4 d-flex flex-wrap">
                <li v-for="re in recom" :key="re" class="mr-3 mb-4">
                  <v-btn>{{ re }}</v-btn>
                </li>
              </ul>
            </div>
            <div class="recom-local">
              <h3 class="font-weight-bold">추천 지역</h3>
              <ul class="py-4 d-flex">
                <li v-for="se in search" :key="se" class="mr-3 mb-4">
                  <a href="#">
                    <img src="https://cdn.pixabay.com/photo/2021/12/08/05/13/gyeongbok-palace-6854763_1280.jpg" alt="">
                    <span>{{ se }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-container>
</template>

<script>
export default {
  name: 'search',

  data() {
    return {
      tab: null,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      currentDateRange: '',
      afterMonthRange: '',
      search: ['강릉', '제주도', '부산', '경주', '여수', '속초', '서울', '전주', '포항', '해운대',],
      recom: ['특가', '소상공인', '에버랜드', '롯데월드', '롯데월드 아쿠아리움', '서울스카이', '강습 렌탈샵', '싱가포르 50%할인', '유니버설 스튜디오 재팬'],
    };
  },
  mounted() {
    this.currentDateRangeNumbersKorean();
  },
  methods: {
    currentDateRangeNumbersKorean() {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);

      const afterOneMonth = new Date(today);
      afterOneMonth.setDate(today.getDate() + 30);
      const afterOneMonthTomorrow = new Date(today);
      afterOneMonthTomorrow.setDate(today.getDate() + 31);

      const getKoreanWeekday = day => ['일', '월', '화', '수', '목', '금', '토'][day];

      this.currentDateRange = `${today.getMonth() + 1}.${today.getDate()} ${getKoreanWeekday(today.getDay())} - ${tomorrow.getMonth() + 1}.${tomorrow.getDate()} ${getKoreanWeekday(tomorrow.getDay())}`;
      this.afterMonthRange = `${afterOneMonth.getMonth() + 1}.${afterOneMonth.getDate()} ${getKoreanWeekday(afterOneMonth.getDay())} - ${afterOneMonthTomorrow.getMonth() + 1}.${afterOneMonthTomorrow.getDate()} ${getKoreanWeekday(afterOneMonthTomorrow.getDay())}`;
    },
  },
};
</script>
