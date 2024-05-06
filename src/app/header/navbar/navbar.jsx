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
    setServiceLink(id)
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

  return (
    <div className="navWrap item_center position-relative" >
      <nav className="nav_items">
        <ul className="navList">
          {headerData && headerData?.map((item, index) => {
            return (
              <li
                key={item.id}
                className={(pathname == item.link) ? "active" : ""}
                onMouseEnter={() => handleParentNavHover(index)}
                onMouseLeave={handleParentNavLeave}
              >
                <Link className={item.btnClass ? item.btnClass : "navLink"} href={item.link} replace scroll={true}>
                  {item.title}{item.menuType ? <IoIosArrowDown className="ms-1" /> : null}
                </Link>

                {/* ***********************hover-service-menu***************** */}

                {item.subMenu && activeLink === index && (
                  <div className="hover_pouse_box">
                    <div className="megaMenuWrapper position-relative">
                      <div className="background_set"></div>
                      {item.subMenu.map((menuItem, index) => (
                        <div key={menuItem.id} className="hover_box_layout">
                          <div className="tab_box_col" lg={4}>
                            <div
                              className={activeSubHover === index ? "active_tab child_hover_btn" : "child_hover_btn "}
                              onMouseEnter={() => handleChildNavHover(index)}

                            >
                              <h6 className="text-16 fw-semibold ">{menuItem.subTitle}</h6>
                              <p className="text-16 ">{menuItem.info}</p>
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
                                      <p className="text-16 mb-0">{item.subtitle}</p>
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
            )
          })}
        </ul>
      </nav>

      {/* ******************toggle-menu******************** */}

      <div onClick={() => toggleMenu()}><HiOutlineMenuAlt1 className="menu_toggle_btn" /></div>
      <Drawer open={isMenuOpen} PaperProps={{
            sx: { width: "90%" },
          }} onClose={() => toggleMenu()}>
        <span className="close_button"><IoClose onClick={() => toggleMenu()} /></span>
        <nav className="mobile-menu">
          <ul className="mobile-nav_list">
            {headerData && headerData?.map((item, index) => {
              return (
                <li
                  key={item.id}
                  className={(pathname == item.link) ? "mobile-active_menu" : ""}
                >

                  {/* ***********************hover-service-menu***************** */}
                  {item.menuType ?
                    <Accordion className="mobile-accordion_menu ">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header><span className="mobile-icon mb-2">{item.icon}</span>{item.title}</Accordion.Header>
                        <Accordion.Body>
                          {item.subMenu.map((menuItem, index) => (
                            <div key={menuItem.id} className="hover_box_layout">
                              <div onClick={() => serviceToggleMenuOpen(menuItem.id)} className={serviceLink === menuItem.id ? "active_service_tab" : ""}>
                                <h6 className="text-16 fw-semibold m-0">{menuItem.subTitle}</h6>
                                <p className="text-16 ">{menuItem.info}</p>
                              </div>
                              {serviceLink === menuItem.id &&
                                <>
                                  {/* <div className="close_bar d-flex align-items-center justify-content-between sticky-top">
                                    <div className="green_text" onClick={serviceToggleMenuClose}><FaArrowLeft /> Back</div>
                                    <span className="close_button"><IoClose onClick={() => toggleMenu()} /></span>
                                  </div> */}
                                  <div className="d-flex flex-wrap gap-2 px-2 over_flow">
                                    {menuItem.subLinks.map((item) => (
                                      <div className="d-flex mobile-service_data_link" key={item.id}>
                                        <Image className="me-2" width={30} height={30} title={item.title} src={item.icon} alt={item.title} />
                                        <div className="">
                                          <h6 className="text-16 fw-semibold m-0 max_text_200">{item.title}</h6>
                                          <p className="text-16 mb-0 max_text_200">{item.subtitle}</p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </>

                              }
                            </div>
                          ))}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion> :
                    <Link className={"nav_link"} href={item.link} replace scroll={true}>
                      <span className="mobile-icon">{item.icon}</span>
                      {item.title}
                    </Link>
                  }
                  {/* ----------------------------------------------------------- */}
                </li>
              )
            })}
          </ul>
        </nav>
      </Drawer>
      {/*------------------------------------------------------*/}
    </div>
  );
};

export default HeaderInner;
