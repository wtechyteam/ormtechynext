'use client'
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import { Drawer } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Image from "next/image";
import { headerData } from "@/app/data/headerData";
import { IoClose } from "react-icons/io5";
import { Accordion, Offcanvas } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa6";

const HeaderInner = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState();
  const [serviceLink, setServiceLink] = useState();
  const [activeSubHover, setActiveSubHover] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setServiceMenuOpen(false);
  };
  const serviceToggleMenuOpen = (id) => {
    setServiceMenuOpen(true);
    setServiceLink(id);
  };
  const serviceToggleMenuClose = () => {
    setServiceMenuOpen(false);
  };

  //  ********************hover-function**********************
  const handleParentNavHover = (index) => {
    setActiveLink(index);
  };
  const handleParentNavLeave = () => {
    setActiveLink(null);
  };

  const handleChildNavHover = (index) => {
    setActiveSubHover(index);
  };
  const handleChildNavLeave = () => {
    setActiveSubHover(null);
  };
  // ----------------------------------------------------------

  const getServiceTitle = () => {
    for (const item of headerData) {
      if (item.subMenu) {
        const menu = item.subMenu.find((menu) => menu.id === serviceLink);
        if (menu) {
          return menu.subTitle;
        }
      }
    }
    return '';
  };

  return (
    <div className="navWrap position-relative">
      <nav className="nav_items">
        <ul className="navList">
          {headerData && headerData.map((item, index) => (
            <li
              key={item.id}
              className={(pathname == item.link) ? "active" : ""}
              onMouseEnter={() => handleParentNavHover(index)}
              onMouseLeave={handleParentNavLeave}
            >
              <Link className={item.btnClass ? item.btnClass : "navLink"} href={item.link} target={item.target ? item.target : null} replace scroll={true}>
                {item.title}{item.menuType ? <IoIosArrowDown className="ms-1" /> : null}
              </Link>

              {/* ***********************hover-service-menu***************** */}
              {item.subMenu && activeLink === index && (
                <div className="megaMenuWrapper">
                  <div className="megaMenuWrap position-relative">
                    {item.subMenu.map((menuItem, index) => (
                      <div key={menuItem.id} className="menuTab">
                        <div className="tab_box_col" lg={4}>
                          <div className={activeSubHover === index ? "active_tab child_hover_btn" : "child_hover_btn"}
                            onMouseEnter={() => handleChildNavHover(index)}
                          >
                            <Link href={menuItem.link}>
                              <h6 className="text-16 fw-semibold ">{menuItem.subTitle}</h6>
                              {/* <p className="text-16 ">{menuItem.info}</p> */}
                            </Link>
                          </div>
                        </div>
                        <div lg={8} className="child_hover_data_position data_box_col">
                          {menuItem.subLinks && activeSubHover === index &&
                            <>
                              {menuItem.subLinks.map((item) => (
                                <Link href={`service/${item.slug}`} className="child_hover_data" key={item.id}>
                                  <Image className="me-2" width={40} height={40} src={item.icon} title={item.title} alt={item.title} />
                                  <div>
                                    <h6 className="text-16 fw-semibold ">{item.title}</h6>
                                    {/* <p className="text-16 mb-0">{item.subtitle}</p> */}
                                  </div>
                                </Link>
                              ))}
                            </>
                          }
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* ----------------------------------------------------------- */}
            </li>
          ))}
        </ul>
      </nav>

      {/* ******************toggle-menu******************** */}
      <div onClick={() => toggleMenu()}><HiOutlineMenuAlt1 className="menu_toggle_btn" /></div>
      <Drawer open={isMenuOpen} onClose={() => toggleMenu()} PaperProps={{ sx: { width: "90%" } }}>
        <div className="d-flex justify-content-between mb-3">
          <Image className="responsive_img p-2" width={70} height={50} src={"/images/ormLogo.svg"} alt="ORM Techies" />
          <span className="close_button"><IoClose onClick={() => toggleMenu()} /></span>
        </div>
        <nav className="mobile-menu">
          <ul className="mobile-nav_list">
            {headerData && headerData.map((item, index) => (
              <li
                key={item.id}
                className={(pathname == item.link) ? "mobile-active_menu" : ""}
              >

                {/* ***********************hover-service-menu***************** */}
                {item.menuType ? (
                  <Accordion className="mobile-accordion_menu">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><span className="mobile-icon mb-2">{item.icon}</span>{item.title}</Accordion.Header>
                      <Accordion.Body>
                        {item.subMenu.map((menuItem, index) => (
                          <div key={menuItem.id} className="hover_box_layout">
                            <div onClick={() => serviceToggleMenuOpen(menuItem.id)} className={serviceLink === menuItem.id ? "activeServiceLink serviceLink" : "serviceLink"}>
                              <Link href={menuItem.link} className="service_links" >
                                <h6 className="text-16 fw-semibold ">{menuItem.subTitle}</h6>
                                <p className="text-16 ">{menuItem.info}</p>
                              </Link>
                              <div className="ms-auto"><FaArrowLeft /></div>
                            </div>
                            {serviceLink === menuItem.id && (
                              <div className="service_child_link">
                                {menuItem.subLinks.map((subItem, subIndex) => (
                                  <Link href={`service/${subItem.slug}`} key={subItem.id} className="service_links">
                                    <Image className="me-2" width={40} height={40} src={subItem.icon} title={subItem.title} alt={subItem.title} />
                                    <div>
                                      <h6 className="text-16 fw-semibold ">{subItem.title}</h6>
                                      <p className="text-16 mb-0">{subItem.subtitle}</p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                ) : (
                  <Link  className={item.btnClass ? item.btnClass : "service_links"} href={item.link} target={item.target ? item.target : null} replace scroll={true}>
                    {item.icon}
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
      <Offcanvas className="offcanvas_wrap" show={serviceMenuOpen} onHide={serviceToggleMenuClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {getServiceTitle()}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {headerData.map((item) =>
            item.subMenu?.find((menu) => menu.id === serviceLink)?.subLinks.map((subItem, subIndex) => (
              <Link href={`service/${subItem.slug}`} key={subItem.id} className="canvas_link">
                <Image className="me-2" width={40} height={40} src={subItem.icon} title={subItem.title} alt={subItem.title} />
                <div>
                  <h6 className="text-16 fw-semibold ">{subItem.title}</h6>
                  <p className="text-16 mb-0">{subItem.subtitle}</p>
                </div>
              </Link>
            ))
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default HeaderInner;
