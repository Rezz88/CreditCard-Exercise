// Payment dialog holds the card and payment form placement as well as the eventual back button.

<template>
  <v-card hover>
    <v-layout row justify-center indigo darken-4>
      <v-flex xs4 pl-2 class="bg_img">
        <v-btn dark large icon>
          <v-icon large>keyboard_backspace</v-icon>
        </v-btn>
      </v-flex>
      <v-layout row justify-center white pb-5>
        <v-flex xs8>
          <v-card-title primary-title>
            <div>
              <span class="headline mb-0 font-weight-medium">Your payment details</span>
            </div>
          </v-card-title>
          <payment-form></payment-form>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-card>
</template>

<script>
import PaymentForm from "../form/PaymentForm";

export default {
  name: "PaymentDialog",

  components: {
    PaymentForm
  },

  data() {
    return {};
  }
};
</script>

<style lang='scss'>
.bg_img {
  width: 100%;
  background-image: linear-gradient(
      to top right,
      rgba(#ee6004, 0.7),
      rgba(white, 0.2)
    ),
    url(../../assets/Care.png);
  background-position: center;
  background-size: cover;
}
</style>