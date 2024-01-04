<template>
  <v-app>
    <v-app-bar fixed color="white" scroll-behavior="elevate" app v-if="$route.name === 'root' || $route.name === 'home'">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-spacer></v-spacer>
      <router-link to="/home">
        <img src="@/assets/여기어때로고.png" alt="" class="logo">
      </router-link>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-bell" color="grey-darken-1" />
    </v-app-bar>
    <v-app-bar fixed color="white" scroll-behavior="elevate" app v-if="$route.name === 'info'">
      <v-btn icon="mdi-arrow-left" @click="$router.go(-1)" />
      <v-spacer></v-spacer>
      <h1>포포인츠 바이 쉐라톤 서울 구로</h1>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-export-variant" />
      <v-btn icon="mdi-heart-outline" />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer v-if="$route.name === 'root' || $route.name === 'home' || $route.name === 'search'">
      <v-bottom-navigation fixed v-model="value" dark class="bg-white">
        <router-link to="/home">
          <v-btn prepend-icon="mdi-home-variant" stacked variant="plain" value="home" class="themeColor"> 홈 </v-btn>
        </router-link>
        <router-link to="/search">
          <v-btn prepend-icon="mdi-magnify" stacked variant="plain" value="search" class="themeColor"> 검색 </v-btn>
        </router-link>
        <router-link to="/">
          <v-btn prepend-icon="mdi-map-marker" stacked variant="plain" value="loca" class="themeColor"> 주변 </v-btn>
        </router-link>
        <router-link to="/">
          <v-btn prepend-icon="mdi-heart" stacked variant="plain" value="pick" class="themeColor"> 찜 </v-btn>
        </router-link>
        <router-link to="/">
          <v-btn prepend-icon="mdi-account-circle-outline" stacked variant="plain" value="my" class="themeColor"> 내정보
          </v-btn>
        </router-link>
      </v-bottom-navigation>
    </v-footer>
  </v-app>
</template>

<script setup>
// custom css
import '@/style.css';
import '@/reset.css';
import '@/layout.css';
</script>
