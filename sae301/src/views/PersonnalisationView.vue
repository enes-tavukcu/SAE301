<script setup>
import { ref } from 'vue';
import PocketBase from 'pocketbase';
var pocketbase_ip = "";

// if (import.meta.env.MODE === "production")
//   pocketbase_ip = "http://193.168.146.79/";
// else pocketbase_ip = "http://127.0.0.1:8090/";
//   const pb = new PocketBase(pocketbase_ip);

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_IP);

const cadre_couleur = ref('#B2B2B2');
const verre_couleur = ref('#1D1D1B');
const branche_couleur = ref('#B2B2B2');
const type_cadre = ref('rond');

console.log("couleur cadre:", cadre_couleur.value);
console.log("couleur verre:", verre_couleur.value);
console.log("couleur branche:", branche_couleur.value);
console.log("type cadre:", type_cadre.value);

const createLunette = async () => {
            const lunette = await pb.collection('lunettes').create({
            couleur_cadre : cadre_couleur.value,
            couleur_verre : verre_couleur.value,
            couleur_branche : branche_couleur.value,
            type_cadre : type_cadre.value,
            enregistre: true,
            commande: true,
            prix: 300,
            id_user: createLunette.name
        });
        console.log("couleur cadre:", cadre_couleur.value);
  }


  

  const typeCadre = {
    rond: 'rond',
    rectangle: 'rectangle',
    ovale: 'ovale',
      
};

const frameColors = {
    noir: '#1D1D1B',   
    bordeau: '#7D2E2E', 
    bleu: '#115D94', 
    doré: '#FFD700'
};
const lensColors = {
    noir: '#1D1D1B',   
    bordeau: '#7D2E2E', 
    bleu: '#115D94', 
    doré: '#FFD700'
};
const branchColors = {
    noir: '#1D1D1B',   
    bordeau: '#7D2E2E', 
    bleu: '#115D94', 
    doré: '#FFD700',    
  
};







/*const saveColorsToPocketbase = async () => {
    try {
        const response = await pb.collection("lunette").post({
            cadre_couleur: cadre_couleur.value,
            verre_couleur: verre_couleur.value,
            branche_couleur: branche_couleur.value
        });

        if (response.data.success) {
            console.log('Couleurs sauvegardées avec succès');
            // Optionnel: Affichez un message à l'utilisateur.
            // alert('Couleurs sauvegardées avec succès');
        } else {
            console.error('Erreur lors de la sauvegarde des couleurs');
            // Optionnel: Informez l'utilisateur de l'erreur.
            // alert('Erreur lors de la sauvegarde des couleurs');
        }
    } catch (error) {
        console.error('Erreur lors de la liaison avec Pocketbase:', error.message);
        // Optionnel: Informez l'utilisateur de l'erreur.
        // alert('Une erreur s\'est produite lors de la liaison avec Pocketbase.');
    }
}*/



</script>



<template>
    <main style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
        <div style="display: flex; margin-top: 50px; justify-content: space-between;">
            <!-- Afficher le SVG des lunettes -->
            <svg style="margin-top: 100px; margin-left: 150px;" width="583" height="251" viewBox="0 0 583 251" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect y="109.043" width="187.913" height="114.716" fill="url(#pattern0)"/>
<rect x="168.807" y="138.543" width="207.289" height="112.256" fill="url(#pattern1)"/>
<rect x="441.834" y="53.0693" width="141.166" height="103.337" fill="url(#pattern2)"/>
<rect x="202.061" y="7.20581" width="140.858" height="103.337" fill="url(#pattern3)"/>


<path :fill="branche_couleur" d="M30.4731 55.9654C30.4731 55.9654 93.7132 48.8277 100.864 44.7398C108.014 40.6519 115.139 34.5394 125.852 32.5019C136.565 30.4643 208.481 18.2264 208.481 18.2264C208.481 18.2264 217.656 15.6763 230.919 25.3641C244.182 35.052 273.258 66.1658 281.409 65.1534C289.571 64.1283 293.646 52.9155 291.096 47.8153C288.546 42.7151 238.979 5.84751 230.406 3.43836C218.194 0.00405306 202.355 0.375676 182.967 3.43836C163.591 6.50105 34.0356 33.3476 34.0356 33.3476C34.0356 33.3476 17.21 41.1901 30.4603 55.9782L30.4731 55.9654Z" stroke="#1D1D1B" stroke-width="0.666662" stroke-miterlimit="10"/>
<g style="mix-blend-mode:multiply">
<path d="M286.009 50.3526C286.009 50.3526 285.612 58.2336 280.909 57.4903C274.54 56.4908 235.007 14.1385 221.744 16.1761C221.744 16.1761 232.675 19.6488 245.4 31.0922C253.742 38.6016 289.507 79.5955 286.009 50.3526Z" fill="#706F6F"/>
</g>

