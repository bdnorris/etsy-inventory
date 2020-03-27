<template>
  <div>
    <h2>Inventory List</h2>
    <div v-for="(item, index) in items" :key="index">
      {{ item.dateShot }}
      {{ item.description }}
    </div>
    <button @click="fetchNextPage" type="button">
      Next Page
    </button>
  </div>
</template>

<script>
import Airtable from 'airtable'

// Airtable.configure({
//   endpointUrl: 'https://api.airtable.com',
//   apiKey: 'keyuT2yD8poDXvOPF'
// })

const base = new Airtable({apiKey: 'keyuT2yD8poDXvOPF'}).base('apptGwYXiNB8Jn1wg');

export default {
  name: 'InventoryList',
  data() {
    return {
      // base: 'apptGwYXiNB8Jn1wg'
      items: [],
      max: 10000
    }
  },
  mounted () {
    this.airTableConfigure()
    this.airTableList(this, this.max)
  },
  methods: {
    airTableConfigure() {
      // Airtable.base(this.base)
    },
    fetchNextPage() {
      base.fetchNextPage()
    },
    airTableList(context, max) {
      base('first import').select({
      // Selecting the first 3 records in Grid view:
      maxRecords: max,
      pageSize: 10,
      view: "Grid view",
      }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          let thisRecord = {
            dateShot: record.get('Date Shot'),
            description: record.get('Description')
          }
          context.items.push(thisRecord)
            // console.log('Retrieved', record.get('Date Shot'))
        });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      // fetchNextPage();
      // context.fetchNextPage = fetchNextPage();

      }, function done(err) {
        if (err) { console.error(err); return; }
      });
    }
  },
}
</script>

<style>

</style>