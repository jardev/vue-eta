<template>
    <b-container>
        <b-row class="justify-content-lg-center">
            <b-col lg="6">
                <h1>Expectations</h1>
                <b-card no-body border-variant="primary" v-bind:header="'Current time is ' + formatDateTime(currentTime)" header-tag="h4">
                    <b-card-body>
                        <div class="d-flex w-100 justify-content-between">
                            <b-input-group prepend="Expect">
                                <b-form-input placeholder="What" ref="what" @keyup.enter="addETA" v-model="what"></b-form-input>
                            </b-input-group>
                            <b-input-group prepend="@">
                                <b-form-input placeholder="HH:MM" ref="when" @keyup.enter="addETA" v-model="when"></b-form-input>
                                <b-input-group-append>
                                    <b-button variant="success" @click="addETA">Add</b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </div>
                    </b-card-body>
                    <b-card-body>
                        <b-list-group>
                            <b-list-group-item href="#" class="flex-column align-items-start" v-for="eta in etas_reversed" v-bind:eta="eta" v-bind:key="eta.id">
                                <div class="d-flex w-100 justify-content-between">
                                    <p class="mb-1">
                                        <img class="rounded-circle" width="24px" height="24px" style="margin-right:5px" :src="eta.user.picture">{{ eta.user.name }}
                                    </p>
                                    <small>{{ formatDateTime(eta.created_at) }}</small>
                                </div>
                                <h5 class="mb-1">{{ eta.what }} at {{ formatDateTime(eta.when) }}</h5>
                            </b-list-group-item>
                        </b-list-group>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { db } from '../db'
var format = require('date-format');

export default {
  name: 'Dashboard',
  methods: {
      formatDateTime(milliseconds) {
          var dateTime = new Date(milliseconds);
          return format.asString('hh:mm', dateTime);
      },
      addETA() {
          if (this.what.length == 0) {
              console.log('what focus');
              this.$refs.what.focus();
          } else if (this.when.length == 0) {
              console.log('when focus');
              this.$refs.when.focus();
          } else {
                // push new eta to the list
                var whenS = this.when.split(":");
                if (whenS.length != 2) {
                    this.$refs.when.focus();
                    return;
                }
                var hour = parseInt(whenS[0]);
                var minute = parseInt(whenS[1])
                if (hour < 0 || hour > 24 || minute < 0 || minute > 59) {
                    this.$refs.when.focus();
                    return;
                }
                var whenDate = new Date(
                    this.currentTime.getFullYear(),
                    this.currentTime.getMonth(),
                    this.currentTime.getDay(),
                    hour,
                    minute
                );
                var objRef = db.ref().child('etas').push();
                objRef.set({
                    id: objRef.key,
                    what: this.what,
                    when: whenDate.getTime(),
                    created_at: this.currentTime.getTime(),
                    user: {
                        name: this.$auth.user.name,
                        picture: this.$auth.user.picture
                    }
                });
                this.what = "";
                this.when = "";
                this.$refs.what.focus();
          }
      }
  },
  mounted() {
      this.interval = setInterval(() => {
          this.currentTime = new Date();
      }, 1000)
  },
  data: function() {
      return {
          interval: "",
          when: "",
          what: "",
          currentTime: new Date(),
          etas: []
      }
  },
  firebase: function() {
      return {
        etas: db.ref('etas').orderByChild('when').limitToLast(100)
      }
  },
  computed: {
    etas_reversed: function() {
        return this.etas.slice().reverse()
    }
  }
}
</script>
