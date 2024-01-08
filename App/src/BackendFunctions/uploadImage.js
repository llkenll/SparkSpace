import { v4 as uuidv4 } from 'uuid';
let postURl = "https://mjc1ac0uc5.execute-api.us-east-1.amazonaws.com/items"
export const postImage = async (encodedImage,file, photoTitle, photoDescription) => {
    const imageFile = "";
    const uniqueId = uuidv4();
    const url = await uploadLargeFile(uniqueId, file)
    const jsonData = {
        id: uniqueId,
        name: photoTitle,
        desc: photoDescription,
        url: url
    };

    try {
        const response = await fetch(postURl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData),
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
};



//helper function
const uploadFileUrl = "https://j4vefj1sp0.execute-api.us-east-1.amazonaws.com";

const uploadLargeFile = async (id, file) => {
    
  
    const response = await fetch(uploadFileUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id })
    });
  
    if (!response.ok) {
      throw new Error('Error getting pre-signed URL');
    }
  
    const { signedUrl, imageUrl } = await response.json();
    console.log(signedUrl)
    const uploadResponse = await fetch(signedUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': file.type
      },
      body: file
    });
  
    if (!uploadResponse.ok) {
      throw new Error('Error uploading file to S3');
    }

    return imageUrl;

  };
  
