import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { User, Bell, Lock, Palette, Globe, CreditCard, Shield, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <DashboardLayout>
      <h1 className="font-heading text-2xl md:text-3xl text-foreground mb-8">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar Navigation */}
        <div className="card-elevated p-4">
          <nav className="space-y-1">
            {[
              { icon: User, label: "Profile", active: true },
              { icon: Bell, label: "Notifications" },
              { icon: Lock, label: "Security" },
              { icon: Palette, label: "Appearance" },
              { icon: Globe, label: "Language" },
              { icon: CreditCard, label: "Billing" },
              { icon: Shield, label: "Privacy" },
              { icon: HelpCircle, label: "Help & Support" },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  item.active 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-body-sm font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Section */}
          <div className="card-elevated p-6">
            <h2 className="font-heading text-lg text-foreground mb-4">Profile Information</h2>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
                <User className="w-10 h-10 text-muted-foreground" />
              </div>
              <div>
                <Button className="hover:bg-primary" variant="outline" size="sm">Change Photo</Button>
                <p className="text-xs text-muted-foreground mt-1">JPG, PNG or GIF. Max 2MB</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-body-sm text-muted-foreground">First Name</label>
                <input 
                  type="text" 
                  defaultValue="Anurag"
                  className="w-full mt-1 px-3 py-2 bg-secondary rounded-lg text-foreground border-0 focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-body-sm text-muted-foreground">Last Name</label>
                <input 
                  type="text" 
                  defaultValue="Sharma"
                  className="w-full mt-1 px-3 py-2 bg-secondary rounded-lg text-foreground border-0 focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-body-sm text-muted-foreground">Email</label>
                <input 
                  type="email" 
                  defaultValue="anurag@example.com"
                  className="w-full mt-1 px-3 py-2 bg-secondary rounded-lg text-foreground border-0 focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-body-sm text-muted-foreground">Phone</label>
                <input 
                  type="tel" 
                  defaultValue="+91 98765 43210"
                  className="w-full mt-1 px-3 py-2 bg-secondary rounded-lg text-foreground border-0 focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <Button className="mt-6 bg-primary hover:bg-primary-light text-primary-foreground">
              Save Changes
            </Button>
          </div>

          {/* Notifications Section */}
          <div className="card-elevated p-6">
            <h2 className="font-heading text-lg text-foreground mb-4">Notification Preferences</h2>
            
            <div className="space-y-4">
              {[
                { label: "Email Notifications", description: "Receive updates via email" },
                { label: "Push Notifications", description: "Receive push notifications on your device" },
                { label: "Transaction Alerts", description: "Get notified for every transaction" },
                { label: "Bill Reminders", description: "Receive reminders before bill due dates" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-body-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
