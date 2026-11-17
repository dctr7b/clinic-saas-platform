const patients = [
  { name: 'أحمد علي', status: 'مكتمل', date: '2026-11-17', doctor: 'د. محمود حامد' },
  { name: 'سارة محمد', status: 'قيد الانتظار', date: '2026-11-17', doctor: 'د. نجلاء فهيم' },
  { name: 'محمود ربيع', status: 'ملغي', date: '2026-11-16', doctor: 'د. يوسف مرسى' },
];

export default function DashboardPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#edf3ff', padding: 28 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <div>
            <div style={{ fontSize: 13, color: '#64748b' }}>لوحة التحكم</div>
            <h1 style={{ margin: '8px 0 0', fontSize: 32 }}>عيادة النور</h1>
          </div>
          <button style={primaryButton}>إنشاء موعد جديد</button>
        </header>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(180px, 1fr))', gap: 18 }}>
          {[
            ['125', 'المرضى'],
            ['28', 'المواعيد اليوم'],
            ['₫18,500', 'إيراد اليوم'],
            ['14 يوم', 'التجربة المتبقية'],
          ].map(([value, label]) => (
            <div key={label} style={{ background: 'white', borderRadius: 18, padding: 20, boxShadow: '0 10px 20px rgba(15,23,42,0.05)' }}>
              <div style={{ fontSize: 28, fontWeight: 800 }}>{value}</div>
              <div style={{ marginTop: 8, color: '#64748b' }}>{label}</div>
            </div>
          ))}
        </section>

        <section style={{ marginTop: 28, background: 'white', borderRadius: 20, padding: 24, boxShadow: '0 12px 30px rgba(15,23,42,0.06)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <h3 style={{ margin: 0 }}>جدول المرضى</h3>
            <button style={secondaryButton}>تصدير</button>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8fafc', color: '#334155' }}>
                <th style={cellStyle}>الاسم</th>
                <th style={cellStyle}>التاريخ</th>
                <th style={cellStyle}>الدكتور</th>
                <th style={cellStyle}>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.name}>
                  <td style={cellStyle}>{patient.name}</td>
                  <td style={cellStyle}>{patient.date}</td>
                  <td style={cellStyle}>{patient.doctor}</td>
                  <td style={cellStyle}>
                    <span style={{
                      background: patient.status === 'مكتمل' ? '#dcfce7' : patient.status === 'قيد الانتظار' ? '#fef3c7' : '#fee2e2',
                      color: patient.status === 'مكتمل' ? '#166534' : patient.status === 'قيد الانتظار' ? '#92400e' : '#991b1b',
                      borderRadius: 999,
                      padding: '6px 10px',
                      fontSize: 12,
                      fontWeight: 700,
                    }}>
                      {patient.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}

const cellStyle = {
  borderBottom: '1px solid #e2e8f0',
  padding: '14px 12px',
  textAlign: 'right' as const,
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

const secondaryButton = {
  background: 'white',
  color: '#0f172a',
  border: '1px solid rgba(148,163,184,.5)',
  borderRadius: 12,
  padding: '10px 14px',
  fontWeight: 700,
  cursor: 'pointer',
} as const;
