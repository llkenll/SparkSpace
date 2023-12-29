import React, { useState } from 'react';
import '../page.css'; // Make sure the CSS is correctly imported
import { useNavigate } from 'react-router-dom';
import { postImage } from '../../../BackendFunctions/uploadImage';
export default function CreatePage({setActiveNav}) {
    const [image, setImage] = useState(null);
    const [photoTitle, setPhotoTitle] = useState('');
    const [photoDescription, setPhotoDescription] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [base64Image, setBase64Image] = useState('');
    const [publishing, setPublishing] = useState(false);
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

    async function getBase64(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = () => {
            const base64Data = reader.result.split(',')[1];
            resolve(base64Data);
          }
          reader.onerror = reject
        })
      }
      

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
        setPublishing(true);
        try {
            const base64String = await getBase64(imageFile);
            console.log(base64String);
            await postImage(base64String, photoTitle, photoDescription);
        } catch (err) {
            console.log(err);
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
                    accept=".jpg,.jpeg,.png,.mp4, .gif"
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
            <button 
                className={`publish-button ${publishing ? 'disabled' : ''}`} 
                onClick={publishClicked} 
                disabled={publishing}
            >
                Publish
            </button>
        </div>
        
        </>
        
    );
}
