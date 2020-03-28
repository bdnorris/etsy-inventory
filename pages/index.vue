<template>
  <div class="container">
    <div>
      <h1 class="title">
        etsy-inventory
      </h1>
      <h2 class="subtitle">
        My well-made Nuxt.js project
      </h2>
      <InventoryList />
    </div>
  </div>
</template>

<script>
import InventoryList from '~/components/InventoryList'

import Airtable from 'airtable'

const base = new Airtable({apiKey: 'keyuT2yD8poDXvOPF'}).base('apptGwYXiNB8Jn1wg');


export default {
  components: {
    // FormCollectionAT
    InventoryList
  },
  mounted () {
    let context = this
    base('first import').select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 1000,
      pageSize: 100,
      view: "Grid view",
      // offset: context.offset,
      }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        records.forEach(function(record) {
          context.$store.dispatch('items/add', record._rawJson)
        });
        fetchNextPage();

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      // context.fetchNextPage = fetchNextPage();

      }, function done(err) {
        console.log('done')
        if (err) { console.error(err); return; }
      });
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
