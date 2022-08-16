<template>
  <div id="add-wig-btn">
    <!-- Button trigger modal -->
    <br />
    <button
      type="button"
      class="btn"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add Wig
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
    <li>
      <select name="" id="select-wig-rating" v-model="rating">
        <option value="All">All star's</option>
        <option value="5 stars">5 star</option>
        <option value="4 stars">4 star</option>
      </select>
    </li>
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
          <h5 class="modal-title" id="exampleModalLabel">Lets Add your wig</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div>
            <label for="name">Name: </label>
            <input type="name" maxlength="20" required id="add-Name" />
          </div>
          <div>
            <label for="price">Price: </label>
            <input type="number" required id="add-Price" />
          </div>
          <div>
            <label for="name">Life Span: </label>
            <input type="text" required id="add-LifeSpan" />
            <label for="name">Rating: </label>
            <input type="number" required id="add-Rating" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" id="closeBtn" data-bs-dismiss="modal">
            Close
          </button>
          <button
            type="button"
            id="addWig-Btn"
            data-bs-dismiss="modal"
            @click="$store.dispatch('addWig')"
          >
            <i class="bi bi-plus-circle"></i>
            Add Wig
          </button>
        </div>
      </div>
    </div>
  </div>

  <body>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Wig Name</th>
            <th>Wig Price</th>
            <th>Wig Description</th>
            <th>Wig Lifespan</th>
            <th>Wig Processing Time</th>
            <th>Wig Shipping Time</th>
            <th>Wig Rating</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody v-if="wigs">
          <tr v-for="wig in wigs" :key="wig.id">
            <td>{{ wig.id }}</td>
            <td><img :src="wig.images" alt="" class="img-fuild" /></td>
            <td>{{ wig.name }}</td>
            <td>R {{ wig.price }}</td>
            <td>{{ wig.description }}</td>
            <td>{{ wig.lifespan }}</td>
            <td>{{ wig["processing time"] }}</td>
            <td>{{ wig["shipping time"] }}</td>
            <td>{{ wig.rating }}</td>
            <td>
              <i
                @click="$store.dispatch('deleteWig', wig.id)"
                class="bi bi-trash-fill"
              ></i>
            </td>
            <td>
              <div id="add-wig-btn">
                <!-- Button trigger modal -->
                <br />
                <button
                  type="button"
                  class="btn"
                  data-bs-toggle="modal"
                  :data-bs-target="'#exampleModal' + wig.id"
                >
                  <i class="bi bi-pencil-square">Edit Wig</i>
                </button>
                <div
                  class="modal fade"
                  :id="'exampleModal' + wig.id"
                  tabindex="-1"
                  aria-labelledby="exampleModal1Label"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModal1Label">
                          Lets edit your wig
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
                          <label for="name">Name: </label>
                          <input
                            class="form-control mb-3"
                            type="name"
                            maxlength="20"
                            required
                            id="add-Name"
                            v-model="wig.name"
                          />
                        </div>
                        <div>
                          <label for="price">Price: </label>
                          <input
                            class="form-control mb-3"
                            type="number"
                            required
                            id="add-Price"
                            v-model="wig.price"
                          />
                        </div>
                        <div>
                          <label for="name">Life Span: </label>
                          <input
                            class="form-control mb-3"
                            type="text"
                            required
                            id="add-LifeSpan"
                            v-model="wig['lifespan']"
                          />
                        </div>
                        <div>
                          <label for="name">Rating: </label>
                          <input
                            class="form-control mb-3"
                            type="text"
                            required
                            id="add-Rating"
                            v-model="wig.rating"
                          />
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          id="closeBtn"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          id="addWig-Btn"
                          data-bs-dismiss="modal"
                          @click="$store.dispatch('addWig')"
                        >
                          <i
                            class="bi bi-pencil-square"
                            @click="$store.dispatch('updateWigs')"
                          >
                          </i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <div v-else><h1>No data to display in Admin</h1></div>
      </table>
    </div>
  </body>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      rating: "All",
    };
  },
  methods: {
    sortPrice() {
      this.$store.commit("sortPrice");
    },
  },
  mounted() {
    this.$store.dispatch("fetchAllWigs");
  },
  computed: {
    // wigs() {
    //   return this.$store.state.wigs;
    // },
    wigs() {
      return this.$store.state.wigs?.filter((wigs) => {
        let isMatch = true;
        if (!wigs.name?.toLowerCase().includes(this.search.toLowerCase())) {
          isMatch = false;
        }
        if (this.rating !== "All" && this.rating !== wigs.rating) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
};
</script>
<style scoped>
table,
th,
td {
  border: 1px solid black;
}
table {
  text-align: center;
  align-items: center;
  border: 2px solid black;
  border-collapse: collapse;
  color: black;
  margin: 0 10px;
  background: linear-gradient(
    /* 100deg, */ 100deg,
    /* yellow 0%,
    brown 25%,
    purple 50%,
    green 75%,
    orange 100% */
      rgba(57, 53, 53, 0.46),
    #a35203
  );
  /* width: 100vw; */
}
td {
  padding: 10px;
  color: white;
  font-size: 20px;
}
img {
  border-radius: 30px;
  width: 100px;
  height: 100px;
}
#addWig-Btn {
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
    border: 1px solid #ccc;
  }

  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee;
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
#add-wig-btn {
  margin: 40px 0 7px 0;
}
#sort-price {
  margin: 10px 0 10px 0;
  border-radius: 30px;
  background-color: rgba(202, 178, 116, 0.888);
  transition: 0.5s;
  padding: 10px;
}
#sort-price:hover {
  transform: scale(1.2);
}
#search {
  border-radius: 30px;
  padding: 10px 20px;
}
#select-wig-rating {
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
