export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="text-sm text-gray-500 mb-6">
        By downloading and using Dainik Nirman App, you agree to follow the terms below:
      </p>

      {/* 1 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Account Registration</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Users must provide accurate and truthful information.</li>
        <li>False or misleading information may lead to account suspension or termination.</li>
      </ul>

      {/* 2 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">2. Content Usage</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>All content belongs to respective authors/publishers.</li>
        <li>Copying or distributing without permission is strictly prohibited.</li>
      </ul>

      {/* 3 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">3. Subscription Plans</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Fees are non-refundable and non-transferable.</li>
        <li>Subscriptions unlock premium features.</li>
      </ul>

      {/* 4 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">4. Royalty Distribution</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Authors receive 80% royalty, platform retains 20%.</li>
        <li>Anthology royalties are divided among contributors.</li>
        <li>Authors must keep payment details updated.</li>
        <li>
          <strong>Note:</strong> Royalties apply only to eBooks and anthologies, not magazines.
        </li>
      </ul>

      {/* 5 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">5. Contests & Submissions</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>All content must be original.</li>
        <li>Plagiarism leads to disqualification and strict action.</li>
      </ul>

      {/* 6 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">6. Payments</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Payments are handled via secure gateways.</li>
        <li>We are not responsible for third-party payment issues.</li>
      </ul>

      {/* 7 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">7. Account Termination</h2>
      <p className="mb-4">
        Accounts violating terms may be suspended or permanently removed.
      </p>

      {/* 8 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">8. Copyright & Publishing Rights</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Copyright remains with the author.</li>
        <li>Platform has rights to publish and promote content.</li>
        <li>Authors cannot publish elsewhere without permission.</li>
      </ul>

      {/* 9 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">9. Disputes & Responsibility</h2>
      <p className="mb-4">
        Authors are fully responsible for any legal or copyright issues.
      </p>

      {/* 10 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">10. Changes to Terms</h2>
      <p className="mb-4">
        Terms may be updated anytime. Continued use means acceptance.
      </p>
    </div>
  );
}