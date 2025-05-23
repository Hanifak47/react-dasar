import { useEffect, useState } from "react";

export function useOnline() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        function handleOnline() {
            setIsOnline(true);
        }

        function handleOffline() {
            setIsOnline(false);
        }

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.addEventListener("online", handleOnline);
            window.addEventListener("offline", handleOffline);
        }

    })
    return isOnline;
}