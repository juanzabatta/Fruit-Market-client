<template>
  <aside id="sideBar">
    <h2>Productos</h2>

    <div>
      <form id="formSearch">
        <input id="inputSearch" type="text" name="search" placeholder="Buscar..." />
        <input id="btnSearch" type="submit" value="Buscar" />
      </form>
    </div>

    <div>
      <h3>Categorías</h3>

      <div id="category">
        <router-link
          :to="{ name: 'ProductsCategory', params: { category: 'bananas' }}"
          id="btnBabanas"
          class="button"
        >Cambures</router-link>
        <div id="subBabanas" class="subCategory" v-show="$route.params.category=== 'bananas'">
          <input type="checkbox" id="subBabanas1" value="second_checkbox" />
          <label for="subBabanas1">&nbsp;Sub Categoria 1</label>
          <br />
          <input type="checkbox" id="subBabanas2" value="second_checkbox" />
          <label for="subBabanas2">&nbsp;Sub Categoria 2</label>
          <br />
          <input type="checkbox" id="subBabanas3" value="second_checkbox" />
          <label for="subBabanas3">&nbsp;Sub Categoria 3</label>
        </div>

        <router-link
          :to="{ name: 'ProductsCategory', params: { category: 'coconuts' }}"
          id="btnCoconuts"
          class="button"
        >Cocos</router-link>
        <div id="subCoconuts" class="subCategory" v-show="$route.params.category=== 'coconuts'">
          <input type="checkbox" id="subCoconuts1" value="second_checkbox" />
          <label for="subCoconuts1">&nbsp;Sub Categoria 1</label>
          <br />
          <input type="checkbox" id="subCoconuts2" value="second_checkbox" />
          <label for="subCoconuts2">&nbsp;Sub Categoria 2</label>
        </div>

        <router-link
          :to="{ name: 'ProductsCategory', params: { category: 'apples' }}"
          id="btnApples"
          class="button"
        >Manzanas</router-link>
        <div id="subApples" class="subCategory" v-show="$route.params.category=== 'apples'">
          <input type="checkbox" id="subApples1" value="second_checkbox" />
          <label for="subApples1">&nbsp;Sub Categoria 1</label>
          <br />
          <input type="checkbox" id="subApples2" value="second_checkbox" />
          <label for="subApples2">&nbsp;Sub Categoria 2</label>
          <br />
          <input type="checkbox" id="subApples3" value="second_checkbox" />
          <label for="subApples3">&nbsp;Sub Categoria 3</label>
          <br />
          <input type="checkbox" id="subApples4" value="second_checkbox" />
          <label for="subApples4">&nbsp;Sub Categoria 4</label>
        </div>

        <router-link
          :to="{ name: 'ProductsCategory', params: { category: 'pears' }}"
          id="btnPears"
          class="button"
        >Peras</router-link>
        <div id="subPears" class="subCategory" v-show="$route.params.category=== 'pears'">
          <input type="checkbox" id="subPears1" value="second_checkbox" />
          <label for="subPears1">&nbsp;Sub Categoria 1</label>
          <br />
          <input type="checkbox" id="subPears2" value="second_checkbox" />
          <label for="subPears2">&nbsp;Sub Categoria 2</label>
        </div>

        <router-link
          :to="{ name: 'ProductsCategory', params: { category: 'pineaples' }}"
          id="btnPineaples"
          class="button"
        >Piñas</router-link>
        <div id="subPineaples" class="subCategory" v-show="$route.params.category=== 'pineaples'">
          <input type="checkbox" id="subPineaples1" value="second_checkbox" />
          <label for="subPineaples1">&nbsp;Sub Categoria 1</label>
          <br />
          <input type="checkbox" id="subPineaples2" value="second_checkbox" />
          <label for="subPineaples2">&nbsp;Sub Categoria 2</label>
          <br />
          <input type="checkbox" id="subPineaples3" value="second_checkbox" />
          <label for="subPineaples3">&nbsp;Sub Categoria 3</label>
        </div>

        <router-link
          :to="{ name: 'ProductsCategory', params: { category: 'grapes' }}"
          id="btnGrapes"
          class="button"
        >Uvas</router-link>
        <div id="subGrapes" class="subCategory" v-show="$route.params.category=== 'grapes'">
          <input type="checkbox" id="subGrapes1" value="second_checkbox" />
          <label for="subGrapes1">&nbsp;Sub Categoria 1</label>
          <br />
          <input type="checkbox" id="subGrapes2" value="second_checkbox" />
          <label for="subGrapes2">&nbsp;Sub Categoria 2</label>
          <br />
          <input type="checkbox" id="subGrapes3" value="second_checkbox" />
          <label for="subGrapes3">&nbsp;Sub Categoria 3</label>
          <br />
          <input type="checkbox" id="subGrapes4" value="second_checkbox" />
          <label for="subGrapes4">&nbsp;Sub Categoria 4</label>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
