import { useState } from "react";
import { useNavigate } from "react-router";
import { ProductCard } from "../components/ProductCard";
import { SortDropdown, SortOption } from "../components/SortDropdown";
import { Button } from "../components/ui/button";
import { Grid, List } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { mockBooks } from "../data/mockData";
import { useAuth } from "../contexts/AuthContext";

export default function Books() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const booksAsProducts = mockBooks.map((book) => ({
    id: book.id,
    name: book.title,
    price: book.price,
    originalPrice: book.originalPrice,
    rating: book.rating,
    reviewCount: book.reviewCount,
    image: book.image,
    category: book.category.toLowerCase(),
    isNew: book.isNew,
    isSale: book.isSale,
    salePercentage: book.salePercentage,
  }));

  const sortedProducts = [...booksAsProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  // ✅ Razorpay loader
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // ✅ Payment
  const handlePayment = async (amount: number, productName: string) => {
  const res = await loadRazorpay();

  if (!res) {
    alert("Razorpay SDK failed");
    return;
  }

  const options = {
    key: "YOUR_RAZORPAY_KEY_ID",
    amount: amount * 100,
    currency: "INR",
    name: "Book Store",
    description: productName,

    handler: function (response: any) {
      toast.success("Payment Successful ✅");

      document.body.style.overflow = "auto";
    },

    modal: {
      ondismiss: function () {
        toast.error("Payment Cancelled ❌");

        document.body.style.overflow = "auto";
      },
    },
  };

  try {
    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();

    // 🔥 force fix
    setTimeout(() => {
      document.body.classList.remove("razorpay-active");
      document.body.style.overflow = "auto";
    }, 1500);

  } catch (err) {
    console.error(err);
    toast.error("Something went wrong");
  }
};
  // ✅ Buy Now
  const handleBuyNow = (bookId: string) => {
    if (!isAuthenticated) {
      toast.error("Please login first", {
        action: {
          label: "Login",
          onClick: () => navigate("/login"),
        },
      });
      return;
    }

    const selectedBook = booksAsProducts.find((b) => b.id === bookId);
    if (!selectedBook) return;

    handlePayment(selectedBook.price, selectedBook.name);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Browse Books</h1>

      <div className="flex justify-between mb-6">
        <SortDropdown value={sortBy} onChange={setSortBy} />

        <div className="flex border rounded-md">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("grid")}
          >
            <Grid className="h-4 w-4" />
          </Button>

          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "flex flex-col gap-4"
        }
      >
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onBuyNow={handleBuyNow}
          />
        ))}
      </div>
    </div>
  );
}