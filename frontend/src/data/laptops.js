const laptops = [
   {
  id: "LAP005",
  name: "ASUS ZenBook 14 OLED",
  brand: "ASUS",
  price: 6850,
  image: "/images/asus.png",
  images: ["/images/asus.png", "/images/asus2.png"],
  rating: 5,
  color: [
    { name: "Pine Grey", value: "pine-grey" },
    { name: "Lilac Mist", value: "lilac-mist" },
  ],
  specs: [
    {
      label: "ASUS ZenBook 14 OLED",
      cpu: `Intel Core i7-12700H
16GB RAM
1TB SSD Storage
14-inch OLED Display
Windows 11 Home
WiFi 6E and Bluetooth 5.2
Backlit Keyboard
Brand New in Box 📦`,
    },
  ],
},
  {
    id: "LAP001",
    name: "Apple 2024 MacBook Pro 14-inch M3",
    brand: "Apple",
    price: 13150,
    image: "/images/mac.jpg",
    images: ["/images/mac.jpg", "/images/mac2.png", "/images/mac3.png"],
    rating: 5,
    color: [
      { name: "Silver", value: "silver" },
      { name: "Space Gray", value: "space-gray" },
    ],
    specs: [
      {
        label: "Apple 2024 MacBook Pro 14-inch M3",
        cpu: `Apple M3 Chip
16GB RAM
1TB SSD Storage
14-inch Retina Display
macOS Sonoma
WiFi 6E and Bluetooth 5.3
Backlit Keyboard
Brand New in Box 📦`,
      },
    ],
  },
  {
    id: "LAP002",
    name: "Microsoft Surface Laptop 6",
    brand: "Microsoft",
    price: 8900,
    image: "/images/micro2.png",
    images: ["/images/micro4.png","/images/micro2.png","/images/micro3.png"],
    rating: 5,
    color: [
      { name: "Platinum", value: "platinum" },
      { name: "Matte Black", value: "matte-black" },
    ],
    specs: [
      {
        label: "Microsoft Surface Laptop 6",
        cpu: `Intel Core i5-1135G7
8GB RAM
256GB SSD
12.3-inch PixelSense Display
Windows 11 Home
WiFi and Bluetooth
Includes Surface Pen
Brand New in Box 📦`,
      },
    ],
  },
  {
    id: "LAP003",
    name: "HP Spectre x360 Convertible 14",
    brand: "HP",
    price: 7550,
    image: "/images/hp.jpg",
    images: ["/images/hp.jpg"],
    rating: 5,
    color: [
      { name: "Nightfall Black", value: "nightfall-black" },
      { name: "Poseidon Blue", value: "poseidon-blue" },
    ],
    specs: [
      {
        label: "HP Spectre x360 Convertible 14",
        cpu: `Intel Core i7-1165G7
16GB RAM
512GB SSD
14-inch FHD Touchscreen
Windows 11 Pro
WiFi 6 and Bluetooth
Convertible Design
Brand New in Box 📦`,
      },
    ],
  },
  {
    id: "LAP004",
    name: "Dell XPS 13 (2024)",
    brand: "Dell",
    price: 7200,
    image: "/images/dell.png",
    images: ["/images/dell.png","/images/dell2.png","/images/dell3.png"],
    rating: 4,
    color: [
      { name: "Silver", value: "silver" },
      { name: "Frost White", value: "frost-white" },
    ],
    specs: [
      {
        label: "Dell XPS 13 (2024)",
        cpu: `Intel Core i7-1250U
16GB RAM
512GB SSD
13.4-inch OLED Display
Windows 11 Pro
WiFi 6E and Bluetooth
Brand New in Box 📦`,
      },
    ],
  },
];

export default laptops;
