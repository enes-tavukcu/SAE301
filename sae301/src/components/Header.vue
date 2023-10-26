<script setup lang="ts">
import { RouterLink } from 'vue-router'



// Import éléments de vue
import { ref, onMounted } from 'vue';
  // Import éléments de routage
  import { useRouter } from 'vue-router';
  const router = useRouter()

  // Import pocketbase
  import PocketBase from 'pocketbase'
  // Objet pocketBase
  
  const pb = new PocketBase("http://127.0.0.1:8090");
  

  
  // user connecté ? au départ faux
  let isConnected = ref(false)

  // Element de connexion
  let user = ref('')
  let psw = ref('')

  // User connecté
  let currentUser = ref(null)
  let avatar = ref(null)

// Au montage du composant
onMounted(async() => {
  // Vérifier que le user est déjà connecté
  refresh()

})



const refresh = ()=>{
  if(pb.authStore.isValid){
    currentUser.value = pb.authStore.model
    isConnected.value = true

    avatar.value =
      "http://127.0.0.1:8090/api/files/"  // Adresse serveur et repertoire des fichiers image
      +currentUser.value.collectionId     // Id ou name de la collection concernée
      +"/"
      +currentUser.value.id               // Id de l'utilisateur connecté
      +"/"
      +currentUser.value.avatar           // Nom fichier image pocketbase
      +"?thumb=100x100"                   // Taille par défaut     

//      console.log("image avatar utilisateur", avatar)
  }
}

const connect = async()=>{
  try{
    const authData = await pb.collection('users')
    .authWithPassword(user.value, psw.value)
//    console.log("connecté : ",authData)
    refresh()    
  }catch(error){
//    console.log("erreur de connexion : ",error.message)
    alert("Erreur d'identification : mauvais login et/ou mot de passe")
    user.value = ""
    psw.value = ""
  }
}

const deconnect = ()=>{
  // Suppression utilisateur connecté
  pb.authStore.clear()
  isConnected.value=false
  avatar.value = null
  // Retour à la page d'accueil -> Redirection
  router.push({name:"HomeView"})
}
</script>


<template>
     <header>
    <div class="logo">Tavue</div>
    <nav>
      <RouterLink style="text-decoration: none;" to="/" button class="nav-btn">Accueil</RouterLink>
      <RouterLink style="text-decoration: none;" to="/personnalisation" button class="nav-btn">Personnaliser</RouterLink>
      
    </nav>
    <RouterLink style="text-decoration: none;" to="/inscription" button class="signup-btn">S'inscrire</RouterLink>


    <div class="ml-auto1">              
              <span v-if="isConnected"> 
                
                <button class="btn btn-light mr-2 bouton_">
                  {{ currentUser.name }}
                </button>              
                <button class="btn btn-dark ml-auto2"
                 type="button" @click="deconnect"><p>DECONNEXION</p>
                    <i class="fa fa-sign-out"></i>
                  </button>
              </span>

              <form v-else class="form-inline  input-group-sm ml-auto3" >
                  <input class="form-control mr-2" placeholder="Login" v-model="user">
                  <input class="form-control mr-2" placeholder="Password" v-model="psw">
                  
                  <button class="btn btn-dark ml-auto4" 
                      type="button" @click.prevent="connect"><p>Connexion</p>
                      <i class="fa fa-power-off"></i>
                  </button>
                </form>
              </div>
  </header>
    <RouterView />

    
  </template>
  
  <style scoped>

  .bouton_{
    border-radius: 25px;
    border-style: none;
    background-color: #ffffff;
  }
  .ml-auto4{
    width: 120px;
    height: 5vh;
    border-radius: 25px;
    border-style: none;
    background-color: #908e8e;
    transition: background-color 0.3s ease;
    color: rgb(0, 0, 0);
    cursor: pointer;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif

  }
    .ml-auto4:hover{
        background-color: #000000;
        color: white;
    }
  .ml-auto2{
    width: 120px;
    height: 40px;
    border-radius: 25px;
    border-style: none;
    background-color: #908e8e;
    transition: background-color 0.3s ease;
    color: rgb(0, 0, 0);
    cursor: pointer;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif

  }
  .ml-auto2:hover{
      background-color: #000000;
      color: white;
  }
  .form-control{
    width: 100px;
  }
  .ml-auto1{
    height: 70px;
    width: 250px; /* Largeur de la div */
  padding: 20px; /* Espace intérieur autour des éléments */
  background-color: #ffffff; 
  border-radius: 50px; /* Coins arrondis */

  }



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
  
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  
  font-weight: 600;
  line-height: 54px;
  text-transform: uppercase;
}

nav {
  display: flex;
  gap: 50px;
  margin-left: 400px;
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
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif

}

.nav-btn:hover {
  color: #56585c;
}

.signup-btn {
  
  background-color: #3C7DDE;
  border-radius: 40px;
  width: 86px;
  color: white;
  font-family: 'PT Sans', sans-serif;
  transition: background-color 0.3s ease;
    padding: 16px 20px;
    padding-left: 40px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif


}

.signup-btn:hover {
    background-color: #000000;
    color: white;
}


  </style>