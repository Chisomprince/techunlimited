export const metadata = {
  title: "Techparrots",
  description: "our Unlimited Source for Tech News and Insights"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
