import Layout1 from "../Layout/Layout1";
import Layout2 from "../Layout/Layout2";
import DetailPage from "../Pages/DetailPage/DetailPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import SignInPage from "../Pages/SignInPage/SignInPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";

export const movieRoutes=[
    {url:'/',
     component: <Layout1 Component={HomePage}/>,   
    },
    {url:'/sign-in',
     component: <Layout2 Component={SignInPage}/>,   
    },
    {url:'/sign-up',
     component: <Layout2 Component={SignUpPage}/>,   
    },
    {url:'/detail/:id',
     component: <Layout1 Component={DetailPage}/>,   
    },
    {url:'*',
     component: <ErrorPage/>,   
    },
]