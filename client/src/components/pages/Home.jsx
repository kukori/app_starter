
import React from 'react';
import { Sidebar, Header } from '../common/';
import { CssBaseline, Toolbar, Hidden } from '@mui/material';

const Home = () => {
    return (
        <div>
            <CssBaseline />
            <Header />
            <Hidden mdUp>
                <Sidebar variant={'temporary'}/>
            </Hidden>
            <Hidden mdDown>
                <Sidebar />
            </Hidden>

            <main>
                <Toolbar />
                eee
            </main>
        </div>
    );
}

export default Home;