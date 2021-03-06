import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link, NavLink } from "react-router-dom";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useStoreContext } from "../context/StoreContext";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const middleLinks = [
    { title: "catalog", path: "/catalog" },
    { title: "about", path: "/about" },
    { title: "contact", path: "/contact" },
]

const rightLinks = [
    { title: "login", path: "/login" },
    { title: "register", path: "/register" },
]

const navStyles = {
    color: "inherit",
    textDecoration: "none",
    typography: 'h6',
    "&:hover": {
        color: "grey.500",
    },
    "&.active": {
        color: "text.secondary",
    }
}

export default function Header({ darkMode, handleThemeChange }: Props) {
    const { cart } = useStoreContext();
    const itemCount = cart?.items.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                <Box display="flex" alignItems="center">
                    <Typography variant="h6" component={NavLink}
                        to="/"
                        exact
                        sx={navStyles}>
                        ReactSharpStore
                    </Typography>
                    <Switch checked={darkMode} onChange={handleThemeChange} />
                    <DarkModeOutlinedIcon />
                </Box>


                <List sx={{ display: "flex" }} >
                    {middleLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <Box display="flex" alignItems="center">
                    <IconButton component={Link} to="/cart" size="large" sx={{ color: "inherit" }}>
                        <Badge badgeContent={itemCount} color="error">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{ display: "flex" }} >
                        {rightLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>


            </Toolbar>
        </AppBar>
    );
}