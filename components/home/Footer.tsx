'use client'

import { cn } from '@/lib/utils'
import { Twitter, Instagram, Youtube, Facebook } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-foreground dark:bg-background border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <Image
                  src="/brand/logo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className={cn("w-8 h-8 mr-2")}
                />
              </div>
              <span className="text-xl font-bold gradient-text">TubeTool</span>
            </div>
            <p className="text-dark-300 mb-6 max-w-md">
              The ultimate all-in-one toolkit for YouTube content creators. Plan, create, optimize, and grow your channel with AI-powered tools.
            </p>

            {/* Newsletter Signup */}
            {/* <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-dark-800 border border-dark-600 rounded-l-lg px-4 py-2 text-white placeholder-dark-400 focus:outline-none focus:border-primary-500"
                />
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div> */}

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/tubetool_ai"
                target="_blank"
                className="text-dark-400 hover:text-primary-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com/tubetool.ai?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                className="text-dark-400 hover:text-primary-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCWqfBWBcED5Mud0LwsXqY0Q"
                target="_blank"
                className="text-dark-400 hover:text-primary-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61554312312701"
                target="_blank"
                className="text-dark-400 hover:text-primary-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-dark-300 hover:text-primary-400 transition-colors">Features</a></li>
              <li><a href="#tools" className="text-dark-300 hover:text-primary-400 transition-colors">Tools</a></li>
              <li><a href='#how-it-works' className="text-dark-300 hover:text-primary-400 transition-colors">How It Works</a></li>
              <li><Link href="/plans" className="text-dark-300 hover:text-primary-400 transition-colors">Pricing</Link></li>
              {/* <li><a href="#" className="text-dark-300 hover:text-primary-400 transition-colors">API</a></li> */}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-dark-300 hover:text-primary-400 transition-colors">About</Link></li>
              {/* <li><Link href="#" className="text-dark-300 hover:text-primary-400 transition-colors">Blog</Link></li> */}
              {/* <li><a href="#" className="text-dark-300 hover:text-primary-400 transition-colors">Careers</a></li> */}
              <li><Link href="/contact-us" className="text-dark-300 hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-400 text-sm">
            ©&nbsp;{new Date().getFullYear()}&nbsp;TubeTool. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">Terms of Service</Link>
            <Link href="/refund-policy" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 