<template>
  <div class="container">
    <div>
      <h1 class="title">
        etsy-inventory
      </h1>
      <h2 class="subtitle">
        My well-made Nuxt.js project
      </h2>
      <!-- <FormCollectionAT
        db-collection="Etsy Inventory"
        site-key="6Le-940UAAAAAAgnWJwbfxpTOA4DQ3e-gQ7akxOC"
        at-api="keyuT2yD8poDXvOPF"
        at-base-id="apptGwYXiNB8Jn1wg"
      /> -->
      <InventoryList />
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import FormCollectionAT from '~/components/FormCollectionAT'
import InventoryList from '~/components/InventoryList'

export default {
  components: {
    // FormCollectionAT
    InventoryList
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
