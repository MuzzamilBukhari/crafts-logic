// app/terms-of-service/page.tsx
import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">


      {/* Hero Section */}
      <section className="bg-[linear-gradient(120deg,#0a192f,#112240,#1e3a8a,#172554,#1e40af)]
  bg-[length:400%_400%] animate-[gradientFlow_15s_ease_infinite] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-600">
            Please read these terms carefully before using our services.
          </p>
          <p className="font-semibold text-sm mt-4 opacity-90 text-green-400">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
                1. Agreement to Terms
              </h2>
              <p className="text-gray-600 mb-4">
                By accessing and using CraftsLogic&apos;s services, website, and applications (collectively, the &quot;Services&quot;), 
                you agree to be bound by these Terms of Service and all applicable laws and regulations. 
              </p>
              <p className="text-gray-600">
                If you do not agree with any of these terms, you are prohibited from using or accessing our Services. 
                The materials contained in our Services are protected by applicable copyright and trademark law.
              </p>
            </div>

            {/* Use License */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                2. Use License
              </h2>
              <p className="text-gray-600 mb-4">
                Permission is granted to temporarily access the materials (information or software) on CraftsLogic&apos;s 
                website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on CraftsLogic&apos;s website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
              </ul>
              <p className="text-gray-600">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated 
                by CraftsLogic at any time. Upon terminating your viewing of these materials or upon the termination of this license, 
                you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </div>

            {/* Services and Projects */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                3. Services and Projects
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">3.1 Project Scope</h3>
                <p className="text-gray-600">
                  All services provided by CraftsLogic will be outlined in a separate project agreement or statement of work. 
                  The scope, deliverables, timeline, and pricing will be specified in these documents.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">3.2 Revisions and Changes</h3>
                <p className="text-gray-600">
                  Clients are entitled to a reasonable number of revisions as specified in their project agreement. 
                  Additional revisions or significant changes to the project scope may incur additional charges.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">3.3 Project Delivery</h3>
                <p className="text-gray-600">
                  CraftsLogic will make every effort to meet project deadlines but cannot guarantee exact delivery dates 
                  due to the creative and technical nature of our work. Delivery timelines are estimates and may be affected 
                  by client responsiveness and project complexity.
                </p>
              </div>
            </div>

            {/* Payments and Fees */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                4. Payments and Fees
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">4.1 Payment Terms</h3>
                <p className="text-gray-600">
                  Payment terms will be specified in the project agreement. Typically, we require a deposit to begin work, 
                  with subsequent payments tied to project milestones or delivered on a monthly basis for ongoing services.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">4.2 Late Payments</h3>
                <p className="text-gray-600">
                  Payments overdue by more than 30 days may be subject to late fees of 1.5% per month or the maximum rate 
                  allowed by law. CraftsLogic reserves the right to pause work on any project with overdue payments.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">4.3 Refunds</h3>
                <p className="text-gray-600">
                  Due to the custom nature of our services, refunds are generally not provided once work has commenced. 
                  However, we will work with clients to resolve any dissatisfaction with our services.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                5. Intellectual Property
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">5.1 Client Materials</h3>
                <p className="text-gray-600">
                  Clients retain ownership of all materials, content, and intellectual property they provide to CraftsLogic 
                  for use in their projects.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">5.2 Deliverables</h3>
                <p className="text-gray-600">
                  Upon full payment, clients receive ownership of the final deliverables as specified in the project agreement. 
                  CraftsLogic retains the right to display completed work in our portfolio and marketing materials.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">5.3 CraftsLogic IP</h3>
                <p className="text-gray-600">
                  CraftsLogic retains ownership of all pre-existing intellectual property, tools, frameworks, and methodologies 
                  used in creating client deliverables, unless otherwise specified in writing.
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                6. Disclaimer
              </h2>
              <p className="text-gray-600 mb-4">
                The materials on CraftsLogic&apos;s website are provided on an &apos;as is&apos; basis. CraftsLogic makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
                implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                of intellectual property or other violation of rights.
              </p>
              <p className="text-gray-600">
                Further, CraftsLogic does not warrant or make any representations concerning the accuracy, likely results, 
                or reliability of the use of the materials on its website or otherwise relating to such materials or on any 
                sites linked to this site.
              </p>
            </div>

            {/* Limitations */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                7. Limitations
              </h2>
              <p className="text-gray-600">
                In no event shall CraftsLogic or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                to use the materials on CraftsLogic&apos;s website, even if CraftsLogic or a CraftsLogic authorized representative 
                has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            {/* Revisions and Errata */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                8. Revisions and Errata
              </h2>
              <p className="text-gray-600">
                The materials appearing on CraftsLogic&apos;s website could include technical, typographical, or photographic errors. 
                CraftsLogic does not warrant that any of the materials on its website are accurate, complete, or current. 
                CraftsLogic may make changes to the materials contained on its website at any time without notice. 
                However, CraftsLogic does not make any commitment to update the materials.
              </p>
            </div>

            {/* Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                9. Links
              </h2>
              <p className="text-gray-600">
                CraftsLogic has not reviewed all of the sites linked to its website and is not responsible for the contents 
                of any such linked site. The inclusion of any link does not imply endorsement by CraftsLogic of the site. 
                Use of any such linked website is at the user&apos;s own risk.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                10. Termination
              </h2>
              <p className="text-gray-600 mb-4">
                Either party may terminate a project agreement with written notice if the other party breaches any material 
                term of the agreement and fails to cure such breach within 30 days of receiving written notice.
              </p>
              <p className="text-gray-600">
                Upon termination, the client will pay CraftsLogic for all services rendered and expenses incurred up to 
                the termination date.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                11. Governing Law
              </h2>
              <p className="text-gray-600">
                These terms and conditions are governed by and construed in accordance with the laws of the state where 
                CraftsLogic is registered and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                12. Changes to Terms of Service
              </h2>
              <p className="text-gray-600 mb-4">
                CraftsLogic may revise these terms of service for its website at any time without notice. By using this 
                website you are agreeing to be bound by the then current version of these terms of service.
              </p>
              <p className="text-gray-600">
                We will notify users of any material changes to these terms by posting a notice on our website or 
                sending an email to registered users.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                13. Contact Information
              </h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">CraftsLogic</p>
                <p className="text-gray-600">Email: support@craftslogic.com</p>
                <p className="text-gray-600">Phone: +92 335 1848 651</p>
        
              </div>
            </div>

            {/* Acceptance Section */}
            <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-950">
              <h3 className="text-lg font-semibold text-blue-9500 mb-2">Acceptance of Terms</h3>
              <p className="text-blue-950">
                By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  )
}