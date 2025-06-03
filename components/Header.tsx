'use client';
import { Autocomplete, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popover, TextField, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { FaCaretDown, FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import Image from 'next/image'
import { MdAccountCircle } from 'react-icons/md';
import { VscListUnordered } from 'react-icons/vsc';
import { IoSettingsOutline } from 'react-icons/io5';
import { CiLogin, CiLogout } from 'react-icons/ci';
import { products } from '@/utils/products';

const Header = () => {

    const [searchedText,setSearchedText] = useState<string>("");

    const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }
    ]

    const cartList = [
        {
            url:"https://cdn.pixabay.com/photo/2019/02/11/19/53/jewel-3990596_960_720.jpg",
            name:"Silver Earring"
        },
        {
            url:"https://cdn.pixabay.com/photo/2019/02/11/19/53/jewel-3990596_960_720.jpg",
            name:"Silver Earring"
        },
        {
            url:"https://cdn.pixabay.com/photo/2019/02/11/19/53/jewel-3990596_960_720.jpg",
            name:"Silver Earring"
        }
    ]

    const handleSearchInputChanged = (event:React.SyntheticEvent,value:string) => {
        setSearchedText(value);
    }

    const filteredItems = useMemo(()=>{
        if (!searchedText.trim()) return [];
        return products.filter((item)=>item.name.toLowerCase().includes(searchedText.toLowerCase()))
        .map((item)=>item.name);
    },[searchedText]);

    const handleOnChanged = () => {
        console.log("handle on changed")
    }

    const [anchorE1, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const [anchorE2, setAnchorE2] = React.useState<HTMLElement | null>(null);
    const [anchorE3, setAnchorE3] = React.useState<HTMLElement | null>(null);

    const handleClickCart = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseCart = () => {
        setAnchorEl(null);
    };

    const handleClickUser = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorE2(event.currentTarget);
    };

    const handleCloseUser = () => {
        setAnchorE2(null);
    };

    const handleClickDown = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorE3(event.currentTarget);
    };

    const handleCloseDown = () => {
        setAnchorE3(null);
    };

    const openCart = Boolean(anchorE1);
    const openUser = Boolean(anchorE2);
    const openDown = Boolean(anchorE3);
    const idCart = openCart ? 'cart-popover' : undefined;
    const idUser = openUser ? 'user-popover' : undefined;
    const idDown = openDown ? 'down-popover' : undefined;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-row bg-gray-900/90 h-15 w-full justify-evenly items-center">
        <div className=" text-white">Contact Us : 0717772223</div>
        <div className='w-100'>
            <Autocomplete
            sx={{
                '.MuiAutocomplete-input': { color: 'white' },
                label:{color:'grey'},
                '& label.Mui-focused': {
                color: 'white',
                },
                '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'white',
                },
                '&:hover fieldset': {
                    borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                    borderColor: 'white',
                },
                borderRadius: 5
                },
                '& .MuiAutocomplete-clearIndicator': {
                    color: 'white',
                },
            }}  
                id="free-solo-demo"
                size='small'
                freeSolo
                inputValue={searchedText}
                options={filteredItems}
                renderInput={(params) => <TextField {...params} label="Search"/>}
                onInputChange={handleSearchInputChanged}
                onChange={handleOnChanged}
            />
        </div>
        <div className="flex flex-row gap-10 text-white">
            <span aria-describedby={idCart} onClick={handleClickCart} className=' hover:cursor-pointer'><FaShoppingCart/></span>
            <span aria-describedby={idUser} onClick={handleClickUser} className=' hover:cursor-pointer'><FaUserCircle/></span>
            <span aria-describedby={idDown} onClick={handleClickDown} className=' hover:cursor-pointer'><FaCaretDown/></span>
            <Popover
                id={idCart}
                open={openCart}
                anchorEl={anchorE1}
                onClose={handleCloseCart}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
            >
                <div className='flex flex-col p-2 w-[250px]'>
                    <p className=' text-center font-bold mb-1'>Your Cart Items</p>
                    {cartList.map((item:any,index)=>(
                        <div className='flex flex-row p-2 items-center gap-2 hover:bg-gray-300' key={index}>
                            <Image src={item.url} alt='' width={60} height={60} className='rounded'/>
                            <p className=' text-gray-500 truncate text-ellipsis'>{item.name}</p>
                        </div>
                    ))}
                    <div className='mx-auto mt-2'>
                        <button className=' bg-black text-white px-2 py-1 rounded-3xl text-xs'>
                            Go To Cart
                        </button>
                    </div>
                </div>
            </Popover>
            <Popover
                id={idUser}
                open={openUser}
                anchorEl={anchorE2}
                onClose={handleCloseUser}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
            >
                <div className='flex flex-col p-2 text-gray-500'>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <MdAccountCircle />
                            </ListItemIcon>
                            <ListItemText primary="Account" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <VscListUnordered />
                            </ListItemIcon>
                            <ListItemText primary="Orders" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <IoSettingsOutline />
                            </ListItemIcon>
                            <ListItemText primary="Setting" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </div>
            </Popover>
            <Popover
                id={idDown}
                open={openDown}
                anchorEl={anchorE3}
                onClose={handleCloseDown}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
            >
                <div className='flex flex-col p-2 text-gray-500'>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <CiLogin />
                            </ListItemIcon>
                            <ListItemText primary="LogIn" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <CiLogout />
                            </ListItemIcon>
                            <ListItemText primary="LogOut" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </div>
            </Popover>
        </div>
  </div>
  )
}

export default Header