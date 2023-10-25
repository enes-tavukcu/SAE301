<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
     <header>
    <div class="logo">Tavue</div>
    <nav>
      <RouterLink to="/" button class="nav-btn">Accueil</RouterLink>
      <button class="nav-btn">Personnaliser</button>
      <button class="nav-btn">Mon compte</button>
    </nav>
    <RouterLink to="/Connexion" button class="signup-btn">S'inscrire</RouterLink>
  </header>
    <RouterView />
  </template>
  
  <style scoped>
  header {
  background-color: #D9D9D9;
  height: 86px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  
  
}

.logo {
  margin-left: 113px;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  
  font-weight: 600;
  line-height: 54px;
  text-transform: uppercase;
}

nav {
  display: flex;
  gap: 102px;
}

.nav-btn {
  background: none;
  border: none;
  color: #000;
  font-family: 'PT Sans', sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 20.4px;
  cursor: pointer;
}

.signup-btn {
  
  background-color: #3C7DDE;
  border-radius: 40px;
  width: 86px;
  color: white;
  font-family: 'PT Sans', sans-serif;
  line-height: 20.4px;
  padding: inherit;
  padding-left: 40px;
  
}

.RouterLink{
    list-style: none;
}
  </style>