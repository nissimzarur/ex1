const items = [
  {
    id: 3262,
    description: "Movies & Outdoors",
    name: "Awesome Steel Gloves",
    cost: 86.72,
  },
  {
    id: 2754,
    description: "Tools",
    name: "Heavy Duty Granite Chair",
    cost: 7.48,
  },
  {
    id: 9828,
    description: "Clothing & Beauty",
    name: "Incredible Copper Hat",
    cost: 81.11,
  },
  {
    id: 2701,
    description: "Computers & Outdoors",
    material: "Rubber",
    name: "Durable Wool Coat",
    cost: 66.85,
  },
  {
    id: 7387,
    description: "Electronics",
    name: "Gorgeous Wooden Pants",
    cost: 6.81,
  },
  {
    id: 8735,
    description: "Shoes",
    name: "Rustic Wool Bottle",
    cost: 45.25,
  },
  {
    id: 2591,
    description: "Beauty & Clothing",
    name: "Enormous Aluminum Gloves",
    cost: 89.63,
  },
  {
    id: 1116,
    description: "Health",
    name: "Heavy Duty Aluminum Shoes",
    cost: 4.74,
  },
  {
    id: 2616,
    description: "Home & Toys",
    name: "Rustic Wool Bag",
    cost: 44.58,
  },
  {
    id: 3210,
    description: "Jewelry",
    name: "Intelligent Leather Wallet",
    cost: 84.17,
  },
];

const users = [
  {
    id: "3215",
    first_name: "Shayla",
    last_name: "Wood",
  },
  {
    id: "6548",
    first_name: "Theresa",
    last_name: "Stanton",
  },
  {
    id: "9875",
    first_name: "Stacy",
    last_name: "Scott",
  },
  {
    id: "9658",
    first_name: "Kyle",
    last_name: "Vargas",
  },
  {
    id: "1252",
    first_name: "Precious",
    last_name: "Prince",
  },
  {
    id: "3216",
    first_name: "Shyann",
    last_name: "Ellis",
  },
  {
    id: "8547",
    first_name: "Odin",
    last_name: "Lyons",
  },
  {
    id: "9658",
    first_name: "Gianni",
    last_name: "Ramos",
  },
  {
    id: "1452",
    first_name: "Bethany",
    last_name: "Flores",
  },
  {
    id: "3652",
    first_name: "Kailey",
    last_name: "Gregory",
  },
  {
    id: "2587",
    first_name: "Donavan",
    last_name: "Serrano",
  },
];

const orders = [
  {
    id: "1",
    uid: "3215",
    date: "2021-10-11 05:41:24",
    status: "open",
  },
  {
    id: "2",
    uid: "2587",
    date: "2021-09-20 12:29:04",
    status: "closed",
  },
  {
    id: "3",
    uid: "1452",
    date: "2022-09-21 22:41:19",
    status: "closed",
  },
  {
    id: "4",
    uid: "1252",
    date: "2021-05-12 07:42:31",
    status: "closed",
  },
  {
    id: "5",
    uid: "1252",
    date: "2022-10-16 09:42:17",
    status: "open",
  },
  {
    id: "6",
    uid: "6548",
    date: "2022-06-14 15:25:47",
    status: "closed",
  },
  {
    id: "7",
    uid: "1252",
    date: "2022-08-23 03:25:53",
    status: "open",
  },
  {
    id: "8",
    uid: "1452",
    date: "2022-07-04 11:53:28",
    status: "open",
  },
  {
    id: "9",
    uid: "3215",
    date: "2022-06-12 23:17:43",
    status: "closed",
  },
];

const order_items = [
  { order_id: "2", item_id: "3262" },
  { order_id: "2", item_id: "2754" },
  { order_id: "3", item_id: "3210" },
  { order_id: "4", item_id: "2616" },
  { order_id: "5", item_id: "1116" },
  { order_id: "6", item_id: "7387" },
  { order_id: "7", item_id: "2701" },
  { order_id: "8", item_id: "7387" },
  { order_id: "9", item_id: "9828" },
  { order_id: "1", item_id: "2754" },
  { order_id: "2", item_id: "3210" },
  { order_id: "3", item_id: "3210" },
  { order_id: "4", item_id: "9828" },
  { order_id: "5", item_id: "1116" },
  { order_id: "6", item_id: "2591" },
  { order_id: "7", item_id: "1116" },
  { order_id: "8", item_id: "7387" },
  { order_id: "9", item_id: "9828" },
  { order_id: "1", item_id: "3262" },
  { order_id: "2", item_id: "2754" },
  { order_id: "3", item_id: "3210" },
  { order_id: "4", item_id: "2616" },
  { order_id: "5", item_id: "1116" },
  { order_id: "6", item_id: "7387" },
  { order_id: "7", item_id: "2701" },
  { order_id: "8", item_id: "7387" },
  { order_id: "9", item_id: "9828" },
  { order_id: "1", item_id: "2754" },
  { order_id: "2", item_id: "3210" },
  { order_id: "3", item_id: "3210" },
  { order_id: "4", item_id: "9828" },
  { order_id: "5", item_id: "1116" },
  { order_id: "6", item_id: "2591" },
  { order_id: "7", item_id: "1116" },
  { order_id: "8", item_id: "7387" },
  { order_id: "9", item_id: "9828" },
];

module.exports.items = items;
module.exports.users = users;
module.exports.orders = orders;
module.exports.order_items = order_items;
