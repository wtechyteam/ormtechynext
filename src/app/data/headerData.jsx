import { IoHome } from "react-icons/io5";
import { AiFillInfoCircle } from "react-icons/ai";
import { MdHomeRepairService } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { BsChatRightQuoteFill } from "react-icons/bs";

export const headerData = [
    {
        id: 1,
        icon: <IoHome />,
        title: "Home",
        link: "/",
        metaTitle: 'WTechy: Digital Marketing Agency | Website Development, SEO',
        metaDescription: 'We maximize your business potential',
    },
    {
        id: 2,
        icon: <AiFillInfoCircle />,
        title: "About",
        link: "/about-us",
        metaTitle: 'About Agency - WTechy',
        metaDescription: 'We maximize your business potential'
    },
    {
        id: 3,
        icon: <MdHomeRepairService />,
        title: "Services",
        link: "/service",
        ServiceClass: "active_service",
        menuType: "submenu",
        metaTitle: 'service df',
        metaDescription: 'We maximize your business potential',
        subMenu: [
            {
                id: 31,
                subTitle: "Reputation Repair ",
                link: "/service/reputation-repair",
                info: "Remove & suppress negative search results",
                subLinks: [
                    {
                        id: 311,
                        icon: "/images/header/pushDown.png",
                        title: "Push Down Results",
                        subtitle: "search optimization",
                        slug: "/service/reputation-repair/push-down-results"
                    },
                    {
                        id: 312,
                        icon: "/images/header/reviewManagement.png",
                        title: "Improve Reviews",
                        subtitle: "engine-optimization",
                        slug: "/service/reputation-repair/improve-reviews"
                    },
                    {
                        id: 313,
                        icon: "/images/header/correctInfoOnline.png",
                        title: "Correct Information Online",
                        subtitle: "search-engine",
                        slug: "/service/reputation-repair/correct-information-online"
                    },
                    {
                        id: 314,
                        icon: "/images/header/improveResults.png",
                        title: "Remove Results ",
                        subtitle: "search-optimization",
                        slug: "/service/reputation-repair/remove-results"
                    },
                    {
                        id: 315,
                        icon: "/images/header/knowlagePanel.png",
                        title: "Knowledge Panel",
                        subtitle: "search-optimization",
                        slug: "/service/reputation-repair/knowledge-panel"
                    }
                ]
            },
            {
                id: 32,
                subTitle: "Personal Branding",
                info: "Remove & suppress negative results",
                link: "/service/personal-branding",
                subLinks: [
                    {
                        id: 321,
                        icon: "/images/header/feature1.png",
                        title: "Legal",
                        subtitle: "search-optimization",
                        slug: "/service/personal-branding/legal-reputation-management"
                    },
                    {
                        id: 322,
                        icon: "/images/header/architect.png",
                        title: "Construction",
                        subtitle: "engine-optimization",
                        slug: "/service/personal-branding/construction-reputation-management"
                    },
                    {
                        id: 323,
                        icon: "/images/header/storefront.png",
                        title: "Retail",
                        subtitle: "search optimization",
                        slug: "/service/personal-branding/retail-reputation-management"
                    },
                    {
                        id: 324,
                        icon: "/images/header/retail-store.png",
                        title: "Automotive",
                        subtitle: "search-optimization",
                        slug: "/service/personal-branding/automotive-reputation-management"
                    },
                    {
                        id: 325,
                        icon: "/images/header/vip.png",
                        title: "VIPs",
                        subtitle: "engine-optimization",
                        slug: "/service/personal-branding/vip-reputation-management"
                    },
                    {
                        id: 326,
                        icon: "/images/header/actor.png",
                        title: "Celebrities",
                        subtitle: "engine-optimization",
                        slug: "/service/personal-branding/celebrities-reputation-management"
                    },
                    {
                        id: 327,
                        icon: "/images/header/healthcare.png",
                        title: "Healthcare",
                        subtitle: "search-engine",
                        slug: "/service/personal-branding/healthcare-reputation-management"
                    },
                    {
                        id: 328,
                        icon: "/images/header/bitcoin.png",
                        title: "Cryptocurrency",
                        subtitle: "search optimization",
                        slug: "/service/personal-branding/cryptocurrency-reputation-management"
                    }
                ]
            },
            {
                id: 33,
                subTitle: "Review Management",
                link: "/service/review-management",
                info: "Remove & suppress negative search",
                subLinks: [
                    {
                        id: 331,
                        title: "Glassdoor",
                        icon: "/images/header/glassdoor.svg",
                        subtitle: "search-engine",
                        slug: "/service/review-management/remove-glassdoor-reviews"
                    },
                    {
                        id: 332,
                        title: "Google My Business",
                        icon: "/images/header/googleBusiness.png",
                        subtitle: "search-engine",
                        slug: "/service/review-management/remove-google-my-business-review"
                    },
                    {
                        id: 333,
                        title: "Mouthshut",
                        icon: "/images/header/mouthshut.svg",
                        subtitle: "search-engine",
                        slug: "/service/review-management/mouthshut-review-management"
                    },
                    {
                        id: 334,
                        title: "Trustpilot",
                        icon: "/images/header/trustpilot.svg",
                        subtitle: "search-engine",
                        slug: "/service/review-management/trustpilot-review-removal"
                    },
                    {
                        id: 335,
                        title: "Quora",
                        icon: "/images/header/quora.png",
                        subtitle: "search-engine",
                        slug: "/service/review-management/quora-negative-content-management"
                    },
                    {
                        id: 336,
                        title: "Indeed",
                        icon: "/images/header/indeed.svg",
                        subtitle: "search-engine",
                        slug: "/service/review-management/indeed-review-removal"
                    },
                    {
                        id: 337,
                        title: "Ambititon Box",
                        icon: "/images/header/ambitionbox.svg",
                        subtitle: "search-engine",
                        slug: "/service/review-management/ambititon-box-reviews-removal"
                    },
                    {
                        id: 338,
                        title: "TimesJob",
                        icon: "/images/header/timesjob.svg",
                        subtitle: "search-engine",
                        slug: "/service/review-management/timesJob-review-management"
                    },
                    
                    // Add more subLinks as needed
                ]
            },
            {
                id: 34,
                subTitle: "Reputation Management",
                link: "/service/reputation-management",
                info: "Remove & suppress negative search",
                subLinks: [
                    {
                        id: 341,
                        title: "Corporate Reputation Management",
                        icon: "/images/header/company.png",
                        subtitle: "search-engine",
                        slug: "/service/reputation-management/corporate-branding-services"
                    },
                    {
                        id: 342,
                        title: "Individuals Reputation Management",
                        icon: "/images/header/businessman.png",
                        subtitle: "search-engine",
                        slug: "/service/reputation-management/reputation-management-for-individuals"
                    },
                    {
                        id: 343,
                        title: "Business Reputation Management",
                        icon: "/images/header/business.png",
                        subtitle: "search-engine",
                        slug: "/service/reputation-management/reputation-management-for-business"
                    },
                    {
                        id: 344,
                        title: "Reputation Consultant",
                        icon: "/images/header/business.png",
                        subtitle: "search-engine",
                        slug: "/service/reputation-management/reputation-consultant"
                    },
                    {
                        id: 345,
                        title: "Internet Reputation Management",
                        icon: "/images/header/business.png",
                        subtitle: "search-engine",
                        slug: "/service/reputation-management/internet-reputation-management"
                    },
                    {
                        id: 346,
                        title: "Personal Reputation Management",
                        icon: "/images/header/business.png",
                        subtitle: "search-engine",
                        slug: "/service/reputation-management/personal-reputation-management"
                    },
                    {
                        id: 347,
                        title: "Senior Living Reputation Management",
                        icon: "/images/header/business.png",
                        subtitle: "search-engine",
                        slug: "/service/reputation-management/senior-living-reputation-management"
                    },
                    {
                        id: 348,
                        title: "Brand Building Agency",
                        icon: "/images/header/business.png",
                        subtitle: "search-engine",
                        slug: "/service/reputation-management/brand-building-agency"
                    },
                    {
                        id: 349,
                        title: "Brand Awareness",
                        icon: "/images/header/business.png",
                        subtitle: "search-engine",
                        slug: "/service/reputation-management/build-brand-awareness"
                    },
                    {
                        id: 350,
                        title: "Corporate Branding",
                        icon: "/images/header/business.png",
                        subtitle: "search-engine",
                        slug: "/service/reputation-management/corporate-branding-services"
                    },
                    {
                        id: 351,
                        title: "Startups Branding Services",
                        icon: "/images/header/business.png",
                        subtitle: "search-engine",
                        slug: "/service/reputation-management/startups-branding-services"
                    },
                    {
                        id: 352,
                        title: "Small Business Branding Services",
                        icon: "/images/header/business.png",
                        subtitle: "search-engine",
                        slug: "/service/reputation-management/small-business-branding-services"
                    },
                    
                ]
            },
        ]
    },
    {
        id: 4,
        icon: <BiSolidContact />,
        title: "Contact",
        link: "/contact",
    },
    {
        id: 5,
        icon: <BiSolidContact />,
        title: "Pricing",
        link: "/pricing",
    },

    {
        id: 6,
        icon: <BsChatRightQuoteFill />,
        target: "_blank",
        btnClass: "navButton",
        title: "Get a Quote",
        link: "/getAQuote"
    }
];
