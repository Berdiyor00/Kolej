import { useState } from "react";
import Blog from "./Blog"; // Removed the extra slash
import Raxbariyat from "./Raxbariyat";

const Props = () => {
    const [blog, setBlogs] = useState([
        {
            title: 'Salom',
            body: 'lorem ipsum dolor...',  
             
        },
    ]);

    return (
        <div>
            <Raxbariyat blogs={blog} />
        </div>
    );
};

export default Props;
