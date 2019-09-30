<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__image-wrapper">
        <img />
      </div>
      <h1 class="header__title">HakonAntonsen.no</h1>
    </header>
    <nav class="navigation">
        <ul class="navigation__list">
            <li class="navigation__link">Home</li>
            <li class="navigation__link">Blog</li>
        </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.wrapper {
    max-width: 60rem;
    margin: 0 auto auto auto;
}
.header {
    margin: 0 auto 3rem auto;
    &__image-wrapper {
        width: 100%;
        height: 10rem;
        border: solid 1px #000;
    }

    &__title {
        margin: -3rem auto auto 1rem;
    }
}
</style>

<script>
import Vue from "vue";

export default Vue.extend({
  data: function() {
    return {
      title: "All my stories are true child!",
      name: "That's why they are so exciting!"
    };
  }
});
</script>
