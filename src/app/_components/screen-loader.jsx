export default function ScreenLoader() {
  return (
    <div className="fixed top-0 bg-white h-screen w-screen">
      <span className="w-6 h-6 animate-ping inline-flex rounded-full bg-emerald-400 opacity-75 fixed top-1/2 left-1/2"></span>
    </div>
  )
}