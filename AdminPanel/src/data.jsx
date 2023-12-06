export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/admin/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/admin/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/admin/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Doctors",
        url: "/admin/doctors",
        icon: "user.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/admin/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Blogs",
        url: "/admin/posts",
        icon: "post2.svg",
      },
    ],
  },

];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Rashid",
    email: "rashid@gmail.com",
    amount: "3600",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Komal",
    email: "komal@gmail.com",
    amount: "3256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Babar",
    email: "babar@gmail.com",
    amount: "2998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Ayesha",
    email: "ayesha@gmail.com",
    amount: "2512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Jagu",
    email: "jagu@gmail.com",
    amount: "2134",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Ali",
    email: "ali@gmail.com",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Ahmed",
    email: "ahmed@gmail.com",
    amount: "1560",
  },
];

export const chartBoxUser = {
  color: "white",
  title: "Total Users",
  number: "120",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 10 },
    { name: "Mon", users: 15 },
    { name: "Tue", users: 40 },
    { name: "Wed", users: 50 },
    { name: "Thu", users: 65 },
    { name: "Fri", users: 80 },
    { name: "Sat", users: 40 },
  ],
};

export const chartBoxProduct = {
  color: "white",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "white",
  title: "Total Revenue",
  number: "20k",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "white",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "white",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    lastName: "Khan",
    firstName: "Imran",
    email: "khan@gmail.com",
    phone: "123 456 789",
    createdAt: "01.06.2023",
    verified: true,
  },
  {
    id: 2,

    lastName: "Nawaz",
    firstName: "Shariff",
    email: "nawaz@gmail.com",
    phone: "123 456 789",
    createdAt: "01.06.2023",
    verified: true,
  },
  {
    id: 3,

    lastName: "Zardari",
    firstName: "Asif",
    email: "zardari@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.06.2023",
    verified: true,
  },
  {
    id: 4,

    lastName: "Ali",
    firstName: "Asif",
    email: "tinhavabe@gmail.com",
    phone: "123 456 789",
    createdAt: "01.06.2023",
    verified: true,
  },
  {
    id: 5,

    lastName: "Ali",
    firstName: "Ahmed",
    email: "ahmed@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.06.2023",
  },
  {
    id: 6,

    lastName: "Khan",
    firstName: "ali",
    email: "khanali@gmail.com",
    phone: "123 456 789",
    createdAt: "01.06.2023",
    verified: true,
  },
  {
    id: 7,
    lastName: "Khan",
    firstName: "Noor",
    email: "noor@gmail.com",
    phone: "123 456 789",
    createdAt: "01.06.2023",
  },
  {
    id: 8,
    lastName: "Hassan",
    firstName: "Ahmed",
    email: "hassan@gmail.com",
    phone: "123 456 789",
    createdAt: "01.06.2023",
    verified: true,
  },
  {
    id: 9,
    lastName: "Shah",
    firstName: "Naseem",
    email: "shah@gmail.com",
    phone: "123 456 789",
    createdAt: "01.06.2023",
  },
  {
    id: 10,
    lastName: "Rauf",
    firstName: "Haris",
    email: "haris@gmail.com",
    phone: "123 456 789",
    createdAt: "01.06.2023",
    verified: true,
  },
  {
    id: 11,
    lastName: "Afridi",
    firstName: "Shaheen",
    email: "afridi@gmail.com",
    phone: "123 456 789",
    createdAt: "01.06.2023",
    verified: true,
  },
  {
    id: 12,
    lastName: "Ahmed",
    firstName: "Rizwan",
    email: "rizwan@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.06.2023",
  },
  {
    id: 13,
    lastName: "Ahmed",
    firstName: "Iftikhar",
    email: "ifti@gmail.com",
    phone: "123 456 789",
    createdAt: "01.06.2023",
  },
  {
    id: 14,
    lastName: "Ali",
    firstName: "Sara",
    email: "sara@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.06.2023",
  },
  {
    id: 15,
    lastName: "Khan",
    firstName: "Shahdab",
    email: "shahdab@gmail.com",
    phone: "123 456 789",
    createdAt: "01.06.2023",
  },
];


export const products = [
  {
    id: 1,
    title: "Pawfect Adult Cat Food",
    price: "Rs1200",
    createdAt: "01.06.2023",
    inStock: true,
  },
  {
    id: 2,
    title: "Nourvet Cat Food",
    price: "Rs799",
    createdAt: "01.06.2023",
    inStock: true,
  },
  {
    id: 3,
    title: "Feline Cat Food",
    price: "Rs999",
    createdAt: "01.06.2023",
    inStock: true,
  },
  {
    id: 4,
    title: "Fluffy Cat Food1.2kg",
    price: "Rs799",
    createdAt: "01.06.2023",
    inStock: true,
  },
  {
    id: 5,
    title: "Animal Sofa",
    price: "Rs3999",
    createdAt: "01.06.2023",
  },
  {
    id: 6,
    title: "Soft Pet Indoor House",
    price: "Rs594",
    createdAt: "01.06.2023",
    inStock: true,
  },
  {
    id: 7,
    title: "Soft Pet Indoor House",
    price: "Rs594",
    createdAt: "01.06.2023",
    inStock: true,
  },
  {
    id: 8,
    title: "Soft Pet Indoor House",
    price: "Rs594",
    createdAt: "01.06.2023",
    inStock: true,
  },
  {
    id: 9,
    title: "Soft Pet Indoor House",
    price: "Rs594",
    createdAt: "01.06.2023",
    inStock: true,
  },
  {
    id: 10,
    title: "Soft Pet Indoor House",
    price: "Rs594",
    createdAt: "01.06.2023",
    inStock: true,
  },

];



export const singleUser = {
  id: 1,
  title: "Imran Khan",
  info: {
    username: "Imrankhan12",
    fullname: "Imran Khan",
    email: "khan@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 40,
        clicks: 24,
      },
      {
        name: "Mon",
        visits: 30,
        clicks: 13,
      },
      {
        name: "Tue",
        visits: 20,
        clicks: 38,
      },
      {
        name: "Wed",
        visits: 27,
        clicks: 39,
      },
      {
        name: "Thu",
        visits: 18,
        clicks: 48,
      },
      {
        name: "Fri",
        visits: 23,
        clicks: 38,
      },
      {
        name: "Sat",
        visits: 34,
        clicks: 43,
      },
    ],
  },
  activities: [
    {
      text: "Ali purchased Pet Food",
      time: "3 day ago",
    },
    {
      text: "Khan added Cat play-house into their wishlist",
      time: "1 week ago",
    },


  ],
};
export const singleProduct = {
  id: 1,
  title: "PlayHouse",
  info: {
    productId: "Ps5SDF1156d",
    price: "Rs5000",
    export: "China",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 40,
        orders: 24,
      },
      {
        name: "Mon",
        visits: 30,
        orders: 13,
      },
      {
        name: "Tue",
        visits: 200,
        orders: 38,
      },
      {
        name: "Wed",
        visits: 27,
        orders: 39,
      },
      {
        name: "Thu",
        visits: 18,
        orders: 48,
      },
      {
        name: "Fri",
        visits: 23,
        orders: 38,
      },
      {
        name: "Sat",
        visits: 34,
        orders: 43,
      },
    ],
  },
  activities: [
    {
      text: "Ali purchased Pet Food",
      time: "3 day ago",
    },
    {
      text: "Khan added Cat play-house into their wishlist",
      time: "1 week ago",
    },

  ],
};

