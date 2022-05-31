<template>
  <header class="the-header">
    <h1 class="logo">
      <nuxt-link to="/">Exit5</nuxt-link>
    </h1>
    <nav>
      <ul>
        <li><nuxt-link to="/music/list">Music</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.the-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 20px;
  border-bottom: 1px solid #000;
  background: #f7f7f7;

  .logo {
    a {
      display: block;
      font-weight: 700;
      font-size: 24px;
    }
  }
}
</style>