class User {

}

class Admin extends User {

}

class Order extends Admin {

}

class AdminOrder extends Order {

}

const AdminOrderMixin = Object.assign({}, User.prototype, Order.prototype)