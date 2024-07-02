<template>
  <ion-page>
    <ion-header >
      <ion-toolbar>
        <ion-img src="../../public/pngwing.com.png" class="logo-png"></ion-img>
        <ion-buttons slot="end" >
          <ion-button>Language</ion-button>
          <ion-button>Sign in</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <div class="background">
        <div class="centre">
          <h1 class="mainTag">Unlimited movies, TV shows and more</h1>
          <h2 class="secondTag">Watch anywhere. Cancel anytime.</h2>
          <h2 class="lastTag">Ready to watch? Enter your email to create or restart your membership.</h2>
          <div class="emailAddress">
            <ion-input placeholder="Email address" class="emailInput"></ion-input>
            <ion-buttons slot="end">
              <ion-button>GET STARTED ></ion-button>
            </ion-buttons>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar, IonImg, IonButton, IonButtons, IonInput } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components:{
    IonContent, IonHeader, IonPage, IonToolbar, IonImg, IonButton, IonButtons, IonInput
  }
})
</script>

<style scoped>
.background {
  background-image: url('../../public/netflix-background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}

.logo-png {
  height: 50px;
  width: 200px;
  margin-left: 120px;
  margin-top: 20px;
}

ion-button {
  margin-right: 20px;
  background-color: red;
  border-radius: 8px;
}

.centre {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  color: white;
}

.mainTag {
  font-size: 3em;
  margin-bottom: 10px;
}

.secondTag {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.lastTag {
  font-size: 1.2em;
  margin-bottom: 15px;
}

.emailAddress {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
}

.emailInput {
  flex: 1;
  margin-right: 10px;
  max-width: 300px; 
  --background: white;
  --placeholder-color: #999;
  padding: 10px;
  border-radius: 4px;
}

ion-button{
  background-color: red;
  height: 45px;
  border-radius: 4px;
}
</style>
