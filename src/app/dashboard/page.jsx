import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Image from 'next/image';

const Dashboard = () => {
    return (
        <div>
            <Tabs
                aria-label="Vertical tabs"
                orientation="vertical"
            >
                <TabList className="tab_list">
                    <Tab className="tab_btns">
                        <Image width={40} height={40} src={"/images/hp.png"} alt='icon' />
                        <div className='ms-2'>
                            <h2>Optimise Your Ratings & Reviews1</h2>
                            <p>If you’re suffering from unwanted online content and feeling powerless to fight back, you’re not alone. </p>
                        </div>
                    </Tab>
                    <Tab className="tab_btns">
                    <Image width={40} height={40} src={"/images/hp.png"} alt='icon' />
                        <div className='ms-2'>
                            <h2>Optimise Your Ratings & Reviews2</h2>
                            <p>If you’re suffering from unwanted online content and feeling powerless to fight back, you’re not alone. </p>
                        </div>
                    </Tab>
                    <Tab className="tab_btns">
                    <Image width={40} height={40} src={"/images/hp.png"} alt='icon' />
                        <div className='ms-2'>
                            <h2>Optimise Your Ratings & Reviews3</h2>
                            <p>If you’re suffering from unwanted online content and feeling powerless to fight back, you’re not alone. </p>
                        </div>
                    </Tab>
                </TabList>
                <TabPanel value={0}>
                    <Image width={610} height={400} src={"/images/tab-image1.webp"} alt='icon' />
                </TabPanel>
                <TabPanel value={1}>
                    <Image width={610} height={400} src={"/images/tab-image2.webp"} alt='icon' />
                </TabPanel>
                <TabPanel value={2}>
                    <Image width={610} height={400} src={"/images/dell.png"} alt='icon' />
                </TabPanel>
            </Tabs>


        </div>
    )
}

export default Dashboard