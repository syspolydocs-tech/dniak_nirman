import { useLocation } from "react-router";

export default function Checkout() {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <h1 className="text-center mt-10">No Product Selected</h1>;
  }

  const handlePayment = () => {
    // 👉 Yaha tu payment link ya fake success laga sakta hai
    alert("Redirecting to payment...");

    // Example (agar link use kare):
    // window.open("https://rzp.io/l/yourlink", "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto border rounded-lg p-6 shadow-md">
        
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>

        {/* Product Info */}
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-500 mb-4">Category: {product.category}</p>

        {/* Price */}
        <p className="text-3xl font-bold text-green-600 mb-6">
          ₹ {product.price}
        </p>

        {/* Button */}
        <button
          onClick={handlePayment}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Pay Now
        </button>

      </div>
    </div>
  );
}