import Link from "next/link";
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h2>Simple App version 1.0</h2>
        <hr />
        <Link href="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/about">About</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/profile/rahul">Rahul</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/profile/rohit">Rohit</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/profile/suresh">suresh</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/users">users</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        {children}
        </body>
    </html>
  )
}
