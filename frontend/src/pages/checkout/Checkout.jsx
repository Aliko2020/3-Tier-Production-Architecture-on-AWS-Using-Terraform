import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [coupon, setCoupon] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const subtotal = product ? product.price : 20;
  const shipping = 0;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    alert(`Order placed successfully with ${paymentMethod === "cod" ? "Cash on Delivery" : "PayPal"}!`);
    navigate("/thank-you");
  };

  return (
    <div className="container mx-auto px-6 max-w-lg">
    

      <div className="border rounded-lg shadow-sm p-6 bg-white space-y-6">
          <h2 className="text-lg mb-6 text-gray-700">Checkout</h2>
        {/* Order Summary */}
        <table className="w-full text-left text-gray-700 border-b border-gray-200 pb-4">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="pb-2">Product</th>
              <th className="text-right pb-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{product?.name || "Ninja Silhouette"} × 1</td>
              <td className="text-right">GHC{subtotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="pt-4">Subtotal</td>
              <td className="text-right pt-4">GHC{subtotal.toFixed(2)}</td>
            </tr>
            <tr className="border-t">
              <td className="font-semibold pt-2">Total</td>
              <td className="text-right font-semibold pt-2">GHC{total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        {/* Coupon */}
        <div className="flex flex-wrap gap-3 items-center">
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Coupon Code"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
          />
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg"
          >
            Apply
          </button>
        </div>

        {/* Payment Methods */}
        <div className="space-y-3 border-t border-gray-200 pt-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
              className="bg-green-500"
            />
            <span className="font-medium text-gray-700">Cash on delivery</span>
          </label>
          {paymentMethod === "cod" && (
            <p className="text-sm text-gray-500 ml-6">
              Pay with cash upon delivery.
            </p>
          )}

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
              className="bg-green-500"
            />
            <img
              src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
              alt="PayPal"
              className="h-5"
            />
          </label>
        </div>

        {/* Place Order */}
        <button
          onClick={handlePlaceOrder}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition"
        >
          Place order
        </button>
      </div>

      {/* Guarantee */}
      <div className="text-center mt-8">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Seal_of_Approval_Badge.svg/120px-Seal_of_Approval_Badge.svg.png"
          alt="Guarantee"
          className="mx-auto w-20 mb-2"
        />
        <p className="text-gray-600 text-sm">30 Days Full Refund Policy.</p>
      </div>
    </div>
  );
};

export default Checkout;
