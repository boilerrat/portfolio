# Personal Website - Chris Wylde

A modern, responsive personal website built with React, TypeScript, and Vite. This project serves as a professional landing page and link aggregator, featuring sections for professional experience, Web3 achievements, NFT collections, and social connections.

## 🚀 Features

- Modern React with TypeScript and Vite
- Responsive design with Tailwind CSS
- Animated sections and transitions
- Dark theme with custom gradients
- Social media integration
- NFT gallery
- Achievement showcase
- Professional experience timeline

## 🛠 Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide Icons
- Recharts for data visualization

## 📦 Installation

**Clone the repository:**

```bash
git clone https://github.com/boilerrat/personal-website
cd personal-website
```

**Install dependencies:**

  ```bash
  npm install
  ```

**Start the development server:**

```bash
npm run dev
```

**Build for production:**

```bash
npm run build
```

## 🌐 Domain Transfer to Vercel

### Current Setup

- Domains: [www.chriswylde.xyz](https://www.chriswylde.xyz) and [www.boilerrat.xyz](https://www.boilerra.xyz)
- Registrar: Namecheap
- Current Host: Netlify
- Target Host: Vercel

### Steps to Transfer Domain to Vercel

1. **Add Domain to Vercel Project**
   - Go to your Vercel project dashboard
   - Navigate to "Settings" > "Domains"
   - Add your domains: `chriswylde.xyz` and `boilerrat.xyz`
   - Vercel will provide nameserver information

2. **Update Namecheap DNS Settings**
   - Log in to Namecheap
   - Go to "Domain List" and select your domain
   - Click "Manage"
   - Select "Custom DNS" under "Nameservers"
   - Add Vercel's nameservers:

     ```bash
     ns1.vercel-dns.com
     ns2.vercel-dns.com
     ```

3. **Wait for Propagation**
   - DNS changes can take up to 48 hours to propagate
   - You can check propagation status in Vercel's dashboard

4. **SSL/HTTPS Setup**
   - Vercel automatically provisions SSL certificates
   - No additional configuration needed

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/boilerrat/personal-website/issues).

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

- Website: [chriswylde.xyz](https://www.chriswylde.xyz)
- Twitter: [@boilerrat](https://twitter.com/boilerrat)
- Farcaster: [@boiler](https://warpcast.com/boiler)
- Email: mailto [128boilerrat@gmail.com](mailto:128boilerrat@gmail.com)
