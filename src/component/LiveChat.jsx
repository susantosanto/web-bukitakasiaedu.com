import { useEffect } from 'react';

const LiveChat = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://embed.tawk.to/66699410981b6c56477c49a2/1i066koep';
        script.async = true;
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default LiveChat;
