const FormPage = () => {
  return (
    <>
      <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
      <p>Secure your spot at next year's biggest coding conference.</p>

      <form>
        <div className="upload-avatar-form">
          <label htmlFor="avatar">Upload Avatar</label>
          <input type="file" id="avatar" accept="image/*" />
          <img src="/assets/images/icon-upload.svg" alt="upload" />
          <span>Drag and drop or click to upload</span>
        </div>

        <div className="full-name-form">
          <label htmlFor="full-name">Full Name</label>
          <input type="text" id="full-name" />
        </div>

        <div className="email-address-form">
          <label htmlFor="email-address">Email Address</label>
          <input type="email" id="email-address" />
        </div>

        <div className="github-username-form">
          <label htmlFor="github-username">GitHub Username</label>
          <input type="text" id="github-username" />
        </div>

        <button type="submit">Generate My Ticket</button>
      </form>
    </>
  );
};

export default FormPage;
