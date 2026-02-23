import { useNavigate } from "react-router-dom";

const DesertWorld = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10" style={{
        background: "linear-gradient(180deg, hsl(35 80% 75%) 0%, hsl(38 92% 60%) 50%, hsl(30 50% 40%) 100%)"
      }} />
      <div className="container mx-auto px-4 py-8">
        <button onClick={() => navigate("/")} className="mb-6 text-sm font-semibold text-white/80 hover:text-white flex items-center gap-2">
          ← Back to Worlds
        </button>
        <div className="text-center mt-20">
          <div className="text-8xl mb-6 select-none">🏜️</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Desert World</h1>
          <p className="text-white/70 text-lg max-w-md mx-auto mb-8">20 desert survival games are being crafted. Explore soon!</p>
          <div className="inline-block px-6 py-3 rounded-full bg-white/20 text-white font-bold text-lg">
            🌵 Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesertWorld;
