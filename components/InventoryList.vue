<template>
  <div>
    <h2>Inventory List</h2>
    <!-- {{items}} -->
    <!-- {{ materials }} -->
    <ul>
      <li v-for="(material, index) in materials" :key="index">
        <button type="button">
          {{ material }}
        </button>
      </li>
    </ul>
    <ul class="item_list">
      <li v-for="(item, index) in items" :key="index">
        <ul>
          <li><strong>{{ item.fields.Description }}</strong></li>
          <li>{{ item.fields.Material }}</li>
          <li>{{ item.fields.Color }}</li>
          <li>{{ item.fields["Date Shot"] }}</li>
        </ul>
      </li>
    </ul>
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
  computed: {
    materials() {
      return this.$store.getters['items/materials']
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

<style lang="scss">
ul.item_list {
  list-style: none;
  margin: 0;
  padding: 0;
  & li {
    & ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      & li {
        border: 1px solid #ccc;
      }
    }
  }
}
</style>