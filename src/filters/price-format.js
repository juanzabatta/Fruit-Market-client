const priceFormat = {};

// eslint-disable-next-line
priceFormat.install = function (vue) {
  vue.filter(
    "priceFormat",
    val => `$ ${new Intl.NumberFormat(["Cl", "id"]).format(val)}`
  );
};

export default priceFormat;