<path :fill="branche_couleur" d="M369.729 87.6753L485.752 49.5135C485.752 49.5135 514.111 42.2989 518.237 44.362C522.364 46.4252 540.932 83.549 540.932 87.6753C540.932 91.8016 537.831 105.629 533.717 106.756C530.732 107.576 526.887 106.897 524.952 101.361C523.145 96.2099 516.187 60.7006 508.972 61.0338C501.758 61.367 444.002 81.4731 444.002 81.4731C444.002 81.4731 426.985 89.7257 419.77 95.9151C412.555 102.105 378.52 110.357 378.52 110.357C378.52 110.357 366.141 100.554 369.755 87.6625L369.729 87.6753Z" stroke="#1D1D1B" stroke-width="0.666662" stroke-miterlimit="10"/>
<g style="mix-blend-mode:multiply">
<path d="M379.684 87.9506C379.684 87.9506 510.739 42.8561 517.889 46.9567C517.889 46.9567 494.567 50.1476 464.375 62.1805C434.184 74.2134 379.684 90.411 379.684 90.411V87.9506Z" fill="#706F6F"/>
</g>
<g style="mix-blend-mode:multiply">

<path d="M512.981 59.7072C512.981 59.7072 517.159 59.7072 519.363 64.1283C521.567 68.5493 531.883 95.7931 531.883 95.7931C531.883 95.7931 532.869 102.175 538.508 92.3588C538.508 92.3588 534.574 104.61 531.639 101.06C528.705 97.5103 519.119 67.3191 519.119 67.3191C519.119 67.3191 515.442 58.6821 512.981 59.7072Z" fill="#706F6F"/>
</g>

<path :fill="cadre_couleur" d="M384.771 88.8604C384.463 84.4906 372.507 82.1712 368.484 80.6591C364.46 79.147 348.365 83.1707 348.365 83.1707C332.769 79.1469 278.461 71.5991 247.283 71.5991C216.105 71.5991 205.546 86.1822 202.022 85.6824C198.498 85.1826 179.891 84.6828 171.844 83.1707C163.796 81.6586 165.308 65.0637 121.546 49.2377C77.7973 33.4117 34.0355 33.322 34.0355 33.322C16.928 39.2936 25.3728 57.0162 25.3728 57.0162L27.9998 65.1534C33.5357 67.7548 32.0236 78.6344 34.0355 94.7295C36.0474 110.825 43.5952 131.443 52.1425 144.014C60.6898 156.586 92.8801 170.669 108.975 171.169C125.07 171.668 139.154 168.657 149.713 151.549C160.272 134.455 171.344 104.276 171.344 104.276L184.415 106.288C184.415 106.288 188.144 106.686 191.271 110.248C194.397 113.81 196.947 120.538 201.01 132.43C210.697 160.75 233.2 182.727 233.2 182.727C233.2 182.727 240.376 192.249 276.052 198.951C305.628 204.512 330.77 195.798 330.77 195.798C353.478 186.61 358.488 138.184 358.488 138.184C358.488 138.184 360.833 121.14 368.496 116.847C377.941 111.542 379.094 111.158 384.784 110.03C389.41 109.12 385.091 93.2046 384.784 88.8348L384.771 88.8604ZM135.13 153.587C123.058 160.122 93.8924 162.634 75.7854 148.564C57.6784 134.48 49.1311 109.838 46.6194 80.6719C44.1077 51.5059 55.7178 48.3407 55.7178 48.3407C55.7178 48.3407 74.7859 47.4821 99.4283 53.5049C124.071 59.5406 151.225 76.6353 151.738 87.7071C152.237 98.7661 147.214 147.051 135.143 153.587H135.13ZM332.769 184.765C321.198 190.301 305.256 190.801 291.852 189.788C278.448 188.789 243.746 187.776 231.175 149.55C231.175 149.55 227.651 131.443 224.64 127.42C221.628 123.396 212.568 108.864 212.568 103.802C212.568 93.2558 221.731 87.1817 221.731 87.1817C221.731 87.1817 232.188 80.6462 245.758 80.6462C259.342 80.6462 328.733 84.1703 338.292 97.2412C347.852 110.312 347.339 125.408 348.852 137.479C350.364 149.55 344.328 179.216 332.756 184.752L332.769 184.765Z" stroke="#1D1D1B" stroke-width="0.666662" stroke-miterlimit="10"/>
<g style="mix-blend-mode:multiply">

