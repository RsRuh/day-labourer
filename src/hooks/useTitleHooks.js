import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Day Labour`;
    }, [title]);
};

export default useTitle;