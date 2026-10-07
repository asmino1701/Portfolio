export default function Footer() {
    return (
        <footer className="border-t border-line px-4 py-6">
            <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-2 text-xs text-muted">
                <p>© {new Date().getFullYear()} Andrés Miño</p>
                <a href="#top" className="hover:text-fg">Back to top ↑</a>
            </div>
        </footer>
    );
}
