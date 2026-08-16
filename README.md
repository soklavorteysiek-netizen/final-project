# rEZe Coffee Shop — React + Firebase

This project is converted from the original HTML/CSS/JavaScript coffee shop website.

## Stack
- React + Vite
- Firebase Firestore
- Swiper for testimonials
- Original CSS design and images preserved

## 1. Install
```bash
npm install
```

## 2. Create Firebase project
1. Go to Firebase Console.
2. Create a Firebase project.
3. Add a Web App.
4. Create a Firestore Database.
5. Copy the Firebase Web App configuration.

## 3. Configure environment
Copy `.env.example` to `.env` and replace the values with your Firebase Web App configuration.

Example:
```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

Do not commit `.env` to Git.

## 4. Firestore
The Contact Us form writes documents to:

`contactMessages`

Each document contains:
- name
- email
- message
- createdAt

For development only, configure Firestore rules appropriately. For production, use secure rules and authentication.

## 5. Run
```bash
npm run dev
```

Then open the local URL shown by Vite.

## Original → React conversion
- `index.html` → `src/App.jsx` + components
- `script.js` → React state/effects in `Navbar.jsx` and `Testimonials.jsx`
- `style.css` → `src/index.css`
- `img/` → `public/img/`
- Contact form → Firebase Firestore

## Authentication & Admin Dashboard

Firebase Authentication must have **Email/Password** enabled.

The app includes:
- `/login` equivalent page through the Login button
- Register account
- Firebase logout
- Admin Dashboard
- Firestore menu CRUD (`menuItems`)
- Firestore contact messages (`contactMessages`)

### Important security note
The sample dashboard uses authentication but does not automatically make every signed-in user an admin. For a real production admin system, use Firebase custom claims or a server-side/admin-controlled role field and Firestore Security Rules. Do not rely on hiding a button in React for authorization.
