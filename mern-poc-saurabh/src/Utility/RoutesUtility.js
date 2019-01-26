import LoadExtentiaExnet from "../Component/LoadExtentiaExnet";
import LoadDashboard from "../Component/LoadDashboard";
import LoadXplData from "../Component/LoadXplData";
import LoadEventsData from "../Container/LoadEventsData";
import LoadPostComponent from "../Container/LoadPostComponent";
import Login from "../Container/Login";
import Logout from "../Container/Logout";
import UserRegistration from "../Container/UserRegistration";
import RenderStartPage from "../Component/RenderStartPage";

export const dashBoardRoutes = [
    {route: '/dashboard', routeText: 'Dashboard'},
    {route: '/XPL', routeText: 'XPL'},
    {route: '/events', routeText: 'Events'},
    {route: '/post', routeText: 'Post your views at Extentia'},
    {route: '/logout', routeText: 'Logout'},
]

export const allRoutes = [
    {path:'/extentiaexnet', component : LoadExtentiaExnet},            
    {path:'/dashboard', component : LoadDashboard},
    {path:'/XPL', component : LoadXplData},
    {path:'/events', component : LoadEventsData},
    {path:'/post', component : LoadPostComponent},
    {path:'/logout', component : Logout},
    {path:'/login', component : Login},
    {path:'/userregistration', component : UserRegistration},
    {path:'/', component : RenderStartPage}
]