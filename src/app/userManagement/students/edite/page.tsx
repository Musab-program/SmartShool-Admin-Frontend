"use client";
import React, { useRef, useState } from "react";

type Gender = "male" | "female";

interface BasicInfo {
  firstName: string;
  lastName: string;
  gender: Gender;
  dateOfBirth: string;
  files: File[];
}

interface ParentDetails {
  fatherName: string;
  fatherContact: string;
  fatherOccupation: string;
  motherName: string;
  motherContact: string;
  annualIncome: string;
}

interface LoginDetails {
  username: string;
  password: string;
}

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  location: string;
  district: string;
  pincode: string;
  state: string;
}

interface AdditionalInfo {
  isDayScholar: boolean;
  hasTransport: boolean;
}

const App = () => {
  // State for all form fields
  const [basicInfo, setBasicInfo] = useState<BasicInfo>({
    firstName: "",
    lastName: "",
    gender: "male",
    dateOfBirth: "",
    files: [],
  });

  const [parentDetails, setParentDetails] = useState<ParentDetails>({
    fatherName: "",
    fatherContact: "",
    fatherOccupation: "",
    motherName: "",
    motherContact: "",
    annualIncome: "",
  });

  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    username: "",
    password: "",
  });

  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    phone: "",
    email: "",
    address: "",
    location: "",
    district: "",
    pincode: "",
    state: "",
  });

  const [additionalInfo, setAdditionalInfo] = useState<AdditionalInfo>({
    isDayScholar: true,
    hasTransport: true,
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle file drop and selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
    setBasicInfo({ ...basicInfo, files: selectedFiles });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files || []);
    setBasicInfo({ ...basicInfo, files: droppedFiles });
  };

  // Generic handler for all form fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    section: "basic" | "parent" | "login" | "contact" | "additional",
    field: string
  ) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const isCheckbox = (target as HTMLInputElement).type === "checkbox";
    const nextValue = isCheckbox
      ? (target as HTMLInputElement).checked
      : target.value;
    if (section === "basic") {
      setBasicInfo({ ...basicInfo, [field]: nextValue as never });
    } else if (section === "parent") {
      setParentDetails({ ...parentDetails, [field]: nextValue as never });
    } else if (section === "login") {
      setLoginDetails({ ...loginDetails, [field]: nextValue as never });
    } else if (section === "contact") {
      setContactInfo({ ...contactInfo, [field]: nextValue as never });
    } else if (section === "additional") {
      setAdditionalInfo({ ...additionalInfo, [field]: nextValue as never });
    }
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Logic to save the form data
    console.log("تم إرسال البيانات:", {
      basicInfo,
      parentDetails,
      loginDetails,
      contactInfo,
      additionalInfo,
    });
    // Add logic here to send data to a backend or process it
    alert("تم حفظ النموذج! تحقق من وحدة التحكم للبيانات.");
  };

  // Reset form handler
  const handleReset = () => {
    setBasicInfo({
      firstName: "",
      lastName: "",
      gender: "male",
      dateOfBirth: "",
      files: [],
    });
    setParentDetails({
      fatherName: "",
      fatherContact: "",
      fatherOccupation: "",
      motherName: "",
      motherContact: "",
      annualIncome: "",
    });
    setLoginDetails({
      username: "",
      password: "",
    });
    setContactInfo({
      phone: "",
      email: "",
      address: "",
      location: "",
      district: "",
      pincode: "",
      state: "",
    });
    setAdditionalInfo({
      isDayScholar: true,
      hasTransport: true,
    });
  };

  return (
    <div dir="rtl" className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">إضافة طالب جديد</h1>
        <div className="space-x-4">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 text-white font-semibold bg-lime-600 rounded-lg hover:bg-lime-700 transition-colors"
          >
            حفظ
          </button>
          <button
            onClick={() => alert("تم الإلغاء.")}
            className="px-6 py-2 text-gray-200 font-semibold bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
          >
            إلغاء
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-2 text-gray-600 font-semibold bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
          >
            إعادة
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Basic Information Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-4">
              معلومات أساسية
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  الاسم الأول
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={basicInfo.firstName}
                  onChange={(e) => handleChange(e, "basic", "firstName")}
                  placeholder="الاسم الأول"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  الاسم الاخير
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={basicInfo.lastName}
                  onChange={(e) => handleChange(e, "basic", "lastName")}
                  placeholder="الاسم الاخير"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Gender and Date of Birth */}
              <div className="space-y-6">
                {/* Gender */}
                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-2">
                    الجنس
                  </span>
                  <div className="flex items-center space-x-6">
                    <label className="flex items-center text-gray-700">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={basicInfo.gender === "male"}
                        onChange={(e) => handleChange(e, "basic", "gender")}
                        className="form-radio h-4 w-6 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2">ذكر</span>
                    </label>
                    <label className="flex items-center text-gray-700">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={basicInfo.gender === "female"}
                        onChange={(e) => handleChange(e, "basic", "gender")}
                        className="form-radio h-4 w-6 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2">أنثى</span>
                    </label>
                  </div>
                </div>

                {/* Date of Birth */}
                <div>
                  <label
                    htmlFor="dob"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    تاريخ الميلاد
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="dob"
                      value={basicInfo.dateOfBirth}
                      onChange={(e) => handleChange(e, "basic", "dateOfBirth")}
                      placeholder="dd/mm/yyyy"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Class and Section */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="class"
                      className="block text-sm font-medium text-gray-700 mb-1 sr-only"
                    >
                      الصف
                    </label>
                    <select
                      id="class"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">الصف</option>
                      {/* Add options here */}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="section"
                      className="block text-sm font-medium text-gray-700 mb-1 sr-only"
                    >
                      الشعبة
                    </label>
                    <select
                      id="section"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">الشعبة</option>
                      {/* Add options here */}
                    </select>
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <div
                className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 transition duration-200"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center">
                  <svg
                    className="w-12 h-12 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v8a4 4 0 01-4 4H8a4 4 0 01-4-4v-8m8-4H8"
                    ></path>
                  </svg>
                  <p className="mt-4 text-sm text-gray-500">
                    قم بإسقاط ملفك هنا
                  </p>
                </div>
                <input
                  type="file"
                  multiple
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <button
                  type="button"
                  className="mt-4 px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 transition duration-200"
                  onClick={() => fileInputRef.current?.click()}
                >
                  اختار ملف
                </button>
                {basicInfo.files.length > 0 && (
                  <ul className="mt-2 text-sm text-gray-600">
                    {basicInfo.files.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Parent Details Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-4">
              تفاصيل ولي الأمر
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fatherName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  اسم الأب
                </label>
                <input
                  type="text"
                  id="fatherName"
                  value={parentDetails.fatherName}
                  onChange={(e) => handleChange(e, "parent", "fatherName")}
                  placeholder="اسم الأب"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="motherName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  اسم الأم
                </label>
                <input
                  type="text"
                  id="motherName"
                  value={parentDetails.motherName}
                  onChange={(e) => handleChange(e, "parent", "motherName")}
                  placeholder="اسم الأم"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="fatherContact"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  معلومات التواصل مع الأب
                </label>
                <input
                  type="tel"
                  id="fatherContact"
                  value={parentDetails.fatherContact}
                  onChange={(e) => handleChange(e, "parent", "fatherContact")}
                  placeholder="المعلومات الاتصال"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="motherContact"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  معلومات التواصل مع الأم
                </label>
                <input
                  type="tel"
                  id="motherContact"
                  value={parentDetails.motherContact}
                  onChange={(e) => handleChange(e, "parent", "motherContact")}
                  placeholder="معلومات الاتصال"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="fatherOccupation"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Father Occupation
                </label>
                <input
                  type="text"
                  id="fatherOccupation"
                  value={parentDetails.fatherOccupation}
                  onChange={(e) =>
                    handleChange(e, "parent", "fatherOccupation")
                  }
                  placeholder="Ex: Business"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="annualIncome"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Annual Income
                </label>
                <input
                  type="text"
                  id="annualIncome"
                  value={parentDetails.annualIncome}
                  onChange={(e) => handleChange(e, "parent", "annualIncome")}
                  placeholder="1,00,000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Login/Account Details Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-4">
              تفاصيل الدخول/الحساب
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  اسم المستخدم
                </label>
                <input
                  type="text"
                  id="username"
                  value={loginDetails.username}
                  onChange={(e) => handleChange(e, "login", "username")}
                  placeholder="اسم المستخدم"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  كلمة المرور
                </label>
                <input
                  type="password"
                  id="password"
                  value={loginDetails.password}
                  onChange={(e) => handleChange(e, "login", "password")}
                  placeholder="كلمة المرور"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-4">
              معلومات الاتصال
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={contactInfo.phone}
                  onChange={(e) => handleChange(e, "contact", "phone")}
                  placeholder="رقم التواصل"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  value={contactInfo.email}
                  onChange={(e) => handleChange(e, "contact", "email")}
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                العنوان
              </label>
              <input
                type="text"
                id="address"
                value={contactInfo.address}
                onChange={(e) => handleChange(e, "contact", "address")}
                placeholder="الحي والشارع"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-1 sr-only"
                >
                  الموقع
                </label>
                <input
                  type="text"
                  id="location"
                  value={contactInfo.location}
                  onChange={(e) => handleChange(e, "contact", "location")}
                  placeholder="الموقع"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="district"
                  className="block text-sm font-medium text-gray-700 mb-1 sr-only"
                >
                  المنطقة
                </label>
                <input
                  type="text"
                  id="district"
                  value={contactInfo.district}
                  onChange={(e) => handleChange(e, "contact", "district")}
                  placeholder="المنطقة"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="pincode"
                  className="block text-sm font-medium text-gray-700 mb-1 sr-only"
                >
                  الرمز البريدي
                </label>
                <input
                  type="text"
                  id="pincode"
                  value={contactInfo.pincode}
                  onChange={(e) => handleChange(e, "contact", "pincode")}
                  placeholder="الرمز البريدي"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700 mb-1 sr-only"
                >
                  الولاية/المحافظة
                </label>
                <input
                  type="text"
                  id="state"
                  value={contactInfo.state}
                  onChange={(e) => handleChange(e, "contact", "state")}
                  placeholder="الولاية/المحافظة"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-4">
              معلومات إضافية
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <label className="flex items-center text-gray-700">
                  <input
                    type="radio"
                    name="scholarship"
                    checked={additionalInfo.isDayScholar}
                    onChange={() =>
                      setAdditionalInfo({
                        ...additionalInfo,
                        isDayScholar: true,
                      })
                    }
                    className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2">طالب نهاري</span>
                </label>
                <label className="flex items-center text-gray-700">
                  <input
                    type="radio"
                    name="scholarship"
                    checked={!additionalInfo.isDayScholar}
                    onChange={() =>
                      setAdditionalInfo({
                        ...additionalInfo,
                        isDayScholar: false,
                      })
                    }
                    className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2">طالب مقيم</span>
                </label>
              </div>
              <div className="flex items-center space-x-4">
                <label className="flex items-center text-gray-700">
                  <input
                    type="radio"
                    name="transport"
                    checked={additionalInfo.hasTransport}
                    onChange={() =>
                      setAdditionalInfo({
                        ...additionalInfo,
                        hasTransport: true,
                      })
                    }
                    className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2">مواصلات</span>
                </label>
                <label className="flex items-center text-gray-700">
                  <input
                    type="radio"
                    name="transport"
                    checked={!additionalInfo.hasTransport}
                    onChange={() =>
                      setAdditionalInfo({
                        ...additionalInfo,
                        hasTransport: false,
                      })
                    }
                    className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2">بدون مواصلات</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