<path d="M59.101 48.3792C59.101 48.3792 44.6077 44.3426 41.5835 60.7453C38.572 77.148 39.6228 99.9707 48.6187 124.921C57.6145 149.871 82.8208 158.828 82.8208 158.828C82.8208 158.828 103.26 166.466 122.046 163.134C131.606 161.442 136.309 156.816 139.09 149.666C139.09 149.666 120.65 170.733 78.1563 150.242C70.4676 146.539 64.5729 138.081 59.9084 129.842C50.8869 113.926 46.9143 94.3836 46.6068 80.6592C45.7995 44.317 59.0882 48.3664 59.0882 48.3664L59.101 48.3792Z" fill="#706F6F"/>
</g>
<g style="mix-blend-mode:multiply">
<path d="M221.744 84.1831C221.744 84.1831 206.546 89.168 208.058 110.056C209.57 130.944 223.653 156.406 227.677 164.044C231.701 171.681 247.796 186.098 261.366 190.211C274.937 194.325 313.278 194.952 328.31 186.585C328.31 186.585 286.252 196.477 253.998 179.857C253.998 179.857 236.891 170.63 232.034 151.947C232.034 151.947 228.177 134.903 225.575 129.021C221.398 119.615 216.118 117.347 212.594 103.815C209.583 92.2435 221.756 84.1703 221.756 84.1703L221.744 84.1831Z" fill="#706F6F"/>
</g>
<g style="mix-blend-mode:multiply">
<path d="M216.093 125.933C216.093 125.933 217.092 134.98 226.652 147.564L216.093 125.933Z" fill="#706F6F"/>
</g>
<g style="mix-blend-mode:multiply">
<path d="M196.23 93.2815C196.23 93.2815 187.452 104.866 191.219 106.224C194.987 107.583 196.23 93.2815 196.23 93.2815Z" fill="#706F6F"/>
</g>
<g style="mix-blend-mode:multiply">
<path d="M161.118 89.0142C161.118 89.0142 164.373 105.097 166.128 103.828C167.884 102.559 161.118 89.0142 161.118 89.0142Z" fill="#706F6F"/>
</g>
<g style="mix-blend-mode:multiply">
<path d="M142.819 154.958C142.819 154.958 156.441 137.159 166.423 107.313C166.423 107.313 148.739 144.783 142.819 154.958Z" fill="#706F6F"/>
</g>
<g style="mix-blend-mode:multiply">
<path d="M166.423 88.0147C166.423 88.0147 189.951 92.5254 196.217 90.7698L202.24 88.0147C202.24 88.0147 193.718 90.1804 188.695 89.5909C183.672 89.0014 166.423 88.0147 166.423 88.0147Z" fill="#706F6F"/>
</g>
<g style="mix-blend-mode:multiply">
<path d="M367.984 98.0357C367.984 98.0357 369.509 93.7685 370.624 98.0357C371.739 102.303 370.624 111.824 370.624 111.824C370.624 111.824 368.484 114.08 367.984 111.824C367.484 109.569 367.984 98.0357 367.984 98.0357Z" fill="#706F6F"/>
</g>
<g style="mix-blend-mode:multiply">
<path d="M377.762 90.3982C377.762 90.3982 371.047 93.525 367.766 93.2687C364.486 93.0124 341.83 87.1689 291.084 78.4935C291.084 78.4935 330.783 83.0811 367.766 91.1671C371.905 92.0769 377.762 90.3982 377.762 90.3982Z" fill="#706F6F"/>
</g>
<g style="mix-blend-mode:multiply">
<path d="M161.118 84.1831C161.118 84.1831 154.352 66.4477 134.797 58.1695C124.699 53.9022 114.409 50.3654 105.772 47.7641C97.6728 45.3293 91.0476 43.7274 87.4083 43.1252C79.8861 41.8693 53.3087 37.1023 50.5535 37.3586C47.7984 37.6149 42.2753 38.23 37.0085 38.4222C31.7417 38.6144 29.9861 38.4222 29.9861 38.4222C29.9861 38.4222 35.3298 40.9979 44.0309 39.614C50.8483 38.5375 66.3411 40.8698 66.3411 40.8698C66.3411 40.8698 136.796 47.2643 161.118 84.1831Z" fill="#706F6F"/>
</g>
<path opacity="0.75" :fill="verre_couleur" d="M40.0715 65.871C38.9439 73.6239 40.5841 113.81 54.7314 136.749C68.8788 159.687 102.197 164.108 107.745 164.056C113.294 164.005 131.465 165.364 139.103 152.177C145.472 141.17 155.98 96.4595 150.79 84.1959C142.768 65.2047 99.0187 53.4153 99.0187 53.4153C99.0187 53.4153 64.6115 46.4185 55.6797 47.7C55.6797 47.7 42.9036 46.4698 40.0844 65.8582L40.0715 65.871Z"/>

