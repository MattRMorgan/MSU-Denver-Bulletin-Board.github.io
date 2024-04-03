/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export", 
	reactStrictMode: true,
	images: {
		remotePatterns: [
		{
		    protocol: 'https',
		    hostname: '**',
		    port: '',
		    pathname: '**',
      	}
	],
  },
};

export default nextConfig;