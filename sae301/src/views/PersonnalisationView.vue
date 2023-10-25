<script setup>
</script>

<template>
    <h1>Personnalisation</h1>



<div class="product-container">
    <div class="product-image">
      <img src="/src/assets/lunette.webp" alt="Lunette RAZER TaVue">
    </div>
    <div class="product-details">
      <div class="product-name">
        <h2>Lunette RAZER TaVue</h2>
      </div>
      <div class="product-price">
        <p>Prix: 300€</p>
        <div class="heart-icon">
          <i class="far fa-heart"></i>
        </div>
      </div>
      <div class="product-options">
        <div class="color-option">
          <label for="color-select">Couleur:</label>
          <select id="color-select">
            <option value="red">Rouge</option>
            <option value="blue">Bleu</option>
            <option value="green">Vert</option>
          </select>
        </div>
        <div class="material-option">
          <label for="material-select">Matériel:</label>
          <select id="material-select">
            <option value="plastic">Plastique</option>
            <option value="metal">Métal</option>
            <option value="wood">Bois</option>
          </select>
        </div>
      </div>
      <div class="add-to-cart">
        <button class="cart-button">Ajouter au panier</button>
      </div>
    </div>
  </div>
  <div class="cart-overlay">
    <div class="cart-page">
      <div class="cart-header">
        <h2>Votre panier</h2>
        <div class="close-icon">
          <i class="fas fa-times"></i>
        </div>
      </div>
      <div class="cart-items">
        <!-- Cart items will be added dynamically -->
      </div>
      <div class="cart-total">
        <p>Total: 300€</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.product-container {
  display: flex;
  
  gap: 200px; 
  align-items: center;
  margin-left: 200px;
}



.product-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 20px;
}

.product-name h2 {
  margin: 0;
}

.product-price {
  display: flex;
  align-items: center;
}

.heart-icon {
  margin-left: 20px;
  cursor: pointer;
}

.heart-icon:hover {
  color: pink;
}

.product-options {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.color-option,
.material-option {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.color-option label,
.material-option label {
  margin-right: 10px;
}

.add-to-cart {
  margin-top: 20px;
}

.cart-button {
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.cart-button:hover {
  background-color: white;
  color: black;
}

.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  justify-content: center;
  align-items: center;
}

.cart-page {
  width: 443px;
  height: 832px;
  background-color: white;
  padding: 20px;
  position: relative;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.cart-header h2 {
  margin: 0;
}

.close-icon {
  cursor: pointer;
}

.cart-items {
  height: 600px;
  overflow-y: scroll;
  margin-bottom: 20px;
}

.cart-total {
  display: flex;
  justify-content: flex-end;
}
h1{
    text-align: center;
}
</style>
