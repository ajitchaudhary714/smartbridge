import { Link, NavLink } from "react-router-dom"; // ✅ React Router
import Footer from "@/components/sections/Footer"; // ✅ Import Footer component
function page() {
  return (
    <>
      <div className="internship_div  bg-white container mx-auto pt-12   ">
        <div>
          <p className="text-center text-2xl font-bold pb-10">Privacy Policy</p>
        </div>
        <div className="">
          <div className=" text-justify">
            <h1 className="text-xl font-bold mb-4 text-center text-gray-800">
              Welcome to https://myskillwallet.ai/
            </h1>
            <p className="text-gray-900 text-base mb-3">
              Skill Wallet is an innovative product of TheSmartBridge,
              registered as SmartBridge Educational Services Private Limited.
              The Website is created, owned, and managed by SmartBridge
              Educational Services Private Limited{" "}
              <span className="font-semibold">(“Website Provider”)</span> , a
              company incorporated under the Companies Act, 2013, having its
              registered office at 6th Floor, Sundarayya Vignana Kendram,
              Technical Block, Madhava Reddy Colony, Gachibowli, Hyderabad,
              Telangana - 500032.
            </p>
            <p className="text-gray-900 text-base mb-3">
              These Terms of Use{" "}
              <span className="font-semibold"> (“Terms”) </span>constitute a
              binding agreement between you (“you” or “your”) and the Website
              Provider governing your use of the Website and/or the services
              offered through it{" "}
              <span className="font-semibold"> (“Services”) </span>. By
              accessing, browsing, or using the Website, you acknowledge and
              agree to these Terms. If you do not agree to these Terms, you must
              immediately discontinue use of the Website and any associated
              Services.
            </p>
            <p className="text-gray-900 text-base mb-6">
              The Website Provider reserves the right to amend, modify, or
              update these Terms at any time without prior notice. Any changes
              will be effective immediately upon posting on the Website.
              Continued use of the Website after such modifications signifies
              your acceptance of the updated Terms.
            </p>

            <h1 className="text-xl font-bold mb-6 ">
              User Accounts, Registration, and Services
            </h1>
            <div className="md:pl-8">
              <section className="mb-3 text-gray-900">
                <p className="text-lg font-semibold">
                  1. User Account Creation and Verification
                </p>
                <span className="pr-1 tracking-wider font-medium"> 1.1.</span>
                <span className=" px-1 ">
                  To participate in most activities on the Platform and to apply
                  for a Track, Users must register for a personal account (“User
                  Account”) through a two-step verification process. This
                  process involves verification of login credentials, including
                  but not limited to the User’s phone number, by means of a
                  one-time password (“OTP”) sent to the phone number provided
                  and/or by submitting an email address and a unique password.
                </span>
              </section>

              <section className="mb-3 text-gray-900">
                <p className="text-lg font-semibold ">2. Access to Tracks</p>
                <span className="pr-1 tracking-wider font-medium"> 2.1</span>
                <span className=" px-1 ">
                  Upon payment of the Track fees, whether in part or in full as
                  applicable, Skill Wallet shall deliver the terms of use for
                  the Track and grant access to the User. The invoice for the
                  payment shall be provided via email confirmation or within two
                  (2) months from the date of payment, which shall serve as
                  proof of delivery.
                </span>
                <div>
                  <span className="pr-1 tracking-wider font-medium">2.2.</span>
                  <span className="px-1">
                    In exceptional circumstances, where Skill Wallet grants
                    access to a Track pending payment, and the User fails to
                    remit the payment within the stipulated time period, Skill
                    Wallet reserves the right to revoke access to the Track at
                    its sole discretion without prior notice.
                  </span>
                </div>
              </section>

              <section className="mb-3 text-gray-900">
                <p className="text-lg font-semibold  ">
                  3. User Account Responsibilities
                </p>
                <span className="pr-1 tracking-wider font-medium"> 3.1.</span>
                <span className="px-1">
                  The User agrees not to divulge or share access to their User
                  Account with any third party for any reason.
                </span>
                <div>
                  {" "}
                  <span className="pr-1 tracking-wider font-medium">
                    {" "}
                    3.2.
                  </span>{" "}
                  The User shall create, use, and access only one User Account
                  and shall not access or attempt to access any User Account
                  other than their own.
                </div>
              </section>
              <section className="mb-3 text-gray-900">
                <p className="text-lg font-semibold">
                  4.Provision of Accurate Information
                </p>
                <span className="pr-1 tracking-wider font-medium"> 4.1.</span>
                <span className="px-1">
                  During the registration process, Users may be required to
                  provide additional information, including but not limited to
                  their name, email address, and other identifying details
                </span>
                <div>
                  {" "}
                  <span className="pr-1 tracking-wider font-medium">
                    {" "}
                    4.2.
                  </span>{" "}
                  The User warrants that all information provided is accurate,
                  current, and complete and agrees to update such information as
                  necessary to maintain its accuracy.
                </div>
                <div>
                  {" "}
                  <span className="pr-1 tracking-wider font-medium">
                    4.3.
                  </span>{" "}
                  Skill Wallet reserves the right to terminate the User’s access
                  to the Platform and enrolment in any Track if any information
                  provided is found to be untrue, inaccurate, outdated, or
                  incomplete.
                </div>
              </section>

              <section className="mb-3 text-gray-900">
                <p className="text-lg font-semibold  ">5.Use of User Data</p>
                <span className="pr-1 tracking-wider font-medium"> 5.1.</span>
                <span className="px-1">
                  As part of the User’s participation in the Tracks or use of
                  the Platform, Skill Wallet may collect and retain certain
                  information, including Personally Identifiable Information
                  (“PII”) and performance-related data.
                </span>
                <div>
                  {" "}
                  <span className="pr-1 tracking-wider font-medium">
                    {" "}
                    5.2.
                  </span>{" "}
                  Skill Wallet may use, store, and share this information with
                  Educational Partners or third parties for the purposes of
                  providing services, marketing, or other lawful purposes, as
                  outlined in Skill Wallet ’s Privacy Policy.
                </div>
                <div>
                  {" "}
                  <span className="pr-1 tracking-wider font-medium">
                    {" "}
                    5.3.
                  </span>{" "}
                  By registering on the Platform, the User consents to receiving
                  promotional calls and SMS notifications, including those from
                  third-party platforms, irrespective of the User’s registration
                  under Do Not Disturb (“DND”), Do Not Call (“DNC”), or National
                  Consumer Preference Register (“NCPR”) services. This consent
                  shall remain valid for a period of 365 days from the date of
                  registration.
                </div>
              </section>
              <section className="mb-3 text-gray-900">
                <p className="text-lg font-semibold  ">
                  6.Track Access and Additional Requirements
                </p>
                <div>
                  {" "}
                  <span className="pr-1 tracking-wider font-medium">6.1.</span>
                  <span className="px-1">
                    Access to Tracks is restricted to attendees or students who
                    have been explicitly granted access by Skill Wallet .
                  </span>
                </div>
                <div>
                  <span className="pr-1 tracking-wider font-medium"> 6.2.</span>{" "}
                  By registering a User Account, the User agrees to: (i)
                  Register for a Track only once and refrain from creating
                  multiple User Accounts; and (ii) Abide by these Terms and any
                  additional terms specific to the Track.
                </div>
                <div>
                  {" "}
                  <span className="pr-1 tracking-wider font-medium">
                    6.3.
                  </span>{" "}
                  By registering on the Platform, the User consents to reAs a
                  Student, the User further agrees to register with the intent
                  of completing all relevant and applicable assignments
                  associated with the Platform or Tracks into which they have
                  enrolled.
                </div>
              </section>
              <section className="mb-3 text-gray-900">
                <p className="text-lg font-semibold">
                  7. Communication via WhatsApp
                </p>
                <span className="pr-1 tracking-wider font-medium"> 7.1.</span>
                <span className=" px-1 ">
                  . The User consents to Skill Wallet contacting them via
                  WhatsApp for purposes related to the User’s registration,
                  Track participation, or other lawful communications.
                </span>
              </section>
              <section className="mb-3 text-gray-900">
                <p className="text-lg font-semibold">
                  8. Submission of Webforms
                </p>
                <span className="pr-1 tracking-wider font-medium"> 8.1.</span>
                <span className=" px-1 ">
                  By submitting a webform on the Platform, the User consents to
                  receiving promotional calls and SMS notifications from Skill W
                  allet or third-party platforms on the phone number provided.
                </span>
              </section>
            </div>
            <div>
              <span className="font-medium text-gray-900">Acknowledgment</span>{" "}
              By registering a User Account and participating in Tracks, the
              User acknowledges that they have read, understood, and agree to
              the above terms and conditions.
            </div>
            <div className="pt-6 space-y-3">
              <p className="text-xl font-bold ">
                Educational Partners and Accreditation
              </p>
              <div className="md:pl-8 space-y-3">
                <div className="space-y-1">
                  <p className="font-semibold">1. Nature of Services</p>
                  <p className="pl-3 text-gray-900">
                    Skill Wallet is not a university or a degree-granting
                    institution but operates as an education service provider.
                    Skill Wallet offers Tracks in collaboration with various
                    Indian and international universities, educational
                    institutions, governmental authorities, non-governmental
                    organizations (NGOs), corporations, and other entities
                    (collectively referred to as “Educational Partners”).
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">
                    2. No Enrollment with Educational Partners
                  </p>
                  <p className="pl-3 text-gray-900">
                    Participation in Tracks offered by Skill Wallet does not
                    constitute enrolment or registration in any program, course,
                    or institution of an Educational Partner. By using the
                    Platform or enrolling in any Track, you expressly
                    acknowledge and agree that:{" "}
                  </p>{" "}
                  <div className="pl-3 text-gray-900">
                    {" "}
                    <p>
                      {" "}
                      a. Enrolment in a Track does not register you as a student
                      of any Educational Partner or any affiliated school,
                      division, or program.
                    </p>
                    <p>
                      {" "}
                      b. Enrolment in a Track does not grant you access to the
                      resources, benefits, or privileges of any Educational
                      Partner, except as explicitly stated for the specific
                      Track.
                    </p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">
                    3. Credentials and Acknowledgments
                  </p>
                  <p className="pl-3 text-gray-900">
                    Skill Wallet may, at its sole discretion, award credentials
                    or other acknowledgments to participants who demonstrate
                    satisfactory mastery of Track material. The issuance of any
                    such credential or acknowledgment, including its format and
                    criteria, will be determined solely by Skill Wallet and may
                    vary between Tracks. Skill Wallet reserves the right not to
                    issue any credential or acknowledgment for certain Tracks.
                  </p>
                </div>
                <div className="space-y-1 text-gray-900">
                  <p className="font-semibold">4. Track Certificates</p>
                  <p className="pl-3 ">
                    Participants who fulfil the criteria and requirements set by
                    Skill Wallet and, if applicable, its Educational Partners,
                    may be awarded a certificate of successful completion
                    (“Track Certificate”). You acknowledge that:
                  </p>
                  <div className="pl-3 text-gray-900">
                    {" "}
                    <p>
                      a. A Track Certificate may not be affiliated with any
                      Educational Partner.
                    </p>
                    <p>
                      b. A Track Certificate does not substitute for courses
                      taken directly with an Educational Partner.
                    </p>{" "}
                    <p>
                      {" "}
                      c. A Track Certificate does not convey academic credit or
                      certification from any Educational Partner.
                    </p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">5. No Academic Credit</p>
                  <p className="pl-3 text-gray-900">
                    Tracks offered by Skill Wallet do not provide academic
                    credit from Skill Wallet or any Educational Partner. If you
                    are seeking academic credit or certification through an
                    Educational Partner, such credit or certification may only
                    be awarded directly by the Educational Partner in accordance
                    with its policies and procedures. You may be required to
                    register or enrol with the Educational Partner to receive
                    such credit or certification. Skill Wallet does not have any
                    authority or responsibility regarding the award of academic
                    credit or certification by an Educational Partner.
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">
                    6. Terms of Educational Partners
                  </p>
                  <p className="pl-3 text-gray-900">
                    Tracks affiliated with an Educational Partner may be subject
                    to the terms, policies, and procedures of the applicable
                    Educational Partner in addition to Skill Wallet’s Terms. You
                    acknowledge and agree that:
                  </p>
                  <div className="pl-3 text-gray-900">
                    {" "}
                    <p>
                      {" "}
                      a. Educational Partners may impose additional eligibility
                      requirements, participation criteria, or prerequisites for
                      receiving credit or certification for a Track.
                    </p>
                    <p>
                      b. Educational or student records related to your
                      participation and performance in a Track offered through
                      an Educational Partner are maintained solely by the
                      Educational Partner, including for purposes of assigning
                      credit or certification.
                    </p>
                    <p>
                      {" "}
                      c. Skill wallet does not manage or control the educational
                      or student records of any Educational Partner.
                    </p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">7. Independent Terms</p>
                  <p className="pl-3 text-gray-900">
                    If you are a student enrolled in or attending an Educational
                    Partner and are taking a Track for academic credit or
                    certification, you are subject to the Educational Partner’s
                    terms, policies, and procedures in addition to these Terms.
                    This includes but is not limited to:{" "}
                  </p>
                  <div className="pl-3 text-gray-900">
                    {" "}
                    <p>a. Eligibility to participate in the Track. </p>
                    <p>
                      b. Requirements for receiving credit or certification.
                    </p>
                    <p>
                      c. Maintenance and use of educational or student records
                      by the Educational Partner.
                    </p>{" "}
                  </div>
                </div>
              </div>
              <p>
                By enrolling in any Track or using the Platform, you acknowledge
                and agree to the above terms, including the limitations
                regarding Educational Partners and accreditation.
              </p>
            </div>
            <div className="pt-6">
              <p className="text-xl font-bold">USE/CHANGE IN SERVICE</p>
              <p className="pt-3">
                By using the Services provided on the Website, you expressly
                acknowledge and agree to be bound by these Terms of Use. Your
                continued use of the Services signifies your acceptance of any
                changes, modifications, or updates made to these Terms.
              </p>
              <p className="pt-5">
                The Website Provider reserves the absolute right, at its sole
                discretion, to:
              </p>
              <div className="md:pl-8 space-y-3 pt-5">
                <div className="space-y-1">
                  <p className="font-semibold">
                    1. Suspend, Cancel, or Discontinue Services
                  </p>
                  <p className="pl-3 text-gray-900">
                    The Website Provider may suspend, terminate, or discontinue
                    any Service, feature, or functionality offered through the
                    Website, or the Website itself, either temporarily or
                    permanently, at any time and without prior notice. This
                    includes, but is not limited to, Services provided free of
                    charge or on a subscription basis.
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">2. Modify or Alter Content</p>
                  <p className="pl-3 text-gray-900">
                    The Website Provider may, without prior notice and at its
                    sole discretion, modify, alter, update, or remove any
                    content, materials, information, or features available on
                    the Website. Such modifications may include changes to the
                    scope, design, or technical specifications of the Services.
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">3. Change Service Terms</p>
                  <p className="pl-3 text-gray-900">
                    The Website Provider may revise the terms, conditions,
                    pricing, or any other aspect of the Services offered on the
                    Website. Any changes will be effective immediately upon
                    posting unless otherwise specified.
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">
                    4. Monitoring Access and Usage
                  </p>
                  <p className="pl-3 text-gray-900">
                    The Website Provider reserves the right to monitor and track
                    access to the Website, including but not limited to, logging
                    user activities, IP addresses, and usage patterns, for
                    purposes such as ensuring compliance with these Terms of
                    Use, improving the Services, and addressing security
                    concerns.
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">
                    5. Survival of Obligations Post-Terminationt
                  </p>
                  <p className="pl-3 text-gray-900">
                    Notwithstanding any suspension, cancellation, or
                    discontinuation of the Website or Services, certain
                    provisions of these Terms of Use shall survive. These
                    include but are not limited to the clauses relating to:
                  </p>
                  <ul className="pl-6 md:pl-12 text-gray-900 list-disc py-2">
                    <li>Disclaimer of Warranties.</li>
                    <li>Limitation of Liability.</li>
                    <li>Accuracy of Information. .</li>
                    <li>Indemnification.</li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">6. Notice to Users</p>
                  <p className="pl-3 text-gray-900">
                    While the Website Provider strives to notify users of
                    significant changes, there is no obligation to provide
                    advance notice of any modifications, suspensions, or
                    terminations. Users are encouraged to regularly review the
                    Terms of Use and any applicable updates to remain informed
                    of the current terms governing their use of the Website and
                    Services.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 text-gray-900">
              <p className="text-xl font-bold">ELIGIBILITY</p>
              <p className="pt-3">
                By accessing, registering on the Website, and using the
                Services, you expressly represent, warrant, and agree that:
              </p>
              <p className="pt-5">
                The Website Provider reserves the absolute right, at its sole
                discretion, to:
              </p>
              <div className="md:pl-8 space-y-3 pt-5">
                <div className="space-y-1">
                  <p className="font-semibold">1. Legal Age Requirement:</p>
                  <ul className="pl-6 md:pl-12 text-gray-900 list-disc">
                    <li>
                      You are a major, having attained the age of eighteen (18)
                      years at the time of accessing and using the Website and
                      its Services.
                    </li>
                    <li>
                      You are legally capable of entering into a binding
                      contract under the laws applicable in India or the laws of
                      the jurisdiction in which you reside.
                    </li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">2. Competence to Contract:</p>
                  <ul className="pl-6 md:pl-12 text-gray-900 list-disc ">
                    <li>
                      You are not disqualified from contracting under any
                      applicable law, including but not limited to the Indian
                      Contract Act, 1872, or any equivalent law in your
                      jurisdiction.
                    </li>
                    <li>
                      You have the requisite legal authority, capacity, and
                      competency to agree to these Terms of Use and to use the
                      Website and Services.
                    </li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">
                    3. No Legal or Contractual Restrictions:
                  </p>
                  <ul className="pl-6 md:pl-12 text-gray-900 list-disc ">
                    <li>
                      You are not barred or restricted by any law, regulation,
                      or court order in any jurisdiction from using the Website
                      or availing the Services.
                    </li>
                    <li>
                      You are not subject to any contractual obligation or
                      agreement that prohibits or limits your right to accept
                      these Terms of Use or use the Website and Services.
                    </li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">
                    4. Parental or Guardian Consent for Minors:
                  </p>
                  <ul className="pl-6 md:pl-12 text-gray-900 list-disc">
                    <li>
                      If you are under the age of eighteen (18) years or the age
                      of majority in your jurisdiction, you must immediately
                      cease using the Website and its Services.
                    </li>
                    <li>
                      Any use of the Website or Services by a minor is strictly
                      prohibited unless done under the direct supervision and
                      with the explicit consent of a parent or legal guardian.
                      In such cases, the parent or legal guardian assumes full
                      responsibility for ensuring compliance with these Terms of
                      Use.
                    </li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">
                    5. Accuracy of Representations:
                  </p>
                  <ul className="pl-6 md:pl-12 text-gray-900 list-disc ">
                    <li>
                      By registering on the Website and using the Services, you
                      affirm that all information provided by you during
                      registration or at any other time is true, accurate,
                      current, and complete.
                    </li>
                    <li>
                      The Website Provider reserves the right to terminate your
                      access to the Website or Services without notice if it is
                      discovered that you have provided false, inaccurate, or
                      misleading information regarding your eligibility.
                    </li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">
                    6. Compliance with Local Laws:
                  </p>
                  <ul className="pl-6 md:pl-12 text-gray-900 list-disc">
                    <li>
                      You are responsible for ensuring that your use of the
                      Website and its Services complies with all applicable laws
                      and regulations in your jurisdiction.
                    </li>
                    <li>
                      If access to the Website or Services is prohibited in your
                      jurisdiction, you agree not to use the Website or
                      Services.
                    </li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">
                    7. Termination of Access for Ineligible Users:
                  </p>
                  <ul className="pl-6 md:pl-12 text-gray-900 list-disc">
                    <li>
                      The Website Provider reserves the right to refuse access
                      to the Website or Services, suspend, or terminate accounts
                      without prior notice if it is determined that you are
                      ineligible under these Terms of Use.
                    </li>
                    <li>
                      Such termination shall not absolve you of any liabilities
                      incurred prior to the termination or any obligations
                      arising out of your use of the Website and Services.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <h1 className="text-xl font-bold text-gray-800 mb-4">
                User Access and Consent to Use of Data
              </h1>
              <p className="text-gray-900 mb-6">
                By registering and using the Website, you agree to the following
                terms and conditions regarding user access, data consent, and
                responsibilities associated with your account:
              </p>

              <h2 className=" font-semibold text-gray-900 mb-3">
                1. Registration Requirements
              </h2>
              <p className="text-gray-900">
                To register and access the Services provided on the Website, you
                are required to provide accurate and complete information,
                including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-900 mt-2 pl-6 md:pl-12 mb-6">
                <li>Name</li>
                <li>Email ID</li>
                <li>Phone/Mobile Number</li>
                <li>Address</li>
                <li>
                  Education Details (e.g., qualifications, graduation year, and
                  percentile)
                </li>
                <li>Professional Experience</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                2. Accuracy and Maintenance of Registration Data
              </h2>
              <p className="text-gray-900">You agree to:</p>
              <ul className="list-none  list-inside text-gray-900 mt-2 mb-4">
                <li>
                  a. Provide true, accurate, current, and complete information
                  during the registration process ("Registration Data").
                </li>
                <li>
                  b. Promptly update your Registration Data to ensure it remains
                  true, accurate, current, and complete.
                </li>
              </ul>
              <p className="text-gray-900 mb-6">
                If the Website Provider determines or reasonably suspects that
                any information you provided is untrue, inaccurate, outdated, or
                incomplete, it reserves the right to:
              </p>
              <ul className="list-disc list-inside text-gray-900 mb-4 pl-6 md:pl-12">
                <li>Suspend or terminate your account.</li>
                <li>
                  Refuse any current or future use of the Website or any portion
                  thereof.
                </li>
              </ul>
            </div>
            <div className="pt-6">
              {/* Section 3: User ID and Password */}
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                3. User ID and Password
              </h2>
              <p className="text-gray-900 mb-4">
                As part of the registration process, you will select a User ID
                and password. You agree to adhere to the following guidelines:
              </p>
              <ul className="list-disc pl-6 md:pl-12 list-inside text-gray-900 mb-4">
                <li>
                  Do not choose or use a User ID of another person already
                  registered on the Website to impersonate them.
                </li>
                <li>
                  Do not use a User ID in which another person has proprietary
                  rights without explicit authorization.
                </li>
                <li>
                  Do not select a User ID that is offensive, vulgar, or
                  misleading.
                </li>
                <li>
                  Do not use pseudonyms or aliases not directly associated with
                  your identity.
                </li>
              </ul>
              <p className="text-gray-900 mb-6">
                You are solely responsible for maintaining the confidentiality
                of your User ID and password.
              </p>

              {/* Section 4: Account Responsibility */}
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                4. Account Responsibility
              </h2>
              <p className="text-gray-900 mb-2">
                a. You are solely responsible for all activities conducted
                through your account, whether by you or any third party
                authorized by you. You agree not to use the Website to:
              </p>
              <p className="text-gray-900">
                b. You agree not to use the Website to:
              </p>
              <ul className="pl-6 md:pl-12 list-disc list-inside text-gray-900 mb-4">
                <li>Post pornographic or objectionable content.</li>
                <li>
                  Promote or sell illegal products, services, or businesses.
                </li>
                <li>Engage in fraudulent or abusive activities.</li>
              </ul>
              <p className="text-gray-900">
                {" "}
                c. The Website Provider reserves the right to:
              </p>
              <ul className=" pl-6 md:pl-12 list-disc list-inside text-gray-900 mb-4">
                <li>Remove such content.</li>
                <li>
                  Terminate your account at its sole discretion if you violate
                  these terms.
                </li>
              </ul>

              {/* Section 5: Unauthorized Access and Breach of Security */}
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                5. Unauthorized Access and Breach of Security
              </h2>
              <p className="text-gray-900 mb-2">
                a. You agree to immediately notify the Website Provider at
                <span className="text-defaultBg px-1">
                  info@thesmartbridge.com
                </span>{" "}
                of:
              </p>
              <ul className="pl-6 md:pl-12 list-disc list-inside text-gray-900 mb-4">
                <li>
                  Any known or suspected unauthorized use(s) of your account.
                </li>
                <li>Any known or suspected breach of security.</li>
              </ul>
              <p className="text-gray-900">
                b. The Website Provider will not be liable for any loss or
                damage incurred due to:
              </p>
              <ul className=" pl-6 md:pl-12list-disc list-inside text-gray-900 mb-4">
                <li>Unauthorized use of your account.</li>
                <li>
                  Your failure to promptly notify the Website Provider of
                  suspected unauthorized use or security breaches.
                </li>
              </ul>
              {/* section 6 */}
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                6. Consent to Data Collection and Usage
              </h2>
              <p className="text-gray-900 mb-1">
                By registering and using the Website, you acknowledge, consent,
                and agree that the Website Provider may:
              </p>
              <p className="text-gray-900 mb-2">
                a. Access, preserve, and disclose your account information,
                including but not limited to:
              </p>

              <ul className="pl-6 md:pl-12 list-disc list-inside text-gray-900 mb-4">
                <li>
                  Personal information (e.g., name, email ID, phone number, User
                  ID).
                </li>
                <li>
                  Payment details (e.g., credit/debit card information, bank
                  account details).
                </li>
                <li> Professional and educational details.</li>
              </ul>
              <p className="text-gray-900">
                {" "}
                b. Such access, preservation, or disclosure may occur under the
                following circumstances:
              </p>
              <ul className="pl-6 md:pl-12 list-disc list-inside text-gray-900 mb-4">
                <li>To comply with legal processes or government orders.</li>
                <li>To enforce the Terms of Use.</li>
                <li>To respond to claims of rights violations.</li>
                <li> To verify payment details and prevent fraud.</li>
                <li> To respond to customer service requests.</li>
                <li>
                  {" "}
                  To protect the rights, property, or safety of the Website
                  Provider, its users, or the public.
                </li>
              </ul>
              <p>
                c. The collection, storage, and use of your data will be
                governed by the Website’s Privacy Policy, accessible here.
              </p>
              <h2 className="text-xl font-semibold text-gray-900 mb-3 pt-6">
                7. Account Transfer and Sharing
              </h2>
              <p className="text-gray-900 mb-1">
                a. You may not sell, trade, or transfer your account to another
                individual.
              </p>
              <p className="text-gray-900 mb-1">
                b. You may not accept or use an account that was not originally
                registered in your name.
              </p>
              <p>
                c. If you violate these conditions, the Website Provider
                reserves the right to terminate your account immediately.
              </p>
              <h2 className="text-xl font-semibold text-gray-900 mb-3 pt-6">
                8. Single User Registration
              </h2>
              <p>
                Each registration is for a single user only. The following
                actions are strictly prohibited:
              </p>
              <p className="text-gray-900 mb-1">
                a. Sharing your User ID and password with any other person.
              </p>
              <p className="text-gray-900 mb-1">
                b. Caching any part of the Website in proxy servers to allow
                access to individuals who have not registered.
              </p>
              <p>
                c. Allowing multiple users to access the Website through a
                single User ID and password on a shared network.
              </p>
              <p className="py-4">
                Violations of this clause may result in the immediate suspension
                or termination of your account.
              </p>
              <p className="pb-4">
                By registering and using the Website, you confirm your
                acceptance of these terms and agree to comply with all the
                responsibilities and obligations outlined herein. Failure to
                adhere to these terms may result in the suspension or
                termination of your account and access to the Services.
              </p>
              <div className=" pt-6">
                <h1 className="text-xl font-bold text-gray-800 mb-4">
                  Service Availability
                </h1>
                {/* Section 1: Right to Modify or Discontinue Services */}
                <h2 className="text-xl font-semibold text-gray-700 mb-3">
                  1. Right to Modify or Discontinue Services
                </h2>
                <div className=" text-gray-900 mb-6">
                  <p>a. The Website Provider reserves the right to: </p>
                  <ul className="list-disc list-inside pl-6 md:pl-12">
                    <li>
                      Change, suspend, or terminate any Service offered on the
                      Website, either in part or in its entirety, at any time
                      and without prior notice.
                    </li>
                    <li>
                      Introduce new Services, features, or functionalities or
                      discontinue existing ones as deemed necessary by the
                      Website Provider.
                    </li>
                    <li>
                      Modify or change the terms, scope, or accessibility of any
                      Service provided through the Website.
                    </li>
                  </ul>
                </div>
                {/* Section 2: Modification of Pricing for Paid or Premium Services */}
                <h2 className="text-xl font-semibold text-gray-700 mb-3">
                  2. Modification of Pricing for Paid or Premium Services
                </h2>
                <div className=" text-gray-900 mb-6">
                  <p>
                    a. The Website Provider may, at its sole discretion, modify,
                    revise, or change the pricing structure for any paid or
                    premium Services offered on the Website.
                  </p>
                  <p>b. Such changes may include but are not limited to: </p>
                  <ul className="list-disc list-inside pl-6 md:pl-12">
                    <li>Introduction of new pricing tiers or plans.</li>
                    <li>
                      Modification of existing pricing structures or
                      subscription terms.
                    </li>
                    <li>
                      Discontinuation of free or promotional offers associated
                      with Services.
                    </li>
                  </ul>

                  <p>
                    c. You will be notified of any changes to the pricing of
                    paid or premium Services through the Website, email, or
                    other communication methods. Your continued use of the paid
                    or premium Services after the changes take effect
                    constitutes your acceptance of the modified pricing terms.
                  </p>
                </div>
                {/* Section 3: No Obligation to Store or Provide Content */}
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  3. No Obligation to Store or Provide Content
                </h2>
                <div className="list-disc list-inside text-gray-900 mb-6">
                  <p>a. The Website Provider is not obligated to: </p>
                  <ul className="list-disc list-inside pl-6 md:pl-12 mb-1">
                    <li>
                      Store or maintain any content, data, or information that
                      you or others upload, submit, or provide on the Website.
                    </li>
                    <li>
                      Provide you with a backup, copy, or retrieval mechanism
                      for any content or information submitted by you or other
                      users.
                    </li>
                  </ul>

                  <p>
                    b. You are responsible for maintaining your own copies of
                    any data, content, or information that you consider
                    important or valuable. The Website Provider shall not be
                    liable for any loss of data resulting from changes,
                    suspension, or termination of Services.
                  </p>
                </div>
                {/* Section 4: Service Interruptions and Limitations */}
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  4. Service Interruptions and Limitations
                </h2>
                <div className="list-disc list-inside text-gray-900 mb-6">
                  <p>
                    a. The Website Provider does not guarantee uninterrupted or
                    error-free access to the Website or its Services.
                  </p>
                  <p>
                    b. Services may be interrupted, delayed, or limited due to:{" "}
                  </p>
                  <ul className="list-disc list-inside pl-6 md:pl-12">
                    <li>Scheduled maintenance or upgrades.</li>
                    <li>
                      Technical issues, including server downtime, software
                      bugs, or system failures.
                    </li>
                    <li>
                      External factors beyond the control of the Website
                      Provider, such as internet outages, cyber-attacks, or
                      force majeure events.
                    </li>
                  </ul>

                  <p>
                    c. The Website Provider will make reasonable efforts to
                    notify users of planned interruptions but is not liable for
                    unplanned disruptions.
                  </p>
                </div>
                {/* Section 5: Termination or Suspension of Services */}
                <h2 className="text-xl font-semibold text-gray-700 mb-3">
                  5. Termination or Suspension of Services
                </h2>
                <div className=" text-gray-900 mb-6">
                  <p>
                    a. The Website Provider reserves the right to suspend or
                    terminate your access to the Website and its Services if:{" "}
                  </p>
                  <ul className="list-disc list-inside pl-6 md:pl-12">
                    <li>
                      You violate the Terms of Use or other applicable policies.
                    </li>
                    <li>
                      Your actions are deemed detrimental to the Website, its
                      users, or its operations.
                    </li>
                  </ul>

                  <p>b. Upon suspension or termination: </p>
                  <ul className="list-disc list-inside pl-6 md:pl-12">
                    <li>
                      Your access to content, data, or information stored on the
                      Website may be restricted or removed.
                    </li>
                    <li>
                      Ongoing subscriptions or access to premium Services may be
                      discontinued without refund, subject to applicable laws.
                    </li>
                  </ul>
                </div>
                {/* Section 6: Acknowledgment of Service Limitations */}
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  6. Acknowledgment of Service Limitations
                </h2>
                <div className="list-disc list-inside text-gray-900 mb-6">
                  <p>
                    a. By using the Website and its Services, you acknowledge
                    and agree that:{" "}
                  </p>
                  <ul className="list-disc list-inside pl-6 md:pl-12">
                    <li>
                      The Website Provider retains the right to make changes to
                      the Services without prior notice.
                    </li>
                    <li>
                      The Website Provider is not liable for any loss resulting
                      from changes, suspension, or termination of Services.
                    </li>
                  </ul>

                  <p className="my-3">
                    b. You agree to use the Services "as is" and "as available,"
                    without warranties of any kind.
                  </p>
                  <p className="mb-2">
                    By continuing to use the Website and its Services, you
                    accept and agree to these terms regarding Service
                    availability and limitations.
                  </p>
                </div>
                {/* payment section */}
                <div className=" pt-6">
                  <h1 className="text-xl uppercase font-bold text-gray-900 mb-6">
                    Payments
                  </h1>

                  <div className="space-y-6 text-gray-900">
                    <section>
                      <h2 className="text-xl font-semibold mb-2">
                        1. Agreement to Pay Fees and Taxes
                      </h2>
                      <p>
                        a. If you choose to avail yourself of any paid or
                        premium Services offered through the Website, you agree
                        to pay all applicable fees, charges, and taxes
                        associated with such Services.
                      </p>
                      <p>
                        b. The fees and charges will be as specified on the
                        Website at the time of your purchase or subscription and
                        may be subject to change at the discretion of the
                        Website Provider.
                      </p>
                      <p>
                        c. All payments must be made in the currency specified
                        on the Website, and you are responsible for any
                        additional charges incurred due to currency conversion
                        or international transactions.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-2">
                        2. Provision of Payment Information
                      </h2>
                      <p>
                        a. To facilitate payments for the Services, you will be
                        required to provide accurate and complete financial and
                        personal information, including but not limited to:
                      </p>
                      <div className="pb-2">
                        <p>
                          i. Credit or debit card details (e.g., card number,
                          expiration date, and CVV code).
                        </p>
                        <p>
                          ii. Bank account details for online banking or direct
                          transfers.
                        </p>
                        <p>
                          iii. Personal information such as name, email ID,
                          address, and phone number.
                        </p>
                      </div>
                      <p>
                        b. You agree to ensure that all information provided is
                        accurate, complete, and up-to-date. Any discrepancies or
                        inaccuracies in the information provided may result in
                        the rejection or delay of your payment.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-2">
                        3. Use of Lawfully Owned Payment Methods
                      </h2>
                      <p>
                        a. You agree to use only those credit/debit cards,
                        online banking facilities, or other payment methods that
                        are lawfully owned by you.
                      </p>
                      <p>
                        b. Any use of unauthorized or fraudulent payment methods
                        will result in immediate termination of your account and
                        may subject you to legal action.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-2">
                        4. Approved Payment Processing Providers
                      </h2>
                      <p>
                        a. Payments made through the Website will be processed
                        by approved third-party payment processing providers.
                      </p>
                      <p className="pb-2">
                        b. By using the payment gateway services, you authorize
                        the payment processing providers to collect, process,
                        and store your payment and personal information for the
                        purpose of completing the transaction.
                      </p>
                      <p>
                        {" "}
                        c. The Website Provider will not access, store, or share
                        your payment information except as required:
                      </p>
                      <p>i. For fraud verification purposes.</p>
                      <p>
                        ii. To comply with applicable laws, regulations, or
                        court orders.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-2">
                        5. Confidentiality and Security of Payment Information
                      </h2>
                      <p>
                        a. You are solely responsible for maintaining the
                        confidentiality and security of your payment
                        information, including credit/debit card details and
                        online banking credentials.
                      </p>
                      <p>
                        b. The Website Provider expressly disclaims any
                        liability for losses, damages, or unauthorized
                        transactions resulting from the unauthorized use of your
                        payment information.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-2">
                        6. Limitations of Payment Gateway Services
                      </h2>
                      <p>
                        a. The payment gateway services available on the Website
                        are owned, controlled, and operated by third-party
                        payment processing providers.
                      </p>
                      <p>
                        b. The Website Provider does not guarantee the
                        availability, reliability, or timeliness of payment
                        processing services and will not be liable for any
                        delays, errors, or failures in payment processing.
                      </p>
                      <p>
                        c. You acknowledge that any disputes or issues arising
                        from the use of payment gateway services must be
                        resolved directly with the payment processing provider.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-2">
                        7. No Refund Policy
                      </h2>
                      <p>
                        a. Unless otherwise specified, payments made for paid or
                        premium Services are non-refundable.
                      </p>
                      <p>
                        b. Any refund requests will be reviewed at the sole
                        discretion of the Website Provider and will be subject
                        to the applicable refund policies, if any, as specified
                        on the Website.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-2">
                        8. Fraudulent Transactions
                      </h2>
                      <p>
                        a. The Website Provider reserves the right to suspend or
                        terminate your account and report fraudulent
                        transactions to the appropriate authorities if:
                      </p>
                      <p>
                        i. You are found to have provided false or misleading
                        payment information.
                      </p>
                      <p className="pb-2">
                        ii. Unauthorized transactions are detected or suspected
                        in connection with your account.
                      </p>
                      <p>
                        b. Any costs, fees, or damages incurred as a result of
                        fraudulent transactions will be borne solely by you.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-2">
                        9. Acknowledgment of Risk
                      </h2>
                      <p>
                        a. By making payments through the Website, you
                        acknowledge and accept the inherent risks associated
                        with online transactions, including but not limited to
                        technical failures, unauthorized access, and data
                        breaches.
                      </p>
                      <p className="pb-4">
                        b. You agree to indemnify and hold harmless the Website
                        Provider from any claims, losses, or damages arising out
                        of your use of the payment gateway services.
                      </p>
                      <p>
                        By using the payment services on the Website, you agree
                        to these terms and conditions governing payments and
                        transactions.
                      </p>
                    </section>
                  </div>
                </div>
                {/* "service and certificates" */}
                <div className=" pt-6">
                  <h1 className="text-xl font-bold text-gray-900 mb-6">
                    Services & Third-Party Materials
                  </h1>
                  <p className="text-gray-900 mb-4">
                    The Website provides users with access to various Services,
                    which may include third-party services, content, and
                    materials. By using any of the Services, you acknowledge and
                    agree that you may encounter content that may be deemed
                    offensive, indecent, or objectionable. Such content may or
                    may not be identified as explicit and may include offensive
                    language, imagery, or other material. Additionally, the
                    results of any search query or the entering of a specific
                    URL may automatically and unintentionally generate links or
                    references to objectionable material. You agree to use the
                    Services at your own risk, and the Website Provider shall
                    not be held liable for any content that you find offensive,
                    indecent, or objectionable.
                  </p>
                  <p className="text-gray-900 mb-4">
                    You also acknowledge that any information, including
                    personal information, you share with third parties or other
                    users through the interactive features of the Website, such
                    as the Learning Management System, online chats, online
                    classroom sessions, and email features, is shared at your
                    own risk. The Website Provider cannot guarantee the security
                    of such information or control the manner in which it is
                    used by third parties. You assume full responsibility for
                    any risks associated with the sharing of your information
                    and the use of these interactive features.
                  </p>
                  <p className="text-gray-900 mb-4">
                    The Website may display, include, or make available content,
                    data, information, applications, or materials from
                    third-party service providers, content providers, or other
                    users (collectively referred to as "Third-Party Materials").
                    You understand and agree that the Website Provider is not
                    responsible for examining, evaluating, or verifying the
                    content, accuracy, completeness, validity, copyright
                    compliance, legality, decency, quality, or any other aspect
                    of such Third-Party Materials or websites. The Website
                    Provider does not warrant or endorse any Third-Party
                    Materials, nor does it assume any liability or
                    responsibility for the services, content, or materials
                    provided by third parties.
                  </p>

                  <p className="text-gray-900 mb-4">
                    By using the Website and accessing Third-Party Materials or
                    services, you acknowledge that such access is entirely at
                    your own initiative and risk. You further acknowledge that
                    the Website Provider is not responsible for the credibility,
                    reliability, or lawful existence of the third-party service
                    providers or their offerings.
                  </p>
                  <p className="text-gray-900 mb-4">
                    You agree that the Services provided through the Website
                    contain proprietary content, information, and materials that
                    are protected by intellectual property laws, including but
                    not limited to copyright, trademarks, and trade secrets. You
                    shall not use, modify, rent, lease, loan, sell, distribute,
                    or create derivative works of the Services except as
                    permitted by the Website's terms and conditions. You agree
                    not to exploit the Services in any unauthorized manner,
                    including, but not limited to, trespassing or overburdening
                    network capacity.
                  </p>

                  <p className="text-gray-900 mb-4">
                    You further agree not to use the Services in any way that
                    could harass, abuse, stalk, bully, threaten, defame,
                    impersonate, gamble, or exhibit sexually explicit,
                    pornographic, or pedophilic content. You also agree not to
                    promulgate hate speech, carry out illegal activities, or
                    infringe upon the rights of any person, including other
                    users of the Website or third parties, whether related or
                    unrelated to the use of the Website or the services provided
                    through it. This includes any violation of intellectual
                    property rights, such as patents, copyrights, trademarks, or
                    trade secrets.
                  </p>
                  <p className="text-gray-900 mb-4">
                    The Website Provider is not responsible for any such
                    unlawful or inappropriate use of the Services, nor for any
                    harassing, threatening, defamatory, offensive, or illegal
                    messages or transmissions that you may receive as a result
                    of using the Services.
                  </p>
                  <p className="text-gray-900 mb-4">
                    The Website Provider reserves the right, at its sole
                    discretion, to modify, suspend, remove, or disable access to
                    the Website or any of the Services at any time, with or
                    without notice. The Website Provider will not be liable for
                    any modifications, suspensions, removals, or disabling of
                    access to any Services. The Website Provider may also impose
                    limits on the use or access to any Services or third-party
                    service providers, without prior notice or liability.
                  </p>
                </div>
                {/* restriction on use */}
                <div className=" pt-6">
                  <h1 className="text-xl font-bold text-gray-900 mb-4">
                    Restrictions on Use of Website/Services
                  </h1>
                  <p className="pb-4">
                    When using the Website or any of the Services provided
                    through the Website, you agree not to engage in any of the
                    following activities:
                  </p>
                  <div className="space-y-6 md:pl-8 text-gray-900">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">
                        1. Interference with Other Users
                      </h2>
                      <p>
                        You shall not restrict, inhibit, or disrupt the ability
                        of other users to use or enjoy the Website or the
                        Services. This includes, but is not limited to,
                        activities such as hacking, defacing, or otherwise
                        tampering with any portion of the Website or the
                        Services in a manner that interferes with the experience
                        or functionality for other users.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-2">
                        2. Transmission of Harmful Components
                      </h2>
                      <p>
                        You shall not transmit or introduce any virus, worm,
                        time bomb, trojan horse, or any other harmful or
                        disruptive component that could damage, disrupt, or
                        interfere with the operation of the Website or the
                        Services, or that could affect the devices or systems of
                        other users accessing the Website.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-2">
                        3. Commercial Exploitation
                      </h2>
                      <p>
                        You shall not reproduce, duplicate, copy, sell, resell,
                        or exploit any portion of the Website or the Services
                        for commercial purposes, unlawful purposes, or any other
                        purposes not expressly authorized by the Website
                        Provider. This includes unauthorized use of content,
                        data, or materials available on the Website.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-2">
                        4. Removal of Proprietary Notices
                      </h2>
                      <p>
                        You shall not remove, alter, or obscure any copyright,
                        trademark, or other proprietary rights notices contained
                        on the Website or within the Services. All such notices
                        must remain intact and visible when using the Website or
                        Services.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-2">
                        5. Framing or Mirroring
                      </h2>
                      <p>
                        You shall not frame, mirror, or link any part of the
                        Website without the express prior written consent of the
                        Website Provider. Any unauthorized use of the Website’s
                        content or structure, including framing or mirroring, is
                        strictly prohibited.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-2">
                        6. Automated Data Collection
                      </h2>
                      <p>
                        You shall not use any robot, spider, site
                        search/retrieval application, or other manual or
                        automatic device or process to retrieve, index, "data
                        mine," or in any way reproduce or circumvent the
                        navigational structure or presentation of the Website or
                        the Services. This includes any attempt to retrieve or
                        index any portion of the Website or collect information
                        about other users for any purpose without the prior
                        written consent of the Website Provider.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-2">
                        7. Illegal or Unauthorized Purposes
                      </h2>
                      <p>
                        You shall not use the Website or Services for any
                        illegal, unlawful, or unauthorized purpose. This
                        includes, but is not limited to, any activities that
                        violate applicable laws, regulations, or third-party
                        rights, or that could harm or disrupt the Website, the
                        Services, or other users.
                      </p>
                    </div>
                  </div>
                </div>
                {/* copyright */}
                <div className="pt-6 text-gray-900">
                  <p className="font-bold text-xl mb-4">Copyright</p>
                  <p className="mb-3">
                    The Website and all content made available on the Website,
                    including but not limited to Services, text, images,
                    graphics, data, databases, software, video, and audio, are
                    owned by the Website Provider or have been licensed to the
                    Website Provider by third parties.
                  </p>
                  <p className="mb-3">
                    You acknowledge that all such content is protected by
                    copyright, trademark, and other intellectual property laws.
                    You agree that you will not reproduce, modify, adapt,
                    distribute, translate, transmit, re-publish, or otherwise
                    exploit any content from the Website or the Services without
                    the prior written consent of the Website Provider, except as
                    expressly permitted for lawful, non-commercial personal use
                  </p>
                  <p className="mb-3">
                    The Website, the Services, and their content are made
                    available solely for your personal, non-commercial use
                    (except for lawful services made available through the
                    Website by service providers). Nothing on the Website should
                    be construed as granting you any license or right to use any
                    trademarks, logos, or other proprietary names or marks of
                    the Website Provider or any third party, except with the
                    express written consent of the applicable rights holder.
                  </p>
                  <p className="mb-3">
                    You further agree that you will not attempt to gain
                    unauthorized access to any part of the Website, the
                    Services, or any systems or networks connected to the
                    Website or the Services, including any third-party services.
                  </p>
                </div>
                {/* link */}
                <div className="pt-6 text-gray-900">
                  <p className="font-bold text-xl mb-4">Links</p>
                  <p className="mb-3">
                    The Website may contain hyperlinks or other connection
                    devices that allow you to access third-party websites or
                    external content. These links are provided for your
                    convenience and informational purposes only. The Website
                    Provider does not control, endorse, or assume any
                    responsibility for the contents, practices, or policies of
                    any linked websites. By clicking on any such links, you
                    acknowledge and agree that the Website Provider is not
                    responsible for the content, accuracy, legality, or
                    reliability of the external websites, and that you access
                    these websites at your own risk.
                  </p>
                  <p className="mb-3">
                    The inclusion of any link on the Website does not imply or
                    create any endorsement, sponsorship, or affiliation between
                    the Website Provider and the owner or operator of the linked
                    website, nor does it imply any endorsement of the material,
                    information, or services provided by the linked website. The
                    Website Provider makes no representation or warranty
                    regarding the content or accuracy of any linked website, and
                    such links are provided solely for your convenience. You are
                    solely responsible for reviewing the terms and conditions
                    and privacy policies of any external website you visit.
                  </p>
                </div>
                {/* advertisement */}
                <div className="pt-6 text-gray-900">
                  <p className="font-bold text-xl mb-4">Advertisements</p>
                  <p className="mb-3">
                    The Website Provider, users of the Website, or any business
                    microsites associated with the Website may display
                    advertisements, promotions, or sponsored content on the
                    Website. The manner, mode, and extent of advertising on the
                    Website are subject to change at the discretion of the
                    Website Provider. By interacting with any advertisements,
                    you may be directed to external websites or websites
                    maintained by third parties.
                  </p>
                  <p className="mb-3">
                    If you decide to visit any website linked to an
                    advertisement, you do so at your own risk. The Website
                    Provider is not responsible for the content, accuracy,
                    legality, or security of any external website. You should
                    take all necessary precautions to protect your devices and
                    data, including using up-to-date antivirus software, as the
                    Website Provider makes no guarantees regarding the safety or
                    security of any third-party website.
                  </p>
                  <p className="mb-3">
                    The Website Provider makes no warranty or representation
                    regarding the merchantability, fitness for a particular
                    purpose, availability, efficacy, reliability, or durability
                    of any product, service, or offer advertised on the Website.
                    The Website Provider does not endorse, and is not
                    responsible for, any products, services, or information
                    provided by third-party advertisers, nor does it assume any
                    liability for any issues, disputes, or damages arising from
                    your interaction with such advertisers or the products or
                    services they offer.
                  </p>
                </div>
                {/* cookies */}
                <div className="pt-6 text-gray-900">
                  <p className="font-bold text-xl mb-4">Cookies</p>
                  <p className="mb-3">
                    The Website Provider utilizes cookies, device
                    fingerprinting, open device identifier numbers, web beacons,
                    or similar technologies to enhance your experience while
                    using the Website. A cookie is a small text file that is
                    stored on the hard drive of your computer or device when you
                    access the Website. Cookies help us improve the
                    functionality of the Website, personalize content, analyze
                    traffic, and provide you with a better overall experience.
                  </p>
                  <p className="mb-3">
                    By using the Website, you consent to the use of cookies and
                    similar technologies as described in this section. However,
                    you have the option to decline cookies by adjusting the
                    settings on your browser or device. Please note that
                    declining cookies may limit your ability to access certain
                    features or services on the Website, and some functions may
                    not work as intended or may be unavailable.
                  </p>
                </div>
                {/* No warranty */}
                <div className="pt-6 text-gray-900">
                  <p className="font-bold text-xl mb-4">No Warranty</p>
                  <p className="mb-3">
                    You expressly acknowledge and agree that your use of the
                    Website and/or the Services is at your sole risk. The
                    Website and all Services provided on or through the Website
                    are provided "as is" and "as available," with all faults and
                    without warranty of any kind. To the maximum extent
                    permitted by applicable law, the Website Provider disclaims
                    all warranties and conditions with respect to the Website
                    and any Services, either express, implied, or statutory.
                    This includes, but is not limited to, implied warranties or
                    conditions of merchantability, satisfactory quality, fitness
                    for a particular purpose, accuracy, quiet enjoyment, and
                    non-infringement of third-party rights.
                  </p>
                  <p className="mb-3">
                    The Website Provider does not warrant that the Website or
                    Services will meet your specific requirements, that the
                    operation of the Website or Services will be uninterrupted
                    or error-free, or that defects in the Website or Services
                    will be corrected. The Website Provider further disclaims
                    any warranty or representation regarding the results of
                    using the Website or Services, including but not limited to
                    the accuracy, completeness, or reliability of any
                    information or content obtained through the Website. In
                    jurisdictions where the exclusion of implied warranties or
                    limitations on statutory rights of consumers is not allowed,
                    the above exclusions and limitations will apply only to the
                    extent permissible by law.
                  </p>
                </div>
                {/* disclamier */}
                <div className="pt-6 text-gray-900">
                  <h1 className="text-xl font-bold text-gray-900 mb-4">
                    Disclaimer
                  </h1>

                  <div className="space-y-5 md:pl-8 text-gray-900">
                    {/* Section 1 */}
                    <div>
                      <h2 className="font-semibold text-lg">
                        1. Accuracy of Information
                      </h2>
                      <p className="mt-2">
                        The Platform and/or Tracks may contain typographical
                        errors, inaccuracies, or omissions, which may not be
                        complete or current. Skill Wallet expressly reserves the
                        right to correct any such errors, inaccuracies, or
                        omissions, including after an order has been submitted,
                        and to amend, update, or modify information at any time
                        without prior notice.
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div>
                      <h2 className="font-semibold text-lg">
                        2. Provision of Services
                      </h2>
                      <p className="mt-2">
                        The Platform, Tracks, and all associated information,
                        materials, or content provided by Skill Wallet
                        (collectively referred to as "Skill Wallet Content") are
                        made available on an "as is" and "as available" basis,
                        with all faults and defects. Skill Wallet makes no
                        representations or warranties of any kind, whether
                        express or implied, regarding the Skill Wallet Content
                        or the services available on or through the Platform or
                        Tracks.
                      </p>
                    </div>

                    {/* Section 3 */}
                    <div>
                      <h2 className="font-semibold text-lg">
                        3. No Warranties
                      </h2>
                      <p className="mt-2">
                        To the maximum extent permitted by applicable law, Skill
                        Wallet disclaims all warranties, express or implied,
                        including but not limited to:
                      </p>
                      <ul className="list-disc list-inside mt-2 pl-6 md:pl-12 space-y-1">
                        <li>
                          Implied warranties of merchantability, fitness for a
                          particular purpose, and non-infringement.
                        </li>
                        <li>
                          Any warranty that the services will meet the user’s
                          requirements, be uninterrupted, timely, secure, or
                          error-free.
                        </li>
                        <li>
                          Any warranty as to the accuracy, reliability, or
                          completeness of any information obtained through the
                          services or the correction of any defects in the
                          software.
                        </li>
                      </ul>
                    </div>

                    {/* Section 4 */}
                    <div>
                      <h2 className="font-semibold text-lg">
                        4. Assumption of Risk
                      </h2>
                      <p className="mt-2">Users acknowledge and agree that:</p>
                      <ul className="list-disc list-inside mt-2 pl-6 md:pl-12 space-y-1">
                        <li>
                          Any Skill Wallet Content, information, data, or other
                          materials downloaded or otherwise obtained through the
                          Platform or Tracks are accessed at their own
                          discretion and risk.
                        </li>
                        <li>
                          Users are solely responsible for any damage to their
                          computer systems, electronic devices, or loss of data
                          resulting from the download of such materials.
                        </li>
                      </ul>
                    </div>

                    {/* Section 5 */}
                    <div>
                      <h2 className="font-semibold text-lg">
                        5. No Advice or Warranty Creation
                      </h2>
                      <p className="mt-2">
                        No advice or information, whether oral or written,
                        obtained by the user from Skill Wallet or through the
                        Platform or Tracks, shall create any warranty not
                        expressly stated herein.
                      </p>
                    </div>

                    {/* Section 6 */}
                    <div>
                      <h2 className="font-semibold text-lg">
                        6. Reporting Errors or Content Ownership Concerns
                      </h2>
                      <p className="mt-2">
                        In the event that a user identifies incorrect
                        information on the Platform or Tracks, or if the user is
                        the rightful owner of any content displayed on the
                        Platform or Tracks and wishes to request its removal,
                        the user shall notify Skill Wallet in writing at the
                        contact address provided at the bottom of the Platform
                        page. Skill Wallet will review such requests and take
                        appropriate action as deemed necessary at its sole
                        discretion.
                      </p>
                    </div>
                  </div>
                  <p className="py-2">
                    By accessing or using the Platform or Tracks, users agree to
                    the terms of this Disclaimer and acknowledge that their use
                    of the Platform and Tracks is entirely at their own risk.
                  </p>
                </div>
                {/* limitaion and  */}
                <div className="pt-6 text-gray-900">
                  <p className="font-bold text-xl mb-4">
                    Limitation of Liability
                  </p>
                  <p className="mb-3">
                    The Website may contain hyperlinks or other connection In no
                    event shall the Website Provider, or any of its
                    subsidiaries, affiliates, officers, directors, employees,
                    agents, or licensors, be liable to you or any third party
                    for any direct, indirect, incidental, special,
                    consequential, or punitive damages, or for any loss of
                    profits, business interruption, loss of data, or any other
                    intangible losses (even if the Website Provider has been
                    advised of the possibility of such damages), arising out of
                    or in connection with your use of, or inability to use, the
                    Website or any linked websites, mobile applications, or
                    services, regardless of the cause of action or legal theory
                    (whether in contract, tort, negligence, or otherwise).
                  </p>
                  <p className="mb-3">
                    This limitation of liability applies to any and all damages
                    arising from the use or inability to use the Website or
                    Services, including but not limited to any errors,
                    omissions, interruptions, defects, delays, or security
                    breaches, as well as damages resulting from any content or
                    information obtained through the Website.
                  </p>
                </div>
                {/* idemity */}
                <div className="pt-6 text-gray-900">
                  <p className="font-bold text-xl mb-4">Indemnity</p>
                  <p className="mb-3">
                    You agree to indemnify, defend, and hold harmless the
                    Website Provider, its subsidiaries, affiliates, officers,
                    directors, employees, agents, and licensors from any and all
                    claims, liabilities, damages, losses, costs, or expenses
                    (including reasonable legal fees) arising from or in
                    connection with your use of the Website, including but not
                    limited to any actions you take that violate these Terms of
                    Use or infringe upon the rights of third parties. This
                    includes any claims or actions arising from your failure to
                    comply with these Terms of Use, your use of the Website in
                    an unlawful manner, or any disputes arising from your
                    interactions with other users or third parties through the
                    Website.
                  </p>
                </div>
                {/* Choice of Law */}
                <div className="pt-6 text-gray-900">
                  <p className="font-bold text-xl mb-4">Choice of Law</p>
                  <p className="mb-3">
                    These Terms of Use shall be governed by and construed in
                    accordance with the laws of the Republic of India, without
                    regard to its conflict of laws provisions. By using the
                    Website, you agree to submit to the exclusive jurisdiction
                    of the courts located in Hyderabad, India, for any disputes
                    arising out of or relating to these Terms of Use or your use
                    of the Website or Services.
                  </p>
                </div>
                {/* No Third-Party Beneficiaries */}
                <div className="pt-6 text-gray-900">
                  <p className="font-bold text-xl mb-4">
                    No Third-Party Beneficiaries
                  </p>
                  <p className="mb-3">
                    These Terms of Use are intended solely for the benefit of
                    you, the user, and the Website Provider. No third party
                    shall have any rights or claims under these Terms of Use,
                    and nothing in these Terms of Use shall be construed as
                    creating any third-party beneficiary rights.
                  </p>
                </div>
                {/* Miscellaneous Provisions */}
                <div className="pt-6 text-gray-900">
                  <h1 className="text-xl font-bold text-gray-900 mb-4">
                    Miscellaneous Provisions{" "}
                  </h1>

                  <div className="space-y-5 md:pl-8 text-gray-900">
                    {/* Section 1 */}
                    <div>
                      <h2 className="font-semibold text-lg">
                        1. Eligibility and Supervision
                      </h2>
                      <p className="mt-2">
                        By accepting these Terms through the use of the
                        Platform, you certify that you are at least 18 years of
                        age or older. If you are under the age of 18 or below
                        the legal age in your jurisdiction to enter into a
                        binding contract, you may access and use the Platform
                        only under the supervision of a parent or legal guardian
                        who agrees to be bound by these Terms. Parents or legal
                        guardians providing such consent shall be fully
                        responsible for the minor’s use of the Platform,
                        including any financial obligations or legal liabilities
                        incurred by the minor. The Tracks and Platform are not
                        intended for use by individuals under the age of 18.
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div>
                      <h2 className="font-semibold text-lg">
                        2. Assignment of Rights
                      </h2>
                      <p className="mt-2">
                        Skill Wallet reserves the right to freely transfer or
                        assign any portion of its rights or delegate its
                        obligations under these Terms or any Track-specific
                        terms without prior notice. You shall not transfer or
                        assign any of your rights or delegate your obligations
                        under these Terms or any Track-specific terms without
                        the prior written consent of Skill Wallet. Any
                        unauthorized assignment or delegation shall be deemed
                        null and void.
                      </p>
                    </div>

                    {/* Section 3 */}
                    <div>
                      <h2 className="font-semibold text-lg">
                        3. Governing Law and Jurisdiction
                      </h2>
                      <p className="mt-2">
                        These Terms, including any Track-specific terms, shall
                        be governed by and construed in accordance with the laws
                        of India, without reference to its conflict of law
                        principles. Any legal proceedings or disputes arising
                        under these Terms or related to the Platform or Tracks
                        shall be subject to the exclusive jurisdiction of the
                        courts of Jaipur, India.
                      </p>
                    </div>

                    {/* Section 4 */}
                    <div>
                      <h2 className="font-semibold text-lg">
                        4. Assumption of Risk
                      </h2>
                      <p className="mt-2">
                        Dispute Resolution and Arbitration In the event of any
                        dispute arising out of or in connection with these Terms
                        or any Track-specific terms, the parties shall first
                        attempt to resolve the matter amicably through good
                        faith negotiations. If such efforts fail, the dispute
                        shall be referred to arbitration in accordance with the
                        provisions of the Arbitration and Conciliation Act,
                        1996, as amended. The arbitration shall be conducted by
                        a sole arbitrator appointed by Skill Wallet. The
                        language of the arbitration shall be English, and the
                        seat of arbitration shall be Hyderabad, India.
                      </p>
                    </div>

                    {/* Section 5 */}
                    <div>
                      <h2 className="font-semibold text-lg">
                        5. Force Majeure
                      </h2>
                      <p className="mt-2">
                        Skill Wallet shall not be held liable for any failure or
                        delay in the performance of its obligations under these
                        Terms or any Track-specific terms due to events beyond
                        its reasonable control, including but not limited to
                        acts of God, natural disasters, war, civil unrest,
                        terrorism, strikes, labour disputes, governmental
                        actions, court orders, Internet failures, or any other
                        unforeseen circumstances.
                      </p>
                    </div>

                    {/* Section 6 */}
                    <div>
                      <h2 className="font-semibold text-lg">6. Severability</h2>
                      <p className="mt-2">
                        If any provision of these Terms or any Track-specific
                        terms is deemed unlawful, invalid, or unenforceable by a
                        court of competent jurisdiction, such provision shall be
                        severed from the remaining provisions, which shall
                        continue to remain valid and enforceable to the fullest
                        extent permitted by law.
                      </p>
                    </div>
                    {/* section 7 */}
                    <div>
                      <h2 className="font-semibold text-lg">7. No Waiver</h2>
                      <p className="mt-2">
                        The failure of Skill Wallet to enforce any right or
                        provision of these Terms or any Track-specific terms
                        shall not constitute a waiver of such right or
                        provision.
                      </p>
                    </div>
                    {/* section 8 */}
                    <div>
                      <h2 className="font-semibold text-lg">
                        8. Entire Agreement
                      </h2>
                      <p className="mt-2">
                        These Terms, together with any Track-specific terms,
                        constitute the entire agreement between you and Skill
                        Wallet regarding the subject matter herein and supersede
                        all prior agreements or understandings. Any modification
                        to these Terms must be made in writing and communicated
                        through the Platform by Skill Wallet or agreed upon in
                        writing between you and Skill Wallet.
                      </p>
                    </div>
                    {/* section 8 */}
                    <div>
                      <h2 className="font-semibold text-lg">
                        9. Unauthorized Changes
                      </h2>
                      <p className="mt-2">
                        Skill Wallet shall not be responsible for any damages or
                        issues caused by unauthorized modifications to these
                        Terms or any Track-specific terms resulting from
                        hacking, cracking, or other unauthorized actions.
                      </p>
                    </div>
                    {/* section 9 */}
                    <div>
                      <h2 className="font-semibold text-lg">
                        10. Repeated Assignment Clause
                      </h2>
                      <p className="mt-2">
                        Skill Wallet may transfer or assign its rights or
                        delegate its obligations under these Terms without
                        restriction. You may not transfer or assign your rights
                        or delegate your obligations without prior written
                        consent from Skill Wallet. Any attempt to do so without
                        such consent shall be void.
                      </p>
                    </div>
                  </div>
                  <p className="py-2">
                    By accessing or using the Platform or Tracks, users agree to
                    the terms of this Disclaimer and acknowledge that their use
                    of the Platform and Tracks is entirely at their own risk.
                  </p>
                </div>
                {/* contact */}
                <div className="pt-6 pb-20 text-gray-900">
                  <p className="font-bold text-xl mb-6">Contact Us</p>
                  <p className="mb-5">
                    If you have any concerns, complaints, or grievances
                    regarding other users or their use of the Website, including
                    any use of the Website in violation of these Terms of Use
                    (such as harassment, abuse, stalking, bullying, threats,
                    defamation, impersonation, gambling, transmission of
                    explicit content, hate speech, illegal activities, or
                    infringement of your rights), please contact the Grievance
                    Officer at the following contact details:
                  </p>
                  <p className="font-bold mb-2">Contact Details:</p>
                  <span> Email:</span>
                  <span className="px-2">info@thesmartbridge.com</span>
                  <p className="py-3">
                    By using the Website, you acknowledge that you have read,
                    understood, and agreed to these Terms of Use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
