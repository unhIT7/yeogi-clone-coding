<template>
  <v-container class="pa-0 pb-6">
    <div>
      <div class="visual">
        <img class="main-img" src="@/assets/osaka.jpg" alt="">
        <span class="main-img-rang">대표이미지 | 1 / 68</span>
      </div>
      <div class="inner info py-7">
        <span class="rank text-grey">4성급</span>
        <h3 class="font-weight-bold mt-1 mb-4">포포인츠 바이 쉐라톤 서울 구로</h3>
        <div class="info-loca">
          <span><v-icon icon="mdi-map-marker" size="small" />서울 구로구 구로동 1128-1</span>
          <span class="page-link">지도보기<v-icon icon="mdi-chevron-right" class="text-grey" /></span>
        </div>
        <div class="info-review">
          <v-icon icon="mdi-star" color="amber" size="small" />
          <span class="text-grey ms-1 font-weight-black">9.6</span>
          <span class="page-link">리뷰 1,946개 보기<v-icon icon="mdi-chevron-right" class="text-grey" /></span>
          
        </div>
      </div>
    </div>
    <v-divider :thickness="10" color="#F5F5F5" class="border-opacity-100" />
    <div id="room">
      <div class="sticky inner py-3">
        <v-btn prepend-icon="mdi-calendar-blank" variant="flat" color="#f5f5f5">{{ currentDateRange }} <span>{{ stayPeriodInfo }}박</span></v-btn>
        <v-btn prepend-icon="mdi-account" variant="flat" color="#f5f5f5"> 2명</v-btn>
      </div>
      <div class="room-type px-2 py-4" v-for="li in 3" :key="li">
        <div class="pa-3">
          <div class="room-price py-5 px-3">
            <h4 class="py-4 text-h5 font-weight-bold">슈페리어 킹</h4>
            <div class="d-flex">
              <img src="@/assets/osaka.jpg" alt="">
              <span><em>53%</em>286,000</span>
              <span class="info-price"><em>132,000</em>원</span>
              <span>입실 15:00∙퇴실 12:00</span>
            </div>
          </div>
          <ul class="room-info pa-4">
            <li>
              <span>객실정보</span>
              <p>기준2인 ∙ 최대3인 (유료)</p>
            </li>
            <li>
              <span>이벤트</span>
              <p><v-icon icon="mdi-star" size="small" />전 객실 스트리밍 서비스 이용 가능<v-icon icon="mdi-star" size="small" /></p>
            </li>
            <li>
              <span>추가정보</span>
              <p>55인치 스마트 TV (스트리밍 가능, OTT서비스 채널 이용 시 본인계정 로그인 필요) / 무료주차(1대)</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="room-detail">
      <div class="facilities pa-5">
        <h5>편의시설 및 서비스</h5>
        <ul class="d-flex">
          <li v-for="serve in 14" :key="serve" class="d-flex flex-column">
            <v-icon icon="mdi-dumbbell" />
            <span>피트니스</span>
          </li>
        </ul>
        <span class="page-link">자세히보기</span>
      </div>
      <v-divider :thickness="10" color="#F5F5F5" class="border-opacity-100" />
      <div class="pa-5">
        <div>
          <h5>기본정보</h5>
          <ul>
            <li>체크인 : 15:00 | 체크아웃 : 12:00</li>
            <li>22시 이후 체크인 시 호텔 프론트 문의</li>
            <li>무료 Wi-Fi</li>
            <li>전 객실 금연</li>
            <li>주차 가능 (객실 당 1대 무료)</li>
          </ul>
        </div>
        <div>
          <h5>인원 추가 정보</h5>
          <ul>
            <li>객실 정원 : 기준 2인 / 최대 3인 (유료)</li>
            <li>기준 인원 외 1인 추가 시 22,000원 / 엑스트라 베드 포함 인원 추가 시: 44,000원</li>
            <li>(엑스트라 베드는 체크인 전 호텔로 사전 문의하여 재고 확인 필수)</li>
            <li>영유아 인원수 포함 / 최대 인원 초과 불가</li>
            <li>현장 결제</li>
          </ul>
        </div>
      </div>
      <div class="laca-map">
        map api연동하기
      </div>
      <div class="inner">
        <div class="py-5 d-flex">
          <v-icon icon="mdi-star" size="small"/>
          <h5>리얼리뷰 9.6(1,946)</h5>
          <span class="page-link">더보기</span>
        </div>
        <v-divider :thickness="1" color="#F5F5F5" class="border-opacity-100" />
        <div>
          <div class="d-flex">
            <v-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <div>
              <span>베스트 리뷰</span>
              <span>두두사이</span>
              <span>리뷰 51 ∙ 사진 5 ∙ 장소 9</span>
              <div>
                <v-rating half-increments readonly
                  :length="5" :size="35" :model-value="4.5"
                  color="grey" active-color="warning"
                />
                <span>1개월 전</span>
              </div>
              <span>슈페리어 킹 객실 이용</span>
              <p>중국 관광객이 많아져서 주차장 및 엘베 이용하는데 상당한 시간이 소요 그래도 잘 쉬었습니다</p>
              <div>
                <span>이 리뷰가 도움이 되었나요?</span>
                <v-btn prepend-icon="mdi-thumb-up" variant="outlined">0</v-btn>
              </div>
            </div>
          </div>
          <div class="d-flex">
            <v-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <div>
              <span>베스트 리뷰</span>
              <span>베를린드루이드</span>
              <span>리뷰 17 ∙ 사진 40 ∙ 장소 14</span>
              <div>
                <v-rating half-increments readonly :length="5" :size="35" :model-value="5" color="grey" active-color="warning" />
                <span>1개월 전</span>
              </div>
              <span>슈페리어 킹 객실 이용</span>
              <p>역과 접근성이 매우 좋습니다.<br>주변에 큰 마트가 있습니다.<br>객실 소음이 적은 편입니다. 신호등 소리가 들리지 않습니다.<br>
              방 상태는 깨끗한 편이었고 침구는 좋았는데 다만 배게 두 종이 모두 높은 것만 구비되어 있어 불편함이 있었습니다.</p>
              <span class="read-more">더보기</span>
              <ul class="review-img">
                <li v-for="img in 4" :key="img">
                  <img src="https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg" alt="">
                </li>
              </ul>
              <div>
                <span>이 리뷰가 도움이 되었나요?</span>
                <v-btn prepend-icon="mdi-thumb-up" variant="outlined">0</v-btn>
              </div>
            </div>
          </div>
          <v-divider :thickness="1" color="#F5F5F5" class="border-opacity-100" />
          <span class="more-review py-5 d-flex justify-center">더보기</span>
        </div>
      </div>
      <div class="pa-5">
        <p>(주) 여기어때컴퍼니는 통신판매중개자로서 통신판매의 당사자가 아니며,<br>
        상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.</p>
      </div>
      <div class="after-room-footer">
        <v-btn>객실 선택</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'info',

  data() {
    return {
      currentDateRange: '',
      stayPeriodInfo: '',
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

      const getKoreanWeekday = day => ['일', '월', '화', '수', '목', '금', '토'][day];

      this.currentDateRange = `${today.getMonth() + 1}.${today.getDate()} ${getKoreanWeekday(today.getDay())} - ${tomorrow.getMonth() + 1}.${tomorrow.getDate()} ${getKoreanWeekday(tomorrow.getDay())}`;

      const stayPeriod = Math.floor((tomorrow - today) / (24 * 60 * 60 * 1000));
      this.stayPeriodInfo = `${stayPeriod}`;
    },
  },
};
</script>
