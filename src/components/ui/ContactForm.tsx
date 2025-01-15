'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from './Card'; // Adjust path as necessary
import { Shield } from 'lucide-react'; // Example icon import

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
        },
    },
};

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!name || !email || !message) {
            setError('Please fill in all fields.');
            return;
        }

        // Simulate form submission (replace with actual API call)
        console.log('Form submitted:', { name, email, message });

        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(true);
        setError('');
    };

    return (
        <motion.div
            className="container mx-auto px-4 py-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={itemVariants}>
                <Card title="Contact Us" Icon={Shield} color="#FF6B6B">
                    {submitted && <p>Thank you for your message! We&apos;ll get back to you soon.</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-1">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} // Update state on change
                                required
                                className="w-full p-2 border border-gray-300 rounded text-black" // Set text color to black
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Update state on change
                                required
                                className="w-full p-2 border border-gray-300 rounded text-black" // Set text color to black
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-1">Message:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)} // Update state on change
                                required
                                className="w-full p-2 border border-gray-300 rounded text-black" // Set text color to black
                            />
                        </div>
                        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Send Message
                        </button>
                    </form>
                </Card>
            </motion.div>
        </motion.div>
    );
}
