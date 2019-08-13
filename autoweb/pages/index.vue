<template>
  <b-container fluid>
    <b-row>
      <b-img src="~/assets/images/acn_logo.png" center=true height=200 alt=""></b-img>
    </b-row>
    <hr>
    <b-row>
      <b-col>
        <h4>Latest Updated Data: {{Date(Date.now())}}</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <NumberDisplay header="Temperature" :data="temperatures" color="success"></NumberDisplay>
      </b-col>
      <b-col>
        <NumberDisplay header="Humidity" :data="humidity" color="info"></NumberDisplay>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <hr />
        <b-button block variant="warning">Manual Water a Plant</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
import { fireDB } from "~/plugins/firebase.js";
import _ from "lodash";

import NumberDisplay from "~/components/NumberDisplay.vue";

export default {
  components: {
    NumberDisplay
  },
  data() {
    return {
      fireData: [],
      temperatures: "N/A",
      humidity: "N/A"
    };
  },
  mounted() {
    this.getSensorsData();
  },
  methods: {
    async getSensorsData() {
      const ref = fireDB.collection("science").doc("watering");
      ref.onSnapshot(doc => {
        this.fireData = doc.data();
        this.temperatures = _.last(_.map(_.forEach(this.fireData), "temperature"));
        this.humidity = _.last(_.map(_.forEach(this.fireData), "humidity"));
      });
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
