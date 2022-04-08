<template>
  <div id="nav">
    <router-link to="/">首页</router-link> |
    <router-link to="/center">中心</router-link> |
    <router-link to="/about">关于</router-link>
  </div>
  <router-view />
</template>

<style>
#nav {
  padding: 30px;
  border: 1px solid #2c3e;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
