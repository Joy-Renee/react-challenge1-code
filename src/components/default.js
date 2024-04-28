import { useState } from "react";
import Addtransaction from "./Transaction";

function Defaultdata() {
    const [formDefault , setDefault ] = useState(
        {
        date: "2019-07-01",
        description: "Chipole",
        category: "food",
        amount: "1000"
        },

        {
        date: "2019-07-02",
        description: "Sunglasses",
        category: "fashion",
        amount: "2000"
        }
)
}

export default Defaultdata