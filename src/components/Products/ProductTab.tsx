import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductCard from './ProductCard';
import { products } from '../../data/products';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  className?: string;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', overflowX: "auto" }} className="flex flex-col items-center text-center  py-8 font-title mt-5">

    <h2 className="md:text-5xl text-3xl font-semibold  text-[#1A1A1A] mb-8">
        Our Products
      </h2>
          <Box sx={{ borderBottom: 1, borderColor:'#B68C1E'}}>
             <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  variant="scrollable" // Enables horizontal scrolling
                  scrollButtons="auto"
                  sx={{
                      '& .MuiTabs-indicator': {
                          backgroundColor: '#B68C1E', // Custom indicator color
                      },
                  }}
              >
                  <Tab
                      label="Sale"
                      {...a11yProps(0)}
                      sx={{
                          color: '#1A1A1A', // Default text color
                          fontSize: { xs: "12px", sm: "14px", md: "16px" }, // Responsive font size
                          minWidth: { xs: "80px", sm: "100px", md: "120px" }, // Responsive tab width
                          '&.Mui-selected': {
                              color: '#B68C1E', // Text color when active
                              backgroundColor: '#FFF3CD', // Background color when active
                          },
                      }}
                  />
                  <Tab
                      label="Handbags"
                      {...a11yProps(1)}
                      sx={{
                          color: '#1A1A1A',
                          fontSize: { xs: "12px", sm: "14px", md: "16px" }, // Responsive font size
                          minWidth: { xs: "80px", sm: "100px", md: "120px" }, // Responsive tab width
                          '&.Mui-selected': {
                              color: '#B68C1E',
                              backgroundColor: '#FFF3CD',
                          },
                      }}
                  />
                  <Tab
                      label="Abayas / Female Clothings"
                      {...a11yProps(2)}
                      sx={{
                          color: '#1A1A1A',
                          fontSize: { xs: "12px", sm: "14px", md: "16px" }, // Responsive font size
                          minWidth: { xs: "80px", sm: "100px", md: "120px" }, // Responsive tab width
                          '&.Mui-selected': {
                              color: '#B68C1E',
                              backgroundColor: '#FFF3CD',
                              
                          },
                      }}
                  />
                  <Tab
                      label="Jewelleries"
                      {...a11yProps(3)}
                      sx={{
                          color: '#1A1A1A',
                          fontSize: { xs: "12px", sm: "14px", md: "16px" }, // Responsive font size
                          minWidth: { xs: "80px", sm: "100px", md: "120px" }, // Responsive tab width
                          '&.Mui-selected': {
                              color: '#B68C1E',
                              backgroundColor: '#FFF3CD',
                          },
                      }}
                  />
              </Tabs>

          </Box>
      <CustomTabPanel value={value} index={0} >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-4 pt-8">
        {products.map((product) => (
         <ProductCard  key={product.id} product={product}/>
        ))}
      </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Hot products at the moment
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Our New arrivals
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Jewelleries item goes here
      </CustomTabPanel>
    </Box>
  );
}
