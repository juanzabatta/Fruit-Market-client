<template>
  <footer id="footer">
    <p>"Planta un árbol y estarás sembrando conciencia"</p>

    <p id="developed">
      &copy; Desarrollado por
      <span>Juan Zabatta - Contacto: &nbsp;</span>
      <a :href="refMail">{{ mail }}</a>
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      refMail: "",
      mail: "",
      part1: "juan",
      part2: "zabatta",
      part3: "@",
      part4: "gmail.com"
    };
  },
  mounted() {
    this.refMail = `mailto: ${this.part1}${this.part2}${this.part3}${this.part4}`;
    this.mail = `${this.part1}${this.part2}${this.part3}${this.part4}`;
  }
};
</script>

<style lang="scss">
/********* Footer ********/
#footer {
  width: 100%;
  height: 4.2rem;
  background-image: url("../../assets/patterns/pattern-dark.png");
  padding: 0;
  overflow: hidden;

  p {
    color: white;
    text-align: center;
    font-size: 13px;
    line-height: 13px;
    height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0px;
    padding: 10px;
  }

  /********* Developed ********/
  #developed {
    font-size: 12px;
    padding-bottom: 4px;

    a,
    span {
      text-decoration: none;
      color: white;
      font-size: 12px;
    }

    a:hover {
      color: #42b9c2;
    }
  }
}

/********* Responsive Design ********/
@media screen and (max-width: 450px) {
  #footer #developed span {
    display: none;
  }
}
@media screen and (max-width: 350px) {
  #footer p {
    height: 30px;
    padding: 4px;
  }
}
</style>
