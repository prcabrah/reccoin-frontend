import { Link } from 'react-router-dom';
import settingsIcon from '../../assets/settings-ic.svg';
import Layout from '../../components/dashboard_components/Layout';
import { SettingsData } from '../../data/SettingsData';
import closeIcon from '../../assets/close.svg';
import { useState } from 'react';

// switch button functional component
const SwitchButton = ({ toggleNotification, label, toggleValue }) => {
  return (
    <div htmlFor="switch" className="flex flex-row mb-12">
      <button
        className="w-14 h-6 py-1 bg-white rounded-xl mr-4 flex items-center"
        onClick={toggleNotification}
      >
        <div
          className={`w-3 h-3 rounded-full transition duration-500 bg-${
            toggleValue ? 'primary40 translate-x-11' : 'gray-300'
          } `}
        ></div>
      </button>
      <label htmlFor="check" className="text-white text-sm">
        {label}
      </label>
    </div>
  );
};

// profile settings content
const ProfileSettings = ({ toggleClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  return (
    <div className="bg-[#005232] w-full flex flex-col justify-start text-white p-4">
      {/* close button */}
      <button className="flex flex-row justify-end" onClick={toggleClose}>
        <img src={closeIcon} alt="close-icon" className=" w-8 h-8" />
      </button>
      <h1 className="font-bold my-8">Profile Settings</h1>
      {/* first name */}
      <label htmlFor="firstName" className="mb-4">
        First Name
      </label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        onChange={(fn) => setFirstName(fn.target.value)}
        className="outline-none bg-[#71B453] p-2 rounded-lg mb-4"
      />
      {/* last name */}
      <label htmlFor="lastName" className="mb-4">
        Last Name
      </label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        onChange={(ln) => setLastName(ln.target.value)}
        className="outline-none bg-[#71B453] p-2 rounded-lg mb-4"
      />
      {/* email */}
      <label htmlFor="email" className="mb-4">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(eml) => setEmailAddress(eml.target.value)}
        className="outline-none bg-[#71B453] p-2 rounded-lg mb-4"
      />
      {/* submit button */}
      <button className="w-[60%] border-2 border-white rounded-lg p-2 bg-[#006D44] my-6">
        SUBMIT
      </button>
    </div>
  );
};

// notification settings content
const NotificationSettings = ({ toggleClose }) => {
  // set toggle state
  const [contestNotification, setContestNotification] = useState(true);
  const [depositNotification, setDepositNotification] = useState(true);

  // toggle functions for contest notification
  const toggleContestNotification = () => {
    setContestNotification(!contestNotification);
  };

  // toggle functions for deposit notification
  const toggleDepositNotification = () => {
    setDepositNotification(!depositNotification);
  };

  return (
    <div className="bg-[#005232] w-full flex flex-col justify-start text-white p-4">
      {/* close button */}
      <button className="flex flex-row justify-end" onClick={toggleClose}>
        <img src={closeIcon} alt="close-icon" className=" w-8 h-8" />
      </button>
      <SwitchButton
        label={'Disable Contest Notifications'}
        toggleNotification={toggleContestNotification}
        toggleValue={contestNotification}
      />
      <SwitchButton
        label={'Disable Deposit Notifications'}
        toggleNotification={toggleDepositNotification}
        toggleValue={depositNotification}
      />
    </div>
  );
};

// news and update settings
const NewsAndUpdateSettings = () => {
  // set toggle state
  const [newsletterSubscription, setNewsletterSubscription] = useState(true);
  const [updatesSubscription, setUpdatesSubscription] = useState(true);

  // toggle functions for contest notification
  const toggleNewsletterSubscription = () => {
    setNewsletterSubscription(!newsletterSubscription);
  };

  // toggle functions for deposit notification
  const toggleUpdatesSubscription = () => {
    setUpdatesSubscription(!updatesSubscription);
  };

  return (
    <div className="bg-[#005232] p-2">
      <img src={closeIcon} alt="close-icon" />
      <h1>Profile Settings</h1>
      <SwitchButton
        label={'Unsubscribe from our Newsletter'}
        toggleNotification={toggleNewsletterSubscription}
        toggleValue={newsletterSubscription}
      />
      <SwitchButton
        label={'Stop Receiving Updates'}
        toggleNotification={toggleUpdatesSubscription}
        toggleValue={updatesSubscription}
      />
    </div>
  );
};

const DashboardUserSettings = () => {
  // set company to display based on index
  const [componentToDisplay, setComponentToDisplay] = useState(0);

  // function to close nav content
  const toggleCLose = () => {
    setComponentToDisplay(0);
  };

  return (
    <Layout
      dashboard_content={
        <div className="bg-white ml-12 w-3/4 border-2 border-[#ECECEC]">
          {/* settings main content  */}
          <div className="flex flex-row w-full ">
            {/* settings content heade and nav items*/}
            <div className="px-4 mt-10 w-full mr-40">
              {/* settings content header */}
              <div className="flex flex-row items-center my-6">
                <img
                  src={settingsIcon}
                  alt="settings-icon"
                  className="bg-primary40 p-2 mr-9"
                />
                <h2 className="text-primary40 font-montserrat font-black text-[1.6rem]">
                  Settings
                </h2>
              </div>
              {/* settings nav items */}
              <ul className="w-full">
                {SettingsData.map((item, index) => (
                  <Link
                    to={item.user_a_link}
                    key={index}
                    onClick={() => setComponentToDisplay(index + 1)}
                    className=" flex flex-row bg-[rgba(0, 109, 68, 0.01)] border-2 border-[#ECECEC]  p-3 mb-4 items-center rounded-lg"
                  >
                    <img
                      src={item.icon}
                      alt={`${item.title} icon`}
                      className="mr-4"
                    />
                    <h1>{item.title}</h1>
                  </Link>
                ))}
              </ul>
            </div>

            {/* settings display nav content */}
            <div className="w-full">
              {componentToDisplay == 1 ? (
                <ProfileSettings toggleClose={toggleCLose} />
              ) : componentToDisplay == 2 ? (
                <NotificationSettings toggleClose={toggleCLose} />
              ) : componentToDisplay == 3 ? (
                <NewsAndUpdateSettings toggleClose={toggleCLose} />
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      }
    />
  );
};

export default DashboardUserSettings;
