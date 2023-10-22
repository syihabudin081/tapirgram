"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter(); // Access the router instance

  const handleRegister = async () => {
    const payload = {
      email: email,
      password: password,
      age: age,
      username: username,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      if (response.status === 200) {
        router.push("/login");
      } else {
        alert("Register failed.");
        console.error("Register failed");
      }
    } catch (error) {
      alert(error);
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:w-1/2 flex flex-col">
        <motion.div
          className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
          initial={{ opacity: 0 }} // Set initial animation state
          animate={{ opacity: 1 }} // Set animation when the component is in view
          transition={{ duration: 1 }} // Animation duration in seconds
        >
          <p className="text-center text-2xl">Sign Up</p>
          <form
            className="flex flex-col pt-3 md:pt-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <motion.div
              initial={{ opacity: 0 }} // Set initial animation state
              animate={{ opacity: 1 }} // Set animation when the component is in view
              transition={{ duration: 1 }} // Animation duration in seconds
              className="flex flex-col pt-4"
            >
              <label htmlFor="email" className="text-lg font-light px-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="shadow appearance-none border w-full p-3 rounded-3xl text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} // Set initial animation state
              animate={{ opacity: 1 }} // Set animation when the component is in view
              transition={{ duration: 1 }} // Animation duration in seconds
              className="flex flex-col pt-4"
            >
              <label htmlFor="password" className="text-lg px-3 font-light">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border w-full p-3 rounded-3xl text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} // Set initial animation state
              animate={{ opacity: 1 }} // Set animation when the component is in view
              transition={{ duration: 1 }} // Animation duration in seconds
              className="flex flex-col pt-4"
            >
              <label htmlFor="age" className="text-lg font-light px-3">
                Age
              </label>
              <input
                type="number"
                id="age"
                placeholder="12"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="shadow appearance-none border w-full p-3 rounded-3xl text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} // Set initial animation state
              animate={{ opacity: 1 }} // Set animation when the component is in view
              transition={{ duration: 1 }} // Animation duration in seconds
              className="flex flex-col pt-4"
            >
              <label htmlFor="Username" className="text-lg font-light px-3">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="tapiresque"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="shadow appearance-none border w-full p-3 rounded-3xl text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </motion.div>
            <motion.input
              type="submit"
              defaultValue="Register"
              onClick={handleRegister}
              className="bg-black border rounded-3xl text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
            />
          </form>
          <motion.div
            initial={{ opacity: 0 }} // Set initial animation state
            animate={{ opacity: 1 }} // Set animation when the component is in view
            transition={{ duration: 1 }} // Animation duration in seconds
            className="text-center pt-12 pb-12"
          >
            <p>
              Already have an account?&nbsp;{" "}
              <Link href="/login" className="underline font-semibold">
                Login.
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-1/2 shadow-2xl">
        <Image
          className="object-cover w-full h-screen hidden md:block"
          src="/tapir.png"
          alt="unsplash image"
          width={500}
          height={600}
        />
      </div>
    </div>
  );
};

export default Register;
