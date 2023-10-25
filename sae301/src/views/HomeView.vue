<template>
  <main>

    <div class="tit">
      Créez votre Style, Révélez votre Vue : 
TaVue, des Lunettes qui vous ressemblent.
    </div>

    <div class="container">
      <div class="left">
        <img class="img_accueil" src="/src/assets/Image-accueil-lunette.webp" alt="img_accueil">
      </div>  
      <div class="right">
        <div class="text">
          <p class="title">
            Venez découvrir notre nouvelle collection de lunette
             à prix fort et leur personnalisation exclusive.
          </p>
          <p class="subtitle"> LUNETTE RAZER TAVUE</p>
          <button class="decouvrir-btn">Découvrir</button>
        </div>
      </div>  
    </div>


    <div class="sous-rect">
      Nos lunettes sont désignées et conçues dans nos
       locaux sur le territoire français pour ajouter cette FrenchTouch.
    </div>

    <div class="container2">
      <div class="text2">
      Vos yeux méritent le meilleur ! Chez TaVue, nous comprenons
      à quel point une vision claire est précieuse.
      Que vous soyez confronté à des problèmes de 
      vision ou que vous souhaitiez simplement vous protéger du soleil,
      notre gamme de lunettes de personnalisation est conçue pour
      répondre à tous vos besoins. Nous croyons que chaque paire de
      lunettes devrait être aussi unique que votre vision. Découvrez un monde de clarté,
      de style et de confort avec TaVue. Prenez soin de vos yeux et découvrez
      la différence aujourd'hui.
      </div>

      <img class="img_accueil2" src="/src/assets/image-accueil-lunette2.webp" alt="img_accueil2">
    </div>

    <div class="textmap">
      Nos locaux français
    </div>

    <div style="text-align: center;">
      <button class="Personnalisation-btn">Personnaliser votre lunette</button>
    </div>

    <div class="newsletter-container">
      <h2 class="newsletter-title">S'INSCRIRE à LA NEWSLETTER</h2>
      <div class="newsletter-form">
        <input type="text3" placeholder="Entrez votre adresse e-mail" class="newsletter-input">
        <button class="newsletter-button">S'INSCRIRE</button>
      </div>
    </div>


  </main>
</template>

<style scoped>
.newsletter-button:active {
  background-color: #474747;
  color: #ffffff;
}

.newsletter-button:hover{
  background-color: #ffffff;
  color: #000;
  border: 1px solid var(--noir, #000);
}

.newsletter-button{
  background-color: #000;
  color: #ffffff;
  border: none;
  
  padding: 0.5rem 1rem;
  cursor: pointer;
  width: 200px;
}
.newsletter-input {
  flex: 1;
  padding: 0.5rem;
  
  border: none;
  
  width: 400px;

background: #D9D9D9;
}
.newsltetter-form{
  display: flex;
  align-items: center;
  background-color: #CCC;
  padding: 1rem;
  
}
.newsletter-title{
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;

}
.newsletter-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.textmap{
  text-align: center;
  font-size: 28px;
  margin-top: 75px;
}
.container2{
  display: flex;
  justify-content: center;
  
}
.text2{
  width: 620px;
  font-size: 20px;
  padding-top: 50px;
  
}
.sous-rect{
  color: var(--noir, #000);
width: 850px;
font-family: Istok Web;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: auto;
margin-top: 70px;
margin-bottom: 60px;
}
.left {
flex: 1;
}

.subtitle {
font-size: 24px; 
padding-bottom: 43px;
text-align: center;
}

.title{
font-size: 24px; 
width: 545px;
padding-bottom: 32px;
}

.right { flex: 2;
display: flex;
justify-content: center;
align-items: center;
}
.container {
background-color: #E4E4E4;
height: 497px width 100%;
display: flex;
}
  /* styles pour le bouton */
  .decouvrir-btn {
    background-color: #000000;
    border: none;
    border-radius: 40px;
    color: #ffffff;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  
  }

  /* styles pour le hover */
  .decouvrir-btn:hover {
    background-color: #ffffff;
    color: #000000;
    border-radius: 40px;
    border: 3px solid var(--noir, #000);
    }

    .Personnalisation-btn{
      background-color: #000000;
    border: none;
    border-radius: 40px;
    color: #ffffff;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  
  }

  .Personnalisation-btn:hover {
    background-color: #ffffff;
    color: #000000;
    border-radius: 40px;
    border: 3px solid var(--noir, #000);
    }
  .tit{
    font-size: 34px;
    width: 620px;
    text-align: center;
    margin: auto;
    margin-top: 36px;
    margin-bottom: 38px;
  }
</style>
