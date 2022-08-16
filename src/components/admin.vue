<template>
  <div id="add-product-btn">
    <!-- Button trigger modal -->
    <br />
    <button
      type="button"
      class="btn"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add Product
    </button>
  </div>
  <ul>
    <li>
      <button @click="sortPrice" id="sort-price">sort by price</button>
    </li>
    <li>
      <input
        type="text"
        id="search"
        v-model="search"
        placeholder="Search...."
      />
    </li>
    <!-- <li>
      <select name="" id="select-Product-description" v-model="description">
        <option value="All">All star's</option>
        <option value="">5 star</option>
        <option value="4 stars">4 star</option>
      </select>
    </li> -->
  </ul>
  <br />
  <br />
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Lets add your Product
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div>
            <label for="name">Title: </label>
            <input type="name" maxlength="20" required id="add-Name" />
          </div>
          <div>
            <label for="price">Price: </label>
            <input type="number" required id="add-Price" />
          </div>
          <div>
            <label for="name">Description: </label>
            <input type="text" required id="add-Description" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" id="closeBtn" data-bs-dismiss="modal">
            Close
          </button>
          <button
            type="button"
            id="addProduct-Btn"
            data-bs-dismiss="modal"
            @click="$store.dispatch('addProduct')"
          >
            <i class="bi bi-plus-circle"></i>
            Add Product
          </button>
        </div>
      </div>
    </div>
  </div>
<!-- <
      
      
      <br />
      
      <input
        type="text"
        placeholder="Please enter phoneNumber "
        name="phone"
        id="phoneNumber"
        v-model="phoneNumber"
      />
      <br />
      <div>
        
      </div>
    </form> -->
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Product Title</th>
          <th>Product Price</th>
          <th>Product Description</th>
          <!-- <th>Product Processing Time</th>
            <th>Product Shipping Time</th> -->
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody v-if="products">
        <tr
          v-for="product in products"
          :key="product.product_id"
          :product="product"
        >
          <td>{{ product.product_id }}</td>
          <td><img :src="product.img" class="img-fuild" /></td>
          <td>{{ product.title }}</td>
          <td>R {{ product.price }}</td>
          <td>{{ product.description }}</td>
          <td>
            <button
              type="button"
              class="btn"
              data-bs-toggle="modal"
              :data-bs-target="'#exampleModal' + product.product_id"
            >
              <i class="bi bi-pencil-square">Edit Product</i>
            </button>
          </td>
          <td>
            <i
              @click="$store.dispatch('deleteProduct', product.product_id)"
              class="bi bi-trash-fill"
            ></i>
          </td>
        </tr>
      </tbody>
      <!-- Button trigger modal -->
      <br />
    </table>
  </div>
  <!-- </td> -->
  <!-- </tr> -->
  <!-- <div v-else><h1>No data to display in Admin</h1></div> -->
</template>
<script>
export default {
  data() {
    return {
      search: "",
      description: "",
      //   rating: "All",
    };
  },
  methods: {
    sortPrice() {
      this.$store.commit("sortPrice");
    },
  },
  computed: {
    products() {
      return this.$store.state.prods;
    },
    // products() {
    //   return this.$store.state.prods?.filter((products) => {
    //     let isMatch = true;
    //     if (
    //       !products.title?.toLowerCase().includes(this.search.toLowerCase())
    //     ) {
    //       isMatch = false;
    //     }
    //     if (
    //       this.description !== "All" &&
    //       this.description !== products.description
    //     ) {
    //       isMatch = false;
    //     }
    //     return isMatch;
    //   });
    // },
  },
  mounted() {
    this.$store.dispatch("products");
  },
};
</script>
<style scoped>
table,
th,
td {
  border: 1px solid var(--color-secondary);
  color: var(--color-secondary);
}
table {
  text-align: center;
  align-items: center;
  border: 2px solid black;
  border-collapse: collapse;
  color: var(--color-white);
  margin: 0 10px;
  background: linear-gradient(
    /* 100deg, */ 100deg,
    /* yellow 0%,
    brown 25%,
    purple 50%,
    green 75%,
    orange 100% */
      var(--color-black),
    var(--color-dark)
  );
  /* width: 100vw; */
}
td {
  padding: 10px;
  color: var(--color-primary);
  font-size: 20px;
}
img {
  border-radius: 30px;
  width: 100px;
  height: 100px;
}
#addProduct-Btn {
  border-radius: 30px;
  font-size: 20px;
}
#closeBtn {
  border-radius: 30px;
  font-size: 20px;
}
@media screen and (max-width: 768px) {
  /* Force table to not be like tables anymore */
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }
  table {
    text-align: center;
  }
  img {
    border-radius: 10px;
    width: 70px;
    height: 70px;
  }
  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    /* position: absolute;
    top: -9999px;
    left: -9999px; */
    top: 9px;
    left: 9px;
  }

  tr {
    border: 1px solid var(--color-dark);
  }

  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid var(--color-dark);
    position: relative;
    /* padding-left: 50%; */
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }
}
#add-Product-btn {
  margin: 40px 0 7px 0;
}
#sort-price {
  margin: 10px 0 10px 0;
  border-radius: 30px;
  background-color: var(--color-gray);
  transition: 0.5s;
  padding: 10px;
}
#sort-price:hover {
  transform: scale(1.2);
}
#search {
  border-radius: 30px;
  padding: 10px 20px;
  background-color: var(--color-gray);
}
#select-Product-rating {
  border-radius: 30px;
  padding: 10px 20px;
}
ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
li {
  padding: 0 30px;
}
</style>
