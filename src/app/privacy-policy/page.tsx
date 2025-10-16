// app/privacy-policy/page.tsx
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[linear-gradient(120deg,#0a192f,#112240,#1e3a8a,#172554,#1e40af)]
  bg-[length:400%_400%] animate-[gradientFlow_15s_ease_infinite] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-600">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Introduction
              </h2>
              <p className="text-gray-600 mb-4">
                At CraftsLogic, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-600">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                please do not access the site.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Information We Collect
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Personal Data</h3>
                <p className="text-gray-600">
                  Personally identifiable information, such as your name, email address, and telephone number, 
                  that you voluntarily give to us when you register with the Site or when you choose to participate 
                  in various activities related to the Site.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Derivative Data</h3>
                <p className="text-gray-600">
                  Information our servers automatically collect when you access the Site, such as your IP address, 
                  your browser type, your operating system, your access times, and the pages you have viewed directly 
                  before and after accessing the Site.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Financial Data</h3>
                <p className="text-gray-600">
                  Financial information, such as data related to your payment method that we may collect when you 
                  purchase, order, return, exchange, or request information about our services from the Site.
                </p>
              </div>
            </div>

            {/* Use of Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Use of Your Information
              </h2>
              <p className="text-gray-600 mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, 
                and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Create and manage your account</li>
                <li>Process your transactions and send you related information</li>
                <li>Email you regarding your account or order</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions</li>
                <li>Generate a personal profile about you to make future visits more personalized</li>
                <li>Increase the efficiency and operation of the Site</li>
                <li>Monitor and analyze usage and trends to improve your experience</li>
                <li>Notify you of updates to the Site</li>
                <li>Offer new products, services, and/or recommendations to you</li>
                <li>Perform other business activities as needed</li>
              </ul>
            </div>

            {/* Disclosure of Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Disclosure of Your Information
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">By Law or to Protect Rights</h3>
                <p className="text-gray-600">
                  If we believe the release of information about you is necessary to respond to legal process, 
                  to investigate or remedy potential violations of our policies, or to protect the rights, property, 
                  and safety of others, we may share your information as permitted or required by any applicable law.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Third-Party Service Providers</h3>
                <p className="text-gray-600">
                  We may share your information with third parties that perform services for us or on our behalf, 
                  including payment processing, data analysis, email delivery, hosting services, customer service, 
                  and marketing assistance.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Business Transfers</h3>
                <p className="text-gray-600">
                  We may share or transfer your information in connection with, or during negotiations of, 
                  any merger, sale of company assets, financing, or acquisition of all or a portion of our 
                  business to another company.
                </p>
              </div>
            </div>

            {/* Tracking Technologies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Tracking Technologies
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Cookies and Web Beacons</h3>
                <p className="text-gray-600">
                  We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site 
                  to help customize the Site and improve your experience. Most browsers are set to accept cookies 
                  by default. You can remove or reject cookies, but be aware that such action could affect the 
                  availability and functionality of the Site.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Website Analytics</h3>
                <p className="text-gray-600">
                  We may also partner with selected third-party vendors to allow tracking technologies and 
                  remarketing services on the Site through the use of first party cookies and third-party cookies, 
                  to, among other things, analyze and track users&apos; use of the Site.
                </p>
              </div>
            </div>

            {/* Third-Party Websites */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Third-Party Websites
              </h2>
              <p className="text-gray-600 mb-4">
                The Site may contain links to third-party websites and applications of interest, including 
                advertisements and external services, that are not affiliated with us. Once you have used 
                these links to leave the Site, any information you provide to these third parties is not 
                covered by this Privacy Policy.
              </p>
              <p className="text-gray-600">
                We are not responsible for the content or privacy and security practices and policies of 
                any third parties, including other sites, services, or applications that may be linked to 
                or from the Site.
              </p>
            </div>

            {/* Security of Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Security of Your Information
              </h2>
              <p className="text-gray-600">
                We use administrative, technical, and physical security measures to help protect your personal 
                information. While we have taken reasonable steps to secure the personal information you provide 
                to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, 
                and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </div>

            {/* Policy for Children */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Policy for Children
              </h2>
              <p className="text-gray-600">
                We do not knowingly solicit information from or market to children under the age of 13. 
                If you become aware of any data we have collected from children under age 13, please contact 
                us using the contact information provided below.
              </p>
            </div>

            {/* Changes to This Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy from time to time in order to reflect, for example, 
                changes to our practices or for other operational, legal, or regulatory reasons. We will 
                notify you of any changes by posting the new Privacy Policy on this page.
              </p>
              <p className="text-gray-600">
                You are advised to review this Privacy Policy periodically for any changes. Changes to 
                this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-2">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">CraftsLogic</p>
                <p className="text-gray-600">Email: support@craftslogic.com</p>
                <p className="text-gray-600">Phone: +92 335 1848 651</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}