import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="home">
            <h1>Estamos en next</h1>
        </div>
    );
}