<path opacity="0.75" :fill="verre_couleur" d="M207.943 103.892C207.943 103.892 206.546 91.654 233.021 82.5044C248.091 77.3017 310.498 86.6435 310.498 86.6435C310.498 86.6435 334.961 91.8462 338.318 97.254C341.676 102.662 350.441 119.346 348.942 145.911C347.481 171.809 339.574 180.254 332.782 184.752C332.782 184.752 323.684 191.07 305.436 192.351C271.285 194.76 258.009 190.89 246.245 182.445C207.955 154.945 207.955 103.892 207.955 103.892H207.943Z"/>
<path d="M323.876 99.7913C323.876 99.7913 336.537 101.227 337.639 113.618C337.639 113.618 331.578 101.38 323.876 99.7913Z" fill="white"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_5_1547" transform="scale(0.00163399 0.00268817)"/>
</pattern>
<pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image1_5_1547" transform="scale(0.00148368 0.00274725)"/>
</pattern>
<pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image2_5_1547" transform="scale(0.00217865 0.00297619)"/>
</pattern>
<pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image3_5_1547" transform="scale(0.00218341 0.00296736)"/>
</pattern>

</defs>
            </svg>
      
      
      <!-- Options de personnalisation -->
      <div style="margin-left: 250px;">
        <div class="info-section">
            <h1>Lunette RAZER TaVue</h1>
        </div>


        <div style="margin-left: 200px; ">
        
            
            <p style="font-size: x-large; font-weight: 700;">Prix : 300 €</p>
            
        <div style="display: flex;">
        <p style="width: 200px;">Couleur du cadre:</p>
        <div v-for="(color) in frameColors" :key="key" class="color-option">
          <button @click="cadre_couleur = color" :style="{backgroundColor: color}" class="color-button"></button>
          </div>
          </div>    
        

        <div style="display: flex;">
        <p style="width: 200px;">Couleur des verres:</p>
        <div v-for="(color) in lensColors" :key="key" class="color-option">
          <button @click="verre_couleur = color" :style="{backgroundColor: color}" class="color-button" ></button>
          </div>
          </div>

        
        <div style="display: flex;">
        <p style="width: 200px;">Couleur des branches:</p>
        <div v-for="(color) in branchColors" :key="key" class="color-option">
          <button @click="branche_couleur = color" :style="{backgroundColor: color}" class="color-button"></button>
        </div> 
        </div>
            </div>
       

      </div>
    </div>
    <div class="btn">
    <button class="btn_enr" @click="createLunette()">
                Enregistrer
            </button>
    <button class="btn_enr" @click="createLunette()">
                Commander
            </button>
    </div>

    <div class="description">
        <h3 style="text-align: center;">Description</h3>
        <p style="margin-bottom: 50px;">Découvrez l'élégance inégalée alliée à une vision exceptionnelle avec
            notre paire de lunettes premium TaVue.
            Conçue pour les esprits sophistiqués, cette monture incarne la
            fusion parfaite du style et de la qualité.
            Fabriquée avec un souci méticuleux du détail, la monture TaVue présente un
            design intemporel qui convient à tous les visages. Le choix du matériau offre
            à la fois légèreté et robustesse pour un confort durable.</p>
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
  height: 30px;
  padding: 0.5rem;
  cursor: pointer;
  width: 200px;
  height: 45px;
}
.newsletter-input {
  flex: 1;
  padding: 0.5rem;
  
  border: none;
  height: 30px;
  width: 400px;

background: #D9D9D9;
}
.newsletter-form{
  display: flex;
  align-items: center;
  background-color: #CCC;
  
  
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
  padding-bottom: 40px;
}

  .description{
  margin: auto;
  width: 960px;
  font-size: 18px;
  }
  .btn{
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .btn_enr{
    background-color: #000;
    color: #ffffff;
    border: none;
    height: 30px;
    padding: 0.5rem;
    cursor: pointer;
    width: 100px;
    height: 45px;
    margin-bottom: 20px;
    transition: background-color 0.3s ease;
    margin-right: 20px;
  }
  .btn_enr:hover{
    background-color: #ffffff;
    color: #000;
    border: 2px solid var(--noir, #000);
  }
  .info-section {
    display: flex;
    flex-direction: column;
    align-items: normal;
    margin-bottom: 20px;
}
  .color-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    margin: 5px;
  }
  
  .color-option {
    display: inline-block;
    text-align: center;
    margin: 0 10px;
  }
  .prix-section {
    margin-top: 10px;
    margin-right: 50px;
    font-size: 32px;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.add-to-cart {
    margin-right: 50px;
    margin-bottom: 50px;
    padding: 10px 20px;
    background-color: #EFE5CE;
    border: 1px solid #000;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    color: #000;
    text-transform: uppercase;
    cursor: pointer;
}
.ligne {
    background: #C2A68B;
    width: 700px;
    height: 1px;
    flex-shrink: 0;
    margin-bottom: 10px;
}
  </style>