import ImageInfoWrap from '@/common/imageInfoWrap'
import { Tab, TabList, TabPanel, Tabs } from '@mui/joy'
import Image from 'next/image'
import React from 'react'

const HomeSection8 = () => {
    return (
        <section className='sectionPadding'>
            <div className='custom_tab_design'>
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
                       isReverse={true}
                       imageUrl={"/images/google-2.webp"}
                       title={"Disgruntled with the debt collector"}
                       description={"<p>Chasing delinquent customers for unpaid bills is a thankless task – in fact, the better you are at it, the more enemies you make. This global company based in Melbourne was being destroyed by negative reviews on Google Maps, for simply doing their job. Our team went to work, removing 32 unfair negative reviews in a little over 2 weeks.</p>"}
                       showPrimeBtn={true}
                       primeBtnName={"remove google reviews"}
                       />
                    </TabPanel>
                    <TabPanel value={1}>
                    <ImageInfoWrap 
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