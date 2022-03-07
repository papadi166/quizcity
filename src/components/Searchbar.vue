<template>
<div class="form-check form-switch">
  <input  class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" value="categories">
  <label class="form-check-label" for="flexSwitchCheckChecked">Categories</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value="names" >
  <label class="form-check-label" for="flexSwitchCheckCDefault">Titles</label>
</div>

  <div class="searchbar ">
  
          <input @click="EmptySearchInput" class="search_input" id="search-autocomplete" type="text" name="" placeholder="Search..." @keyup="search">
          <a  href="#" class="search_icon"><font-awesome-icon :icon="[`fas`, `magnifying-glass`]" size="lg" /></a>
          <ul
      class="autocomplete-results"
      id="autocomplete-results"
    >

    </ul>
        </div>
</template>

<script>
import store from '../../store/store.js'
export default {
      data() {
    return {
      quizes: [],
      categoryNames: [],
      titles: [],
    }
  },
  methods: {
    EmptySearchInput() {
        let input = document.getElementById("search-autocomplete")
        input.value =""
        this.checkSwitch()
        this.search()
        
    },
    checkSwitch() {
      store.state.searchIn = []
      let switches = document.getElementsByClassName("form-check-input")
      Array.from(switches).forEach(switc => {
        if (switc.checked === true) store.state.searchIn.push(switc.value)
      })
    },

    search() {
      let searchResultUl = document.getElementById("autocomplete-results")
      let searchResultsLi = document.getElementsByClassName("autocomplete-result")
      let value = document.getElementById("search-autocomplete").value
      value.toLowerCase()
      // reset search Results
      Array.from(searchResultsLi).forEach(result => {
        searchResultUl.removeChild(result)
      })
      
      
      //Put category Names into categoryNames

      this.categoryNames = this.quizes.map(function (category) {
        return String(category.category).toLowerCase()
      })

      this.titles = this.quizes.map(function (title) {
        return String(title.title).toLowerCase()
      })
      
      
      //look for categories which names starts with search input value and save them inside searchResults
      
      store.state.searchResults = this.categoryNames.filter(category => {
        if (category.startsWith(value)) {
          return category
         
        }
      })
      //look for titles which starts with search input value and save them inside searchResults

      this.titles.filter(title => {
        if (title.startsWith(value)) {
          store.state.searchResults.push(title.toString())
        }
      })

      console.log(store.state.searchResults)

      //save each search Result inside SearchResults UL element
      store.state.searchResults.forEach(item  => {
        let searchResult = document.createElement("li")
        searchResult.classList.add("autocomplete-result")
        searchResult.textContent = item
        //searchResult.addEventListener("click", this.updateStore(item))
        searchResultUl.append(searchResult)
      })

      //if there is no search result append message (No results found)
      if (store.state.searchResults.length === 0) {
        let noResultsFoundMsg = document.createElement("li")
        noResultsFoundMsg.textContent = "No results Found"
        noResultsFoundMsg.classList.add("autocomplete-result")
        searchResultUl.appendChild(noResultsFoundMsg)
      }
      //console.log("store: " + store.state.searchResults[0])
      }
      
    },
  mounted() {
      fetch(process.env.VUE_APP_ROOT_API + `api/quizes/`)
       .then((res) => res.json())
       .then((data) => (this.quizes = data))
       .catch((err) => console.log(err.message))

  },

}
</script>

<style scoped>
.searchbar{
    margin-bottom: auto;
    margin-top: auto;
    height: 60px;
    background-color: white;
    border-radius: 30px;
    padding: 10px;
    z-index: 2000;
    overflow:visible ;
    }

    .search_input{
    color: black;
    border: 0px;
    outline: 0;
    background: none;
    width: 200px;
    caret-color:transparent;
    line-height: 40px;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_input{
    padding: 0 10px;
    width: 450px;
    caret-color:red;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_icon{
    background: white;
    color: #e74c3c;
    }

    .searchbar:hover > .autocomplete-results {
      visibility:visible ;
      margin: auto;
      width: 450px;
      transition: width 0s linear;
      
    }
       .searchbar:hover > .autocomplete-results > .autocomplete-result {
      visibility:visible ;
    }

    .search_icon{
    height: 40px;
    width: 40px;


    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color:black;
    text-decoration:none;
    }
 
</style>

<style>

  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    min-height: 1em;
    max-height: 6em;    
    overflow: auto;
    width: 0px;
    visibility:hidden; /* remove only from page. */
  }

  .autocomplete-result {
    list-style: none;
    text-align: center;
    padding: 4px 2px;
    cursor: pointer;
    text-decoration: none;
  }

  .autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
    text-decoration: none;
    }



</style>