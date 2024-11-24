import React from "react";
import { useAuthStore } from "../store/useAuthStore.js";
import { MessageSquareQuote, Settings, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const { logout, authUser } = useAuthStore();
  return (
    <header className="bg-base-100 border-b border-base-300  fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link
            to="/"
            className="flex items-center gap-2.5 hover:opacity-80 transition-all"
          >
            <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageSquareQuote className="w-5 h-5 text-primary" />
            </div>
            <span className="btn btn-ghost text-xl">Chat Sphere</span>
          </Link>
        </div>
        <div className="flex items-center gap-3 mr-1">
          <Link
            to={"/settings"}
            className={`btn btn-sm gap-2 transition-colors`}
          >
            <Settings className="w-4 h-4" />
            <span className="hidden sm:inline">Settings</span>
          </Link>

          {authUser && (
            <>
              <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                <User className="size-5" />
                <span className="hidden sm:inline">Profile</span>
              </Link>

              <button className="flex gap-2 items-center" onClick={logout}>
                <LogOut className="size-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
