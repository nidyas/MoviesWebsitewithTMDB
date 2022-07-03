import React from 'react'
import { createTheme, Pagination } from '@mui/material';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";


const CustomPagination =({ setPage, numOfPages = 1000 })=>{

    const ChangePage=(page)=>{
        setPage(page);
        window.scroll(0,0);
        console.log(page);
    }

    return (
        <ThemeProvider >
        <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        color:"white",
        marginTop: 10,
     
      }}
    ><Pagination count={numOfPages} color='secondary' shape='rounded'  size='large'
            onChange={(e)=>ChangePage(e.target.textContent)}        
        /> </div>
        </ThemeProvider>
    )
};
export default CustomPagination;