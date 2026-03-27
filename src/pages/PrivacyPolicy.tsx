import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function PrivacyPolicy() {
  return (
  
    <div className="container mx-auto px-4 py-10 max-w-4xl bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated: 03/01/2026</p>

      <p className="mb-6">
        <strong>Dainik Nirman</strong> ("we," "our," "us") values your privacy
        and is dedicated to safeguarding users' personal information ("you,"
        "your"). When you use our web application, we gather, use, store, and
        safeguard your information according to this policy.
      </p>

      {/* Section 1 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>

      <h3 className="font-semibold mt-3">a) Personal Information</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Profile details (author or reader information)</li>
        <li>Payment-related details (processed via third-party services)</li>
      </ul>

      <h3 className="font-semibold mt-3">b) Content Information</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Books, articles, and other content uploaded</li>
        <li>Comments and contest participation</li>
      </ul>

      <h3 className="font-semibold mt-3">c) Automatically Collected Information</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Device information</li>
        <li>App usage data</li>
        <li>IP address</li>
        <li>Log and crash data</li>
      </ul>

      {/* Section 2 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">2. How Your Data Is Used</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Provide and improve services</li>
        <li>Manage subscriptions</li>
        <li>Handle payments and purchases</li>
        <li>Enable publishing and reading features</li>
        <li>Conduct competitions and issue certificates</li>
        <li>Send updates and alerts</li>
        <li>Ensure security and prevent misuse</li>
      </ul>

      {/* Section 3 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">3. Royalties & Payments</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Authors receive royalties on book purchases</li>
        <li>Payments are handled via third-party gateways</li>
        <li>We do not store card/payment details</li>
      </ul>

      {/* Section 4 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">4. Sharing of Information</h2>
      <p className="mb-2">We do not sell or rent your personal data.</p>
      <ul className="list-disc ml-6 mb-4">
        <li>With service providers</li>
        <li>When required by law</li>
        <li>To protect platform safety</li>
      </ul>

      {/* Section 5 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
      <p className="mb-4">
        We take reasonable measures to protect your data, but no system is 100%
        secure.
      </p>

      {/* Section 6 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">6. User Content Responsibility</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Writers are responsible for their content</li>
        <li>We may remove content violating policies</li>
      </ul>

      {/* Section 7 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">7. Children’s Privacy</h2>
      <p className="mb-4">
        We do not knowingly collect data from children under 13. If found, it
        will be removed.
      </p>

      {/* Section 8 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">8. Your Rights</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Access or update your data</li>
        <li>Request account deletion</li>
        <li>Withdraw consent</li>
      </ul>

      {/* Section 9 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">9. Third-Party Services</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Payment gateways</li>
        <li>Analytics tools</li>
      </ul>

      {/* Section 10 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">10. Changes to Policy</h2>
      <p className="mb-4">
        We may update this policy. Changes will be shown with a new “Last updated” date.
      </p>

      {/* Section 11 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">11. Contact Us</h2>
      <p>Email: dainiknirman@gmail.com</p>
      <p>Phone: +91 70732 97038</p>
    </div>

  );
}