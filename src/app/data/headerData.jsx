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
                        slug: "/service/push-down-results"
                    },
                    {
                        id: 312,
                        icon: "/images/header/reviewManagement.png",
                        title: "Improve Reviews",
                        subtitle: "engine-optimization",
                        slug: "/improve-reviews"
                    },
                    {
                        id: 313,
                        icon: "/images/header/correctInfoOnline.png",
                        title: "Correct Information Online",
                        subtitle: "search-engine",
                        slug: "/correct-information-online"
                    },
                    {
                        id: 314,
                        icon: "/images/header/improveResults.png",
                        title: "Remove Results ",
                        subtitle: "search-optimization",
                        slug: "/remove-results"
                    },
                    {
                        id: 315,
                        icon: "/images/header/knowlagePanel.png",
                        title: "Knowledge Panel",
                        subtitle: "search-optimization",
                        slug: "/knowledge-panel"
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
                        slug: "/legal"
                    },
                    {
                        id: 322,
                        icon: "/images/header/architect.png",
                        title: "Construction",
                        subtitle: "engine-optimization",
                        slug: "/construction"
                    },
                    {
                        id: 323,
                        icon: "/images/header/storefront.png",
                        title: "Retail",
                        subtitle: "search optimization",
                        slug: "/retail"
                    },
                    {
                        id: 324,
                        icon: "/images/header/retail-store.png",
                        title: "Automotive",
                        subtitle: "search-optimization",
                        slug: "/automotive"
                    },
                    {
                        id: 325,
                        icon: "/images/header/vip.png",
                        title: "VIPs",
                        subtitle: "engine-optimization",
                        slug: "/vips"
                    },
                    {
                        id: 326,
                        icon: "/images/header/actor.png",
                        title: "Celebrities",
                        subtitle: "engine-optimization",
                        slug: "/celebrities"
                    },
                    {
                        id: 327,
                        icon: "/images/header/healthcare.png",
                        title: "Healthcare",
                        subtitle: "search-engine",
                        slug: "/healthcare"
                    },
                    {
                        id: 328,
                        icon: "/images/header/bitcoin.png",
                        title: "Cryptocurrency",
                        subtitle: "search optimization",
                        slug: "/cryptocurrency"
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
                        slug: "/glassdoor"
                    },
                    {
                        id: 332,
                        title: "Google My Business",
                        icon: "/images/header/googleBusiness.png",
                        subtitle: "search-engine",
                        slug: "/google-my-business"
                    },
                    {
                        id: 333,
                        title: "Mouthshut",
                        icon: "/images/header/mouthshut.svg",
                        subtitle: "search-engine",
                        slug: "/mouthshut"
                    },
                    {
                        id: 334,
                        title: "Trustpilot",
                        icon: "/images/header/trustpilot.svg",
                        subtitle: "search-engine",
                        slug: "/trustpilot"
                    },
                    {
                        id: 335,
                        title: "Quora",
                        icon: "/images/header/quora.png",
                        subtitle: "search-engine",
                        slug: "/quora"
                    },
                    {
                        id: 336,
                        title: "Indeed",
                        icon: "/images/header/indeed.svg",
                        subtitle: "search-engine",
                        slug: "/indeed"
                    },
                    {
                        id: 337,
                        title: "Ambititon Box",
                        icon: "/images/header/ambitionbox.svg",
                        subtitle: "search-engine",
                        slug: "/ambititon-box"
                    },
                    {
                        id: 338,
                        title: "TimesJob",
                        icon: "/images/header/timesjob.svg",
                        subtitle: "search-engine",
                        slug: "/timesJob"
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
                        slug: "/corporate-reputation-management"
                    },
                    {
                        id: 342,
                        title: "Individuals Reputation Management",
                        icon: "/images/header/businessman.png",
                        subtitle: "search-engine",
                        slug: "/individuals-reputation-management"
                    },
                    {
                        id: 343,
                        title: "Business Reputation Management",
                        icon: "/images/header/business.png",
                        subtitle: "search-engine",
                        slug: "/business-reputation-management"
                    },
                    // Add more subLinks as needed
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
        icon: <BsChatRightQuoteFill />,
        target: "_blank",
        btnClass: "navButton",
        title: "Get a Quote",
        link: "/getAQuote"
    }
];
