const specialties = [
  'أسنان',
  'جلدية',
  'أطفال',
  'باطنية',
  'عيون',
  'نساء وتوليد',
  'عظام',
  'أعصاب',
  'تخدير',
];

const stats = [
  { value: '1,240', label: 'عيادات نشطة' },
  { value: '8,450', label: 'مرضى اليوم' },
  { value: '3,700', label: 'مواعيد محجوزة' },
  { value: '₫2.6M', label: 'إيراد شهري' },
];

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', padding: '24px', background: '#f3f6fb' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#0f172a',
            color: 'white',
            borderRadius: 20,
            padding: '18px 24px',
            boxShadow: '0 12px 30px rgba(15,23,42,0.15)',
          }}
        >
          <div>
            <h1 style={{ margin: 0, fontSize: 30 }}>Clinic SaaS</h1>
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button style={secondaryButton}>تسجيل الدخول</button>
            <button style={primaryButton}>ابدأ الآن</button>
          </div>
        </header>

        <section
          style={{
            marginTop: 32,
            display: 'grid',
            gridTemplateColumns: '1.5fr 0.9fr',
            gap: 24,
          }}
        >
          <div style={{ background: 'white', borderRadius: 24, padding: 32, boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)' }}>
            <span
              style={{
                display: 'inline-block',
                background: '#dbeafe',
                color: '#1d4ed8',
                borderRadius: 999,
                padding: '8px 14px',
                fontWeight: 700,
                marginBottom: 18,
              }}
            >
              نظام متكامل للعناية الطبية
            </span>

            <h2 style={{ fontSize: 46, margin: '0 0 18px', lineHeight: 1.2 }}>
              إدارة عياداتك من منصة موحدة
            </h2>

            <p style={{ fontSize: 18, lineHeight: 1.9, color: '#475569' }}>
              نظام SaaS لإدارة العيادات، المرضى، المواعيد، الوصفات، الحسابات، والتقارير.
              يختار كل طبيب تخصص العيادة عند إنشاء الحساب، ومن ثم تبدأ التجربة حتى الموافقة منمالك المنصة.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 26 }}>
              <button style={primaryButton}>إنشاء حساب جديد</button>
              <button style={secondaryButton}>استعراض العروض</button>
            </div>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', color: 'white', borderRadius: 24, padding: 28 }}>
            <h3 style={{ marginTop: 0 }}>التخصصات</h3>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {specialties.map((item) => (
                <span
                  key={item}
                  style={{
                    display: 'inline-block',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: 999,
                    padding: '8px 12px',
                    fontSize: 14,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            <div style={{ marginTop: 30 }}>
              <div style={{ fontSize: 14, color: '#cbd5e1' }}>حالة التجربة</div>
              <div style={{ background: '#1f2937', borderRadius: 14, padding: 16, marginTop: 8 }}>
                <strong>14 يوم تجريبي</strong>
                <div style={{ marginTop: 8, fontSize: 13, color: '#cbd5e1' }}>
                  يتم إيقاف الحساب تلقائيًا عند انتهاء التجربة
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(4, minmax(180px, 1fr))', gap: 18 }}>
          {stats.map((item) => (
            <div
              key={item.label}
              style={{
                background: 'white',
                borderRadius: 18,
                padding: 24,
                boxShadow: '0 10px 25px rgba(15, 23, 42, 0.06)',
              }}
            >
              <div style={{ fontWeight: 800, fontSize: 30 }}>{item.value}</div>
              <div style={{ marginTop: 8, color: '#64748b' }}>{item.label}</div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

const primaryButton = {
  background: '#2563eb',
  color: 'white',
  border: 'none',
  borderRadius: 12,
  padding: '12px 20px',
  fontWeight: 700,
  cursor: 'pointer',
} as const;

const secondaryButton = {
  background: 'white',
  color: '#0f172a',
  border: '1px solid rgba(148,163,184,.5)',
  borderRadius: 12,
  padding: '12px 20px',
  fontWeight: 700,
  cursor: 'pointer',
} as const;
