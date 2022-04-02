import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./assets/custom-style.css";

import Child1 from "./components/Child1";
import LTA_DataMall_TaxiStands from "./data/LTA_DataMall_TaxiStands";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const filterOnlyTaxi = () => {
    let tempArr = [];
    for (const taxi of LTA_DataMall_TaxiStands.value) {
      if (taxi.Ownership === "Private") {
        tempArr.push(taxi);
      }
    }
    return tempArr;
  }

  return (
    <Box style={{height: 600}}
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
        style={{width: '20%'}}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0} style={{width: '80%'}}>
        <Child1 listTaxi={filterOnlyTaxi()} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div style={{display: 'flex'}}>
            <div>
                <label>Filter 1:</label><br />
                <select className="form-control">
                    <option>Select </option>
                </select>
            </div>

            <div>
                <label>Filter 2:</label><br />
                <select className="form-control">
                    <option>Select </option>
                </select>
            </div>
        </div>
        <div>Result</div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div style={{display: 'flex'}}>
            <div>
                <label>Filter 1:</label><br />
                <select className="form-control">
                    <option>Select </option>
                </select>
            </div>

            <div>
                <label>Filter 2:</label><br />
                <select className="form-control">
                    <option>Select </option>
                </select>
            </div>
        </div>
        <div>Result</div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div style={{display: 'flex'}}>
            <div>
                <label>Filter 1:</label><br />
                <select className="form-control">
                    <option>Select </option>
                </select>
            </div>

            <div>
                <label>Filter 2:</label><br />
                <select className="form-control">
                    <option>Select </option>
                </select>
            </div>
        </div>
        <div>Result</div>
      </TabPanel>
    </Box>
  );
}
