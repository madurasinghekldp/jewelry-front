'use client';
import { products } from '@/utils/products'
import {  useState } from 'react'
import CardItem from './Card'
import { averageStars } from '@/utils/reviews'
import {  Collapse, FormControlLabel, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Radio, RadioGroup } from '@mui/material';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { TbCategory } from 'react-icons/tb';
import { FaAnglesRight } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';


const ProductAll = () => {
  const [openCategories, setOpenCategories] = useState(false);
  const [openGender, setOpenGender] = useState(false);
  const [openMaterial, setOpenMaterial] = useState(false);
  const [openSidebar,setOpenSideBar] = useState(false);
  //const [tags, setTags] = useState<any[]>([]);

  const stars = (id:number) => {
      return averageStars(id);
  }
  const handleClickCategories = () => {
    setOpenCategories(!openCategories);
  };

  const handleClickGender = () => {
    setOpenGender(!openGender);
  };
  const handleClickMaterial = () => {
    setOpenMaterial(!openMaterial);
  };

  const handleChangeCategory = (event: React.ChangeEvent, value: string) => {
    console.log(value);
    console.log(event);
  }
  const handleChangeGender = (event: React.ChangeEvent, value: string) => {
    console.log(value);
    console.log(event);
  }
  const handleChangeMaterial = (event: React.ChangeEvent, value: string) => {
    console.log(value);
    console.log(event);
  }

  return (
    <div className='mt-20'>
      <div className='relative flex flex-col overflow-hidden'>
        <div className={"absolute left-0 top-0 bottom-0 z-10 w-[250px] bg-white rounded-r-2xl shadow-[0_-4px_8px_rgba(0,0,0,0.1),_4px_0_8px_rgba(0,0,0,0.1),_0_4px_8px_rgba(0,0,0,0.1)] h-full transition duration-300 ${} "+(openSidebar ? 'translate-x-0' : '-translate-x-full shadow-none bg-gray-100')} >
          <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  <div className='flex flex-row justify-between'>
                    <span>Filter By</span>
                    <button onClick={()=>setOpenSideBar(!openSidebar)} className='hover:cursor-pointer'><IoMdClose size={20}/></button>
                  </div>
                </ListSubheader>
              }
            >
              <ListItemButton onClick={handleClickCategories}>
                <ListItemIcon>
                  <TbCategory />
                </ListItemIcon>
                <ListItemText primary="Categories" />
                {openCategories ? <MdExpandLess /> : <MdExpandMore />}
              </ListItemButton>
              <Collapse in={openCategories} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <RadioGroup
                    sx={{ pl: 4}}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                    onChange={handleChangeCategory}
                  >
                    <FormControlLabel value="jewelry" control={<Radio />} label="Jewelry" />
                    <FormControlLabel value="stone" control={<Radio />} label="Stones" />
                  </RadioGroup>
                </List>
              </Collapse>

              <ListItemButton onClick={handleClickGender}>
                <ListItemIcon>
                  <TbCategory />
                </ListItemIcon>
                <ListItemText primary="Gender" />
                {openGender ? <MdExpandLess /> : <MdExpandMore />}
              </ListItemButton>
              <Collapse in={openGender} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <RadioGroup
                    sx={{ pl: 4}}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                    onChange={handleChangeGender}
                  >
                    <FormControlLabel value="gents" control={<Radio />} label="Gents" />
                    <FormControlLabel value="ladies" control={<Radio />} label="Ladies" />
                  </RadioGroup>
                </List>
              </Collapse>

              <ListItemButton onClick={handleClickMaterial}>
                <ListItemIcon>
                  <TbCategory />
                </ListItemIcon>
                <ListItemText primary="Material" />
                {openMaterial ? <MdExpandLess /> : <MdExpandMore />}
              </ListItemButton>
              <Collapse in={openMaterial} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <RadioGroup
                    sx={{ pl: 4}}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                    onChange={handleChangeMaterial}
                  >
                    <FormControlLabel value="gold" control={<Radio />} label="Gold" />
                    <FormControlLabel value="silver" control={<Radio />} label="Silver" />
                  </RadioGroup>
                </List>
              </Collapse>
            </List>
        </div>

        <div>
          <button className="text-gray-500 p-2 border border-gray-300 rounded-r-xl drop-shadow-gray-800 hover:cursor-pointer" onClick={()=>setOpenSideBar(!openSidebar)}>
            <FaAnglesRight size={20} />
          </button>
        </div>
        
        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-x-2 gap-y-4 place-items-center mx-0'>
            {products.map((item) => (
                <CardItem 
                key={item.id} 
                id={item.id}
                url={item.image} 
                name={item.name} 
                price={item.price}
                stars={stars(item.id)}
                />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProductAll