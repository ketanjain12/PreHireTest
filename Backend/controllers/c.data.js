const { User } = require('../models/mdata');
const bcrypt = require('bcrypt');
const { generateToken } = require('../jwt/jwtToken'); // Import JWT generation utility

exports.signup = async (req, res) => {
    // const { userId, name, email, password, role } = req.body;
    const {  name, email, password, role } = req.body; // add new data today aug 12
    // Check if all required fields are provided
    if ( !name || !email || !password || !role) {
        return res.status(400).json({
            status: false,
            msg: "Please fill in all details carefully"
        });

    }

    try {
        // check karo ki user pahle se to na h 
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(401).json({
                status: false,
                msg: "User already registered.Please signup with other credentials"
            });
        }

        // Hash password logic 
        const passwordHash = await bcrypt.hash(password, 10);

        // Create a new user entry
        const newUser = await User.create({
            // userId,
            name,
            email,
            password: passwordHash, // Store the hashed password
            role
        });

        // Generate JWT token for the new user
        const token = generateToken(newUser._id);

        console.log("New User Created:", newUser);

        // Send success response with JWT token
        return res.status(201).json({
            status: true,
            msg: "Successfully created user entry",
            data: newUser,
            token
        });

    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({
            status: false,
            msg: "Internal server error: " + error.message
        });
    }
};
// exports.login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Check if email and password are provided
//         if (!email || !password) {
//             return res.status(400).json({
//                 status: false,
//                 msg: "Please fill in both email and password for login"
//             });
//         }

//         // Find the user by email
//         const user = await User.findOne({ email });

//         // Check if user exists
//         if (!user) {
//             return res.status(404).json({
//                 status: false,
//                 msg: "User not found. Please sign up first."
//             });
//         }

//         // Compare the provided password with the stored hashed password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({
//                 status: false,
//                 msg: "Invalid credentials. Please try again."
//             });
//         }

//         // Generate JWT token using the generateToken function
//         const token = generateToken(user._id);

//         // Send response with token and user data
//         return res.status(200).json({
//             status: true,
//             msg: "Login successful",
//             data: user,
//             token // Include token in the response
//         });

//     } catch (error) {
//         console.error("Login Error:", error);
//         return res.status(500).json({
//             status: false,
//             msg: "Internal server error: " + error.message
//         });
//     }
// };

// new file aug 14 5.02 
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                status: false,
                msg: "Please fill in both email and password for login"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                status: false,
                msg: "User not found. Please sign up first."
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                status: false,
                msg: "Invalid credentials. Please try again."
            });
        }

        const token = generateToken(user._id);

        return res.status(200).json({
            status: true,
            msg: "Login successful",
            data: user,
            token
        });

    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({
            status: false,
            msg: "Internal server error: " + error.message
        });
    }
};

// this is a new login api endpoints url

// update profile for existing api 
exports.updateprofile = async (req, res) => {
    const { name, email } = req.body;


    if (!name || !email) {
        return res.status(400).json({
            status: false,
            msg: "Please provide both name and email"
        });
    }

    try {
     
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                status:false,
                 message: "User not found"
                 });
        }

        user.name = name ;
      
        user.email = email;

    
        await user.save();

        res.status(200).json(user);
        
    } catch (error) {
        console.error(error); 
        res.status(500).json({ 
            status:false,
            message: "error in uploading user profile" 
        });
    }
};

exports.resetpassword = async (req, res) => {

    const {  email,newpassword } = req.body;

    if (!email || !newpassword) {
        return res.status(400).json({
            status: false,
            msg: "Please provide both email and newpassword "
        });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                status:false,
                 message: "User not found"
                 });
        }
        const hashpassword = await bcrypt.hash(newpassword,10)
        user.password = hashpassword ;
  
        await user.save();

    res.status(200).json({
        status:true,
        msg:"password changes successfully"
    })
        
    } catch (error) {
        console.error(error); 
        res.status(500).json({ 
            status:false,
            message: "error in updating new password" 
        });
    }
};


