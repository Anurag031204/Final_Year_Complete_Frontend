import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Eye, EyeOff, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

type AuthMode = "login" | "signup";

interface LoginProps {
  mode?: AuthMode;
}

const Login = ({ mode = "login" }: LoginProps) => {
  const [isLogin, setIsLogin] = useState(mode === "login");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.username || !formData.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (!isLogin && !formData.email) {
      toast({
        title: "Error",
        description: "Email is required for registration.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: isLogin ? "Welcome back!" : "Account created!",
      description: isLogin
        ? "You have successfully logged in."
        : "Your account has been created successfully.",
    });
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Panel */}
      <div
        className={`relative hidden overflow-hidden transition-all duration-500 lg:flex lg:w-1/2 ${
          isLogin ? "order-1" : "order-2"
        }`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br from-slate-950 via-teal-950 to-emerald-900 ${
            isLogin ? "rounded-r-[170px]" : "rounded-l-[170px]"
          }`}
        />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-color-burn [background-image:radial-gradient(circle_at_1px_1px,#5eead4_1px,transparent_0)] [background-size:28px_28px]" />
        <div className="relative z-10 flex w-full flex-col items-center justify-center p-12 text-center text-teal-50">
          <Link to="/" className="mb-8 flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500">
              <Shield className="h-6 w-6 text-teal-950" />
            </div>
            <span className="text-2xl font-heading font-semibold">
              <span className="text-teal-300">SPENDIFY</span>
            </span>
          </Link>

          <h2 className="mb-4 font-heading text-4xl text-teal-50 animate-fade-in-up">
            {isLogin ? "Hello, welcome!" : "Welcome back!"}
          </h2>

          <p
            className="mb-8 text-teal-100/75 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </p>

          <Button
            variant="outline"
            className="border-teal-200/40 bg-teal-900/30 text-teal-50 hover:border-teal-200 hover:bg-teal-800/60 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
            onClick={() => setIsLogin((prev) => !prev)}
          >
            {isLogin ? "Registration" : "Login"}
          </Button>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div
        className={`flex w-full items-center justify-center bg-background p-8 transition-all duration-500 lg:w-1/2 ${
          isLogin ? "order-2" : "order-1"
        }`}
      >
        <div className="w-full max-w-md animate-fade-in-up">
          {/* Mobile Logo */}
          <div className="mb-8 flex justify-center lg:hidden">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500">
                <Shield className="h-5 w-5 text-teal-950" />
              </div>
              <span className="text-xl font-heading font-semibold text-foreground">
                <span className="text-teal-500">SPEND</span>IFY
              </span>
            </Link>
          </div>

          <h1 className="mb-8 text-center font-heading text-heading-1 text-foreground">
            {isLogin ? "Login" : "Registration"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div className="relative">
              <Input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className="h-14 rounded-lg border-0 bg-secondary pl-4 pr-12 text-foreground placeholder:text-muted-foreground"
                required
              />
              <User className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            </div>

            {/* Email (Registration only) */}
            {!isLogin && (
              <div className="relative animate-fade-in">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-14 rounded-lg border-0 bg-secondary pl-4 pr-12 text-foreground placeholder:text-muted-foreground"
                  required
                />
                <Mail className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              </div>
            )}

            {/* Password */}
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="h-14 rounded-lg border-0 bg-secondary pl-4 pr-12 text-foreground placeholder:text-muted-foreground"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Forgot Password (Login only) */}
            {isLogin && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-body-sm text-muted-foreground transition-colors hover:text-teal-500"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="h-14 w-full rounded-lg bg-teal-500 text-lg font-semibold text-teal-950 transition-colors hover:bg-teal-400"
            >
              {isLogin ? "Login" : "Registration"}
            </Button>
          </form>

          {/* Social Login */}
          <div className="mt-8 text-center">
            <p className="mb-4 text-body-sm text-muted-foreground">
              Or login with social platforms
            </p>
            <div className="flex justify-center gap-4">
              <button 
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:border-teal-500 hover:text-teal-500"
                aria-label="Login with Facebook"
              >
                <span className="text-xl font-bold">f</span>
              </button>
              <button 
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:border-teal-500 hover:text-teal-500"
                aria-label="Login with Google"
              >
                <span className="text-xl font-bold">G</span>
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="mt-8 text-center lg:hidden">
            <p className="text-body-sm text-muted-foreground">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </p>
            <button
              type="button"
              onClick={() => setIsLogin((prev) => !prev)}
              className="font-medium text-teal-500 hover:underline"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
