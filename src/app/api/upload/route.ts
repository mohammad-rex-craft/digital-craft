// app/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const formData = await req.formData()
    const file = formData.get('file') as Blob

    // ⛔️ هنا لا يتم فعلياً رفع الملف لأي مكان (مثلاً Cloudinary أو S3)
    // ✅ فقط يُرجع رابط وهمي لاختبار الـ POST
    return NextResponse.json({
        url: 'https://via.placeholder.com/300x200.png?text=Uploaded+Image',
    })
}
