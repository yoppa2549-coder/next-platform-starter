export default function NotFound() {
  return (
    <main className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="mt-4 text-lg">Page not found</p>
        <a href="/" className="mt-6 inline-block px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition">
          กลับหน้าแรก
        </a>
      </div>
    </main>
  );
}
