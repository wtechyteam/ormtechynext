'use client'
import React from "react";
import Head from "next/head"; // Import Next.js Head for meta tags
import "./homePageStyle.scss";
import { homepageMetaData } from './homepageMetaData';
import { useMounted } from "./../../common/unmounted";
import HomeSection1 from "./homeSection1";
import HomeSection2 from "./homeSection2";
import HomeSection3 from "./homeSection3";
import HomeSection4 from "./homeSection4";
import HomeSection5 from "./homeSection5";
import HomeSection6 from "./homeSection6";
import HomeSection7 from "./homeSection7";
import HomeSection8 from "./homeSection8";
import HomeSection9 from "./homeSection9";
import HomeSection10 from "./homeSection10";
import HomeFaq from "./homeFaq";

const HomePage = () => {
  const mounted = useMounted();
  const metadata = homepageMetaData();

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>Online Reputation Management Services | ORM Techies</title>
        <meta name="description" content="Trusted Online Reputation Management Services by ORM Techies. Specializing in personal branding, reputation repair, and proactive management. Contact us now!" />
        
        {/* Adding structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does it take to see results from your reputation management services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our timeline for delivering results varies depending on the nature of your online reputation issues. However, we strive to implement effective strategies promptly to ensure noticeable improvements within a reasonable timeframe."
                }
              },
              {
                "@type": "Question",
                "name": "Can you remove negative content from search engine results completely?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While we cannot guarantee the complete removal of negative content, we employ various strategies, such as suppression and mitigation, to minimize its visibility and impact on your online reputation."
                }
              },
              {
                "@type": "Question",
                "name": "How do you handle online reviews on different platforms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We have specialized teams dedicated to monitoring and managing online reviews across various platforms. We respond promptly to feedback, address concerns, and work towards resolving any issues to maintain a positive online reputation."
                }
              },
              {
                "@type": "Question",
                "name": "Is ORM only for businesses, or can individuals benefit from it as well?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Both businesses and individuals can benefit from ORM services. Whether you're a professional seeking to enhance your personal brand or a business aiming to protect its online image, our services are tailored to meet your specific needs."
                }
              },
              {
                "@type": "Question",
                "name": "How much do ORM Techies' services cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The cost of our services depends on various factors, including the scope of work, the complexity of your online reputation issues, and the duration of the engagement. Contact us today for a personalized quote based on your requirements."
                }
              }
            ]
          })}
        </script>
      </Head>
      
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection10 />
      <HomeFaq />
      <HomeSection6 />
      <HomeSection7 />
      <HomeSection8 />
      <HomeSection9 />
    </>
  );
};

export default HomePage;