/********* Sidebar ********/
#sideBar {
  height: auto;
  min-height: 650px;
  width: 100%;
  background-color: rgb(150, 150, 150);
  border-right: 3px solid #555555;
  padding: 20px 5%;
  box-shadow: 2px 2px 4px #555555 inset, 2px -2px 4px #555555 inset;
}
#sideBar h2,
#sideBar h3 {
  margin-bottom: 20px;
  color: white;
}

/********* Form ********/
#sideBar form {
  width: 90%;
  margin: 10px auto 30px auto;
}

/********* Form Search ********/
#formSearch {
  height: 40px;
}
#formSearch #inputSearch {
  display: inline-flex;
  width: 65%;
  margin-right: 3%;
  border: none;
  border-bottom: 1px solid white;
  line-height: 30px;
  background-color: rgb(150, 150, 150);
  color: white;
}
#formSearch #inputSearch:focus {
  border-bottom: 2px solid white;
}
#formSearch #btnSearch {
  display: inline-flex;
  justify-content: center;
  width: 25%;
  background-color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  line-height: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  font-size: 0.75rem;
  font-weight: bold;
}
#formSearch #btnSearch:hover {
  background-color: #42b9c2;
  color: white;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid #555;
}

/********* Placeholder Color ********/
/* Mozilla Firefox 4 to 18 */
#formSearch #inputSearch:-moz-placeholder {
  color: gainsboro;
  opacity: 1;
}
/* Mozilla Firefox 19+ */
#formSearch #inputSearch::-moz-placeholder {
  color: gainsboro;
  opacity: 1;
}
/* WebKit, Blink, Edge */
#formSearch #inputSearch::-webkit-input-placeholder {
  color: gainsboro;
  opacity: 1;
}
/* Internet Explorer 10-11 */
#formSearch #inputSearch:-ms-input-placeholder {
  color: gainsboro;
  opacity: 1;
}

/********* Category ********/
#category {
  width: 90%;
  margin: 10px auto 30px auto;
  display: flex;
  flex-direction: column;
}
#category .button {
  width: 100%;
  height: 100%;
  padding-left: 15px;
  text-align: left;
  border: none;
  background-color: transparent;
  color: white;
  font-weight: bold;
  margin-bottom: 5px;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
}

#category #btnBabanas {
  background-color: rgb(255, 196, 0);
  color: #555555;
  border-bottom: 5px solid rgb(226, 174, 2);
}

#category #btnCoconuts {
  background-color: brown;
  border-bottom: 5px solid rgb(105, 28, 28);
}

#category #btnApples {
  background-color: red;
  border-bottom: 5px solid rgb(218, 1, 1);
}

#category #btnPears {
  background-color: green;
  border-bottom: 5px solid rgb(0, 77, 0);
}

#category #btnPineaples {
  background-color: rgb(255, 238, 0);
  color: #555555;
  border-bottom: 5px solid rgb(214, 200, 0);
}

#category #btnGrapes {
  background-color: purple;
  border-bottom: 5px solid rgb(75, 0, 75);
}

/********* Subcategory / Filters ********/
.subCategory {
  display: block;
  background-color: white;
  padding-top: 6px;
  padding-bottom: 5px;
  margin: -12px 0 5px 0;
  border-radius: 0px 0px 10px 10px;
}
#subBabanas {
  border: 5px solid rgb(226, 174, 2);
}
#subCoconuts {
  border: 5px solid rgb(105, 28, 28);
}
#subApples {
  border: 5px solid rgb(218, 1, 1);
}
#subPears {
  border: 5px solid rgb(0, 77, 0);
}
#subPineaples {
  border: 5px solid rgb(214, 200, 0);
}
#subGrapes {
  border: 5px solid rgb(75, 0, 75);
}

/********* Responsive Design ********/
</style>
