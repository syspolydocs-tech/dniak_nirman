export default function RefundPolicy() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>

      <p className="mb-6">
        We aim to provide a smooth digital reading and writing experience. Since most
        of our services are digital, special rules apply to returns and refunds.
      </p>

      {/* 1 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Non-Returnable Services</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>E-books, magazines, and subscriptions are non-returnable once delivered.</li>
        <li>Contest entry fees and royalty-related services are non-refundable.</li>
      </ul>

      {/* 2 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">2. Refund Eligibility</h2>
      <p className="mb-2">Refunds are allowed only in these cases:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>You were charged but did not receive access to the product.</li>
        <li>Duplicate payment was made by mistake.</li>
        <li>Wrong digital product was delivered.</li>
      </ul>

      {/* 3 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">3. Refund Process</h2>
      <p className="mb-4">
        Eligible refunds will be processed within 7–10 working days and credited
        to your original payment method.
      </p>

      {/* 4 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">4. How to Request a Refund</h2>
      <p className="mb-4">
        You can request a refund using the in-app support form or by emailing us
        with your order ID and transaction details. Our support team will verify
        your request and update you on the refund status.
      </p>

      {/* Contact */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Support</h2>
      <p>Email: dainiknirman@gmail.com</p>
    </div>
  );
}