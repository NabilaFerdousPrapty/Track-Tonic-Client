import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import useAuth from '../../hooks/UseAuth';


const skillsOptions = [
  { value: 'skill1', label: 'Skill 1' },
  { value: 'skill2', label: 'Skill 2' },
  { value: 'skill3', label: 'Skill 3' },
];

const daysOptions = [
  { value: 'sun', label: 'Sunday' },
  { value: 'mon', label: 'Monday' },
  { value: 'tue', label: 'Tuesday' },
  { value: 'wed', label: 'Wednesday' },
  { value: 'thu', label: 'Thursday' },
  { value: 'fri', label: 'Friday' },
  { value: 'sat', label: 'Saturday' },
];

const BecomeATrainer = () => {
  const { user } = useAuth(); 
  const [formData, setFormData] = useState({
    fullName: '',
    email: user.email,
    age: '',
    profileImage: null,
    skills: [],
    availableDays: [],
    availableTime: '',
    otherInfo: '',
    status: 'pending',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      profileImage: e.target.files[0],
    }));
  };

  const handleSkillsChange = (selectedOptions) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: selectedOptions.map(option => option.value),
    }));
  };

  const handleDaysChange = (selectedOptions) => {
    setFormData((prevData) => ({
      ...prevData,
      availableDays: selectedOptions.map(option => option.value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataCopy = { ...formData };

    // Handle profile image upload if any
    if (formData.profileImage) {
      const imageData = new FormData();
      imageData.append('file', formData.profileImage);
      // Upload image and get the URL
      const imageUploadResponse = await axios.post('/upload-image', imageData);
      formDataCopy.profileImage = imageUploadResponse.data.url;
    }

    // Store data in the database
    await axios.post('/apply-trainer', formDataCopy);
    alert('Application submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} readOnly />
      </label>
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
      </label>
      <label>
        Profile Image:
        <input type="file" name="profileImage" onChange={handleImageChange} />
      </label>
      <label>
        Skills:
        {skillsOptions.map(skill => (
          <label key={skill.value}>
            <input
              type="checkbox"
              value={skill.value}
              checked={formData.skills.includes(skill.value)}
              onChange={(e) => {
                const selectedSkills = formData.skills.includes(skill.value)
                  ? formData.skills.filter(s => s !== skill.value)
                  : [...formData.skills, skill.value];
                setFormData((prevData) => ({
                  ...prevData,
                  skills: selectedSkills,
                }));
              }}
            />
            {skill.label}
          </label>
        ))}
      </label>
      <label>
        Available Days:
        <Select
          isMulti
          name="availableDays"
          options={daysOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleDaysChange}
        />
      </label>
      <label>
        Available Time:
        <input type="text" name="availableTime" value={formData.availableTime} onChange={handleChange} required />
      </label>
      <label>
        Other Info:
        <textarea name="otherInfo" value={formData.otherInfo} onChange={handleChange}></textarea>
      </label>
      <button type="submit">Apply</button>
    </form>
  );
};

export default BecomeATrainer;
