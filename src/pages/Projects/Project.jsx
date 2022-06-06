import React from 'react';
import { styled,alpha} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { IconButton } from '@mui/material';
import ProjectTable from './ProjectTable';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

function Project() {
    const [searchValue,setSearchValue] = React.useState(null);
    const onChangeHandler = (event)=>{
        setSearchValue(event.target.value);
    }
    console.log(searchValue);
  return (
    <>
    <div style={{backgroundColor:"silver",width:"30%",marginTop:'80px'}}>
            <Search>
                
            <SearchIconWrapper>
            <IconButton>
              <SearchIcon />
              </IconButton>
            </SearchIconWrapper>
            
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={onChangeHandler}
            />
          </Search>
    </div>

    <div className="table">
        <ProjectTable/>
    </div>
    </>
  )
}

export default Project