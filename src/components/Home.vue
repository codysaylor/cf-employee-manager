<template lang="html">
  <div id="dashboard">
    <h1>Home Page</h1>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'dashboard',
  data () {
    return {
      employees: []
    }
  },
  created () {
    db.collection('employees').orderBy('dept').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id': doc.id,
          'employee_id': doc.data().employee_id,
          'name': doc.data().name,
          'dept': doc.data().dept,
          'position': doc.data().position
        }
        this.employees.push(data)
      })
    })
  }
}
</script>

<style lang="css">
</style>
