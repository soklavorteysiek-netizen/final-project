import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc
} from "firebase/firestore";
import { db } from "../firebase/firebaseClient";
import { logoutUser } from "../firebase/auth";

const empty = { name: "", price: "", description: "", image: "" };

export default function AdminDashboard({ user, onLogout }) {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(empty);
  const [editing, setEditing] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "menuItems"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (s) =>
      setItems(s.docs.map((d) => ({ id: d.id, ...d.data() })))
    );
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, "contactMessages"),
      orderBy("createdAt", "desc")
    );
    return onSnapshot(q, (s) =>
      setMessages(s.docs.map((d) => ({ id: d.id, ...d.data() })))
    );
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const data = {
      ...form,
      price: Number(form.price) || 0,
      updatedAt: serverTimestamp()
    };
    if (editing) await updateDoc(doc(db, "menuItems", editing), data);
    else
      await addDoc(collection(db, "menuItems"), {
        ...data,
        createdAt: serverTimestamp()
      });
    setForm(empty);
    setEditing(null);
  };

  const edit = (item) => {
    setForm({
      name: item.name || "",
      price: item.price || "",
      description: item.description || "",
      image: item.image || ""
    });
    setEditing(item.id);
  };

  const remove = async (id) => {
    if (confirm("Delete this menu item?")) {
      await deleteDoc(doc(db, "menuItems", id));
    }
  };

  return (
    <section className="admin-page">
      <div className="admin-header">
        <div>
          <h2>Admin Dashboard</h2>
          <p>Signed in as {user?.email}</p>
        </div>
        <button
          className="button"
          onClick={async () => {
            await logoutUser();
            onLogout();
          }}
        >
          Logout
        </button>
      </div>

      <div className="admin-grid">
        {/* Form Add/Edit Menu */}
        <div className="admin-card">
          <h3>{editing ? "Edit Menu" : "Add Menu"}</h3>
          <form className="contact-form" onSubmit={submit}>
            <input
              className="form-input"
              placeholder="Coffee name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              className="form-input"
              type="number"
              min="0"
              step="0.01"
              placeholder="Price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              required
            />
            <input
              className="form-input"
              placeholder="Image URL (optional)"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
            />
            <textarea
              className="form-input"
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              required
            />
            <button className="button submit-button">
              {editing ? "Update" : "Add Menu"}
            </button>
            {editing && (
              <button
                type="button"
                className="button cancel-button"
                onClick={() => {
                  setEditing(null);
                  setForm(empty);
                }}
              >
                Cancel
              </button>
            )}
          </form>
        </div>

        {/* Menu Items List */}
        <div className="admin-card">
          <h3>Menu Items ({items.length})</h3>
          <div className="admin-list">
            {items.map((item) => (
              <div className="admin-row" key={item.id}>
                <div>
                  <strong>{item.name}</strong>
                  <p>
                    ${item.price} — {item.description}
                  </p>
                </div>
                <div>
                  <button onClick={() => edit(item)}>Edit</button>
                  <button onClick={() => remove(item.id)}>Delete</button>
                </div>
              </div>
            ))}
            {!items.length && <p>No menu items yet.</p>}
          </div>
        </div>
      </div>

      {/* Contact Messages */}
      <div className="admin-card">
        <h3>Contact Messages ({messages.length})</h3>
        <div className="admin-list">
          {messages.map((m) => (
            <div className="admin-row" key={m.id}>
              <div>
                <strong>
                  {m.name} — {m.email}
                </strong>
                <p>{m.message}</p>
              </div>
            </div>
          ))}
          {!messages.length && <p>No messages yet.</p>}
        </div>
      </div>
    </section>
  );
}