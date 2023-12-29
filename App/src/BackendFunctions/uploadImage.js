import { v4 as uuidv4 } from 'uuid';
let postURl = "https://mjc1ac0uc5.execute-api.us-east-1.amazonaws.com/items"
export const postImage = async (encodedImage, photoTitle, photoDescription) => {
    const imageFile = "";
    const uniqueId = uuidv4();
    const url = await uploadFile(encodedImage, uniqueId)
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

const uploadFile = async (encodedImage, id) => {
    try {
        const response = await fetch(uploadFileUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: encodedImage,
                id: id
            }),
        });

        // if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }

        const result = await response.json(); // Parsing the JSON string
        console.log('File uploaded successfully:', result);

        // Extracting the 'url' value from the response
        const uploadedFileUrl = result.url;
      
        return uploadedFileUrl; 
    } catch (error) {
        console.error('Error during the file upload:', error);
        throw error; // Rethrowing the error for caller to handle
    }
};

