function Navbar({ role, setRole }) {
  return (
    <div style={{ padding: "10px", background: "#333", color: "white", display: "flex", justifyContent: "space-between" }}>
      <h2 style= {{color:"white"}}>Finance Dashboard</h2>

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option>Viewer</option>
        <option>Admin</option>
      </select>
    </div>
  );
}

export default Navbar;