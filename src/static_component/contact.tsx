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

  const inputClass = (hasError: string) =>
    `block w-full rounded-sm bg-paper px-4 py-3 font-sans text-base text-espresso placeholder:text-bean/50 border ${
      hasError ? "border-red-500" : "border-bean/30"
    } focus:outline-none focus:border-copper transition-colors`;

  return (
    <div className="bg-espresso text-parchment px-6 sm:px-12 py-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
        <div>
          <span className="font-mono text-copper text-xs tracking-[0.3em] uppercase">
            Get in touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-3 leading-[1.05]">
            Let's talk coffee
          </h2>
          <p className="font-sans text-base text-parchment/60 mt-5 leading-relaxed max-w-sm">
            Questions about an order, a wholesale account, or just want to
            know what's on the roaster this week? Send it over.
          </p>

          <div className="mt-10 pt-8 border-t border-dashed border-bean/40 font-mono text-sm text-parchment/70 space-y-2">
            <p>hello@coffeevup.com</p>
            <p>+63 2 8123 4567</p>
            <p className="text-parchment/40">Mon&ndash;Sat, 7am&ndash;6pm</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} method="POST">
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block font-mono text-[11px] tracking-[0.15em] uppercase text-bean mb-2"
              >
                First name
              </label>
              <input
                id="first-name"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className={inputClass(errors.firstName)}
              />
              {errors.firstName && (
                <p className="mt-1.5 text-sm text-red-400">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="block font-mono text-[11px] tracking-[0.15em] uppercase text-bean mb-2"
              >
                Last name
              </label>
              <input
                id="last-name"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className={inputClass(errors.lastName)}
              />
              {errors.lastName && (
                <p className="mt-1.5 text-sm text-red-400">{errors.lastName}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block font-mono text-[11px] tracking-[0.15em] uppercase text-bean mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass(errors.email)}
              />
              {errors.email && <p className="mt-1.5 text-sm text-red-400">{errors.email}</p>}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block font-mono text-[11px] tracking-[0.15em] uppercase text-bean mb-2"
              >
                Phone number
              </label>
              <div
                className={`flex rounded-sm bg-paper border ${
                  errors.phone ? "border-red-500" : "border-bean/30"
                } focus-within:border-copper transition-colors`}
              >
                <select
                  id="country"
                  name="country"
                  className="w-20 rounded-sm py-3 pl-3 font-sans text-sm text-bean bg-transparent border-none focus:outline-none"
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
                  className="block w-full py-3 pl-2 pr-4 font-sans text-base text-espresso placeholder:text-bean/50 bg-transparent focus:outline-none"
                />
              </div>
              {errors.phone && <p className="mt-1.5 text-sm text-red-400">{errors.phone}</p>}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block font-mono text-[11px] tracking-[0.15em] uppercase text-bean mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={inputClass(errors.message)}
              />
              {errors.message && (
                <p className="mt-1.5 text-sm text-red-400">{errors.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full sm:w-auto btn border-none rounded-full bg-copper hover:bg-copper/90 text-paper font-sans text-sm tracking-[0.1em] uppercase font-medium px-10 h-12"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}