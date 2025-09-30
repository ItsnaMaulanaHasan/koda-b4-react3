import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Input from "../components/Input";
import { useState, useEffect } from "react";

function Contact() {
  const [submissions, setSubmissions] = useState([]);
  useEffect(() => {
    try {
      const storedSubmissions = JSON.parse(localStorage.getItem("contactSubmissions")) || [];
      setSubmissions(storedSubmissions);
    } catch (error) {
      console.error("Failed to parse submissions from localStorage", error);
      setSubmissions([]);
    }
  }, []);

  const handleNewSubmission = (newSubmission) => {
    const updatedSubmissions = [...submissions, newSubmission];
    setSubmissions(updatedSubmissions);
    localStorage.setItem("contactSubmissions", JSON.stringify(updatedSubmissions));
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow py-16 md:px-20 px-5 mt-30">
        <FormContainer onNewSubmission={handleNewSubmission} />
        <SubmissionsList submissions={submissions} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

const FormContainer = ({ onNewSubmission }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const inputField = [
    {
      type: "text",
      name: "fullName",
      label: "Full Name: ",
    },
    {
      type: "email",
      name: "email",
      label: "Email: ",
    },
    {
      type: "text",
      name: "phoneNumber",
      label: "Phone Number: ",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewSubmission(formData);
    setFormData({ fullName: "", email: "", phoneNumber: "" });
  };

  return (
    <div className="shadow-xl p-10 rounded-lg bg-white max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="font-bold text-4xl text-center text-orange-500">Contact Us</h1>
        <p className="text-center text-gray-500 mt-2">We'd love to hear from you. Please fill out the form below.</p>
      </div>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        {inputField.map(({ type, name, label }) => (
          <Input key={name} type={type} name={name} value={formData[name]} onChange={handleChange}>
            {label}
          </Input>
        ))}
        <button type="submit" className="bg-orange-500 text-white font-bold py-3 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 transition-colors duration-300 mt-4">
          Send Message
        </button>
      </form>
    </div>
  );
};

const SubmissionsList = ({ submissions }) => {
  if (!submissions.length) {
    return null;
  }

  return (
    <div className="mt-12 max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">Submitted Data</h2>
      <div className="space-y-4">
        {submissions.map((submission, index) => (
          <div key={index} className="p-4 border rounded-md bg-gray-50 text-gray-700">
            <p>
              <strong>Full Name:</strong> {submission.fullName}
            </p>
            <p>
              <strong>Email:</strong> {submission.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {submission.phoneNumber}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
