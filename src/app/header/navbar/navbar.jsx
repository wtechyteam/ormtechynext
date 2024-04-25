'use client'
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import { Drawer } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { headerData } from "@/app/data/headerData";
import Image from "next/image";

const HeaderInner = () => {

  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState();
  const [activeSubHover, setActiveSubHover] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
              <>
                <li
                  key={index}
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
                        {item.subMenu.map((menuItem, index) => (
                          <>
                            <div key={index} className="hover_box_layout">
                              <div className=" tab_box_col" lg={4}>
                                <div
                                  className="child_hover_btn "
                                  onMouseEnter={() => handleChildNavHover(index)}
                                  onMouseLeave={handleChildNavLeave}
                                >
                                  <h6 className="text-16 fw-semibold ">{menuItem.subTitle}</h6>
                                  <p className="text-16 ">{menuItem.info}</p>
                                </div>
                              </div>
                              <div lg={8} className="child_hover_data_position data_box_col">
                                {menuItem.subLinks && activeSubHover === index &&
                                  <>
                                    {menuItem.subLinks.map((item) => (
                                      <div className="child_hover_data" key={item.id}>
                                        <Image className="me-2" width={40} height={40} src={item.icon} alt="icon" />
                                        <div>
                                          <h6 className="text-16 fw-semibold ">{item.title}</h6>
                                          <p className="text-16 mb-0">{item.subtitle}</p>
                                        </div>
                                      </div>
                                    ))}
                                  </>
                                }
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* ----------------------------------------------------------- */}

                </li>
              </>
            )
          })}
        </ul>
      </nav>


      {/* ******************toggle-menu******************** */}
      <div onClick={toggleMenu}><HiOutlineMenuAlt1 className="menu_toggle_btn" /></div>
      <Drawer open={isMenuOpen} onClose={toggleMenu}>
        hello
      </Drawer>
      {/*------------------------------------------------------*/}
    </div>
  );
};

export default HeaderInner;
