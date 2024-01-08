
let loginUrl = "https://zrkn9x9xv2.execute-api.us-east-1.amazonaws.com/prod/login";
let apikey = "I9LkugvzHK4HyeNQUEMKM4t3InOH61Fq5ozY9DOf";
export const loginUser = async (email, password) => {
  try {
 
    const jsonData = {
      password: password,
      email: email
    };

    
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key':apikey
      },
      body: JSON.stringify(jsonData)
    });


    const data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return data;
    
   

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};



  let registerUrl = "https://zrkn9x9xv2.execute-api.us-east-1.amazonaws.com/prod/register";
 
  export const registerUser = async (username, password, email) => {
    try {
   
      const jsonData = {
        username: username,
        password: password,
        email: email
      };
  
      
      const response = await fetch(registerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key':apikey
        },
        body: JSON.stringify(jsonData)
      });
  

      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      return data;
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  let verifyUrl = "https://zrkn9x9xv2.execute-api.us-east-1.amazonaws.com/prod/verify";

  export const verifyUser = async (username, token) => {
    try {
   
      const jsonData = {
        username: username,
        token: token
      };
  
      
      const response = await fetch(verifyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key':apikey
        },
        body: JSON.stringify(jsonData)
      });
  

      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return data;
      
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };