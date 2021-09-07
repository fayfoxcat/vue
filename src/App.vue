<template>
  <div id="nav">
    <router-link to="/home">Home</router-link> |
    <router-link to="/">About</router-link>
  </div>
  <router-view/>
</template>

<style>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
