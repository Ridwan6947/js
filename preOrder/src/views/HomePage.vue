<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Orders</ion-title>
        <ion-label class="DarkModeText" slot="secondary">Dark Mode</ion-label>
        <ion-toggle slot="secondary" ></ion-toggle>
        <ion-buttons slot="end">
          <ion-button>
            0 items selected
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="header">
        <div class="search">
          <ion-searchbar></ion-searchbar>
        </div>
        <div class="filters">
          <ion-item>
              <ion-label>
                Ordered Before
              </ion-label>
              <ion-chip slot="end">
                <ion-input type="date"></ion-input>
              </ion-chip>
          </ion-item>
          <ion-item>
              <ion-label>
                Ordered After
              </ion-label>
              <ion-chip slot="end">
                <ion-input type="date"></ion-input>
              </ion-chip>
          </ion-item>
        </div>
      </div>
      <div class="order">
        <div class="order-header">
          <div class="order-id">
            <ion-items>
              <ion-label>
                <h1>12345</h1>
                <p>Ridwan Ahmad</p>
              </ion-label>
            </ion-items>
          </div>
        </div>

        <div class="order-date">
          <ion-items>
            <p>24th June 2024</p>
          </ion-items>
        </div>
      </div>
      <div class="order-items">
          <ion-card>
            <ion-item>
              <ion-thumbnail>
                <img src="../../public/pngegg.png">
              </ion-thumbnail>
              <ion-label>
                <h3>Nike air max</h3>
                <p>Quantity: 1</p>
                <p>Price: $100</p>
                <ion-item>
                  <ion-checkbox>
                    <ion-label>Delivered</ion-label>                
                  </ion-checkbox>
                </ion-item>
              </ion-label>
            </ion-item>
          </ion-card>
          <ion-card>
            <ion-item>
              <ion-thumbnail>
                <img src="../../public/pngegg.png">
              </ion-thumbnail>
              <ion-label>
                <h3>Nike air max</h3>
                <p>Quantity: 1</p>
                <p>Price: $100</p>
                <ion-item>
                  <ion-checkbox>
                    <ion-label>Delivered</ion-label>                
                  </ion-checkbox>
                </ion-item>
              </ion-label>
            </ion-item>
          </ion-card>
          <ion-card>
            <ion-item>
              <ion-thumbnail>
                <img src="../../public/pngegg.png">
              </ion-thumbnail>
              <ion-label>
                <h3>Nike air max</h3>
                <p>Quantity: 1</p>
                <p>Price: $100</p>
                <ion-item>
                  <ion-checkbox>
                    <ion-label>Delivered</ion-label>                
                  </ion-checkbox>
                </ion-item>
              </ion-label>
            </ion-item>
          </ion-card>
          <ion-card>
            <ion-item>
              <ion-thumbnail>
                <img src="../../public/pngegg.png">
              </ion-thumbnail>
              <ion-label>
                <h3>Nike air max</h3>
                <p>Quantity: 1</p>
                <p>Price: $100</p>
                <ion-item>
                  <ion-checkbox>
                    <ion-label>Delivered</ion-label>                
                  </ion-checkbox>
                </ion-item>
              </ion-label>
            </ion-item>
          </ion-card>
          <ion-card>
            <ion-item>
              <ion-thumbnail>
                <img src="../../public/pngegg.png">
              </ion-thumbnail>
              <ion-label>
                <h3>Nike air max</h3>
                <p>Quantity: 1</p>
                <p>Price: $100</p>
                <ion-item>
                  <ion-checkbox>
                    <ion-label>Delivered</ion-label>                
                  </ion-checkbox>
                </ion-item>
              </ion-label>
            </ion-item>
          </ion-card>
          <ion-card>
            <ion-item>
              <ion-thumbnail>
                <img src="../../public/pngegg.png">
              </ion-thumbnail>
              <ion-label>
                <h3>Nike air max</h3>
                <p>Quantity: 1</p>
                <p>Price: $100</p>
                <ion-item>
                  <ion-checkbox>
                    <ion-label>Delivered</ion-label>                
                  </ion-checkbox>
                </ion-item>
              </ion-label>
            </ion-item>
          </ion-card>
        </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonButtons, 
  IonSearchbar, 
  IonLabel, 
  IonChip, 
  IonCard, 
  IonItem, 
  IonThumbnail,
  IonCheckbox,
  IonToggle,
  IonInput} from '@ionic/vue';




</script>

<style scoped>
.search {
  grid-area: search;
}

.filters {
  grid-area: filters;
}

.order-id{
  grid-area: order-id;
}

.order-date{
  grid-area: order-date;
}

.order-items{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
}

.DarkModeText{
  color: white;
  margin-right: 10px;
}
.order{
  display: grid;
  grid-template-areas: "order-id order-date";
  grid-template-columns: 1fr 1fr;
}
.header {
  display: grid;
  grid-template-areas: "search filters";
  grid-template-columns: 1fr 1fr;
}
.order-date{
  text-align: right;
  padding-right: 10px
}
</style>
