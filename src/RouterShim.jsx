// RouterShim removed - project converted to static HTML
export default null;
    </>
  );
}

// Card styles for sections
const serviceCardStyle = {
  background: '#181c1f',
  color: '#b2fefa',
  borderRadius: 12,
  padding: '1.2rem 1.3rem',
  minWidth: 220,
  maxWidth: 260,
  fontSize: '1.08rem',
  boxShadow: '0 2px 12px #14ffe91a',
  marginBottom: 8,
};
const industryCardStyle = {
  ...serviceCardStyle,
  color: '#fff',
};
const outcomeCardStyle = {
  ...serviceCardStyle,
  color: '#14ffe9',
  fontWeight: 700,
  fontSize: '1.1rem',
};
const insightCardStyle = {
  ...serviceCardStyle,
  color: '#b2fefa',
};
const inputStyle = {
  background: '#181c1f',
  color: '#b2fefa',
  border: '1.5px solid #14ffe9',
  borderRadius: 8,
  padding: '0.7rem 1rem',
  fontSize: '1.05rem',
  outline: 'none',
};

export default function RouterShim() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
  <Route path="/accomplishments" element={<Accomplishments />} />
  <Route path="/services" element={<Services />} />
  <Route path="/industries" element={<Industries />} />
  <Route path="/insights" element={<Insights />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}