<script setup>
// import éléments de vue
    import { onMounted, ref } from 'vue'
    // Import Leaflet
    import * as Leaflet from 'leaflet'
    // css leaflet
    import 'leaflet/dist/leaflet.css'

    // Canevas pour la carte
    let tileLayer = Leaflet.tileLayer
    // Initialisation de la carte sous forme d'une ref
    let map = ref()
    
    // Coordonnées de l'utilisateur
    let coordMe = ref({
        latitude : 0,
        longitude : 0
    })

    // Lorsque le composant est monté dans la vue
    onMounted( async ()=> {
        // Caractérisitques de la carte
        tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }
      );

      // Création de la carte sur la div ayant l'id = 'map'
      map = Leaflet.map('map',
        {
            zoomControl: true, // Contrôle de Zoom
            layers: [tileLayer], // Canevas pour dessiner la carte
            maxZoom: 18,        // Zoom maxi autorisé
            minZoom: 6          // Zoom mini autorisé
        })
        // projetction de la carte avec centrage aux coordonnées indiquées, avec facteur d'agrandissement
        .setView([47.495328, 6.8044455], 17)

        // Création d'un icone
        let myIcon = Leaflet.icon({
            iconUrl:    'images/marker-icon-2x.png',       // Image de l'icone
            shadowUrl:  'images/marker-shadow.png',     // Ombre de l'icone
            iconSize:   [25, 41],                       // Taille de l'icone
            shadowSize: [25, 41],                       // Taille de l'ombre de l'icone
            iconAnchor: [-10,-10],                      // Ancrage de l'icone
            shadowAnchor: [-10,-10],                    // Ancrage de l'ombre de l'icone
            popupAnchor: [0, 0]                         // Point de position de la popup si elle existe
        })

        
        let marker = Leaflet.marker([47.495328, 6.8044455], {icon: myIcon}).addTo(map)
        // Ajouter une popup / infobulle
        marker.bindPopup('Département MMI - Portes du Jura - 25200 Montbéliard')
        // Recentrage de la carte au bout de 5 secondes
        // à une autre position
        setTimeout(
            function() {
               map.panTo([47.50133850064826, 6.807621746718467])
            }, 5000
        )


        // ajout nouveau marker
        
        let marker2 = Leaflet.marker([47.49743743022477, 6.820453397194113], {icon: myIcon}).addTo(map)
        // Ajouter une popup / infobulle
        marker2.bindPopup('Optic2000 <br/> Maison de Santé - Citevie, 58 Rue Jacques Foillet, 25200 Montbéliard')

        let marker3 = Leaflet.marker([47.512850804922714, 6.798778071875896], {icon: myIcon}).addTo(map)
        // Ajouter une popup / infobulle
        marker3.bindPopup('Optical Center <br/> 41 Av. des Alliés, 25200 Montbéliard')

        let marker4 = Leaflet.marker([47.509796599403266, 6.799387559678173], {icon: myIcon}).addTo(map)
        // Ajouter une popup / infobulle
        marker4.bindPopup('Krys <br/> 44 Rue Cuvier, 25200 Montbéliard')
    
    
        let marker5 = Leaflet.marker([47.500283713114854, 6.810062315972849], {icon: myIcon}).addTo(map)
        // Ajouter une popup / infobulle
        marker5.bindPopup('Atol Montbéliard <br/> Zac Du Pied Des Gouttes, Rue Jacques Foillet C.Cial E.Leclerc, 25200 Montbéliard')
    
        let marker6 = Leaflet.marker([47.509418430994735, 6.797028861970782], {icon: myIcon}).addTo(map)
        // Ajouter une popup / infobulle
        marker6.bindPopup('ACUITIS Opticien & Audioprothésiste Montbéliard <br/> 28 Rue des Febvres, 25200 Montbéliard')
    
    
    }) // Fin onMounted

    // Fonction de détection de la géolocalisation via le navigateur
    const locMe = () => {
        // geolocalisation du navigateur 
        // => lorsque la geolocalisation a été faite 
        //          => appel d'une fonction showLocation
        navigator.geolocation.getCurrentPosition(showLocation)
    }
    // Fonction appelée par locMe pour charger les valeurs de géolocalisation
    const showLocation = (position) => {
console.log("postion", position)        
        // Recuperation latitue longitude
        coordMe.value.latitude = position.coords.latitude
        coordMe.value.longitude = position.coords.longitude
        // Recentrage de la carte sur position utilisateur
        map.panTo([coordMe.value.latitude, coordMe.value.longitude])
        // Créer un marker
        let markerMe = Leaflet.marker([coordMe.value.latitude, coordMe.value.longitude]).addTo(map) 
        // Ajouter une popup / infobulle
        markerMe.bindPopup('Votre position')
    }

</script>


<template>
    <div class="container-fluid" style="color:black; ">
        
        <div class="input-group" style="text-align: center; margin-bottom: 20px;">
             
            <button class="loc" @click="locMe()">Se localiser</button> 
        </div>
        <div class="container-fluid">
            <div id="map"> 
            </div>
        </div>
    </div>
</template>

<style scoped>
.loc{
    background-color: #000;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin-left: 10px;
    margin-top: 20px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    transition: background-color 0.3s ease;
}
.loc:hover{
    background-color: #ffffff;
    color: #000;
    border: 2px solid var(--noir, #000);
}
#map{
    margin: auto;
    width:1200px;
    height: 70vh;
}
</style>