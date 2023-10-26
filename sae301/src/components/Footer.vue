<script setup>
import IconFacebook from '../components/icons/IconFacebook.vue'
import IconInstagram from '../components/icons/IconInsta.vue'
import IconTwitter from '../components/icons/IconTwitter.vue'
import IconYoutube from '../components/icons/IconYoutube.vue'
</script>
<template>
    <footer style="background-color: #EFEFEF; width: auto;
     height: 437px; display: flex; flex-direction: column;
      align-items: center; padding-top: 20px;
      font-family:'Lucida Sans', 'Lucida Sans Regular',
       'Lucida Grande', 'Lucida Sans Unicode', Geneva,
        Verdana, sans-serif">
      
      <!-- Première ligne -->
      <div style="width: 1066.667px; height: var(--min-count, 2px); border-radius: var(--min-count, 0px); background: #685F5F;"></div>
      
      <!-- Sections -->
      <div style="display: flex; justify-content: space-between; width: 1066.667px; margin-top: 20px;">
        <!-- Service client -->
        <div class="section">
          <h3>Service client</h3>
          <ul>
            <li>Nous contacter</li>
            <li>Appelez-nous</li>
            <li>Suivre votre commande</li>
          </ul>
        </div>
        <!-- Notre entreprise -->
        <div class="section">
          <h3>Notre entreprise</h3>
          <ul>
            <li>Trouvez une boutique</li>
            <li>Nos employé</li>
            <li>Nos locaux</li>
          </ul>
        </div>
        <!-- Nous suivre sur les réseaux -->
        <div class="section">
          <h3>Nous suivre sur les réseaux</h3>
          <ul class="social-icons">
            <li><IconInstagram/></li>
            <li><IconFacebook/></li>
            <li><IconTwitter/></li>
            <li><IconYoutube/></li>
          </ul>
        </div>
      </div>
  
      <!-- Deuxième ligne -->
      <div style="width: 1066.667px; height: var(--min-count, 2px); border-radius: var(--min-count, 0px); background: #685F5F; margin-top: 131px;"></div>
  
      <!-- Textes en bas -->
      <div style="display: flex; justify-content: space-between; width: 1066.667px; margin-top: 21px;">
        <span>Politique de confidentialité</span>
        <span>Politique de cookies</span>
        <span>Condition d'utilisation</span>
      </div>
  
    </footer>
  </template>
  
  <style scoped>
  .section .section ul li, span {
    color: var(--noir, #000);
    text-align: center;
    font-family: 'Jacques Francois', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  
  .section ul {
    list-style-type: none;
    padding: 0;
    margin-top: 17px;
  }
  
  .section ul li {
    margin-bottom: 17px;
  }
  
  .social-icons {
    display: flex;
    gap: 26px;
  }
  
  span {
    color: #685F5F;
  }

  h3{
    font-style: italic;
    font-weight: bold;
  }
  </style>