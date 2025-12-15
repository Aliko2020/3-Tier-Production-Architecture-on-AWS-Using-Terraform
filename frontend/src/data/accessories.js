const accessories = [
  {
    id: "ACC101",
    name: "Logitech Wireless Mouse",
    price: 60,
    brand: "Logitech",
    image: "/images/mouse.png",
    images: ["mouse.png"],
    color: [
      { name: "Black", value: "black" },
      { name: "White", value: "white" },
    ],
    specs: [
      { label: "Wireless Mouse", cpu: "2.4GHz Wireless, 1000 DPI, Ergonomic Design" },
    ],
    rating: 5,
  },
  {
    id: "ACC102",
    name: "Apple Magic Keyboard",
    price: 450,
    brand: "Apple",
    image: "/images/keyboard.jpeg",
    images: ["/images/key2.jpeg", "/images/key3.jpeg"],
    color: [
      { name: "Silver", value: "silver" },
      { name: "Space Gray", value: "space-gray" },
    ],
    specs: [
      { label: "Magic Keyboard", cpu: "Rechargeable, Bluetooth, Low-Profile Keys" },
    ],
    rating: 5,
  },
  {
    id: "ACC103",
    name: "Samsung USB-C Hub",
    price: 220,
    brand: "Samsung",
    image: "/images/sam1.jpg",
    images: ["/images/sam1.jpg", "/images/sam4.jpg"],
    color: [
      { name: "Gray", value: "gray" },
    ],
    specs: [
      { label: "USB-C Hub", cpu: "HDMI, 3x USB 3.0, SD Card, 5Gbps Transfer" },
    ],
    rating: 4,
  },
  {
    id: "ACC104",
    name: "Anker Power Bank 20000mAh",
    price: 300,
    brand: "Anker",
    image: "/images/power.jpg",
    images: [],
    color: [
      { name: "Black", value: "black" },
    ],
    specs: [
      { label: "Power Bank", cpu: "20000mAh, Dual USB Output, Fast Charging" },
    ],
    rating: 5,
  },
];

export default accessories;
