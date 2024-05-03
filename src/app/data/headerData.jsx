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
        link: "/pages/aboutPage",
        metaTitle: 'About Agency - WTechy',
        metaDescription: 'We maximize your business potential'
    },
    {
        id: 3,
        icon: <MdHomeRepairService />,
        title: "Services",
        link: "/pages/service",
        ServiceClass: "active_service",
        menuType: "submenu",
        metaTitle: 'service df',
        metaDescription: 'We maximize your business potential',
        subMenu: [
            {
                id: 111,
                subTitle: "Seo Services",
                info: "Remove & suppress negative search results",
                subLinks: [
                    {
                        id: 100,
                        icon: "/images/Google-logo.png",
                        title: "search engine ",
                        subtitle: "search optimization",
                        link: "service/search-engine-optimization"
                    },
                    {
                        id: 200,
                        icon: "/images/Google-logo.png",
                        title: "social media ",
                        subtitle: "engine-optimization",
                        link: "service/social-media-optimization"
                    },
                    {
                        id: 300,
                        icon: "/images/Google-logo.png",
                        title: "google ads ",
                        subtitle: "search-engine",
                        link: "service/google-ads-management"
                    },
                    {
                        id: 400,
                        icon: "/images/Google-logo.png",
                        title: "content ",
                        subtitle: "search-optimization",
                        link: "service/content-marketing"
                    }
                ]
            },

            {
                id: 112,
                subTitle: "E-commerce Store",
                info: "Remove & suppress negative results",
                subLinks: [
                    {
                        id: 700,
                        icon: "/images/Google-logo.png",
                        title: "Amazon Store ",
                        subtitle: "search-optimization",
                        link: "service/amazon-store-management"
                    },
                    {
                        id: 800,
                        icon: "/images/Google-logo.png",
                        title: "Ebay Store ",
                        subtitle: "engine-optimization",
                        link: "service/ebay-store-management"
                    },
                    {
                        id: 900,
                        icon: "/images/Google-logo.png",
                        title: "Shopify Store ",
                        subtitle: "search-engine",
                        link: "service/shopify-store-management"
                    },
                    {
                        id: 1000,
                        icon: "/images/Google-logo.png",
                        title: "Custom E-Commerce Store ",
                        subtitle: "search optimization",
                        link: "service/custom-e-commerce-store-management-2"
                    },
                    {
                        id: 71,
                        icon: "/images/Google-logo.png",
                        title: "Amazon Store ",
                        subtitle: "search-optimization",
                        link: "service/amazon-store-management"
                    },
                    {
                        id: 81,
                        icon: "/images/Google-logo.png",
                        title: "Ebay Store ",
                        subtitle: "engine-optimization",
                        link: "service/ebay-store-management"
                    },
                    {
                        id: 91,
                        icon: "/images/Google-logo.png",
                        title: "Shopify Store ",
                        subtitle: "search-engine",
                        link: "service/shopify-store-management"
                    },
                    {
                        id: 101,
                        icon: "/images/Google-logo.png",
                        title: "Custom E-Commerce Store ",
                        subtitle: "search optimization",
                        link: "service/custom-e-commerce-store-management-2"
                    },
                    {
                        id: 10001,
                        icon: "/images/Google-logo.png",
                        title: "Custom E-Commerce Store ",
                        subtitle: "search optimization",
                        link: "service/custom-e-commerce-store-management-2"
                    },
                    {
                        id: 711,
                        icon: "/images/Google-logo.png",
                        title: "Amazon Store ",
                        subtitle: "search-optimization",
                        link: "service/amazon-store-management"
                    },
                    {
                        id: 811,
                        icon: "/images/Google-logo.png",
                        title: "Ebay Store ",
                        subtitle: "engine-optimization",
                        link: "service/ebay-store-management"
                    },
                    {
                        id: 911,
                        icon: "/images/Google-logo.png",
                        title: "Shopify Store ",
                        subtitle: "search-engine",
                        link: "service/shopify-store-management"
                    },
                    {
                        id: 1011,
                        icon: "/images/Google-logo.png",
                        title: "Custom E-Commerce Store ",
                        subtitle: "search optimization",
                        link: "service/custom-e-commerce-store-management-2"
                    },
                ]
            },
            {
                id: 113,
                subTitle: "Repair Reputation",
                info: "Remove & suppress negative search",
                subLinks: [
                    {
                        id: 5,
                        title: "Corporate",
                        icon: "/images/Google-logo.png",
                        subtitle: "search-engine",
                        link: "service/repair-online-reputation-corporate"
                    },
                    {
                        id: 6,
                        title: "Personal",
                        icon: "/images/Google-logo.png",
                        subtitle: "search-engine",
                        link: "service/repair-online-reputation-personal"
                    },
                    {
                        id: 61,
                        title: "Personal1",
                        icon: "/images/Google-logo.png",
                        subtitle: "search-engine",
                        link: "service/repair-online-reputation-personal"
                    },
                ]
            },
        ]
    },
    {
        id: 4,
        icon: <BiSolidContact />,
        title: "Contact",
        link: "/pages/contact",
    },
    {
        id: 5,
        icon: <BsChatRightQuoteFill />,
        btnClass: "navButton",
        title: "Get a Quote",
        link: "/pages/getAQuote"
    }

]