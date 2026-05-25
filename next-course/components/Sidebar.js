import React from "react";
import { useRouter } from "next/router";
import { withRouter } from 'next/router'
import { useDispatch } from "react-redux";
import { openAuthModal } from "../store/uiSlice";
import {
  AiOutlineHome,
  AiOutlineBookmark,
  AiOutlineHighlight,
  AiOutlineSearch,
  AiOutlineQuestionCircle,
  AiOutlineLogin,
} from "react-icons/ai";

// export default function Sidebar() {
//   const router = useRouter();
//   const dispatch = useDispatch();

function SideBar({ router }) {
    const dispatch = useDispatch();



  return (
    <aside className="w-64 h-screen bg-slate-100 border-r border-grey-200 fixed left-0 top-0 flex-col justify-between p-6">
      <div className="flex flex-col gap-8">
        <div className="text-2xl font-black tracking-tight text-emerald-600 px-2">
          Summarist
        </div>

        <nav className="flex flex-col gap-2">
          <button
            onClick={() => router.push("/for-you")}
            className="flex items-center gap-4 px-3 py-3 text-sm font-bold text-grey-700 hover:bg-slate-200 rounded-lg transition-colors text-left"
          >
            <AiOutlineHome className="text-xl text-slate-600" />
            <span>For You</span>
          </button>

          <button
            onClick={() => router.push("/library")}
            className="flex items-center gap-4 px-3 py-3 text-sm font-bold text-grey-700 hover:bg-slate-200 rounded-lg transition-colors text-left"
          >
            <AiOutlineBookmark className="text-xl text-slate-600" />
            <span>Library</span>
          </button>

          <button className="flex items-center gap-4 px-3 py-3 text-sm font-bold text-grey-700 hover:bg-slate-200 rounded-lg transition-colors text-left">
            <AiOutlineHighlight className="text-xl" />
            <span>Highlights</span>
          </button>

          <button
            
            className="flex items-center gap-4 px-3 py-3 text-sm font-bold text-grey-700 hover:bg-slate-200 rounded-lg transition-colors text-left"
          >
            <AiOutlineHome className="text-xl" />
            <span>Search</span>
          </button>

          <button
            onClick={() => router.push('/settings')}
            className="flex items-center gap-4 px-3 py-3 text-sm font-bold text-grey-700 hover:bg-slate-200 rounded-lg transition-colors text-left"
          >
            <AiOutlineHome className="text-xl text-slate-600" />
            <span>Settings</span>
          </button>

          <button
          
            className="flex items-center gap-4 px-3 py-3 text-sm font-bold text-grey-700 hover:bg-slate-200 rounded-lg transition-colors text-left"
          >
            <AiOutlineHome className="text-xl" />
            <span>Help & Support</span>
          </button>

        </nav>
      </div>

      <button
       onClick={() => dispatch(openAuthModal())}
      className="flex items-center gap-4 px-3 py-3 text-sm font-bold text-gray-700 hover:bg-slate-200 rounded-lg transition-colors text-left border-t border-gray-200 pt-4"
      >
        <AiOutlineLogin className="text-xl text-emerald-600" />
        <span>Login</span>
      </button>
    </aside>
  );
}


export default withRouter(SideBar):