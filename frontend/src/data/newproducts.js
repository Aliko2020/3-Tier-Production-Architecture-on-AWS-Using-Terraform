const newproducts = [
  {
    id: "ACC291",
    name: "Apple 2024 MacBook Pro",
    price: 13150,
    image: "/images/mac3.png",
    images: ["/images/mac3.png","/images/mac.jpg", "/images/mac2.png", "/images/mac4.png",],
    rating: 5,
    color: [
      { name: "Space Gray", value: "space-gray" },
      { name: "Silver", value: "silver" },
      { name: "Gold", value: "gold" },
    ],
    specs: [
      {
        label: "Apple 2024 MacBook Pro",
        cpu: `Apple M3 Chip
16GB RAM
1TB SSD Storage
16-inch Retina Display
macOS Sonoma
WiFi 6E and Bluetooth 5.3
Backlit Keyboard
Brand New in Box 📦`,
      },
    ],
  },
  {
    id: "ACC277",
    name: "Microsoft Surface Pro 2",
    price: 1690.0,
    image: "/images/micro2.png",
    images: ["/images/micro4.png","/images/micro2.png","/images/micro3.png",],
    rating: 5,
    color: [
      { name: "Platinum", value: "platinum" },
      { name: "Matte Black", value: "matte-black" },
    ],
    specs: [
      {
        label: "Microsoft Surface Pro 2",
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
    id: "ACC353",
    name: "HP 15.6 inch Laptop",
    price: 3492.69,
    image: "/images/hp.jpg",
    images: ["/images/hp.jpg", "/images/hp.jpg", "/images/hp.jpg"],
    rating: 5,
    color: [
      { name: "Silver", value: "silver" },
      { name: "Black", value: "black" },
    ],
    specs: [
      {
        label: "HP 15.6 inch Laptop",
        cpu: `Intel Core i5-1135G7 Processor
8GB DDR4 RAM
1TB HDD Storage
15.6" FHD Display
Windows 11 Pro
WiFi and Bluetooth
Wired Keyboard & Mouse
Color: Silver
Brand New Sealed in Box 📦`,
      },
    ],
  },
  {
    id: "ACC281",
    name: "Dell Chromebook 11 3100 11.6",
    price: 1450,
    image: "/images/dell.png",
    images: ["/images/dell.png", "/images/dell3.png", "/images/dell2.png"],
    rating: 5,
    color: [
      { name: "Blue", value: "blue" },
      { name: "Gray", value: "gray" },
    ],
    specs: [
      {
        label: "Dell Chromebook 11 3100",
        cpu: `Intel Celeron N3060
4GB RAM
32GB eMMC Storage
11.6-inch HD Display
Chrome OS
WiFi and Bluetooth
Durable Design for Students
Brand New in Box 📦`,
      },
    ],
  },
];

export default newproducts;
