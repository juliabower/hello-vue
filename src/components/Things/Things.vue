<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Add New Things</h3>
      </div>
      <div class="panel-body">
        <form id="form" class="form-inline" v-on:submit.prevent="addThing">
          <div class="form-group">
            <label for="thingName">Name:</label>
            <input type="text" id="thingName" class="form-control" v-model="newThing.name">
          </div>
          <div class="form-group">
            <label for="thingDescription">Description:</label>
            <input type="text" id="thingDescription" class="form-control" v-model="newThing.description">
          </div>
          <input type="submit" class="btn btn-primary" value="Add Thing">
        </form>
      </div>
    </div>

    <div class="panel-body">
      <table class="table table-striped">
        <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="thing in things">
          <td>{{ thing.name }}</td>
          <td>{{ thing.description }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
  import Vue from 'vue'
  import Firebase from 'firebase'
  import VueFire from 'vuefire'

  Vue.use(VueFire)

  let config = {
    apiKey: 'AIzaSyBcQ5OtH1-ipfkgt9db0yQMcZvSPO7tXow',
    authDomain: 'hellovue-17bec.firebaseapp.com',
    databaseURL: 'https://hellovue-17bec.firebaseio.com',
    projectId: 'hellovue-17bec',
    storageBucket: 'hellovue-17bec.appspot.com',
    messagingSenderId: '949143367603'
  }

  let app = Firebase.initializeApp(config)
  let db = app.database()
  let thingsRef = db.ref('things')

  export default {
    name: 'things',
    data () {
      return {
        newThing: {
          name: '',
          description: ''
        }
      }
    },
    methods: {
      addThing: function () {
        thingsRef.push(this.newThing)
        this.newThing.name = ''
        this.newThing.description = ''
      }
    },
    firebase: {
      things: thingsRef
    }
  }
</script>

<style scoped>
  th {
    text-align: center;
  }
</style>
