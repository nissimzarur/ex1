const { items, orders, order_items, users } = require("./store.js");

const getOrderByUserId = (userId) => {
  let userOrders = [];

  orders.forEach((order) => {
    if (order.uid == userId) userOrders.push(order);
  });

  return userOrders;
};

const getItemsByOrderId = (orderId) => {
  let orderItems = [];

  order_items.forEach((order_item) => {
    if (order_item.order_id == orderId) orderItems.push(order_item.item_id);
  });

  return orderItems;
};

var usersOrders = [];
for (let uIndex = 0; uIndex < users.length; uIndex++) {
  const user = users[uIndex];
  let orders = getOrderByUserId(user.id);

  orders.forEach((order) => {
    orderItemsIds = getItemsByOrderId(order.id);

    orderItemsIds.forEach((orderItemId) => {
      items.forEach((item) => {
        if (item.id == orderItemId) {
          usersOrders.push({
            userId: user.id,
            fullName: user.first_name + " " + user.last_name,
            orderId: order.id,
            itemName: item.name,
          });
        }
      });
    });
  });
}
console.log(usersOrders);
