<template>
  <div>
    <div class="form-check form-switch" hidden="true">
      <input
        class="form-check-input"
        type="checkbox"
        id="flexSwitchCheckChecked"
        value="categories"
        checked
      />
      <label class="form-check-label" for="flexSwitchCheckChecked"
        >Categories</label
      >
    </div>
    <div class="form-check form-switch" hidden="true">
      <input
        class="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
        value="names"
      />
      <label class="form-check-label" for="flexSwitchCheckCDefault"
        >Titles</label
      >
    </div>

    <div class="searchbar">
      <input
        @click="EmptySearchInput"

        class="search_input d-lg-inline d-none"
        id="search-autocomplete"
        type="text"
        name=""
        placeholder="Search..."
        @keyup="search"
      />
      <a
        v-if="$store.state.searching === false"
        @click="searching"
        href="#"
        class="search_icon"
        id="search-icon"
        ><font-awesome-icon  :icon="[`fas`, `magnifying-glass`]" size="lg"
      /></a>
    </div>
  </div>
</template>

<script>
import store from '../../store/store.js'
export default {
  data() {
    return {
      quizes: [],
      categoryNames: [],
      titles: []
    }
  },
  methods: {
    searching() {
      
      let searchInput = document.getElementById("search-autocomplete")
      
      if (window.innerWidth < 992 ) {
        store.state.searching = !store.state.searching
        if(store.state.searching === true) {
          searchInput.classList.remove("d-none")
          searchInput.style.width = "240px"
          
        } else {
           searchInput.style.width = "240px"
        }
       
      }

      
    },
    lookAtSize() {
      let searchInput = document.getElementById("search-autocomplete")
      if(store.state.searching === true && window.innerWidth >= 991.5 ) {
        
        store.state.searching = false
        searchInput.style.width = "360px"
      } 
      if(window.innerWidth >= 991.5 && store.state.searching === false  ) {
        searchInput.style.width = "360px"
      } if(window.innerWidth < 991.5 ) {
        searchInput.style.width = "240px"
      }
    },
    EmptySearchInput() {
      let input = document.getElementById('search-autocomplete')
      input.value = ''
      this.checkSwitch()
      this.search()
    },
    checkSwitch() {
      store.state.searchIn = []
      let switches = document.getElementsByClassName('form-check-input')
      Array.from(switches).forEach((switc) => {
        if (switc.checked === true) store.state.searchIn.push(switc.value)
      })
    },

    search() {
      let value = document.getElementById('search-autocomplete').value
      value.toLowerCase()
      // reset search Results

      //Put category Names into categoryNames

      this.categoryNames = this.quizes.map(function (category) {
        return String(category.category).toLowerCase()
      })

      this.titles = this.quizes.map(function (title) {
        return String(title.title).toLowerCase()
      })

      //look for categories which names starts with search input value and save them inside searchResults

      store.state.searchResults = this.categoryNames.filter((category) => {
        if (category.startsWith(value)) {
          return category
        }
      })
      //look for titles which starts with search input value and save them inside searchResults

      this.titles.filter((title) => {
        if (title.startsWith(value)) {
          store.state.searchResults.push(title.toString())
        }
      })

      console.log(store.state.searchResults)
    }
  },
  mounted() {
    fetch(process.env.VUE_APP_ROOT_API + `api/quizes/`)
      .then((res) => res.json())
      .then((data) => (this.quizes = data))
      .catch((err) => console.log(err.message))
  },
  created() {
    window.addEventListener("resize", this.lookAtSize);
  },
 
}
</script>

<style scoped>


.searchbar {
  margin: auto;
  margin-top: auto;
  background-color: white;
  border-radius: 30px;
  padding: 10px;
  z-index: 2000;
  overflow: visible;
}

.search_input {
  color: black;
  border: 0px;
  outline: 0;
  background: none;
  width: 300px;
  caret-color: transparent;
  line-height: 40px;
  height: 20px;
}


.searchbar:hover > .search_icon {
  background: white;
  color: #e74c3c;
}

.search_icon {
  height: 40px;
  width: 40px;  
  align-items: center;
  border-radius: 50%;
  color: black;
  text-decoration: none;
}

</style>


