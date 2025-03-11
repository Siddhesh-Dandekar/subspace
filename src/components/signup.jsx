import { useState } from "react";
import { UserPlus, Mail, Lock, UserRoundPen } from "lucide-react";

function SignupUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name , setName] = useState("")

    const handleSubmit = async () => {
        const url = "https://voopvhechjrgqrsprlar.hasura.ap-south-1.nhost.run/api/rest/user_profiles";
    
        const headers = {
            "Content-Type": "application/json",
            "x-hasura-admin-secret": "KuFw0=8d2C7NzD5B+9A5t*juM0Z6s93O"
        };
    
        const body = {
            "object": {
                    password: password, // If "password" is part of your schema
                    username: name, // Replace with the appropriate value
                    email: email, // Replace or make dynamic
                    preference: ['technology'] // Replace with valid preferences (if applicable)
            }
        };
    
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body)
            });
    
            const result = await response.json();
            console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-1 flex flex-col items-center mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <UserPlus className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Create an account</h2>
              <p className="text-sm text-gray-500">
                Enter your email below to create your account
              </p>
            </div>
            
            <div className="space-y-4">
            <div className="space-y-2">
                <div className="relative">
                  <UserRoundPen className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-9 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-9 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-9 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <button 
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Create Account
              </button>
              
              <p className="text-sm text-center text-gray-500">
                Already have an account?{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      );
}

export default SignupUser;
