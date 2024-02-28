**ReactJS & Firebase Authentication Guide**

**Introduction:**
This guide outlines implementing user login and signup in ReactJS using Firebase and Bootstrap for enhanced UI. It covers setting up a project, Firebase configuration, Bootstrap integration, and step-by-step implementation.

**1. Setup:**
- Install dependencies using npm:
  ```
  npm install bootstrap firebase react-bootstrap react-google-button react-router-dom react-scripts web-vitals
  ```

**2. Firebase Configuration:**
- Create a Firebase project.
- Enable Email/Password and Google authentication.
- Obtain Firebase configuration details.
- Connect ReactJS to Firebase by creating a `firebase.js` file.

**3. Context APIs:**
- Create `UserAuthContext.js` with a Context provider and consumer.
- Wrap the main component with the provider in `App.js`.

**4. Firebase Functions:**
- Implement functions for login, signup, logout, and Google sign-in using Firebase Auth.

**5. User SignUp:**
- Create a Bootstrap-based form for email/password.
- Use context API for signup functionality.

**6. User Login:**
- Design a Bootstrap login form.
- Use context API for login functionality.
- Implement Google login with `react-google-button`.

**7. Protected Route:**
- Create a protected route using `react-router-dom`.
- Redirect users to login if not authenticated.
