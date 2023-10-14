import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import {useEffect} from "react";

function Redirect({ to }) {
    const router = useRouter();

    useEffect(() => {
        router.push(to);
    }, [to]);

    return null;
}


function VaultPage() {
    const { data: session } = useSession();

    if (!session) {
        // User is not authenticated
        return <Redirect to="/pages/vault.html" />;
    }

    // Check if the user is a patron. The exact properties might differ based on the data Patreon provides.
    const isPatron = session.user?.isPatron;

    if (!isPatron) {
        return <Redirect to="/pages/not-patron.html" />;
    }

    // Display content for patrons
    return <div>Patron content here</div>;
}

export default VaultPage;
