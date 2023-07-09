import { FC } from 'react';
import { AppProps} from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';
import {ReactQueryDevtools} from "react-query/devtools"
import { ThemeProvider ,createTheme  } from '@mui/material/styles';

const reactQueryClient = new QueryClient();

const theme = createTheme({
    palette : {
        primary:{
            main: "#CCC"
        }
    }
})

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    

    // we wrap our component with "QueryClientProvider" 
    // so any component can have access to this react query client 

    // how caching 
   return(
    <QueryClientProvider client={reactQueryClient}>
        <ReactQueryDevtools initialIsOpen={true}/>
        <ThemeProvider theme={theme}>
        <Component {...pageProps}></Component>
        </ThemeProvider>
    </QueryClientProvider>
   );
 }
export default MyApp;
