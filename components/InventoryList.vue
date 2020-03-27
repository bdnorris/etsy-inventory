<template>
  <div>
    <h2>Inventory List</h2>
    <!-- {{items}} -->
    <table>
      <tr v-for="(item, index) in items" :key="index">
        <td><strong>{{ item.fields.Description }}</strong></td>
        <td>{{ item.fields.Material }}</td>
        <td>{{ item.fields.Color }}</td>
        <td>{{ item.fields["Date Shot"] }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'InventoryList',
  data() {
    return {
      items: []
    }
  },
  mounted () {
    this.getItems();
  },
  methods: {
    getItems() {
      this.items =  this.$store.state.items.myItems
    }
  },
}
</script>

<style>

</style>