// Payment Form has all the text fields the user will interact with when adding payment info. 

<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-text-field label="NAME" color="indigo darken-4"/>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-text-field
          v-validate="require|credit_card"
          name="credit_card"
          label="CARD NUMBER"
          color="indigo darken-4"
          append-icon="credit_card"
        />
      </v-flex>
    </v-layout>
    <v-layout row justify-space-between>
      <v-flex xs5>
        <v-select :items="dates" label="EXP DATE" color="indigo darken-4"/>
      </v-flex>
      <v-flex xs2>
        <v-select :items="years" label="YEAR" color="indigo darken-4"/>
      </v-flex>
      <v-flex xs2>
        <v-text-field type="password" counter="3" label="CVC" color="indigo darken-4"/>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-checkbox :label="`Save my card for future purchases`" color="indigo darken-4"></v-checkbox>
    </v-layout>
    <v-btn dark large color="indigo darken-4">
      <span @click="submit">PAY NOW</span>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "PaymentForm",

  data() {
    return {
      // Mock data utilized for exp date && year
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
    submit() {
      this.$validator.validateAll().then(isValid => {
        if (isValid) {
          console.log(`Validation:` + true);
        } else {
          console.log(`Validation:` + false);
        }
      });
    }
  }
};
</script>

<style lang='scss'>
</style>