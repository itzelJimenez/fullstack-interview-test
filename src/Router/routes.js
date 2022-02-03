// Views
import AllPullRequest from "../views/AllPullRequests/AllPullRequest";
import Branches from "../views/Branches/Branches";
import CreatePullRequest from "../views/CreatePullRequest/CreatePullRequest";
import RepositoryDetails from "../views/RepositoryDetails/RepositoryDetails";

// Icons
import AddTaskIcon from '@mui/icons-material/AddTask';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListAltIcon from '@mui/icons-material/ListAlt';

export const routes = [
    {
        name: "Repository Details",
        route: '/',
        component: RepositoryDetails,
        icon: InboxIcon
    },
    {
        name: "Branches View",
        route: '/branches',
        component: Branches,
        icon: AltRouteIcon
    },
    {
        name: "Create Pull Request",
        route: '/create-pull-request',
        component: CreatePullRequest, 
        icon: AddTaskIcon
    },
    {
        name: "All Pull Requests",
        route: '/all-pull-requests',
        component: AllPullRequest, 
        icon: ListAltIcon
    },
]