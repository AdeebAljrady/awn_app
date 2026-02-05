// file: /app/test-supabase.ts (أو أي صفحة مؤقتة)

// Next.js server component
export default function TestSupabase() {
  // فحص المتغيرات على الخادم
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return (
      <div>
        <h1>❌ خطأ في متغيرات البيئة</h1>
        <p>
          NEXT_PUBLIC_SUPABASE_URL: {supabaseUrl ? "✔ موجود" : "❌ غير موجود"}
        </p>
        <p>
          SUPABASE_SERVICE_ROLE_KEY: {supabaseKey ? "✔ موجود" : "❌ غير موجود"}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>✅ جميع المتغيرات موجودة!</h1>
      <p>يمكن إنشاء عميل Supabase الآن.</p>
    </div>
  );
}