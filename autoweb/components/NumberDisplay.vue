<template>
  <div class="numberDisplay">
    <b-card-group>
      <b-card
        border-variant="info"
        :header="header"
        :header-bg-variant="color"
        header-text-variant="white"
        align="center"
      >
        <b-card-text>
          <h1 v-if="header == 'Temperature'">{{ data }} &#8451</h1>
          <h1 v-else> {{data}} % </h1>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  props: ["header", "data", "color"]
};
</script>

<style>
</style>