export default function Loading() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6 py-24 md:px-10">
      <div className="w-full max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
        <div className="h-4 w-40 animate-pulse rounded-full bg-white/10" />
        <div className="mt-6 h-16 w-4/5 animate-pulse rounded-[1.5rem] bg-white/10" />
        <div className="mt-4 h-6 w-full animate-pulse rounded-full bg-white/10" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-40 animate-pulse rounded-[1.75rem] border border-white/10 bg-white/[0.04]"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
