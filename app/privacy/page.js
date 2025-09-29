import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Privacy Policy - BlueMarg Global',
  description: 'Read the privacy practices of BlueMarg Global LLP.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-base-content/70 mb-8">Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-6">
          <p>
            At BlueMarg Global LLP, accessible from <a className="link" href="https://bluemargglobal.com">https://bluemargglobal.com</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy outlines the types of information we collect, how we use it, and the rights you have concerning your personal data.
          </p>

          <h2 className="text-2xl font-semibold">Who we are</h2>
          <p>
            Our website address is: <a className="link" href="https://bluemargglobal.com">https://bluemargglobal.com</a>.
            BlueMarg Global LLP is an international export and trade solutions company based in India.
          </p>

          <h2 className="text-2xl font-semibold">Cookies</h2>
          <p>
            If you leave a comment, you may opt‑in to saving your name, email, and website in cookies for your convenience. These cookies last for one year. You can control cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold">Embedded content from other websites</h2>
          <p>
            Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content behaves as if the visitor has visited the other website directly. These third‑party websites may collect data about you, use cookies, embed third‑party tracking, and monitor your interactions with that content—especially if you’re logged in to their platform.
          </p>

          <h2 className="text-2xl font-semibold">How we use your information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To respond to your inquiries and provide support</li>
            <li>To operate and maintain our website</li>
            <li>To improve user experience and our services</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold">Your rights</h2>
          <p>
            Depending on your jurisdiction, you may have rights to access, correct, or delete your personal data. To exercise these rights, please contact us using the details below.
          </p>

          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <address className="not-italic">
            BlueMarg Global LLP
            <br />
            Email: <a className="link" href="mailto:connect@bluemargglobal.com">connect@bluemargglobal.com</a>
            <br />
            Website: <a className="link" href="https://bluemargglobal.com">https://bluemargglobal.com</a>
          </address>
        </div>
      </main>
      <Footer />
    </div>
  );
}


