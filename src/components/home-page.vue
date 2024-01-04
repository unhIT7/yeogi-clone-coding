<template>
  <nav>
    <v-container class="text-center mb-5 inner">
      <ul class="nav1">
        <li>
          <v-btn stacked>
            <img src="@/assets/black.png" alt="">
            프리미엄블랙
          </v-btn>
        </li>
        <li>
          <v-btn stacked>
            <img src="@/assets/bed.png" alt="">
            모텔
          </v-btn>
        </li>
        <li>
          <v-btn stacked>
            <img src="@/assets/sofa.png" alt="">
            호텔∙리조트
          </v-btn>
        </li>
        <li>
          <v-btn stacked>
            <img src="@/assets/Bench.png" alt="">
            펜션∙풀빌라
          </v-btn>
        </li>
        <li>
          <v-btn stacked>
            <img src="@/assets/house.png" alt="">
            홈&빌라
          </v-btn>
        </li>
        <li>
          <v-btn stacked>
            <img src="@/assets/tent.png" alt="">
            캠핑∙글램핑
          </v-btn>
        </li>
        <li>
          <v-btn stacked>
            <img src="@/assets/Paperbag.png" alt="">
            게하∙한옥
          </v-btn>
        </li>
        <li>
          <v-btn stacked>
            <img src="@/assets/Juice.png" alt="">
            공간대여
          </v-btn>
        </li>
        <li>
          <v-btn stacked>
            <img src="@/assets/airplain.png" alt="">
            국내 항공
          </v-btn>
        </li>
        <li>
          <v-btn stacked>
            <img src="@/assets/car.png" alt="">
            렌터카
          </v-btn>
        </li>
        <li>
          <v-btn stacked>
            <img src="@/assets/Snorkel.png" alt="">
            레저∙티켓
          </v-btn>
        </li>
        <li>
          <v-btn stacked>
            <img src="@/assets/Chiken.png" alt="">
            맛집
          </v-btn>
        </li>
      </ul>
    </v-container>
    <div class="nav2 inner">
      <span>해외여행 갈 때</span>
      <v-container class="text-center pa-0 py-7">
        <ul class="nav2-btn">
          <li>
            <v-btn stacked>
              <img src="@/assets/global.png" alt="">
              해외 항공
            </v-btn>
          </li>
          <li>
            <v-btn stacked class="special-price">
              <img src="@/assets/building.png" alt="">
              해외 숙소
            </v-btn>
          </li>
          <li>
            <v-btn stacked>
              <img src="@/assets/ticket.png" alt="">
              항공+숙소
            </v-btn>
          </li>
        </ul>
      </v-container>
    </div>
  </nav>
  <v-divider :thickness="10" color="#F5F5F5" class="border-opacity-100" />
  <article class="todayHot pt-5">
    <div class="hotel inner">
      <h2>오늘 체크인 <em>호텔 특가</em></h2>
      <ul>
        <li v-for="re in 3" :key="re">
          <v-card :loading="loading" max-width="240" min-width="240" height="300" @click="$router.push('/info')">
            <v-img cover height="170"
              src="https://image.goodchoice.kr/resize_490x348/affiliate/2023/06/21/6492a38b2ec09.jpg"></v-img>

            <v-card-title class="font-weight-black">포포인츠 서울 구로</v-card-title>

            <v-card-text>
              <v-row class="mx-0 mb-5">
                <v-icon icon="mdi-star" color="amber" size="small" />
                <div class="text-grey ms-1">
                  <span class="text-grey font-weight-black">4.5</span> (413)
                </div>
              </v-row>

              <em class="sale">40%</em><span class="text-grey before-sale"> 579,000</span>
              <div class="price font-weight-black">
                349,000<em class="price-w font-weight-regular">원~</em>
              </div>

            </v-card-text>
          </v-card>
        </li>
      </ul>
      <div class="text-center more">
        <v-btn variant="outlined" rounded="xl" append-icon="mdi-chevron-right">
          <span><em>호텔 특가</em> 더보기</span>
        </v-btn>
      </div>
    </div>
    <div class="rental-cottage inner">
      <h2><em>이번 주 HOT</em> 인기 펜션</h2>
      <ul>
        <li v-for="re in 3" :key="re">
          <v-card :loading="loading" max-width="240" min-width="240" height="300" @click="$router.push('/info')">
            <v-img cover height="170"
              src="https://image.goodchoice.kr/resize_490x348/affiliate/2023/04/27/644a1b7259b7c.jpg"></v-img>

            <v-card-title class="font-weight-black">경주 조이 풀빌라</v-card-title>

            <v-card-text>
              <v-row class="mx-0 mb-5">
                <v-icon icon="mdi-star" color="amber" size="small" />
                <div class="text-grey ms-1">
                  <span class="text-grey font-weight-black">10</span> (70)
                </div>
              </v-row>

              <em class="sale">10%</em><span class="text-grey before-sale"> 159,000</span>
              <div class="price font-weight-black">
                142,460<em class="price-w font-weight-regular">원~</em>
              </div>

            </v-card-text>
          </v-card>
        </li>
      </ul>
      <div class="text-center more">
        <v-btn variant="outlined" rounded="xl" append-icon="mdi-chevron-right">
          <span><em>인기 펜션</em> 더보기</span>
        </v-btn>
      </div>
    </div>
  </article>
  <v-divider :thickness="10" color="#F5F5F5" class="border-opacity-100" />
  <article class="abroad mt-13 inner">
    <div class="abroad-city">
      <h2><em>최저가 숙소</em>로 누리는 해외 인기 도시</h2>
      <ul class="mb-7">
        <li v-for="다시 in 8" :key="다시">
          <a href="#">
            <img src="@/assets/osaka.jpg" alt="">
            <span>오사카</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="abroad-special">
      <h2><em>해외 항공 + 숙소</em> 이번주 특가</h2>
      <ul>
        <li v-for="re in 5" :key="re">
          <v-card :loading="loading" max-width="160" min-width="160" height="280" link variant="flat">
            <v-img class="rounded abroad-special-img" cover height="160"
              src="https://media.interparkcdn.net/interpark-tour/image/upload/tna/fit/goods/GOODS/goodsGOODS_20230329144322_0.JPG"></v-img>

            <p class="ma-3 font-weight-bold">[후쿠오카/공동구매] 유후인 1일 버스투어 선물 + 니시테</p>
            <v-card-text class="px-3 py-0">
              <em class="sale">40%</em><span class="text-grey before-sale"> 579,000</span>
              <div class="price font-weight-black">
                349,000<em class="price-w font-weight-regular">원~</em>
              </div>

            </v-card-text>
          </v-card>
        </li>
      </ul>
      <div class="text-center more">
        <v-btn variant="outlined" rounded="xl" append-icon="mdi-chevron-right">
          <span><em>항공 + 숙소 특가</em> 더보기</span>
        </v-btn>
      </div>
    </div>
  </article>
  <div class="f-contents text-caption text-grey inner">
    <h1><img src="@/assets/여기어때로고.png" alt=""></h1>
    <ul class="f-contents-addr">
      <li>
        <address>주소: 서울특별시 강남구 봉은사로 479, 479타워 11층</address>
      </li>
      <li>대표이사: 정명훈</li>
      <li>사업자등록번호: 742-86-00224</li>
      <li>통신판매번호: 2017-서울강남-01779</li>
      <li>전화번호: 1670-6250</li>
      <li>전자우편주소: help@goodchoice.kr</li>
      <li>호스팅서브시제공자의 상호 표시: (주)여기어때컴퍼니</li>
      <li>전화번호: 1670-6250</li>
    </ul>
    <ul class="f-contents-policy">
      <li>이용약관</li>
      <li>개인정보 처리방침</li>
      <li>소비자 분쟁해결 기준</li>
      <li>사업자 정보확인</li>
      <li>콘텐츠산업진흥법에 의한 표시</li>
    </ul>
    <p>(주) 여기어때컴퍼니는 통신판매중개자로서 통신판매의 당사자가 아니며, 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.</p>
  </div>
</template>

<script>
export default {
  name: 'home',

  data: () => ({
  }),
};
</script>
