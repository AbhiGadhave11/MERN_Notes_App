import React from 'react'

export default function Footer() {
  return (
    <div style={{width:'100%', textAlign:'center'}}>
      copyright @ Abhijit Gadhave
      
    </div>
  )
}

// import * as React from 'react';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import FolderIcon from '@mui/icons-material/Folder';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// export default function LabelBottomNavigation() {
//   const [value, setValue] = React.useState('recents');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div  style={{width:'100%', textAlign:'center'}}>
//     <BottomNavigation sx={{ width: 1280 }} value={value} onChange={handleChange}>
//       <BottomNavigationAction
//         label="Recents"
//         value="recents"
//         icon={<RestoreIcon />}
//       />
//       <BottomNavigationAction
//         label="Favorites"
//         value="favorites"
//         icon={<FavoriteIcon />}
//       />
//       <BottomNavigationAction
//         label="Nearby"
//         value="nearby"
//         icon={<LocationOnIcon />}
//       />
//       <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
//     </BottomNavigation>
//     copyright @ Abhijit Gadhave
//     </div>
//   );
// }