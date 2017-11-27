<template>
  <div id="app">
    <header-template></header-template>
    <div class="main_container">
        <div class="main">
            <div class="stage">
                <!-- LIVE START -->
                <router-view></router-view>
                <!-- LIVE ENDE -->
                <!-- FOOTER START -->
                <footer-template></footer-template>
                <!-- FOOTER ENDE-->
            </div> <!-- STAGE  ENDE -->
        </div> <!-- MAIN  ENDE -->
    </div> <!-- MAIN_CONTAINER ENDE -->
  </div>
</template>

<script>
    import HeaderTemplate from './components/static/Header.vue';
    import FooterTemplate from './components/static/Footer.vue';

    export default {
        components: { HeaderTemplate, FooterTemplate },
      name: "app"
    };
</script>

<style lang="less">
    /*@import "./styles/style.less";*/
    @import './styles/olympiaTicker.less';
</style>