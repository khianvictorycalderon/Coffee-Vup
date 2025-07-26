import { useState, type FormEvent } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const validate = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9\-+()\s]{7,20}$/;

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = "Invalid phone number.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);

    return Object.values(newErrors).every((val) => val === "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    alert("Form submitted successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-100 px-6 pb-24 sm:pb-32 lg:px-8">
      {/* Skipping visual blob section for brevity */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact Us</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Have some questions or inquiries? Don't hesitate to get in touch!</p>
      </div>

      <form onSubmit={handleSubmit} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">First name</label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className={`block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 ${
                  errors.firstName ? "outline-red-500" : ""
                }`}
              />
              {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">Last name</label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className={`block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 ${
                  errors.lastName ? "outline-red-500" : ""
                }`}
              />
              {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">Email</label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 ${
                  errors.email ? "outline-red-500" : ""
                }`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
          </div>

          {/* Phone */}
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">Phone number</label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline-1 outline-gray-300 has-[input:focus]:outline-2 has-[input:focus]:outline-indigo-600">
                <select
                  id="country"
                  name="country"
                  className="w-20 rounded-md py-2 pl-3 text-sm text-gray-500"
                >
                  <option>PH</option>
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                  <option>CH</option>
                  <option>SK</option>
                  <option>JP</option>
                </select>
                <input
                  id="phone-number"
                  name="phone"
                  type="text"
                  placeholder="123-456-7890"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`block w-full py-1.5 pl-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm ${
                    errors.phone ? "outline-red-500" : ""
                  }`}
                />
              </div>
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">Message</label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 ${
                  errors.message ? "outline-red-500" : ""
                }`}
              />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="hover:cursor-pointer block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
