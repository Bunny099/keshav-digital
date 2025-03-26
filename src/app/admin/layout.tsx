export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main className="">{children}</main>
    </div>
  );
}
