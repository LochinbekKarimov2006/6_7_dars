import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function Contact() {
    const { state, setState } = useContext(GlobalContext);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        area: '',
        city: '',
        state: '',
        postCode: '',
    });
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                setFormData({
                    ...formData,
                    area: reader.result,
                });
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        localStorage.setItem("data", JSON.stringify(formData));
        setState({
            ...state,
            theme: true
        });
        setFormData({
            name: '',
            phone: '',
            email: '',
            date: '',
            time: '',
            area: '',
            city: '',
            postCode: '',
        });
        setImage(null);
    };

    return (
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] bg-white p-8 rounded-lg">
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            required
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    required
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label htmlFor="time" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Time
                                </label>
                                <input
                                    type="time"
                                    name="time"
                                    id="time"
                                    required
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 pt-3">
                        <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                            Address Details
                        </label>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="div-10 mb-5">
                                    {image && <img src={image} alt="Uploaded" className="mb-3" />}
                                    <label className='label' htmlFor="area">Rasim Yuklash</label>
                                    <input
                                        type="file"
                                        id="area"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        placeholder="Enter city"
                                        required
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>
                            <div className="div-14 w-full">
                                <div className="w-full">
                                    <textarea name="postCode" id="post-code" placeholder="Post Code"  required  onChange={handleChange}  value={formData.postCode} cols="30"  rows="5" className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'></textarea>
                                </div>
                            </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        >
                            Book Appointment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
