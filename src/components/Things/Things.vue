<template>
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
</template>


<script>
  import Firebase from 'firebase'

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
