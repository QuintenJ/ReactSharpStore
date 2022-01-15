import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Cart } from "../../app/models/cart";

export default function CartPage() {
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState<Cart | null>(null);

    useEffect(() => {
        agent.Cart.get()
            .then(cart => setCart(cart))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [])

    if (loading) return <LoadingComponent message="Loading Cart..." />

    if (!cart) return <Typography variant="h3">Your Cart Is Empty</Typography>

    return (
        <h1>Buyer Id = {cart.buyerId}</h1>
    )
}