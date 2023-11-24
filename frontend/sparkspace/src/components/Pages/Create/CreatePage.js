import React, { useState } from 'react';
import '../page.css'; // Make sure the CSS is correctly imported
import CreateHeader from './CreateHeader';
import { useNavigate } from 'react-router-dom';
export default function CreatePage({setActiveNav}) {
    const [image, setImage] = useState(null);
    const [photoTitle, setPhotoTitle] = useState('');
    const [photoDescription, setPhotoDescription] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const navigate = useNavigate();
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileChange(e);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file); 
            const fileUrl = URL.createObjectURL(file);
            setImage(fileUrl); 
        }
    };

    const handleClick = () => {
        setImage(null);
        document.getElementById('fileInput').click();
    };


    const publishClicked = async () => {
        const formData = new FormData();
        formData.append('photoTitle', photoTitle);
        formData.append('photoDescription', photoDescription);
        formData.append('image', imageFile);
        formData.append('collection', 1);
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        try {
            const response = await fetch('http://sparkspace-dev.us-west-2.elasticbeanstalk.com/sparkapi/photos/', {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                const errorResponse = await response.text();
                console.error('Server response:', errorResponse);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            console.log('Successfully uploaded:', result);
        } catch (error) {
            console.error('Error during the upload:', error);
        }
        setActiveNav('Home');
        navigate('/')
    }


    const isFormDisabled = !image;

    return (
        <>
        {/* <CreateHeader></CreateHeader> */}

        <div className="create-page">
            <div 
                className="upload-area" 
                onDrop={handleDrop} 
                onDragOver={handleDragOver} 
                onClick={handleClick}
                style={{ cursor:'pointer'}}
            >
                {image && (
                    <img src={image} alt="Uploaded" className="uploaded-image" />
                )}
                {!image && (
                    <div className="upload-prompt">
                        <span>+</span>
                        <p>Choose a file or drag and drop it here</p>
                    </div>
                )}
                <input
                    id="fileInput"
                    type="file"
                    accept=".jpg,.jpeg,.png,.mp4"
                    onChange={(e) => handleFileChange(e)}
                    style={{ display: 'none' }}
                />
                <p>We recommend using high quality .jpg files less than 20MB or .mp4 files less than 200MB.</p>
            </div>
            <div className="form-area">
                <input type="text" placeholder="Add a title" className="form-input" disabled={isFormDisabled}
                onChange={(e) => setPhotoTitle(e.target.value)}
                />
                <textarea placeholder="Add a detailed description" className="form-input" disabled={isFormDisabled}
                onChange={(e) => setPhotoDescription(e.target.value)}
                ></textarea>
            </div>
            <button className="publish-button" onClick={publishClicked}>Publish</button>
        </div>
        
        </>
        
    );
}
