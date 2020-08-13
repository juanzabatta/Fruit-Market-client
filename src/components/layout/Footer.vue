<template>
  <footer id="footer">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cum modi quos vel aliquam maxime incidunt repudiandae eos culpa omnis.</p>

    <p id="developed">
      &copy; Desarrollado por Juan Zabatta &nbsp; &nbsp;-&nbsp; &nbsp; Contacto: &nbsp;
      <a
        :href="refMail"
      >{{mail}}</a>
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

<style>
/********* Footer ********/
#footer {
  width: 100%;
  height: 4.2rem;
  background-image: url("../../assets/patterns/pattern-dark.png");
  padding: 0 10%;
  overflow: hidden;
}
#footer p {
  color: white;
  text-align: center;
  font-size: 0.8rem;
  line-height: 1rem;
  margin: 0px;
  padding: 10px;
}
#footer p a {
  text-decoration: none;
  font-size: 0.8rem;
  color: white;
}
#footer p a:hover {
  color: #42b9c2;
}

/********* Developed ********/
#footer #developed {
  font-size: 0.6rem;
  padding-bottom: 4px;
}
#footer #developed a {
  font-size: 0.6rem;
}

/********* Responsive Design ********/
</style>
