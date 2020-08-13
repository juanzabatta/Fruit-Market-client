const priceFormat = {}

priceFormat.install = function (vue) {
    vue.filter('priceFormat', val => `$ ${new Intl.NumberFormat(["Cl", "id"]).format(val)}`)
}

export default priceFormat
