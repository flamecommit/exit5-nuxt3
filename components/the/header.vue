<template>
  <header class="the-header">
    <h1>
      <nuxt-link to="/">Code Name Chord</nuxt-link>
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
  align-items: center;
  height: 70px;
  padding: 0 20px;
  border-bottom: 1px solid #000;
}
</style>