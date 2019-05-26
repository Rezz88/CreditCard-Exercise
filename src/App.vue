<template>
  <v-app>
    <v-content>
      <v-container>
        <PaymentDialog/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import PaymentDialog from "./components/dialog/PaymentDialog";

export default {
  name: "App",
  components: {
    PaymentDialog
  },
  data() {
    return {
      //
    };
  }
};
</script>
