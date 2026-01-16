import { useEffect, useState } from "react";

export default function DiscountSale() {
  const [timeLeft, setTimeLeft] = useState({
    days: 29,
    hours: 1,
    mins: 30,
    secs: 22,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, mins, secs } = prev;
        if (secs > 0) secs--;
        else if (mins > 0) {
          secs = 59;
          mins--;
        } else if (hours > 0) {
          secs = 59;
          mins = 59;
          hours--;
        } else if (days > 0) {
          secs = 59;
          mins = 59;
          hours = 23;
          days--;
        }
        return { days, hours, mins, secs };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg overflow-hidden">
      {/* LEFT SECTION */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-10 text-center bg-gray-200">
        <div className="flex gap-4 mb-6">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="flex flex-col items-center">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center font-bold text-lg">
                <span>{String(value).padStart(2, "0")}</span>
              </div>
              <span className="text-xs uppercase mt-1 text-gray-600 font-semibold">
                {label}
              </span>
            </div>
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">
          HOT DISCOUNT SALES
        </h1>
        <p className="text-gray-500 mb-5 mt-2 text-sm md:text-base">
          LIMITED OFFER!
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full shadow">
          VIEW DISCOUNT GOODS
        </button>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-1/2 bg-gray-200 flex items-center justify-center">
        <img
          src="/images/discont.png"
          alt="Laptop"
          className="w-4/5 max-w-md object-cover mt-2"
        />
      </div>
    </div>
  );
}
