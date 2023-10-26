<script>
import PocketBase from 'pocketbase'
var connected = false;
var pocketbase_ip = "";
if (import.meta.env.MODE === "production")
  pocketbase_ip = "http://193.168.146.79/";
else pocketbase_ip = "http://127.0.0.1:8090/";
  const pb = new PocketBase(pocketbase_ip);
var currentUser;
export default {
    methods: {
        //this method allows a new user to sign up the system. Once done, the user receives an email
        //asking for account validation. Once the validation made the user is added to the system
        async login() {
            await pb
                .collection("users")
                .authWithPassword(
                    document.getElementById("email").value,
                    document.getElementById("passwd").value
                );

            if (pb.authStore.isValid) {
                document.getElementById("status").innerHTML = "Vous etes maintenant connecté(e)";
                connected = true;
                currentUser = pb.authStore.model;
                document.getElementById("signOut").style.visibility = "hidden";
                document.getElementById("addPoem").style.visibility = "visible";
            }
        },
        //this method allows the already registred user to log in the system.

        


        

        async register() {
            currentUser = await pb.collection("users").create({
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                password: document.getElementById("passwd").value,
                passwordConfirm: document.getElementById("passwd").value,
                
            });
            if (currentUser) {
                document.getElementById("status").innerHTML =
                    "Nous vous avons envoyer un mail de vérifictaion ...";
                await pb
                    .collection("users")
                    .requestVerification(document.getElementById("email").value);
            }
        },
      
        async githublogin() {
      await pb.collection("users").authWithOAuth2({ provider: "github" });
      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "You are now logged in";
        connected = true;
        currentUser = pb.authStore.model;
        document.getElementById("signOut").style.visibility = "hidden";
        document.getElementById("addPoem").style.visibility = "visible";
      }
    },
        
    },
};
</script>
<template>
    <div class="card">
        <div style="align-items: center;">
            <h1>Inscription</h1>
            <div class="container">
                <div class="wrapper" id="signOut">
                    <div>
                        <SignIn msg="Enter votre email pour vous connecter" />
                    </div>
                    <label>Utilisateur : </label><br />
                    <br />
                    <input class="barre" type="name" required id="name" placeholder="Nom d'utilisateur" /><br />
                    <br />
                    <label>Adresse mail : </label><br />
                    <br />
                    <input class="barre" type="email" required id="email" placeholder="Entrez votre adresse" /><br />
                    <br />
                    <label>Mot de passe : </label><br />
                    <br />
                    <input class="barre" type="password" required id="passwd" placeholder="Mot de passe" style="margin-bottom: 20px;"/><br />
                    <div class="btn_connect">
                    <RouterLink style="text-decoration: none;" to="/" button v-on:click="register()" class="inscrire">S'inscrire</RouterLink>
                    <button v-on:click="githublogin()" class="git">Se connecter avec Github</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

.btn_connect{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.barre{
    width: 300px;
    padding: 10px;
    background-color: rgb(202, 202, 202);
    border: none;
    border-radius: 10px;

}
.git{
    background-color: #000;
    color: #ffffff;
    border: none;
    height: 30px;
    padding: 0.5rem;
    cursor: pointer;
    width: 250px;
    height: 35px;
    margin-bottom: 20px;
    transition: background-color 0.3s ease;
    font-size: 18x;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.git:hover{
    background-color: #ffffff;
    color: #000;
    border: 0px solid var(--noir, #000);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.inscrire{
    background-color: #000;
    color: #ffffff;
    border: none;
    height: 15px;
    padding: 0.5rem;
    cursor: pointer;
    width: 100px;
    margin-bottom: 20px;
    transition: background-color 0.3s ease;
}
.inscrire:hover{
    background-color: #ffffff;
    color: #000;
    border: 0px solid var(--noir, #000);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));    
}
.card{
  text-align: center;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif

}


</style>