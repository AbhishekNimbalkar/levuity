import { useState } from "react";
import Swal from 'sweetalert2'

const Form = ({ onClose }) => {
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", reason: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateField = (name, value) => {
        let error = "";

        if (name === "name") {
            if (!/^[A-Za-z\s]+$/.test(value)) error = "Name should contain only letters.";
            if (value.length < 3) error = "Name must be at least 3 characters.";
        }

        if (name === "phone") {
            if (!/^\d{10}$/.test(value)) error = "Phone number must be exactly 10 digits.";
        }

        if (name === "email") {
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) error = "Invalid email format.";
        }

        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        // Validate all fields except "reason" before submitting
        ["name", "phone", "email"].forEach((key) => validateField(key, formData[key]));

        if (Object.values(errors).some((error) => error)) {
            setLoading(false);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                // footer: '<a href="#">Why do I have this issue?</a>'
            });
            return;
        }

        const formDataObj = new FormData(event.target);
        formDataObj.append("access_key", "6fd9a8ec-4212-4294-ae1b-8f116c98a387");

        const object = Object.fromEntries(formDataObj);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const res = await response.json();

            if (res.success) {
                console.log("Success", res);
                setIsSubmitted(true);
                setFormData({ name: "", phone: "", email: "", reason: "" });

                Swal.fire({
                    title: "Form Submitted!",
                    text: "Thank you for reaching out. We will get back to you soon!",
                    icon: "success"
                });

                setTimeout(() => {
                    setIsSubmitted(false);
                    onClose();
                }, 2000);
            } else {
                console.error("Form submission failed", res);
            }
        } catch (error) {
            console.error("Error submitting form", error);
        }

        setLoading(false);
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-80 relative">
                <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" onClick={onClose}>
                    ✖
                </button>
                <h2 className="text-lg font-bold mb-4 text-center">Contact Us</h2>

                {isSubmitted ? (
                    <p className="text-green-600 text-center font-semibold">Form submitted successfully!</p>
                ) : (
                    <form onSubmit={onSubmit}>
                        <label className="font-semibold" htmlFor="name">Name:</label>
                        <input 
                            type="text" id="name" name="name" value={formData.name} onChange={handleChange} 
                            required className="w-full p-2 mt-1 mb-1 border border-gray-300 rounded focus:outline-none focus:border-green-500 focus:ring focus:ring-green-300" 
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                        <label className="font-semibold" htmlFor="phone">Phone Number:</label>
                        <input 
                            type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} 
                            required className="w-full p-2 mt-1 mb-1 border border-gray-300 rounded focus:outline-none focus:border-green-500 focus:ring focus:ring-green-300" 
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

                        <label className="font-semibold" htmlFor="email">Email:</label>
                        <input 
                            type="email" id="email" name="email" value={formData.email} onChange={handleChange} 
                            required className="w-full p-2 mt-1 mb-1 border border-gray-300 rounded focus:outline-none focus:border-green-500 focus:ring focus:ring-green-300" 
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                        <label className="font-semibold" htmlFor="reason">Reason to Connect:</label>
                        <textarea 
                            id="reason" name="reason" value={formData.reason} onChange={handleChange} rows="4" 
                            className="w-full p-2 mt-1 mb-1 border border-gray-300 rounded focus:outline-none focus:border-green-500 focus:ring focus:ring-green-300"
                        ></textarea>

                        <button 
                            type="submit" 
                            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-all mt-2"
                            disabled={loading || Object.values(errors).some((error) => error)}
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Form;
