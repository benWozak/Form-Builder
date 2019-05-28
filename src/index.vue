<template>
  <div id="app">
    <div id="nav" class="bg-gray-200">
      <router-link class="font-semibold" to="/">Forms</router-link> |
      <router-link to="/NewForm">New Form</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: 'Inter UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* padding-left: 150px; */
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
