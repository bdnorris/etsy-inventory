<template>
  <div>
    <h2>Inventory List</h2>
    <!-- {{items}} -->
    <!-- {{ materials }} -->
    <h3>Materials</h3>
    <ul class="control-set">
      <li v-for="(material, index) in materials" :key="index">
        <button type="button" @click="filterByMaterial(material)" :class="material === selectedMaterial ? 'button button--selected' : 'button'">
          {{ material }}
        </button>
      </li>
    </ul>
    <ul class="item_list">
      <li>
        <ul>
          <li>Description</li>
          <li>Material</li>
          <li>Color</li>
          <li>Date Shot</li>
          <li>SKU</li>
        </ul>
      </li>
      <li v-for="(item, index) in filteredItems" :key="index">
        <ul>
          <li><strong>{{ item.fields.Description }}</strong></li>
          <li>{{ item.fields.Material }}</li>
          <li>{{ item.fields.Color }}</li>
          <li>{{ item.fields["Date Shot"] }}</li>
          <li>{{ item.fields.Sku }}</li>
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
      items: [],
      filteredItems: [],
      selectedMaterial: '',
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
      this.items = this.$store.state.items.myItems
      this.filteredItems = this.$store.state.items.myItems
    },
    filterByMaterial(material) {
      this.filteredItems = this.items.filter((i) => {
        return i.fields.Material === material
      })
      this.selectedMaterial = material
    }
  },
}
</script>

<style lang="scss">
ul.control-set {
  list-style: none;
  display: flex;
  flex-flow: row wrap;
}
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
      grid-template-columns: repeat(5, 1fr);
      & li {
        border: 1px solid #ccc;
      }
    }
  }
}

.button {

}
.button--selected {
  background-color: tomato;
  color: white;
}
</style>