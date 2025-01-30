import type { Metadata } from 'next'
// import { Libre_Bodoni } from 'next/font/google'
import './globals.css'
import { Rufina } from 'next/font/google'
import { Roboto_Flex } from 'next/font/google'

export const bodyFont = Roboto_Flex({
	weight: ['400', '700'],
	subsets: ['latin'],
})

export const headingFont = Rufina({
	weight: ['400', '700'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Martin Muzatko Resume',
	description: 'Full-Stack Developer',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${bodyFont.className} antialiased`}>
				{children}
			</body>
		</html>
	)
}
