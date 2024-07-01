import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // 백엔드로 요청을 보냅니다.
        axios.get('http://localhost:5000/api/test')
            .then(response => {
                // 응답을 받아 메시지 상태를 설정합니다.
                setMessage(response.data.message);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <div>
            <h1>Upload a Photo</h1>
            <form>
                <input type="file" accept="image/*" required />
                <button type="submit">Upload</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default UploadForm;
