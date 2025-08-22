import { Link, NavLink } from "react-router-dom"; // ✅ React Router
import Footer from "@/components/sections/Footer"; // ✅ Import Footer component
function page() {
  return (
    <>
      <div className="internship_div bg-white text-gray-900/100 text-justify container mx-auto pt-12 pb-12">
        <div>
          <p className="text-center text-2xl font-bold pb-10">Privacy Policy</p>
        </div>
        <div className="space-y-6 md:space-y-10 ">
          <p>
            Skill Wallet a product of Smartbridge Educational Services Private
            Limited (herein referred to as “Skill Wallet”, “we”. “us” or “Our”)
            owns, operates and maintains the website{" "}
            <a
              href="https://myskillwallet.ai/"
              className="text-defaultBg font-medium underline mx-1"
            >
              https://myskillwallet.ai/{" "}
            </a>
            (“Website” / “Platform”). Skill Wallet offers curated and specially
            designed industry relevant online upskilling courses (“Tracks”/”
            Courses”). In order to deliver the Tracks/Courses in an efficient
            manner and to make available the Website, Skill Wallet collects
            certain information regarding the User. Skill Wallet values the
            trust placed by Users and therefore, we follow the highest standards
            to protect your Personal Information.
          </p>
          <p>
            This Privacy Policy (“Privacy Policy”) describes how we collect,
            use, update, delete and share information about our users
            (hereinafter referred to as “User”, “you” or “your”) through our
            Platform. Please review our Terms of Use and Privacy Policy
            (collectively referred to as the “Terms'') that govern the use of
            the Platform and the Tracks. This Privacy Policy shall form a part
            of the Terms by way of reference. All capitalised terms not defined
            in this Privacy Policy have the respective meanings set forth in the
            Terms of Use. This Privacy Policy applies only to the part of the
            Platform provided by Skill Wallet, and we are not responsible for
            the practices of persons, companies, institutions or websites that
            Skill Wallet does not control, manage or employ.
          </p>
          <p>
            {" "}
            User shall mean and include any person/persons, who visits, uses,
            deals with and/or transacts through the Website and includes a guest
            user and browser. In circumstances where the User is less than 18
            years of age, consent from the legal guardian shall be required and
            it is advised that this policy be read in the presence of the legal
            guardian.
          </p>
          <p>
            We take care and perform due diligence to ensure privacy aspects of
            each and every individual who interacts with our Platform, by design
            and by default, in alignment with all applicable laws and
            regulations.
          </p>
          <p>
            Please understand that by using our Platform or submitting any
            Personally Identifiable Information (defined below) to us, you
            consent and agree that we may collect, use, update, disclose and
            retain your information (including but not limited to your
            Personally Identifiable Information) in accordance with this Privacy
            Policy and our Terms of Use, and as permitted or required by law.
            Skill Wallet reserves the right to share the information collected
            hereunder with its own affiliates. In the event of sale or transfer
            of all or a portion of our business assets, consumer information may
            be one of the business assets that are transferred as part of the
            transaction. If you do not agree with these Terms, then please do
            not provide any Personally Identifiable Information to us. If you
            refuse or withdraw your consent, or if you choose not to provide us
            with any required personally identifiable information, we may not be
            able to provide you with the services that can be offered on our
            Platform.
          </p>
          <p>
            This Policy has been drafted in accordance with the applicable data
            protection laws, rules and regulations but not limited to General
            Data Protection Regulation, 2018 (“GDPR”), the Information
            Technology Act, 2000 (“IT Act”) and the Information Technology
            (Reasonable Security Practices and Procedures And Sensitive Personal
            Data or Information) Rules, 2011 (“IT Rules”), collectively referred
            to as “Data Protection Laws”.
          </p>
        </div>
        <div className="space-y-6 md:space-y-10 ">
          <p>Privacy Policy of Skill Wallet</p>
          <div>
            <p className="text-gray-900 font-semibold text-lg">1. Overview</p>
            <p className="pt-4">
              Skill Wallet, a product of Smartbridge Educational Services
              Private Limited (hereinafter referred to as “Skill Wallet,” “we,”
              “us,” or “our”), is the owner, operator, and maintainer of the
              website{" "}
              <a
                href="https://myskillwallet.ai/"
                className="text-defaultBg font-medium underline mx-1"
              >
                https://myskillwallet.ai/
              </a>{" "}
              (hereinafter referred to as the “Website” or “Platform”). Skill
              Wallet provides a selection of curated and specially designed
              online upskilling courses that are relevant to industry needs
              (hereinafter referred to as “Tracks” or “Courses”). To effectively
              deliver these Tracks/Courses and ensure the seamless operation of
              the Website, Skill Wallet collects certain information from users
              (hereinafter referred to as “User ,” “you,” or “your”). We deeply
              value the trust placed in us by our Users and are dedicated to
              maintaining the highest standards for the protection of your
              personal information.
            </p>
          </div>

          <div>
            <p className="text-gray-900 font-semibold text-lg">
              2. Purpose of the Privacy Policy
            </p>
            <p className="pt-4">
              This Privacy Policy (hereinafter referred to as the “Privacy
              Policy”) details how we collect, utilize, update, delete, and
              share information about our Users through our Platform. We
              encourage you to familiarize yourself with our Terms of Use and
              this Privacy Policy (collectively referred to as the “Terms”) that
              govern your use of the Platform and the Tracks. This Privacy
              Policy is an essential component of the Terms by reference. All
              capitalized terms not defined herein shall carry the meanings
              assigned to them in the Terms of Use. This Privacy Policy is
              applicable solely to the portion of the Platform provided by Skill
              Wallet, and we are not liable for the practices of individuals,
              companies, institutions, or websites that are not under our
              control, management, or employment.
            </p>
          </div>
          <div>
            <p className="text-gray-900 font-semibold text-lg">
              3. Definition of User{" "}
            </p>
            <p className="pt-4">
              For the purposes of this Privacy Policy, the term “User”
              encompasses any individual or individuals who visit, utilize,
              engage with, or transact through the Website, including guest
              users and browsers. In cases where the User is under the age of
              18, consent from a legal guardian is mandatory, and we recommend
              that this policy be reviewed in the presence of the legal
              guardian.
            </p>
          </div>
          <div>
            <p className="text-gray-900 font-semibold text-lg">
              4. Our Commitment to Privacy{" "}
            </p>
            <p className="pt-4">
              We are dedicated to safeguarding the privacy of every individual
              who interacts with our Platform. We adhere to the principles of
              privacy by design and by default, ensuring compliance with all
              applicable laws and regulations.
            </p>
          </div>
          {/* hi */}
          <div>
            <p
              className="text-gray-900 font-semibold
             text-lg"
            >
              5. Consent to Data Collection and Usage
            </p>
            <p className="pt-4">
              By accessing our Platform or providing any Personally Identifiable
              Information (hereinafter referred to as “PII”) to us, you consent
              to and agree that we may collect, utilize, update, disclose, and
              retain your information (including, but not limited to, your PII)
              in accordance with this Privacy Policy and our Terms of Use, as
              permitted or required by law. Skill Wallet reserves the right to
              share the information collected under this policy with its
              affiliates. In the event of a sale or transfer of all or a portion
              of our business assets, consumer information may be included as
              one of the business assets transferred as part of the transaction.
              If you do not agree with these Terms, we kindly ask that you
              refrain from providing any PII to us. Should you refuse or
              withdraw your consent, or choose not to provide us with any
              required PII, we may be unable to offer you the services available
              on our Platform.
            </p>
          </div>
          <div>
            <p className="text-gray-900 font-semibold text-lg">
              6. Adherence to Data Protection Regulations
            </p>
            <p className="pt-4">
              This Privacy Policy has been crafted in compliance with applicable
              data protection laws, rules, and regulations, including but not
              limited to the General Data Protection Regulation, 2018 (“GDPR”),
              the Information Technology Act, 2000 (“IT Act”), and the
              Information Technology (Reasonable Security Practices and
              Procedures and Sensitive Personal Data or Information) Rules, 2011
              (“IT Rules”), collectively referred to as “Data Protection Laws.”
            </p>
          </div>
          <div>
            <p className="text-gray-900 font-semibold text-lg">
              7. Modifications to the Privacy Policy
            </p>
            <p className="pt-4">
              We reserve the right to amend this Privacy Policy at any time. Any
              changes will take effect immediately upon the posting of the
              revised Privacy Policy on our Platform. Your continued use of the
              Platform following the posting of such changes signifies your
              acceptance of the updated Privacy Policy.
            </p>
          </div>
          <div>
            <p className="text-gray-900 font-semibold text-lg">
              8. Contact Information
            </p>
            <p className="pt-4">
              For any inquiries or concerns regarding this Privacy Policy or our
              data practices, please reach out to us at [insert contact
              information].
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-gray-900 font-semibold text-lg">
              9. Information Covered by This Privacy Policy
            </p>
            <p className="pt-4">
              This Privacy Policy delineates the types of information that Skill
              Wallet (hereinafter referred to as "Skill Wallet," "we," "us," or
              "our") collects from users of our Platform (the "Platform") and
              the manner in which such information is utilized. Certain
              functionalities of our Platform may be accessed without the need
              to disclose any personal information. However, to utilize specific
              features or services related to our Tracks/Courses, the provision
              of personal information is mandatory. If you opt not to engage
              with these particular features or services, the only information
              we may collect will be classified as "Non-Personal Information,"
              which refers to data that cannot be used to identify you.
              Non-Personal Information may include, but is not limited to, the
              web pages you have viewed.
            </p>
            <p className="pt-4">
              To access certain features and benefits on our Platform, you may
              be required to submit "Personally Identifiable Information"
              (hereinafter referred to as "PII"), which refers to information
              that can be used to identify you. PII may include, but is not
              limited to, your name, email address, contact number (both
              cellular and landline), educational qualifications, Aadhaar
              number, PAN, social security and tax identification numbers, and
              post-qualification or work experience. You are responsible for
              ensuring the accuracy of the PII you provide to Skill Wallet.
              Inaccurate information may impede your ability to use the
              Platform, affect the information you receive while using the
              Platform, and hinder our ability to contact you. For instance, it
              is crucial to maintain valid email addresses and contact numbers,
              as these are the primary channels through which we communicate
              with you.
            </p>
          </div>
          <div>
            <p className="text-gray-900 font-semibold text-lg">
              10. Information Collection
            </p>
            <p className="pt-4 text-lg font-medium">Non-Personal Information</p>
            <p className="pt-4">
              When you visit our Platform, we may track, collect, and aggregate
              Non-Personal Information. This may include, but is not limited to,
              the pages of our Platform that you visit, the order in which they
              are accessed, the timestamps of your visits, and the hyperlinks
              you click. We may also gather information from the URLs through
              which you accessed our Platform. This process may involve logging
              your IP address, operating system, and browser software used to
              access the Platform. While this information is not classified as
              Personally Identifiable Information (PII), local laws may allow us
              to determine a user's Internet Service Provider and the geographic
              location of their point of connectivity based on their IP address.
              We collect Non-Personal Information from visitors to our Platform
              to track the total number of visitors in aggregate form and to
              identify the types of Internet web browsers (e.g., Internet
              Explorer®) and operating systems (e.g., Windows®) utilized. This
              information helps us continuously improve our Platform and
              services.
            </p>
            <div className="pt-6">
              <p className="pt-4   text-lg font-medium">
                Personally Identifiable Information
              </p>
              <p className="pt-4">
                The PII you provide to Skill Wallet is defined in accordance
                with the definitions of "Personal Information" or "Personal
                Data" as per the applicable Data Protection Laws relevant to
                you.
              </p>
            </div>
          </div>
        </div>
        {/* hello */}
        <div className="space-y-2">
          <p className="pt-4">
            The information you provide is used solely for the purposes outlined
            in this Privacy Policy. We collect information through our Platform
            or through third-party platforms when you sign up for information
            updates or Tracks, participate in public forums, utilize our chat
            room services, receive emails or calls, engage in online or offline
            events, and/or access other services on or through our Platform or
            any of Skill Wallet’s or its Educational Partners’ offline
            activities. This information may include, but is not limited to,
            your name, postal address, email address, contact number, social
            security or tax identification numbers, login credentials (for
            registered users), educational qualifications, salary information,
            career goals, post-qualification experience, and photographs. We may
            also collect demographic information such as your gender,
            socio-economic status, and other similar personal details. In cases
            involving scholarships, refunds, or referrals, we will collect your
            bank account information. Other than this, we do not collect any
            financial information, and all payments are processed through
            third-party payment gateway providers.
          </p>
          <p className="pt-4">
            We gather this information through various means, including when you
            enter it while using our Platform, interact with our customer
            support, or participate in our surveys or marketing promotions.
          </p>
          <p className="pt-4">
            Skill Wallet, along with its Educational Partners and third-party
            service providers, may collect certain information from you in
            connection with assignments, exams, and other assessments related to
            the online course. For example, during a proctored exam, Skill
            Wallet (or its third-party service providers) may collect specific
            PII from you to (a) verify or authenticate your identity or
            submissions, such as a signature for a test or an assignment log, a
            photograph, or a recording of you (e.g., using a webcam), or
            information included on a photo identification card or document, or
            (b) monitor your performance during an exam to ensure compliance
            with applicable testing rules or requirements (e.g., confirming that
            you are not using prohibited resources). Skill Wallet may also
            collect information regarding your performance or accomplishments,
            such as quiz/exam scores, grades, project evaluations, teacher
            evaluations, and other assessments of your performance or
            achievements.
          </p>
          <p className="pt-4">
            If you require financial assistance, Skill Wallet may recommend
            certain third-party credit facility providers. Should you choose to
            engage with such credit facility providers, any information you
            provide to them will be governed by their respective terms of use
            and privacy policies, as you would be their direct customer. Please
            note that Skill Wallet does not control, manage, or regulate these
            third-party providers.
          </p>
          <p className="pt-4 ">Additional Information We Collect</p>
          <p className="pt-4">
            In addition to the information explicitly outlined in this Privacy
            Policy, we may collect various other forms of information from you
            or about you, which may include, but are not limited to:
          </p>
          <p className="pt-4">
            Customer Service Interactions: Information regarding your
            interactions with our customer service representatives and any
            maintenance-related communications you have with us.
          </p>
          <p className="pt-4">
            User -Generated Content: Content that you upload or post to public
            forums available through the Platform.
          </p>
          <p className="pt-4">
            Compliance Information: Information necessary for compliance with
            applicable procedures, laws, and regulations, where such collection
            is essential for our legitimate interests or the legitimate
            interests of others.
          </p>
          <p className="pt-4">
            Call Recordings: Recordings of calls with students or users
            expressing interest in our programs.
          </p>
          <p className="pt-4">
            Additional Information: Any other information you voluntarily
            provide to us in connection with your use of the Platform and the
            Tracks/Courses.
          </p>
          <p className="pt-4 text-lg font-medium">
            Third-Party Service Providers
          </p>
          <p>
            We may receive your information when you access or log in to
            third-party sites, such as Facebook or WhatsApp, from our Platform,
            or when you respond to our advertisements on such third-party
            platforms. This may include text and/or images of your Personally
            Identifiable Information (PII) available from the third-party site.
            Please be aware that the information we obtain from such third-party
            platforms is often subject to their respective privacy policies
            and/or your settings regarding the information you have consented to
            share with them.
          </p>
          <p className="pt-4">
            We may enter into agreements with third parties to serve
            advertisements on our behalf across the internet, social networking
            sites, and blogs. These third parties may collect or store
            information regarding your visits to our Platform and your
            interactions with our products and services. They may also utilize
            information about your visits to this Platform and other websites to
            target advertisements for goods and services or for other purposes.
            This information is typically collected using pixel tags, which are
            standard technologies employed by most major websites. Such third
            parties are prohibited from selling or sharing your Personally
            Identifiable Information as part of this process. In the event that
            such third parties do sell or share your Personally Identifiable
            Information, Skill Wallet’s liability shall be limited to providing
            you with reasonable assistance in any action you may choose to take
            against such third parties, at your sole cost and expense.
          </p>
          <p className="pt-4">
            We may also engage third-party sales and marketing affiliates who
            may collect your information through various channels owned by them
            and subsequently share this information with us based on your
            expressed interest in our Tracks/Courses. For instance, an affiliate
            may host an event and share the details of the attendees with Skill
            Wallet.
          </p>
          <p className="pt-4 text-lg font-medium">
            Information We Receive from Other Sources
          </p>
          <p>
            We may receive information about you if you utilize any of the other
            platforms we operate or the other services we provide. In such
            cases, the data may be shared internally and combined with the data
            collected on the Platform. We are also collaborating closely with
            third parties, including but not limited to Educational Partners,
            scholarship providers, marketing partners, sales affiliates,
            subcontractors in technical/advertising networks, analytics
            providers, and search information providers, and may receive
            information about you from these sources.
          </p>
          <p className="pt-4">
            Additionally, we may receive your information from your employers,
            educational institutions, or scholarship providers when your
            participation in a Track is partially or fully sponsored by such
            third parties. The third-party sponsoring your participation may
            provide us with your information, subject to our agreement with
            them, and therefore, the third-party sponsor may be considered the
            data controller with respect to such data. In instances where you
            have been referred to us under any referral scheme, we will receive
            your information from the referrer.
          </p>
          <p className="text-lg font-semibold pt-4">
            11. Purpose of Information Use
          </p>
          <p>
            Skill Wallet (hereinafter referred to as "Skill Wallet," "we," "us,"
            or "our") may utilize the information we collect, with your consent,
            for the following purposes:
          </p>
          <p className="pt-4 text-lg font-medium">
            Registration and Communication
          </p>
          <p>
            We may use your information to register you on our Platform and to
            provide you with information related to our Tracks and other Skill
            Wallet services. This includes sending you offers, responding to
            your inquiries, and providing updates about the Tracks, Skill Wallet
            events, platform maintenance, or new services offered by Skill
            Wallet. Such communications may occur through various channels,
            including email, SMS, phone calls, or other communication methods.
          </p>
          <p className="pt-4 text-lg font-medium">Consent to Contact </p>
          <p>
            Notwithstanding your registration under the Do Not Disturb (DND), Do
            Not Call (DNC), or National Customer Preference Register (NCPR)
            services, you authorize us to contact you via phone calls from Skill
            Wallet or any third party for the aforementioned purposes for a
            period of 365 days from your registration with us.
          </p>
          <p className="pt-4 text-lg font-medium">
            Engagement of Service Providers
          </p>
          <p>
            We may collaborate with business partners, operational service
            providers, and subcontractors (collectively referred to as "Service
            Providers") to assist in operating and delivering our services to
            users and to comply with legal and regulatory requirements. Our
            Service Providers are obligated to protect the information we
            provide them in a manner consistent with this Privacy Policy. While
            we exercise due diligence in selecting our Service Providers and
            require them to adhere to these standards, they remain independent
            third parties, and we may not have control over their privacy
            practices.
          </p>
          <p className="pt-4 text-lg font-medium">Management and Processing</p>
          <p>
            We utilize your information for management and processing purposes,
            including, but not limited to, tracking attendance, progress, and
            completion of Tracks/Courses. As part of our management and
            processing of Tracks/Courses, we may use certain Personally
            Identifiable Information (PII) to administer exams, projects, and
            other assessments. For example, during an exam, Skill Wallet may
            collect information from you to verify your identity or monitor your
            performance to ensure compliance with applicable testing rules and
            requirements.
          </p>
          <p className="pt-4 text-lg font-medium">
            Quality Control and Communication
          </p>
          <p>
            We may use your PII to provide services to you and for quality
            control purposes. Additionally, we may archive this information
            and/or use it for future communications with you. For instance,
            Skill Wallet may offer chat room services that enable you to
            communicate with Skill Wallet staff members or peers within the same
            cohort. We may use and share your PII to facilitate these services.
            Furthermore, Skill Wallet staff may create groups on platforms such
            as WhatsApp (or similar services) to provide updates related to the
            Tracks, details of potential employers, and other relevant
            information. Please note that any information disclosed on a
            third-party service provider’s platform will be subject to that
            third party’s privacy policies and your settings regarding the
            information you have consented to share. Skill Wallet and/or its
            associates shall bear no liability in this regard.
          </p>
          <p className="pt-4 text-lg font-medium">
            Membership and Payment Services
          </p>
          <p>
            Skill Wallet may collaborate with certain companies that enable you
            to establish memberships for participation in digital wallets,
            payment services, or rewards programs. If you choose to participate,
            we will disclose the necessary information to these companies to
            facilitate your membership. We are not responsible for the privacy
            practices of the companies sponsoring these membership programs, and
            we recommend reviewing the individual privacy policies of each
            company with which you establish such memberships. Billing
            information may be archived by us or our providers, and we may also
            archive PII other than billing information for future
            communications.
          </p>
          <p className="pt-4 text-lg font-medium">Service Improvement</p>
          <p>
            Skill Wallet may use and share your information to enhance its
            services and offerings. For example, we may engage service providers
            (such as auditors or surveyors) to assess the impact of our Tracks
            on your career. For this purpose, we may contact you via phone,
            email you questionnaires, or invite you to attend workshops.
          </p>
          <p className="pt-4 text-lg font-medium">Use of Images</p>
          <p>
            To the extent that any PII collected by us includes images of you,
            you grant Skill Wallet a limited, non-exclusive right to use,
            reproduce, distribute, prepare derivative works of, or publicly
            display such images and/or your likeness in relation to the Tracks
            or for marketing purposes. We may utilize your photograph, along
            with employer information, testimonials, transition information,
            designation changes, etc., for advertisements and/or social media
            posts to highlight our learners’ achievements.
          </p>
          <p className="pt-4 text-lg font-medium">Non-Personal Information</p>
          <p>
            We utilize Non-Personal Information in aggregate form to enhance the
            quality and utility of our services by performing statistical
            analyses of the collective characteristics and behaviors of our
            users, as well as measuring demographics and interests regarding
            specific areas of our Platform.
          </p>
          <p className="pt-4 text-lg font-medium">Compliance with GDPR</p>
          <p>
            If the processing of your Personally Identifiable Information is
            subject to the EU General Data Protection Regulation (GDPR), we will
            process your PII where such processing is necessary for our
            legitimate interests.
          </p>
          <p className="pt-4">
            By using our Platform, you consent to the collection and use of your
            information as outlined in this Privacy Policy. If you have any
            questions or concerns regarding our use of your information, please
            do not hesitate to contact us.
          </p>
          <p className="text-lg font-semibold pt-4">
            12. Disclosure of Your Information
          </p>
          <p>
            In addition to the examples provided above, Skill Wallet
            (hereinafter referred to as "Skill Wallet," "we," "us," or "our")
            may share your information in the following ways:
          </p>
          <p className="pt-4 text-lg font-medium">Educational Partners</p>
          <p>
            We may share the information we collect from you with specific
            Educational Partners (e.g., universities or companies) that
            developed or offered the Track in which you are enrolled, as well as
            with the instructors who taught, managed, or oversaw the Track,
            external graders who will assess your performance, or mentors who
            will provide support to students. For instance, if you are
            participating in a Track through a university, we may share your
            Personally Identifiable Information (PII) and performance data with
            the university to report on your progress and facilitate the
            issuance of a certificate upon completion of the Track. Information
            shared with our Educational Partners will be subject to their
            respective privacy policies and procedures. Additionally, we may
            archive this information and/or use it for future communications
            with you.
          </p>
          <p className="pt-4 text-lg font-medium">
            Employers, Sponsors, and Scholarship Providers
          </p>
          <p>
            If you are enrolled in a Track that is sponsored or funded by your
            employer, a sponsor, or a third-party scholarship provider, we may
            share your PII, including grades, evaluations, or progress in the
            Track, with your employer, sponsor, or scholarship provider. This
            information may be shared at any time during the Track or
            thereafter.
          </p>
          <p className="pt-4 text-lg font-medium">Service Providers</p>
          <p>
            We may provide access to or share your information with operational
            and maintenance contractors and other third parties who perform
            services on our behalf under strict confidentiality agreements.
            These Service Providers have access to your information solely to
            perform these services and are prohibited from using your
            information for any other purposes. They provide a variety of
            services, including billing, sales, marketing, test proctoring,
            courier services, mentoring, recruitment consulting, product content
            and features, advertising, analytics, research, customer service,
            data storage, security, fraud prevention, credit facilities, payment
            processing, and legal services. In certain circumstances, we may
            also share specific PII and materials with third parties, including
            but not limited to service providers such as Facebook or WhatsApp,
            to provide you with services you have requested or that Skill Wallet
            offers in conjunction with the Tracks. Additionally, we may utilize
            third-party platforms (such as Typeform or Google Forms) to collect
            your information, which may result in your information being stored
            on their servers.
          </p>
          <p className="pt-4 text-lg font-medium">Recruitment Services</p>
          <p>
            As part of our recruitment services or activities, we may share your
            information with recruiters and potential employers. For example, if
            you participate in a recruitment drive jointly organized by Skill
            Wallet and a recruitment agency, we will share your information with
            the recruitment agency and potential employers interested in
            considering you for employment. In such cases, the recruitment
            agency or employer may contact you directly to schedule interviews.
            Please note that any information you share with the recruitment
            agency or employer will be governed by their respective terms and
            policies.
          </p>
          <p className="pt-4 text-lg font-medium">Public Sharing Features</p>
          <p>
            Skill Wallet offers public sharing features as part of its career
            services, which may include making your career profile, details, and
            progress in the Track visible to others outside of Skill Wallet. By
            choosing to participate in these services, you acknowledge that any
            information or materials included in your profile can be viewed by
            other individuals accessing the Platform, including potential or
            existing employers, recruiters, and peers, as well as others on
            applicable third-party websites. You also acknowledge that
            information shared may remain accessible on third-party websites
            and/or to those with whom you have shared the information, even if
            you later make your profile private or cease sharing your
            information. Skill Wallet has no control over the access to or use
            of information provided to third parties through this mode outside
            its website.
          </p>
          <p className="pt-4 text-lg font-medium">
            Alumni Portal and Networking Services
          </p>
          <p>
            We may collaborate with certain third-party service providers to
            arrange and provide networking activities for former or prospective
            students of Skill Wallet. For this purpose, Skill Wallet may share
            basic information such as your name, email address, and cohort
            details with these third-party service providers to enable them to
            invite you to connect. Should you choose to sign up for their
            services, please note that any information you provide will be
            governed by their respective policies. In certain cases, to
            facilitate communication among students, we may share your
            information with other students on chat forums such as WhatsApp and
            Facebook.
          </p>
          <p className="pt-4 text-lg font-medium">
            Government and Regulatory Disclosure
          </p>
          <p>
            Skill Wallet may share your information with various government
            authorities in response to court orders or other legal processes to
            establish or exercise our legal rights or to protect our property;
            to defend against legal claims; or as otherwise required by law. In
            such instances, we reserve the right to raise or waive any legal
            objection or right available to us. We may also share your
            information when we believe it is appropriate to investigate,
            prevent, or take appropriate action regarding illegal or suspected
            illegal activities; to protect and defend the rights, property, or
            safety of Skill Wallet, the Platform, our users, customers, or
            others; and in connection with our Terms and other agreements.
          </p>
          <p className="pt-4 text-lg font-medium">
            Associates and Business Transfers
          </p>
          <p>
            Skill Wallet (hereinafter referred to as "Skill Wallet," "we," "us,"
            or "our") may share your Personally Identifiable Information (PII)
            with any Associate. The term "Associate" refers to any entity that
            is controlled by an individual, any entity that exercises control
            over an individual, or any entity that is under common control with
            an individual, whether directly or indirectly. In the case of a
            natural person, "Associate" also includes any Relative, as defined
            in the Companies Act, 2013, as applicable.
          </p>
          <p className="pt-4 text-lg font-medium">
            Skill Wallet may disclose and/or transfer your PII to an acquirer,
            assignee, or other successor entity in connection with a sale,
            merger, or reorganization of all or substantially all of the equity,
            business, or assets of Skill Wallet to which your PII pertains.
          </p>

          <p className="text-lg font-semibold pt-4">
            13. Sharing Information with Business Partners
          </p>
          <p>
            Skill Wallet may share information that can be used to directly
            contact you with third-party business partners, including companies
            that may offer products, services, or other opportunities that may
            be of interest to you.
          </p>
          <p className="text-lg font-semibold pt-4">
            14. Public Disclosure of Information
          </p>
          <p>
            Any PII that you voluntarily display on the Platform may be utilized
            by third parties for unsolicited purposes. Skill Wallet shall not be
            liable for any unsolicited use by third parties of your PII that has
            been voluntarily displayed by you.
          </p>
          <p className="text-lg font-semibold pt-4">15. Aggregated Data</p>
          <p>
            "Aggregated Data" refers to records that have been stripped of
            Personally Identifying Information and that have been manipulated or
            combined to provide generalized, anonymous information. Your
            identity and personal information will not be available in
            Aggregated Data. We may combine your personal information on an
            anonymous basis with other information to generate Aggregated Data
            for internal and commercial use, as well as for sharing with
            affiliates, subsidiaries, and business partners for planning and
            marketing purposes.
          </p>
          <p className="text-lg font-semibold pt-4">
            16. Information Protection
          </p>
          <p>Confidentiality and Security</p>
          <p>
            Skill Wallet takes all reasonable precautions to protect your PII
            both online and offline to prevent unauthorized access or breaches.
          </p>

          <p className="pt-4 text-lg font-medium">Notification of Changes</p>
          <p>
            We may update this Privacy Policy at any time, and the updated
            policy will be posted on this Platform. You will always be informed
            about what information we collect, how we use it, and the
            circumstances under which we may disclose it. Unless stated
            otherwise, our current privacy policy applies to all information
            that Skill Wallet has about you and your account, even if it was
            collected in the past.
          </p>
          <p className="pt-4 text-lg font-medium">
            Your Email Address and Mobile Number
          </p>
          <p>
            We may store the email addresses and mobile numbers of individuals
            who communicate with us via email or mobile, or who have expressed
            interest in our Tracks. We may add these individuals to our mailing,
            SMS, or call list when they sign up to receive special promotions
            and updates.
          </p>

          <p className="pt-4 text-lg font-medium">Opting Out</p>
          <p>
            If you are a registered user and wish to change your preferences, or
            if you prefer to opt out of regular mail, SMS, or calls, you may
            notify us of your request by emailing{" "}
            <Link
              href="mailto:skillwallet@thesmartbridge.com
"
              className=" px-1  font-medium whitespace-nowrap transition-colors"
            >
              skillwallet@thesmartbridge.com
            </Link>
            .
          </p>
          <p className="pt-4 text-lg font-medium">
            Employers, Sponsors, and Scholarship Providers
          </p>

          <p className="pt-4">
            Upon submission of your opt-out request, you may assume that it has
            been successfully received and is being processed. Please allow us
            30 business days from the date the request was received to complete
            the removal, as some promotions may have already been initiated
            prior to your request. Please note that unsubscribing from
            communication services does not necessarily mean that the
            information being collected will be deleted.
          </p>
          <p className="pt-4">
            If you refuse or withdraw your consent, or if you choose not to
            provide us with any required PII, we may be unable to provide you
            with the services that can be offered on our Platform.
          </p>
          <p className="pt-4 text-lg font-medium">Third-Party Links</p>
          <p>
            Our Platform may contain links to other websites. These linked sites
            are not under the control of Skill Wallet. Skill Wallet is not
            responsible for the privacy practices of such other sites. We advise
            you to read the privacy policies of each website that collects your
            information, including PII. If you decide to access any third-party
            sites linked to the Platform, you do so entirely at your own risk.
            Any links to partners of the Platform are the responsibility of the
            linking party, and Skill Wallet shall not be responsible for
            notifying you of any changes in the name or location of any
            information on the Platform.
          </p>
          <p className="pt-4 text-lg font-medium">
            Retention of Personally Identifiable Information
          </p>
          <p>
            We retain your PII as long as necessary to provide you with our
            services and in accordance with applicable data protection laws,
            rules, or regulations. The duration for which we retain PII depends
            on the purposes for which we collect and use it and/or as required
            to comply with applicable laws and to establish, exercise, or defend
            our legal rights.
          </p>
          <p className="text-lg font-medium  pt-4">
            17. Global Data Storage, Transfer, and Processing
          </p>
          <p>
            Skill Wallet (hereinafter referred to as "Skill Wallet," "we," "us,"
            or "our") and its Indian service providers store information about
            you on servers located in India. Additionally, our international
            service providers may store your information on servers located in
            other countries. By using our services, you consent to the storage
            of your information within India and in such other countries. If you
            are accessing our services from outside India, please be aware that
            the information you submit will be transferred to and stored on our
            servers in India or in other countries. The data protection laws of
            India and/or other countries may not be as comprehensive as those in
            your country. By submitting your data and/or using our services, you
            acknowledge and consent to the transfer, storage, and processing of
            your information in and to India.
          </p>
          <p className="pt-4">
            As mentioned above, Skill Wallet may also subcontract the processing
            of your data to, or otherwise share your data with, affiliated
            companies, service providers, or any third-party entities in
            countries other than your country of residence, including India, in
            accordance with applicable laws. Such third parties may be engaged
            in various activities, including providing services to you,
            processing transactions, and/or offering support services. By
            consenting to this Privacy Policy, you also grant Skill Wallet
            permission to transfer your information to Skill Wallet affiliated
            companies, service providers, or any third-party entities in
            locations around the world. Wherever your information is
            transferred, stored, or processed by us or our affiliates or service
            providers, we will take reasonable steps to safeguard the privacy of
            your Personally Identifiable Information.
          </p>

          <p className="pt-4">
            For individuals located in the European Union, if we provide any
            information about you to non-European Union entities, we will take
            appropriate measures to ensure that such entities comply with
            applicable data protection laws. Should you require any further
            information on the processes followed, please connect with our
            Grievance Officer (details provided below).
          </p>
          <p className="text-lg font-semibold pt-4">
            18. Privacy of Children and Minors
          </p>
          <p>
            Skill Wallet strongly encourages parents and guardians to supervise
            the online activities of their minor children and to consider
            utilizing parental control tools available from online services and
            software manufacturers to help create a child-friendly online
            environment. These tools can assist in preventing minors from
            disclosing their name, address, and other Personally Identifiable
            Information online without parental permission. Although the
            Platform is not intended for use by minors, Skill Wallet respects
            the privacy of minors who may inadvertently use the Platform and
            will delete their information upon notification.
          </p>
          <p className="text-lg font-semibold pt-4">
            19. Use of Cookies and Web Beacons
          </p>
          <p>
            Cookies are small pieces of information stored by your browser on
            your device’s hard drive. They are used to record various aspects of
            your visit and to assist Skill Wallet in providing you with
            uninterrupted service. Web beacons are small graphic files linked to
            our servers that enable us to track your usage of our Platform and
            its related functionalities.
          </p>
          <p className="pt-4">
            We may utilize cookies and/or web beacons to help us identify repeat
            visitors, the types of content and sites to which users of our
            Platform link, the duration of time each user spends in specific
            areas of our Platform, and the particular functionalities that users
            choose to engage with. Cookies and web beacons allow Skill Wallet to
            enhance your experience by serving you better and more efficiently,
            as well as personalizing your interactions on our Platform.
            Importantly, cookies and web beacons are not used to retain
            Personally Identifiable Information. Occasionally, we may also
            employ additional methods of data collection.
          </p>
          <p className="pt-4">
            We may allow third-party companies, including advertising firms
            (such as Facebook, Google, Twitter, Quora, and Bing), to place
            cookies on our website. These cookies enable these companies to
            track your activity across various sites where they display
            advertisements and record your interactions, allowing them to
            present advertisements that they deem relevant to you as you browse
            the Internet. These cookies store information about the content you
            are viewing, along with an identifier linked to your device or IP
            address.
          </p>
          <p className="pt-4">
            These cookies also enable us and third parties to determine whether
            you have seen a specific advertisement or type of advertisement, and
            how long it has been since you last viewed it. This information is
            used for frequency capping purposes, to tailor the advertisements
            you see, and to measure their effectiveness.
          </p>
          <p className="pt-4">
            You have the ability to control how and whether cookies are accepted
            by your web browser. Most browsers provide instructions on how to
            reset the browser to reject cookies in the “Help” section of the
            toolbar. If you choose to reject our cookies, please be aware that
            many functions and conveniences of this Platform may not operate
            properly.
          </p>

          <p className="text-lg font-semibold pt-4">20. User Rights</p>
          <p>
            Users may exercise their rights under applicable Data Protection
            Laws by sending an email to{" "}
            <Link
              href="mailto:skillwallet@thesmartbridge.com
"
              className=" px-1  font-medium whitespace-nowrap transition-colors"
            >
              skillwallet@thesmartbridge.com
            </Link>
            The primary rights of Users concerning data protection are as
            follows:
          </p>
          <p className="pt-4">
            The Right to Access: Users have the right to confirm whether Skill
            Wallet is processing their personal data. Additionally, Users have
            the right to access the Personally Identifiable Information (PII)
            shared with Skill Wallet, including information related to the
            purpose of processing, which we will provide upon request.
          </p>
          <p className="pt-4">
            The Right to Rectification: Users have the right to correct any
            inaccurate PII about themselves and to complete any incomplete
            information that may be held by Skill Wallet.
          </p>
          <p className="pt-4">
            The Right to Erasure: Users have the right to request the deletion
            of any PII concerning them. To exercise this right, Users must
            submit a request to Skill Wallet by writing to{" "}
            <Link
              href="mailto:skillwallet@thesmartbridge.com
"
              className=" px-1  font-medium whitespace-nowrap transition-colors"
            >
              skillwallet@thesmartbridge.com
            </Link>
            .
          </p>
          <p className="pt-4">
            The Right to Restrict Processing: Users have the right to restrict
            Skill Wallet from processing their PII entirely or for specific
            purposes as detailed in this Policy. However, Skill Wallet retains
            the right to process such PII if required by applicable laws or to
            defend against any legal claims.
          </p>
          <p className="pt-4">
            The Right to Object to Processing: Users have the right to object to
            our processing of their personal data for one or more purposes. Any
            formal objection from a User will be recorded, analyzed, and
            necessary actions will be taken within reasonable time limits.
          </p>
          <p className="pt-4">
            The Right to Withdraw Consent: The processing of personal
            information by Skill Wallet is conditional upon the requisite
            consent being provided by the User. Users have the right to withdraw
            such consent at any time should they choose to revoke permission for
            Skill Wallet to process their PII.
          </p>
          <p className="pt-4">
            Access to Information: Users have the right to request confirmation
            regarding whether their personal information is being processed. If
            so, Users have the right to access their personal information and
            obtain a copy of it, along with details on how it is processed.
          </p>
          <p className="pt-4">
            Users may update or modify their contact information and user
            preferences by emailing us at{" "}
            <Link
              href="mailto:skillwallet@thesmartbridge.com
"
              className=" px-1  font-medium whitespace-nowrap transition-colors"
            >
              skillwallet@thesmartbridge.com
            </Link>
            .
          </p>
          <p className="pt-4 text-lg font-semibold">21. Security Measures</p>
          <p>
            Skill Wallet has implemented a variety of physical, electronic, and
            managerial procedures to safeguard and secure the information we
            collect. For example, we utilize strong encryption methods to store
            certain information and maintain stringent managerial checks and
            password change policies. The information we collect is stored with
            third-party data centers that adhere to a comprehensive security
            model featuring multiple layers of protection. Please be aware that
            Skill Wallet shall not be liable for any misuse or loss of
            information that may occur at these third-party data centers.
            Additionally, we rely on the robust security features of your mobile
            devices to ensure that there is no information or security leak,
            unless intentionally processed for authentication purposes.
          </p>
          <p className="pt-4">
            However, while we implement numerous security measures on this site,
            we cannot guarantee 100% security.
          </p>
          <p className="pt-4 text-lg font-semibold">
            22. Contact Information for Privacy Inquiries
          </p>
          <p>
            If you have any questions regarding this Privacy Policy or Skill
            Wallet’s processes for information collection, use, and disclosure
            practices, please feel free to contact us at{" "}
            <Link
              href="mailto:skillwallet@thesmartbridge.com
"
              className=" px-1  font-medium whitespace-nowrap transition-colors"
            >
              skillwallet@thesmartbridge.com
            </Link>
            . We will make reasonable efforts to respond promptly to any
            requests, questions, or concerns you may have regarding our use of
            your information. Except where required by law, Skill Wallet cannot
            guarantee a response to inquiries or comments regarding topics
            unrelated to this policy or Skill Wallet’s privacy practices.
          </p>
          <p className="pt-4 font-semibold text-lg">
            22. Modifications to Our Privacy Policy
          </p>
          <p>
            This Privacy Policy is subject to change from time to time, and any
            modifications will be posted on our Platform for your reference.
            Changes to this Privacy Policy will take effect immediately upon
            being posted on this page. By accessing the Platform, you indicate
            your agreement to the modified Privacy Policy and all changes
            therein. We encourage you to periodically return to this page to
            ensure your familiarity with the most current version of this
            Privacy Policy.
          </p>
          <p className="pt-4 font-semibold text-lg">24. Governing Law</p>
          <p>
            This Privacy Policy is an integral part of our Terms of Use and is
            governed by and construed in accordance with the laws of India.
          </p>
          <p className="pt-4 text-lg font-semibold">
            25. Additional Provisions
          </p>
          <p>
            The additional provisions outlined in our Terms of Use shall also
            apply to this Privacy Policy.
          </p>

          <p className="pt-4 text-lg font-semibold">
            26. Communication Policy for Do Not Disturb (DND) and Do Not Call
            (DNC)
          </p>
          <p>
            By accessing our Website and/or registering with Skill Wallet, you
            grant us permission to contact you via email, phone calls, or SMS.
            This communication may include information about our services,
            product knowledge, and promotional offers available on our website,
            as well as offers from our affiliated third parties. To facilitate
            this, we may collect Personally Identifiable Information (PII).
          </p>
          <p className="pt-4">
            Even if you are registered with the Do Not Disturb (DND), Do Not
            Call (DNC), or National Customer Preference Register (NCPR)
            services, you authorize Skill Wallet to reach out to you for the
            purposes mentioned above for a duration of 365 days from the date of
            your registration with us. This Privacy Policy outlines how Skill
            Wallet handles PII collected when you visit the Skill Wallet site
            and when you utilize our services. It also encompasses the treatment
            of PII shared with us by our business partners.
          </p>
          <p className="pt-4">
            Please note that this policy does not apply to certain Skill Wallet
            products or services, visits to Skill Wallet pages, or participation
            in promotions. Skill Wallet may also receive PII from our business
            partners. During the registration process, we will request your
            first name, last name, contact number, and email address. Once you
            register and log in to our services, you will not be considered
            anonymous to us. Additionally, during registration, you may be asked
            to provide your mobile phone number and email address, pager, or
            other devices to receive text messages and other services on your
            wireless device. By completing your registration, you consent to
            receive SMS/email alerts regarding your login details, service
            requirements, and promotional messages from us.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
