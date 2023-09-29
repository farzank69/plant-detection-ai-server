const request = require('request');

const handleApiCall = (req, res) => {
    const pythonCode = "print('Hello, Python!')"; // Replace with your Python code

    const data = {
        code: pythonCode,
        imgName: req.body,
    };

    request.post(
        {
            url: 'http://192.168.97.104:5000/api/process_image', // Adjust the URL to your Flask API endpoint
            json: data,
        },
        (error, response, body) => {
            if (error) {
                console.error('An error occurred while making the request:', error);
                res.status(500).json({ error: 'An error occurred while making the request' });
            } else if (response.statusCode === 200) {
                res.json(body); // Send the response from the Flask server as-is
                console.log(body);
            } else {
                console.error('Request failed with status code:', response.statusCode);
                res.status(response.statusCode).json({ error: 'Request failed' });
            }
        }
    );
};

module.exports = {
    handleApiCall,
};









// const request = require('request');

// // Define the image URL for testing
// // const imageUrl = 'https://example.com/image.jpg';

// // Send a POST request to the Express.js API
// // const data = { imageUrl };



// const handleApiCall = (req, res) => {
//     console.log("aa")
//     data = {
//         "code": "print('Hello')"
//     }

//     request.post(
//         {
//           url: 'http://192.168.97.104:5000',
//           json: data,
//         },
//         (error, response, body) => {
//           if (error) {
//             console.error('An error occurred while making the request:', error);
//           } else if (response.statusCode === 200) {
//             res.json(response);
//             // Successfully received a JSON response from the Express.js server
//             console.log(body);
//           } else {
//             console.error('Request failed with status code:', response.statusCode);
//           }
//         }
//       );


    
//     // fetch("http://192.168.97.104:8888/notebooks/OneDrive/Documents/image_detector.ipynb/cells", {
//     //     method: "POST",
//     //     json: data,
//     // })
//     // // .then((response) => response.json())
//     // .then((response) => {
//     //     console.log(response);
//     //     res.json(response);
//     // })
    
//     // res.json("Done!")

//     console.log("DD")
// }

// module.exports = {
//     handleApiCall
// }