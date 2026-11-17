export default function RegisterPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #e2e8f0, #f8fafc)', display: 'grid', placeItems: 'center', padding: 24 }}>
      <div style={{ background: 'white', borderRadius: 24, width: '100%', maxWidth: 900, boxShadow: '0 20px 40px rgba(15,23,42,0.08)', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ background: '#0f172a', color: 'white', padding: 32 }}>
          <div style={{ fontSize: 13, opacity: 0.8 }}>إنشاء حساب جديد</div>
          <h1 style={{ fontSize: 36, margin: '12px 0 18px' }}>ابدأ عيادتك الآن</h1>
          <p style={{ lineHeight: 1.8, opacity: 0.85 }}>
            اختر التخصص، أدخل بيانات العيادة، وقم ببدء التجربة. بعد الموافقة، يتم تفعيل الحساب يدويًا.
          </p>
        </div>

        <div style={{ padding: 32 }}>
          <div style={{ display: 'grid', gap: 18 }}>
            <div>
              <label style={labelStyle}>اسم العيادة</label>
              <input style={inputStyle} placeholder="عيادة النور" />
            </div>

            <div>
              <label style={labelStyle}>اسم الطبيب</label>
              <input style={inputStyle} placeholder="د. محمد أحمد" />
            </div>

            <div>
              <label style={labelStyle}>التخصص</label>
              <select style={inputStyle} defaultValue="أسنان">
                <option>أسنان</option>
                <option>جلدية</option>
                <option>أطفال</option>
                <option>باطنية</option>
                <option>عيون</option>
                <option>نساء وتوليد</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>البريد الإلكتروني</label>
              <input style={inputStyle} placeholder="doctor@clinic.com" />
            </div>

            <button style={primaryButton}>إنشاء الحساب</button>
          </div>
        </div>
      </div>
    </main>
  );
}

const labelStyle = {
  display: 'block',
  marginBottom: 8,
  fontWeight: 700,
  color: '#334155',
};

const inputStyle = {
  width: '100%',
  border: '1px solid #cbd5e1',
  borderRadius: 12,
  padding: '12px 14px',
  background: '#f8fafc',
  color: '#0f172a',
};

const primaryButton = {
  background: '#2563eb',
  color: 'white',
  border: 'none',
  borderRadius: 12,
  padding: '12px 18px',
  fontWeight: 700,
  cursor: 'pointer',
} as const;
