// Payment Form has all the text fields the user will interact with when adding payment info. 

<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-layout row>
        <v-flex xs12>
          <v-text-field
            :rules="[v => !!v || 'Name is required']"
            v-model="name"
            label="NAME"
            color="indigo darken-4"
          />
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <v-text-field
            :rules="[v => !!v || 'Card number is required']"
            v-model="cardNumber"
            label="CARD NUMBER"
            color="indigo darken-4"
            append-icon="credit_card"
          />
        </v-flex>
      </v-layout>
      <v-layout row justify-space-between>
        <v-flex xs5>
          <v-select
            :rules="[v => !!v || 'Date required']"
            v-model="date"
            :items="dates"
            label="EXP DATE"
            color="indigo darken-4"
          />
        </v-flex>
        <v-flex xs2>
          <v-select
            :rules="[v => !!v || 'Year required']"
            v-model="year"
            :items="years"
            label="YEAR"
            color="indigo darken-4"
          />
        </v-flex>
        <v-flex xs2>
          <v-text-field
            type="password"
            counter="3"
            v-model="cvc"
            label="CVC"
            color="indigo darken-4"
          />
        </v-flex>
      </v-layout>
      <v-layout>
        <v-checkbox :label="`Save my card for future purchases`" color="indigo darken-4"></v-checkbox>
      </v-layout>
      <v-layout row align-center>
        <v-flex>
          <v-btn dark large color="indigo darken-4">
            <span :disabled="!valid" @click="submit">PAY NOW</span>
          </v-btn>
        </v-flex>
        <v-flex pl-3>
          <h2 class="msg">{{this.message}}</h2>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
import cardValidator from "../../api/cardValidator";

export default {
  name: "PaymentForm",

  data() {
    return {
      // Mock data utilized for exp date && year
      valid: true,
      name: null,
      cardNumber: null,
      date: null,
      year: null,
      cvc: null,
      message: null,

      dates: [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "Octomber",
        "November",
        "December"
      ],
      years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
    };
  },

  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        const date = this.dates.indexOf(this.date) + 1;
        const cardFields = {
          cardNumber: this.cardNumber,
          date: date.toString(),
          year: this.year.toString(),
          cvc: this.cvc
        };
        const results = await cardValidator(cardFields);
        console.log(results);
        if (
          results.cardNumber &&
          results.month &&
          results.year &&
          results.cvv
        ) {
          this.message = "You have successfully paid";
          this.name = "✓";
          this.cardNumber = "✓";
          this.date = "-";
          this.year = "-";
          this.cvc = null;
        } else {
          this.message = "Incorrect information";
        }
      }
    }
  }
};
</script>

<style lang='scss'>
.msg {
  font-size: 25px;
  letter-spacing: 2px;
  color: #ee6004;
  text-shadow: 1px 1px 1px lightgray;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
}
</style>