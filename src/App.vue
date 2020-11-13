<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
a {
  text-decoration: none;
  color: #2c3e50;
}
body {
  margin: 0;
}
ul,
ol,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
p,
input,
button {
  margin: 0;
  padding: 0;
}
</style>
