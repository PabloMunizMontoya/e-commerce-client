import { Inter } from "next/font/google";
import { Button, Icon } from "semantic-ui-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="home">
            <h1>Estamos en next</h1>
            <Button primary>Primary</Button>
            <Button secondary>Secondary</Button>
            <Icon disabled name="users" />
        </div>
    );
}
