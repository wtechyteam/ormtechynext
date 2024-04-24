import ImageInfoWrap from '@/common/imageInfoWrap'
import { Tab, TabList, TabPanel, Tabs } from '@mui/joy'
import Image from 'next/image'
import React from 'react'

const HomeSection8 = () => {
    return (
        <section className='sectionPadding'>
            <div className='custom_tab_design'>
              <h2 className='title-xl text-center dark_font font_700 mb-5'>Case Studies</h2>
                <Tabs aria-label="Basic tabs" defaultValue={0}>
                    <TabList className="tab_list item_center pt-0 pb-0">
                        <Tab className="tab_name">
                            <Image className='tab_img' width={100} height={100} src={"/images/Google_Maps_icon_2020.png"} alt='icon' />
                            google maps
                        </Tab>
                        <Tab className="tab_name">
                            <Image className='tab_img' width={100} height={100} src={"/images/Glassdoor.png"} alt='icon' />
                            glassdoor
                        </Tab>
                        <Tab className="tab_name right_border">
                            <Image className='tab_img' width={100} height={100} src={"/images/product-icon.png"} alt='icon' />
                            product review
                        </Tab>
                    </TabList>
                    <TabPanel value={0}>
                        <ImageInfoWrap
                            iconData={true}
                            reviewData={true}
                            isReverse={true}
                            imageUrl={"/images/google-2.webp"}
                            title={"Take Control of Your Online Story"}
                            description={"<p>Your online reputation matters more than ever in today's digital landscape. At ORM Techies, we provide you with <strong>reputation services</strong> and are dedicated to helping you control and optimize your digital presence. Whether you're an individual or a business, our tailored online reputation management solutions empower you to shape a positive online narrative that resonates with your audience.</p>"}
                            showPrimeBtn={true}
                            primeBtnName={"remove google reviews"}
                        />
                    </TabPanel>
                    <TabPanel value={1}>
                        <ImageInfoWrap
                            iconData={true}
                            isReverse={true}
                            imageUrl={"/images/glassdoor.webp"}
                            title={"Removing a recruitment headache"}
                            description={"<p>A good company knows who to hire, and who to fire. Unfortunately this leads to disgruntled ex-employees that can make even an award-winning workplace sound like a sweatshop in China. Removing this biased and exaggerated review from Glassdoor helped this Sydney software company to start attracting star talent again.</p>"}
                            showPrimeBtn={true}
                            primeBtnName={"remove from glassdoor"}
                        />
                    </TabPanel>
                    <TabPanel value={2}>
                        <ImageInfoWrap
                            iconData={true}
                            isReverse={true}
                            imageUrl={"/images/product-img.webp"}
                            title={"Fake reviews causing financial blues"}
                            description={"<p>What’s the difference between a product rating of 3 stars versus 5 stars? For this Brisbane retailer, the answer is about $70,000 per month in sales revenue. In a crowded industry, aggressive competitors were posting fake reviews on a weekly basis. With our help the culprits were identified, reviews removed, and reputation restored.</p>"}
                            showPrimeBtn={true}
                            primeBtnName={"remove a product reviews"}
                        />
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    )
}

export default HomeSection8